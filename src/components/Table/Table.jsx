import { NotePencil, Trash } from "phosphor-react";

export default function Table() {
  return (
    <table className="w-full text-center">
      <thead className="bg-[#f7fbfd] text-gray-400 border-b">
        <tr>
          <th className="font-normal py-2">ID</th>
          <th className="font-normal py-2">Nome</th>
          <th className="font-normal py-2">Preço</th>
          <th className="font-normal py-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b hover:bg-gray-100 transition-all duration-300">
          <td className="py-2">1</td>
          <td className="py-2">Bike</td>
          <td className="py-2">R$ 1.299,90</td>
          <td className="py-2">
            <div className="flex items-center justify-center gap-1">
              <div className="bg-[#118dc0] border-none rounded-md p-2 text-white cursor-pointer hover:bg-[#426b7b] transition-all duration-300">
                <NotePencil size={16} weight="bold" />
              </div>
              <div className="bg-[#c01111] border-none rounded-md p-2 text-white cursor-pointer hover:bg-[#9e2828] transition-all duration-300">
                <Trash size={16} weight="bold" />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
