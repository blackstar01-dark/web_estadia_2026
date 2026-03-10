import { DashboardAdmin } from "@/app/ui/Dashboard/admin";
import start from "@/app/lib/dashboard/start";

export default async function Page() {
  const stats = await start();

  return <DashboardAdmin stats={stats} />; 
}
