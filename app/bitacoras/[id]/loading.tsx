export default function LoadingBitacora() {
  return (
    <section className="bg-white min-h-screen text-[#1F2933]">
      <div className="max-w-6xl mx-auto px-6 py-16 animate-pulse">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <div className="mb-4 h-6 w-40 rounded-full bg-[#0099CC]/20" />

            <div className="h-9 w-64 rounded bg-gray-200 mb-3" />

            <div className="h-4 w-48 rounded bg-gray-200" />
          </div>

          <div className="h-12 w-44 rounded-lg bg-[#0099CC]/20" />
        </div>

        {/* LISTA */}
        <div className="space-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <article
              key={i}
              className="rounded-2xl border border-gray-200
                         bg-white p-6"
            >
              {/* TOP */}
              <div className="flex justify-between mb-4">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-4 w-36 rounded bg-gray-200" />
              </div>

              {/* DESC */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-5/6 rounded bg-gray-200" />
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center">
                <div className="h-4 w-40 rounded bg-gray-200" />
                <div className="h-6 w-24 rounded-full bg-[#0099CC]/20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
