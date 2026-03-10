import { PersonalAutorizado } from "@/app/lib/type/personalautorizado";

interface Props {
  personal: PersonalAutorizado[];
}

export const PersonalTable: React.FC<Props> = ({ personal }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-6 py-4">Nombre</th>
            <th className="px-6 py-4">Cargo</th>
            <th className="px-6 py-4">Estación</th>
            <th className="px-6 py-4">Creado por</th>
          </tr>
        </thead>

        <tbody>
          {personal.map((p) => (
            <tr
              key={p.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4 font-medium text-gray-800">
                {p.nombre}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {p.cargo}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {p.estacion?.nombre ?? "—"}
              </td>

              <td className="px-6 py-4 text-gray-600">
                {p.creadoPor?.nombre ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};