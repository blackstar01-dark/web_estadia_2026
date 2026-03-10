import { PersonalTable } from "./personalTable";
import { CreatePersonalButton } from "./createPersonalButton";
import getPersonal from "@/app/lib/personal/data";

export const HeroUsuario = async () => {
    const personal = await getPersonal();

    return (
        <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
            Personal Autorizado
            </h1>

            <CreatePersonalButton />
        </div>

        {/* Tabla */}
        <PersonalTable personal={personal} />
        </div>
    );
}