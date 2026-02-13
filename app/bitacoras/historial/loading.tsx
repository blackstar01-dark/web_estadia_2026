export default function LoadingBitacoras() {
  return (
    <section className="min-h-screen bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16 animate-pulse">

        {/* HEADER */}
        <header className="mb-14">
          <div className="h-5 w-36 rounded-full bg-sky-100 mb-4" />
          <div className="h-9 w-[26rem] rounded bg-slate-200 mb-4" />
          <div className="h-4 w-[32rem] rounded bg-slate-200" />
        </header>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="relative flex h-full flex-col rounded-2xl
                         border border-slate-200
                         bg-white p-6"
            >
              {/* Icon */}
              <div className="mb-4 h-12 w-12 rounded-xl bg-sky-100" />

              {/* Title */}
              <div className="h-5 w-3/4 rounded bg-slate-200 mb-3" />

              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />
              </div>

              {/* Footer */}
              <div className="mt-auto pt-6">
                <div className="h-4 w-24 rounded bg-sky-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
