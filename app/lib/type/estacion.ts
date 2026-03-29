export type Estacion = {
  id: number;
  nombre: string;
  razonSocial: string;
  rfc: string;
  permisoCRE: string;
  direccion: string;
  representante: string;
  telefono?: string | null;
  adminId: number;
  createdAt: string;
  activa: boolean;
};
