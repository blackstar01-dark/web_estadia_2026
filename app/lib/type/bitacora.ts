import { RegistroBitacora } from "./registroBitacora";

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
  tipo: TipoBitacora;
  fundamento: string;
  estacion?: {
    id: number;
    nombre: string;
    permisoCRE: string
  };
  creadaPor?: {
    id: number;
    nombre: string;
  };
  createdAt: string;
  activa: boolean;

  registros?: RegistroBitacora[];
}