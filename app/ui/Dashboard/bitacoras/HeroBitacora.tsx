import getBitacoras from "@/app/lib/bitacoras/data";
import { BitacoraTable } from "./BitacoraTable";

export const HeroBitacora = async () => {
  const bitacoras = await getBitacoras();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Bitácoras Disponibles
      </h1>

      <BitacoraTable bitacoras={bitacoras} />
    </div>
  );
};