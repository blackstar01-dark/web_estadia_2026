import { Estacion } from "./estacion";
import { BitacoraRegistro } from "./registroBitacora";

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

export type Bitacora = {
  id: number;
  tipo: TipoBitacora;
  createdAt: string;
  activa: boolean;
  estacion: Estacion;
  registros: BitacoraRegistro[];
};