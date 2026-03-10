import { Estacion } from "./estacion";
import { Registro } from "./registroBitacora";

export type TipoBitacora =
  | "ACTIVIDADES_DIARIAS"
  | "DESCARGA_PIPAS"
  | "OPERACION_MANTENIMIENTO";

export type CreateBitacoraPayload = {
  tipo: TipoBitacora;
  estacionId: number;
};

export type ApiErrorResponse = {
  message: string | string[];
  error: string;
  statusCode: number;
};

export interface Bitacora {
  id: number;
  tipo: string;
  estacion?: {
    id: number;
    nombre: string;
  };
  creadaPor?: {
    id: number;
    nombre: string;
  };
  createdAt: string;
}