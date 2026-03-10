import { Usuario } from "./usuario";
import { Estacion } from "./estacion";

export interface PersonalAutorizado {
  id: number;
  nombre: string;
  cargo: string;
  firmaHashPersona: string;
  estacionId: number;
  creadoPorId: number;
  createdAt: string;

  creadoPor?: Usuario;
  estacion?: Estacion;
}