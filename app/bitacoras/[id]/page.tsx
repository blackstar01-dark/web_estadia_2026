import findBitacora from "@/app/lib/bitacoras/find";
import { FindBitacora } from "@/app/ui/api/bitacoras/find";

interface PageProps {
  params: Promise<{
    id: number;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params; 

  const bitacora = await findBitacora(Number(id));

  return <FindBitacora bitacora={bitacora} />;
}
