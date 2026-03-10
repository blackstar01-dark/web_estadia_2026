"use client";

interface Props {
  message?: string;
  retry?: () => void;
}

export default function ErrorComponent({ message, retry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[300px] p-8 text-center">
      <svg
        className="w-16 h-16 text-red-500 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
        />
      </svg>
      <p className="text-gray-700 font-medium mb-2">
        {message || "Ha ocurrido un error."}
      </p>
      {retry && (
        <button
          onClick={retry}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Reintentar
        </button>
      )}
    </div>
  );
}