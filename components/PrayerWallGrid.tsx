"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import PrayerCard from "./common/PrayerCard";
import PageHeader from "./common/PageHeader";
import { API_BASE_URL } from "@/constants";
import { generateInitials, generateColor, formatTimestamp } from "@/utils";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Prayer } from "@/models";

interface PrayerGridProps {
  hasHeader?: boolean;
}

interface ApiPrayerResponse {
  items: Array<{
    id: string;
    title: string | null;
    content: string;
    createdAt: string;
    answeredAt: string | null;
    isAnswered: boolean;
    isAnonymous: boolean;
    submitterName: string | null;
  }>;
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasMore: boolean;
}

const PrayerWallGrid: React.FC<PrayerGridProps> = ({ hasHeader = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const gridTopRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const limit = 20;

  const fetchPrayers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const url = `${API_BASE_URL}/api/v1/prayers/wall?page=${currentPage}&pageSize=${limit}&sort=createdAt&order=desc`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          "Cache-Control": "no-store",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch prayers: ${response.status}`);
      }

      const data: ApiPrayerResponse = await response.json();

      const transformedPrayers: Prayer[] = data.items.map((item) => {
        const isAnonymous = item.isAnonymous || !item.submitterName;
        const userName = isAnonymous ? "Anonymous User" : item.submitterName!;
        const initials = generateInitials(userName);
        const color = generateColor(userName);

        return {
          id: item.id,
          user: {
            name: userName,
            initials,
            color,
          },
          timestamp: formatTimestamp(item.createdAt),
          prayer: {
            title: item.title || "Prayer",
            content: item.content,
          },
          isAnswered: item.isAnswered,
        };
      });

      setPrayers(transformedPrayers);
      setTotal(data.totalCount);
      setTotalPages(Math.max(1, data.totalPages));
    } catch (err) {
      console.error("Error fetching prayers:", err);
      setError(err instanceof Error ? err.message : "Failed to load prayers");
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPrayers();
  }, [fetchPrayers]);

  // Bring the grid back into view when paginating
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      {hasHeader && (
        <PageHeader hasBackButton imageUrl="/images/nav-logo.png" />
      )}
      <div ref={gridTopRef} className="max-w-7xl mx-auto px-4 py-8 scroll-mt-24">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold mb-3">
            <span className="text-gold-hover">Prayer</span>{" "}
            <span className="text-ink">Wall</span>
          </h1>
          <p className="text-body font-medium mb-1">
            Together in prayer, we stand stronger.
          </p>
          <p className="text-muted">
            {`Add your request, encourage others, and let's lift our voices in one
            accord`}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12" role="status" aria-live="polite">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
            <p className="mt-4 text-muted">Loading prayers...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={fetchPrayers}
              className="px-6 py-2 bg-gold hover:bg-gold-hover text-body rounded-xl font-semibold transition-colors"
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
                <p className="text-muted">
                  No prayers yet. Be the first to share!
                </p>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
                >
                  {prayers.map((prayer) => (
                    <motion.div key={prayer.id} variants={fadeInUp}>
                      <PrayerCard prayer={prayer} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </>
        )}

        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <nav
            className="flex justify-center items-center gap-2"
            aria-label="Prayer wall pages"
          >
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="w-10 h-10 flex items-center justify-center bg-gold hover:bg-gold-hover text-body rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
                  aria-label={`Page ${pageNum}`}
                  aria-current={currentPage === pageNum ? "page" : undefined}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                    currentPage === pageNum
                      ? "bg-gold text-body font-semibold"
                      : "bg-gray-200 text-body hover:bg-gray-300"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <span
                className="w-10 h-10 flex items-center justify-center text-muted"
                aria-hidden="true"
              >
                …
              </span>
            )}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <button
                onClick={() => setCurrentPage(totalPages)}
                aria-label={`Page ${totalPages}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 text-body hover:bg-gray-300 transition-colors"
              >
                {totalPages}
              </button>
            )}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="w-10 h-10 flex items-center justify-center bg-gold hover:bg-gold-hover text-body rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </nav>
        )}

        {/* Results count */}
        {!loading && !error && (
          <div className="text-center mt-4 text-sm text-muted" aria-live="polite">
            Showing {prayers.length} of {total} prayers
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerWallGrid;
