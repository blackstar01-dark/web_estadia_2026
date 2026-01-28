import { PersonaAutorizada } from "./personalAutorizado";

export interface BitacoraRegistro {
  id: number;
  folio: number;
  fechaHora: Date;
  descripcion: string;
  persona: PersonaAutorizada;
}
