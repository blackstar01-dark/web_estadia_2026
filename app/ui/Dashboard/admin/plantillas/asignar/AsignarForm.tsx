"use client";

import { useState } from "react";
import { createPrograma } from "@/app/lib/programas/create";

interface Estacion {
  id: number;
  nombre: string;
}

interface Props {
  plantillaId: number;
  estaciones: Estacion[];
}

export default function CreateProgramaForm({ plantillaId, estaciones }: Props) {
  const [form, setForm] = useState({ estacionId: "", fechaInicio: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");
    setSuccess("");

    if (!form.estacionId) {
      setError("Debes seleccionar una estación");
      setLoading(false);
      return;
    }

    const result = await createPrograma({
      estacionId: Number(form.estacionId),
      plantillaId,
      fechaInicio: form.fechaInicio ? new Date(form.fechaInicio).toISOString() : undefined,
    });

    setLoading(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    setSuccess("Programa creado correctamente ✅");
    setForm({ estacionId: "", fechaInicio: "" });
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* SELECT ESTACIÓN */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Selecciona Estación
        </label>
        <select
          name="estacionId"
          value={form.estacionId}
          onChange={handleChange}
          disabled={loading}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        >
          <option value="">-- Selecciona una estación --</option>
          {estaciones.map((e) => (
            <option key={e.id} value={e.id}>
              {e.nombre} (ID: {e.id})
            </option>
          ))}
        </select>
      </div>

      {/* FECHA */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Fecha de inicio
        </label>
        <input
          type="date"
          name="fechaInicio"
          value={form.fechaInicio}
          onChange={handleChange}
          disabled={loading}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* ERROR / SUCCESS */}
      {error && <div className="text-red-600 text-sm bg-red-100 p-3 rounded-lg">{error}</div>}
      {success && <div className="text-green-700 text-sm bg-green-100 p-3 rounded-lg">{success}</div>}

      {/* BOTÓN */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Creando..." : "Crear Programa"}
      </button>
    </form>
  );
}