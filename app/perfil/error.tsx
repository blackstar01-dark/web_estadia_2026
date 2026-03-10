"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-xl font-bold text-red-500">
        Ocurrió un error al cargar el perfil
      </h2>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-[#0099CC] text-white rounded-lg"
      >
        Reintentar
      </button>
    </div>
  );
}
