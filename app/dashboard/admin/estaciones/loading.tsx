"use client";

export default function Loading() {
  const columns = 4; // número de "columnas" simuladas
  const rows = 5;    // número de filas

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
      {/* Header Skeleton */}
      <div className="px-6 py-5 border-b bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-xl" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-48 bg-gray-200 rounded" />
            <div className="h-3 w-64 bg-gray-100 rounded" />
          </div>
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="p-6 space-y-4">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className={`grid grid-cols-${columns} gap-4 items-center`}
          >
            <div className="h-4 bg-gray-200 rounded w-full col-span-1" />
            <div className="h-4 bg-gray-200 rounded w-full col-span-1" />
            <div className="h-4 bg-gray-200 rounded w-full col-span-1" />
            <div className="h-8 bg-gray-200 rounded w-full col-span-1 justify-self-center" />
          </div>
        ))}
      </div>
    </div>
  );
}