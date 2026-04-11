// DTO para crear un registro
export type CreateRegistroBitacoraDto = {
  bitacoraId: number;
  estacionId: number;
  descripcion: string;
  periodicidad: "DIARIA" | "SEMANAL" | "MENSUAL";

  firmaHashRegistro: string;

  // Opcionales según tipo de bitácora
  programaId?: number;
  tipoMantenimiento?: string;
  observaciones?: string;

  numeroPipa?: string;
  producto?: string;
  volumenRecibido?: number;
  proveedor?: string;
};

// Tipo base de un registro en la base de datos
export type RegistroBitacora = {
  id: number;
  folio: number;
  descripcion: string;
  personaId: number;
  bitacoraId: number;
  estacionId: number;
  estacionNombre: string;
  periodicidad: string;
  fechaHora: string | Date;
};

// Tipo extendido que incluye relaciones y datos específicos
export type BitacoraRegistro = RegistroBitacora & {
  tipo: "OPERACION_MANTENIMIENTO" | "DESCARGA_PIPAS" | "OTRO";
  persona?: {
    nombre: string;
    cargo?: string;
  };
  mantenimiento?: {
    tipo: string;
    actividad: string;
    observaciones?: string;
  };
  descarga?: {
    numeroPipa: string;
    producto: string;
    volumenRecibido: number;
    proveedor: string;
  };
  bitacora?: {
    id: number;
    tipo: string;
  };
};