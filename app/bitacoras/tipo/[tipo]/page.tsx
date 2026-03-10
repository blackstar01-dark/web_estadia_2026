import { GetBitacorasTipo } from "@/app/ui/api/bitacoras/findbyTipo";

interface PageProps {
  params: Promise<{ tipo: string }>;
}

export default async function Page({ params }: PageProps) {
  const { tipo } = await params;

  return <GetBitacorasTipo tipo={tipo} />;
}
