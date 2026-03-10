import PersonalForm from "@/app/ui/api/personal/personalForm";
import getEstaciones from "@/app/lib/estaciones/data";

export default async function Page() {
  const estaciones = await getEstaciones();

  return <PersonalForm estaciones={estaciones} />;
}