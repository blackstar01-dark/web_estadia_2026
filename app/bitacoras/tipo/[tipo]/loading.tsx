export default function Loading() {
  return (
    <section className="bg-white min-h-screen text-[#1F2933]">
      <div className="max-w-7xl mx-auto px-6 py-16 animate-pulse">

        {/* HEADER */}
        <header className="mb-12 space-y-4">
          <div className="h-6 w-40 rounded-full bg-gray-200" />
          <div className="h-8 w-96 rounded bg-gray-200" />
          <div className="h-4 w-72 rounded bg-gray-200" />
        </header>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4"
            >
              {/* Tipo */}
              <div className="h-5 w-32 rounded-full bg-gray-200" />

              {/* Estación */}
              <div className="space-y-2">
                <div className="h-5 w-48 rounded bg-gray-200" />
                <div className="h-4 w-32 rounded bg-gray-200" />
              </div>

              {/* Info */}
              <div className="space-y-2 pt-2">
                <div className="h-4 w-40 rounded bg-gray-200" />
                <div className="h-4 w-32 rounded bg-gray-200" />
              </div>

              {/* Footer */}
              <div className="flex justify-between pt-4">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-5 w-16 rounded-full bg-gray-200" />
              </div>

              {/* Button */}
              <div className="pt-4">
                <div className="h-10 w-full rounded-md bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}