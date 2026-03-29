export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="h-8 w-48 bg-gray-200 rounded-lg"></div>
        <div className="h-10 w-40 bg-gray-200 rounded-xl"></div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        
        <div className="px-6 py-5 border-b bg-gray-100">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-200 rounded-xl"></div>
            <div className="space-y-2">
              <div className="h-4 w-40 bg-gray-200 rounded"></div>
              <div className="h-3 w-56 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="grid grid-cols-4 gap-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}