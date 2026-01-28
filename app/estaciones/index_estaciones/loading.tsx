export default function Loading() {
  return (
    <section className="bg-[#0B1C2D] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 animate-pulse">

        <div className="mb-12">
          <div className="h-6 w-40 bg-[#1E3A52] rounded-full mb-4" />
          <div className="h-10 w-96 bg-[#1E3A52] rounded mb-4" />
          <div className="h-4 w-[32rem] bg-[#1E3A52] rounded" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#1E3A52]
                         bg-[#0F2A44]/70 p-6 space-y-4"
            >
              <div className="h-6 w-3/4 bg-[#1E3A52] rounded" />
              <div className="h-4 w-1/2 bg-[#1E3A52] rounded" />

              <div className="space-y-2">
                <div className="h-4 w-full bg-[#1E3A52] rounded" />
                <div className="h-4 w-5/6 bg-[#1E3A52] rounded" />
              </div>

              <div className="h-10 w-full bg-[#1E3A52] rounded-md mt-4" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
