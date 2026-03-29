export interface PlantillaMantenimiento {
  id: number;
  numeralNom: string;
  actividad: string;
  periodicidad: "DIARIA" | "MENSUAL" | "TRIMESTRAL" | "ANUAL" | "POR_EVENTO";
  activa: boolean;
}

export interface CreatePlantillaMantenimientoDto {
  numeralNom: string;
  actividad: string;
  periodicidad: "DIARIA" | "MENSUAL" | "TRIMESTRAL" | "ANUAL" | "POR_EVENTO";
  activa?: boolean;
}