"use client";
import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { Eye, Check, X, Search, Filter } from "lucide-react";
import { PrayerRequest } from "@/models";
import { mockPrayerRequests } from "@/constants";

interface PrayerRequestTableProps {
  data?: PrayerRequest[];
  onView?: (request: PrayerRequest) => void;
  onApprove?: (request: PrayerRequest) => void;
  onDelete?: (request: PrayerRequest) => void;
}

const PrayerRequestTable: React.FC<PrayerRequestTableProps> = ({
  data = [],
  onView,
  onApprove,
  onDelete,
}) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const tableData = data.length > 0 ? data : mockPrayerRequests;

  const columns = useMemo<ColumnDef<PrayerRequest>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: (info) => (
          <div className="text-gray-900 font-medium">
            {info.getValue() as string}
          </div>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: (info) => {
          const status = info.getValue() as "Open" | "Closed";
          return (
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                status === "Open"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  status === "Open" ? "bg-red-500" : "bg-green-500"
                }`}
              />
              {status}
            </div>
          );
        },
      },
      {
        accessorKey: "phone",
        header: "Phone",
        cell: (info) => (
          <div className="text-gray-700">{info.getValue() as string}</div>
        ),
      },
      {
        accessorKey: "dateSubmitted",
        header: "Date Submitted",
        cell: (info) => (
          <div className="text-gray-700">{info.getValue() as string}</div>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: (info) => {
          const request = info.row.original;
          return (
            <div className="flex items-center gap-3">
              <button
                onClick={() => onView?.(request)}
                className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                aria-label="View"
              >
                <Eye size={18} />
              </button>
              <button
                onClick={() => onApprove?.(request)}
                className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
                aria-label="Approve"
              >
                <Check size={18} />
              </button>
              {request.canDelete !== false && (
                <button
                  onClick={() => onDelete?.(request)}
                  className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                  aria-label="Delete"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          );
        },
      },
    ],
    [onView, onApprove, onDelete]
  );

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
    state: {
      columnFilters,
      globalFilter,
    },
  });

  const totalRecords = table.getFilteredRowModel().rows.length;
  const currentPage = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const startRecord = currentPage * pageSize + 1;
  const endRecord = Math.min((currentPage + 1) * pageSize, totalRecords);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h4 className="text-2xl font-bold text-gray-900">Prayer Requests</h4>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent w-64"
            />
          </div>
          <button
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Filter"
          >
            <Filter size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-gray-200">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-left text-sm font-medium text-gray-500 bg-gray-50"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          Showing {startRecord} to {endRecord} records of {totalRecords}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              table.getCanPreviousPage()
                ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            &lt;
          </button>

          {(() => {
            const currentPageIndex = table.getState().pagination.pageIndex;
            const totalPages = table.getPageCount();
            const pages: (number | "ellipsis")[] = [];

            if (totalPages <= 7) {
              // Show all pages if 7 or fewer
              for (let i = 0; i < totalPages; i++) {
                pages.push(i);
              }
            } else {
              // Always show first page
              pages.push(0);

              if (currentPageIndex <= 2) {
                // Near the start: 1 2 3 ... 10
                pages.push(1, 2);
                pages.push("ellipsis");
                pages.push(totalPages - 1);
              } else if (currentPageIndex >= totalPages - 3) {
                // Near the end: 1 ... 8 9 10
                pages.push("ellipsis");
                pages.push(totalPages - 3, totalPages - 2, totalPages - 1);
              } else {
                // In the middle: 1 ... 5 6 7 ... 10
                pages.push("ellipsis");
                pages.push(
                  currentPageIndex - 1,
                  currentPageIndex,
                  currentPageIndex + 1
                );
                pages.push("ellipsis");
                pages.push(totalPages - 1);
              }
            }

            return pages.map((page, idx) => {
              if (page === "ellipsis") {
                return (
                  <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">
                    ...
                  </span>
                );
              }
              return (
                <button
                  key={page}
                  onClick={() => table.setPageIndex(page)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                    currentPageIndex === page
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                >
                  {page + 1}
                </button>
              );
            });
          })()}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              table.getCanNextPage()
                ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrayerRequestTable;
