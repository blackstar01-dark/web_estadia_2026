export default function Loading() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="h-3 bg-gray-300 rounded w-24" />
          <div className="h-3 bg-gray-300 rounded w-20" />
          <div className="h-3 bg-gray-300 rounded w-24" />
          <div className="h-3 bg-gray-300 rounded w-28" />
        </div>
      </div>

      {/* Filas simuladas */}
      <div className="divide-y divide-gray-100">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-4 gap-4 px-6 py-4 items-center"
          >
            <div className="h-4 bg-gray-200 rounded w-40" />
            <div className="h-4 bg-gray-200 rounded w-28" />
            <div className="h-4 bg-gray-200 rounded w-32" />
            <div className="h-4 bg-gray-200 rounded w-36" />
          </div>
        ))}
      </div>
    </div>
  );
}