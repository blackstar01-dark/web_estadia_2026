export default function Loading() {
  return (
    <section className="bg-white min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16 animate-pulse">

        {/* HEADER */}
        <div className="mb-12">
          <div className="h-5 w-36 rounded-full bg-sky-100 mb-4" />
          <div className="h-10 w-[26rem] rounded bg-slate-200 mb-4" />
          <div className="h-4 w-[32rem] rounded bg-slate-200" />
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <article
              key={i}
              className="rounded-2xl border border-slate-200
                         bg-white p-6 space-y-4
                         shadow-sm"
            >
              {/* Título */}
              <div className="h-5 w-3/4 rounded bg-slate-200" />
              <div className="h-4 w-1/2 rounded bg-slate-200" />

              {/* Info */}
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />
              </div>

              {/* Acción */}
              <div className="h-10 w-full rounded-md bg-sky-200 mt-4" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
