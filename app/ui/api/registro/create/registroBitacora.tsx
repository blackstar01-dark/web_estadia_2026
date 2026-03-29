"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createRegistroBitacora } from "@/app/lib/registro_bitacora/create";
import { getMisEstaciones } from "@/app/lib/estaciones/mis-estaciones";
import { getProgramasByEstacion } from "@/app/lib/programas/estaciones";
import { getMisBitacoras } from "@/app/lib/bitacoras/mis-bitacoras";

import type { Estacion } from "@/app/lib/type/estacion";
import type { Bitacora } from "@/app/lib/type/bitacora";
import type { CreateRegistroBitacoraDto } from "@/app/lib/type/registroBitacora";
import type { ProgramaMantenimiento } from "@/app/lib/type/programasMantenimiento";

export default function RegistroBitacoraForm() {
  const router = useRouter();

  const [estaciones, setEstaciones] = useState<Estacion[]>([]);
  const [bitacoras, setBitacoras] = useState<Bitacora[]>([]);
  const [estacionId, setEstacionId] = useState<number | null>(null);
  const [bitacoraId, setBitacoraId] = useState<number | null>(null);
  const [programas, setProgramas] = useState<ProgramaMantenimiento[]>([]);
  const [programaSeleccionado, setProgramaSeleccionado] =
    useState<ProgramaMantenimiento | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingEstaciones, setLoadingEstaciones] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Cargar estaciones
  useEffect(() => {
    const fetchEstaciones = async () => {
      setLoadingEstaciones(true);
      const { data, error } = await getMisEstaciones();
      if (error) setError(error);
      if (data) {
        setEstaciones(data);
        if (data.length === 1) setEstacionId(data[0].id);
      }
      setLoadingEstaciones(false);
    };
    fetchEstaciones();
  }, []);

  // Cargar bitácoras
  useEffect(() => {
    const fetchBitacoras = async () => {
      const { data, error } = await getMisBitacoras();
      if (error) {
        console.error(error);
        return;
      }
      if (data) {
        setBitacoras(data);
        if (data.length === 1) setBitacoraId(data[0].id);
      }
    };
    fetchBitacoras();
  }, []);

  // Cargar programas según estación
  useEffect(() => {
    if (!estacionId) return;
    const fetchProgramas = async () => {
      setProgramas([]);
      setProgramaSeleccionado(null);
      const { data } = await getProgramasByEstacion(estacionId);
      if (data) setProgramas(data);
    };
    fetchProgramas();
  }, [estacionId]);

  const bitacoraSeleccionada = bitacoras.find(b => b.id === bitacoraId);

  // Submit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!estacionId || !bitacoraId) {
      setError("Selecciona estación y bitácora");
      return;
    }

    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const payload: CreateRegistroBitacoraDto = {
      bitacoraId,
      estacionId,
      descripcion: (form.descripcion as any).value,
      firmaHashRegistro: crypto.randomUUID(),
    };

    // Descarga
    if (bitacoraSeleccionada?.tipo === "DESCARGA_PIPAS") {
      payload.periodicidad = (form.periodicidad as any).value;
      payload.numeroPipa = (form.numeroPipa as any).value;
      payload.producto = (form.producto as any).value;
      const volumen = (form.volumenRecibido as any).value;
      if (volumen) payload.volumenRecibido = parseFloat(volumen);
      payload.proveedor = (form.proveedor as any).value;
    }

    // Mantenimiento
    if (bitacoraSeleccionada?.tipo === "OPERACION_MANTENIMIENTO") {
      const programaId = (form.programaId as any).value;
      if (!programaId) {
        setError("Debes seleccionar un programa");
        setLoading(false);
        return;
      }
      payload.periodicidad = "MENSUAL";
      payload.programaId = parseInt(programaId);
      payload.tipoMantenimiento = (form.tipoMantenimiento as any).value;
      payload.observaciones = (form.observaciones as any).value;
    }

    const { error } = await createRegistroBitacora(payload);
    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    setSuccess(true);
    form.reset();
    setEstacionId(null);
    setBitacoraId(null);
    setProgramas([]);
    setProgramaSeleccionado(null);
    setTimeout(() => router.push("/dashboard/client/mis-registros"), 1200);
    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Nuevo registro</h1>
          <p className="text-gray-500 mt-1">Registro operativo de bitácora</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 space-y-6">

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm animate-fadeIn">
              Registro creado correctamente
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm animate-fadeIn">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-6">

            {/* Estación y Bitácora */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                value={estacionId ?? ""}
                onChange={(e) => setEstacionId(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
              >
                <option value="">Selecciona estación</option>
                {estaciones.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.nombre}
                  </option>
                ))}
              </select>

              <select
                value={bitacoraId ?? ""}
                onChange={(e) => setBitacoraId(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
              >
                <option value="">Selecciona bitácora</option>
                {bitacoras.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.tipo}
                  </option>
                ))}
              </select>
            </div>

            {/* Descripción */}
            <textarea
              name="descripcion"
              placeholder="Descripción de la operación"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition resize-none"
              rows={4}
              required
            />

            {/* Mantenimiento */}
            {bitacoraSeleccionada?.tipo === "OPERACION_MANTENIMIENTO" && (
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-4">
                <select
                  name="programaId"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
                >
                  <option value="">Selecciona programa</option>
                  {programas.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.plantilla.actividad}
                    </option>
                  ))}
                </select>

                <input
                  name="tipoMantenimiento"
                  placeholder="Tipo de mantenimiento"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
                />

                <textarea
                  name="observaciones"
                  placeholder="Observaciones"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition resize-none"
                  rows={3}
                />
              </div>
            )}

            {/* Descarga */}
            {bitacoraSeleccionada?.tipo === "DESCARGA_PIPAS" && (
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-4">
                <select
                  name="periodicidad"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
                >
                  <option value="DIARIA">Diaria</option>
                  <option value="SEMANAL">Semanal</option>
                  <option value="MENSUAL">Mensual</option>
                  <option value="TRIMESTRAL">Trimestral</option>
                  <option value="ANUAL">Anual</option>
                  <option value="POR_EVENTO">Por evento</option>
                </select>

                <input
                  name="numeroPipa"
                  placeholder="Número de pipa"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
                />
                <input
                  name="producto"
                  placeholder="Producto"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
                />
                <input
                  name="volumenRecibido"
                  type="number"
                  placeholder="Volumen recibido"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
                />
                <input
                  name="proveedor"
                  placeholder="Proveedor"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-2xl font-semibold flex justify-center items-center transition"
            >
              {loading ? "Creando..." : "Crear registro"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}