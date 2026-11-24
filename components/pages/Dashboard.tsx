"use client";
import { useCallback, useEffect, useState } from "react";
import { Inbox, Lock, CheckCircle2, X } from "lucide-react";
import StatsCard from "../common/StatsCard";
import PrayerRequestTable from "../ui/PrayerRequestTable";
import { PrayerRequest } from "@/models";
import useUserSession from "@/hooks/useUserSession";
import { API_BASE_URL } from "@/constants";

interface AdminPrayer {
  id: string;
  title: string | null;
  content: string;
  submitterName: string | null;
  phoneNumber: string | null;
  isAnonymous: boolean;
  isAnswered: boolean;
  answeredAt: string | null;
  isFlagged: boolean;
  flagReason: string | null;
  createdAt: string;
  updatedAt: string;
}

interface AdminPrayerStats {
  total: number;
  open: number;
  answered: number;
  flagged: number;
  anonymous: number;
  submissionsLast7Days: number;
  uniqueSubmitters: number;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

const Dashboard = () => {
  const { session } = useUserSession();
  const [stats, setStats] = useState<AdminPrayerStats | null>(null);
  const [requests, setRequests] = useState<PrayerRequest[]>([]);
  const [selected, setSelected] = useState<AdminPrayer | null>(null);
  const [rawPrayers, setRawPrayers] = useState<AdminPrayer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState("");

  const headers: HeadersInit = {
    accept: "application/json",
    Authorization: `Bearer ${session?.token ?? ""}`,
  };

  const loadData = useCallback(async () => {
    try {
      setError(null);
      const [statsResponse, listResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/api/v1/admin/prayers/stats`, {
          headers,
          cache: "no-store",
        }),
        fetch(`${API_BASE_URL}/api/v1/admin/prayers?page=1&pageSize=100`, {
          headers,
          cache: "no-store",
        }),
      ]);

      if (!statsResponse.ok || !listResponse.ok) {
        throw new Error(`Failed to load dashboard: ${listResponse.status}`);
      }

      const statsData = (await statsResponse.json()) as AdminPrayerStats;
      const listData = (await listResponse.json()) as { items: AdminPrayer[] };

      setStats(statsData);
      setRequests(
        listData.items.map((prayer) => ({
          id: prayer.id,
          name: prayer.isAnonymous ? "Anonymous User" : prayer.submitterName ?? "Unknown",
          status: prayer.isAnswered ? ("Closed" as const) : ("Open" as const),
          phone: prayer.phoneNumber ?? "-",
          dateSubmitted: formatDate(prayer.createdAt),
          canDelete: true,
        })),
      );
      setTimestamp(
        new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
      );
      setRawPrayers(listData.items);
    } catch (err) {
      console.error("Dashboard load error:", err);
      setError(err instanceof Error ? err.message : "Failed to load dashboard");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.token]);


  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData();
  }, [loadData]);

  const handleApprove = async (request: PrayerRequest) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/admin/prayers/${request.id}/answer`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ note: null }),
        },
      );

      if (response.ok) {
        await loadData();
      }
    } catch (err) {
      console.error("Failed to mark prayer answered:", err);
    }
  };

  const handleDelete = async (request: PrayerRequest) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/v1/admin/prayers/${request.id}`,
        { method: "DELETE", headers },
      );

      if (response.ok) {
        await loadData();
      }
    } catch (err) {
      console.error("Failed to delete prayer:", err);
    }
  };

  const handleView = (request: PrayerRequest) => {
    setSelected(rawPrayers.find((prayer) => prayer.id === request.id) ?? null);
  };

  const statCards = [
    {
      title: "Total Requests",
      count: stats?.total ?? 0,
      icon: <Inbox className="w-5 h-5" />,
      iconBg: "bg-gold/15",
      iconColor: "text-gold-hover",
    },
    {
      title: "Open Requests",
      count: stats?.open ?? 0,
      icon: <Inbox className="w-5 h-5" />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Anonymous Requests",
      count: stats?.anonymous ?? 0,
      icon: <Lock className="w-5 h-5" />,
      iconBg: "bg-navy/10",
      iconColor: "text-navy",
    },
    {
      title: "Answered Requests",
      count: stats?.answered ?? 0,
      icon: <CheckCircle2 className="w-5 h-5" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 pt-6 pb-10">
      <div className="pb-8">
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
          Hello {session?.name || "Admin"}!
        </h1>
        <p className="text-sm text-muted mt-1">
          Here&apos;s an overview of your prayer wall activity.
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}{" "}
          <button
            onClick={loadData}
            className="font-semibold underline hover:text-red-800"
          >
            Retry
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statCards.map((stat) => (
          <StatsCard
            title={stat.title}
            count={loading ? 0 : stat.count}
            key={stat.title}
            icon={stat.icon}
            iconBg={stat.iconBg}
            iconColor={stat.iconColor}
            timeStamp={timestamp ? `at ${timestamp}` : "loading..."}
          />
        ))}
      </div>

      <div className="py-6">
        <PrayerRequestTable
          data={requests}
          onView={handleView}
          onApprove={handleApprove}
          onDelete={handleDelete}
        />
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Prayer request detail"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              aria-label="Close detail"
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted hover:bg-gray-100 hover:text-ink"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="mb-1 font-heading text-xl font-bold text-ink">
              {selected.title || "Prayer"}
            </h3>
            <p className="mb-4 text-sm text-muted">
              {selected.isAnonymous
                ? "Anonymous"
                : `${selected.submitterName}${selected.phoneNumber ? ` · ${selected.phoneNumber}` : ""}`}{" "}
              · {formatDate(selected.createdAt)}
            </p>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-body">
              {selected.content}
            </p>
            {selected.isFlagged && (
              <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                Flagged{selected.flagReason ? `: ${selected.flagReason}` : ""}
              </p>
            )}
            {selected.isAnswered && (
              <p className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                Answered {selected.answeredAt ? formatDate(selected.answeredAt) : ""}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
