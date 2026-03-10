import getRegistrosByBitacora from "@/app/lib/registro_bitacora/data";
import { RegistroTable } from "@/app/ui/Dashboard/bitacoras/registro";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params

  const bitacoraId = Number(id);

  const registros = await getRegistrosByBitacora(bitacoraId);

  return (
    <div className="p-8">
      <RegistroTable registros={registros} />
    </div>
  );
}