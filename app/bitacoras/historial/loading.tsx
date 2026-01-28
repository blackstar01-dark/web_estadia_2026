export default function LoadingBitacoras() {
  return (
    <section className="bg-[#0B1C2D] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 animate-pulse">

        {/* HEADER */}
        <header className="mb-12">
          <div className="h-5 w-40 rounded-full bg-[#1E3A52] mb-4" />
          <div className="h-9 w-96 rounded bg-[#1E3A52] mb-4" />
          <div className="h-4 w-[28rem] rounded bg-[#1E3A52]" />
        </header>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <article
              key={i}
              className="rounded-2xl border border-[#1E3A52]
                         bg-[#0F2A44]/70 p-6 space-y-4"
            >
              {/* Tipo */}
              <div className="h-5 w-32 rounded-full bg-[#1E3A52]" />

              {/* Estación */}
              <div className="space-y-2">
                <div className="h-5 w-3/4 rounded bg-[#1E3A52]" />
                <div className="h-4 w-1/2 rounded bg-[#1E3A52]" />
              </div>

              {/* Info */}
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-[#1E3A52]" />
                <div className="h-4 w-5/6 rounded bg-[#1E3A52]" />
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4">
                <div className="h-4 w-24 rounded bg-[#1E3A52]" />
                <div className="h-5 w-16 rounded-full bg-[#1E3A52]" />
              </div>

              {/* Button */}
              <div className="h-10 w-full rounded-md bg-[#1E3A52] mt-4" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
