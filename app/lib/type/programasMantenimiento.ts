import type { Estacion } from "./estacion";

export interface ProgramaMantenimiento {
  id: number;
  estacionId: number;
  plantillaId: number;


  activo: boolean;
  fechaInicio?: string;

  // 🔥 AQUÍ reutilizas tu interfaz
  estacion?: Estacion;

  plantilla: {
    id: number;
    numeralNom: string;
    actividad: string;
    periodicidad: "DIARIA" | "SEMANAL" | "MENSUAL" | "TRIMESTRAL";
    activa?: boolean;
  };
}

export interface CreateProgramaDto {
  estacionId: number;
  plantillaId: number;
  fechaInicio?: string;
  activo?: boolean;
}