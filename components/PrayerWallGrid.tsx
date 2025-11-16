"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PrayerCard from "./common/PrayerCard";
import PageHeader from "./common/PageHeader";
import { API_BASE_URL } from "@/constants";
import { generateInitials, generateColor, formatTimestamp } from "@/utils";
import { Prayer } from "@/models";

interface PrayerGridProps {
  hasHeader?: boolean;
}

interface ApiPrayerResponse {
  items: Array<{
    id: number;
    title: string | null;
    content: string;
    created_at: string;
    is_answered: boolean;
    is_flagged: boolean;
    owner_id: string | null;
    submitter_name: string | null;
    phone_number: string | null;
    is_anonymous: boolean;
  }>;
  total: number;
  has_more: boolean;
}

const PrayerWallGrid: React.FC<PrayerGridProps> = ({ hasHeader = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const limit = 20;

  useEffect(() => {
    fetchPrayers();
  }, [currentPage]);

  const fetchPrayers = async () => {
    try {
      setLoading(true);
      setError(null);

      const skip = (currentPage - 1) * limit;
      const url = `${API_BASE_URL.PRAYER}prayers/wall?skip=${skip}&limit=${limit}&sort_by=created_at&sort_order=desc`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch prayers: ${response.status}`);
      }

      const data: ApiPrayerResponse = await response.json();

      const transformedPrayers: Prayer[] = data.items.map((item) => {
        const isAnonymous = item.is_anonymous || !item.submitter_name;
        const userName = isAnonymous ? "Anonymous User" : item.submitter_name!;
        const initials = generateInitials(userName);
        const color = generateColor(userName);

        return {
          id: item.id.toString(),
          user: {
            name: userName,
            initials,
            color,
          },
          timestamp: formatTimestamp(item.created_at),
          prayer: {
            title: item.title || "Prayer",
            content: item.content,
          },
        };
      });

      setPrayers(transformedPrayers);
      setTotal(data.total);
      setTotalPages(Math.ceil(data.total / limit));
    } catch (err) {
      console.error("Error fetching prayers:", err);
      setError(err instanceof Error ? err.message : "Failed to load prayers");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      {hasHeader && (
        <PageHeader hasBackButton imageUrl="/images/nav-logo.png" />
      )}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-yellow-400">Prayer</span>{" "}
            <span className="text-gray-400">Wall</span>
          </h1>
          <p className="text-gray-700 font-medium mb-0">
            Together in prayer, we stand stronger.
          </p>
          <p className="text-gray-600">
            {`Add your request, encourage others, and let's lift our voices in one
            accord`}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
            <p className="mt-4 text-gray-600">Loading prayers...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={fetchPrayers}
              className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Prayer Grid */}
        {!loading && !error && (
          <>
            {prayers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  No prayers yet. Be the first to share!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {prayers.map((prayer) => (
                  <PrayerCard key={prayer.id} prayer={prayer} />
                ))}
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum: number;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                    currentPage === pageNum
                      ? "bg-yellow-400"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <div className="w-10 h-10 flex items-center justify-center">
                ...
              </div>
            )}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                {totalPages}
              </button>
            )}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Results count */}
        {!loading && !error && (
          <div className="text-center mt-4 text-sm text-gray-600">
            Showing {prayers.length} of {total} prayers
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerWallGrid;
