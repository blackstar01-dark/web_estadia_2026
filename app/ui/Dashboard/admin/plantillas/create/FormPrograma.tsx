"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPlantilla } from "@/app/lib/plantillas/create";
import type { CreatePlantillaMantenimientoDto } from "@/app/lib/type/plantilla";

export const CreatePlantillaForm: React.FC = () => {
  const router = useRouter();

  const [form, setForm] = useState<CreatePlantillaMantenimientoDto>({
    numeralNom: "",
    actividad: "",
    periodicidad: "DIARIA",
    activa: true,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const periodicidades = ["DIARIA", "MENSUAL", "TRIMESTRAL", "ANUAL"] as const;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.numeralNom || form.numeralNom.length < 3 || form.numeralNom.length > 50) {
      setError("El numeral debe tener entre 3 y 50 caracteres");
      return;
    }
    if (!form.actividad || form.actividad.length < 3 || form.actividad.length > 50) {
      setError("La actividad debe tener entre 3 y 50 caracteres");
      return;
    }
    if (!form.periodicidad) {
      setError("Debes seleccionar una periodicidad");
      return;
    }

    setLoading(true);
    setError("");

    const { error } = await createPlantilla(form);

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    router.push("/dashboard/admin/programas");
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white shadow-xl border border-gray-200 rounded-3xl p-10 space-y-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">
        Crear Plantilla de Mantenimiento
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Numeral */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-700">Numeral</label>
        <input
          type="text"
          name="numeralNom"
          value={form.numeralNom}
          onChange={handleChange}
          placeholder="Ejm: 001-A"
          className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
          minLength={3}
          maxLength={50}
        />
      </div>

      {/* Actividad */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-700">Actividad</label>
        <input
          type="text"
          name="actividad"
          value={form.actividad}
          onChange={handleChange}
          placeholder="Ejm: Revisar válvulas"
          className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
          minLength={3}
          maxLength={50}
        />
      </div>

      {/* Periodicidad */}
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-700">Periodicidad</label>
        <select
          name="periodicidad"
          value={form.periodicidad}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {periodicidades.map(p => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Activa */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="activa"
          checked={form.activa}
          onChange={handleChange}
          className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-400"
        />
        <label className="text-gray-700 font-medium text-sm">Plantilla activa</label>
      </div>

      {/* Botones */}
      <div className="flex justify-end gap-4 pt-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-5 py-2 text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition disabled:opacity-50"
        >
          {loading ? "Guardando..." : "Crear Plantilla"}
        </button>
      </div>
    </form>
  );
};