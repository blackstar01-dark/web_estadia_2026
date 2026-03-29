export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="h-6 w-40 bg-gray-200 rounded-lg"></div>
        <div className="h-9 w-32 bg-gray-200 rounded-xl"></div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        
        {/* Header Card */}
        <div className="bg-gradient-to-r from-blue-200 to-indigo-200 p-6">
          <div className="flex items-center gap-4">
            
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-white/40"></div>

            <div className="space-y-2">
              <div className="h-4 w-40 bg-white/50 rounded"></div>
              <div className="h-3 w-24 bg-white/40 rounded"></div>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 grid md:grid-cols-2 gap-6">
          
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-2xl p-5 border space-y-3"
            >
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}