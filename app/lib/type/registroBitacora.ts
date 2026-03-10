import { PersonalAutorizado } from "./personalautorizado";

export interface Registro {
  id: number;
  folio: number;
  descripcion: string;
  persona: {
    nombre: string;
  };
  createdAt: string;
}