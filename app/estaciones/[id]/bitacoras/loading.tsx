export default function Loading() {
  return (
    <section className="bg-white min-h-screen text-[#1F2933]">
      <div className="max-w-6xl mx-auto px-6 py-16 animate-pulse">

        {/* HEADER SKELETON */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="h-5 w-32 rounded-full bg-gray-200" />
            <div className="h-8 w-64 rounded bg-gray-200" />
            <div className="h-4 w-48 rounded bg-gray-200" />
          </div>
          <div className="h-10 w-40 rounded-lg bg-gray-200" />
        </header>

        {/* GRID SKELETON */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 space-y-4"
            >
              {/* Tipo */}
              <div className="h-5 w-32 rounded-full bg-gray-200" />

              {/* Fundamento */}
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-5/6 rounded bg-gray-200" />
              </div>

              {/* Footer */}
              <div className="mt-6 flex justify-between">
                <div className="h-4 w-20 rounded bg-gray-200" />
                <div className="h-4 w-24 rounded bg-gray-200" />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl
                              bg-gradient-to-br from-[#0099CC]/5 to-transparent
                              opacity-0 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}