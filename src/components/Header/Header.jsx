/* eslint-disable react/prop-types */
import { Plus } from "phosphor-react";

export default function Header({ open, setOpen }) {
  function handleOpenModal() {
    setOpen(!open);
  }

  return (
    <header className="w-full h-[60px] flex justify-between items-center p-6 bg-[#f1f1f1]">
      <div>
        <h1 className="font-semibold">Detalhes dos Produtos</h1>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="border border-[#118dc0] rounded-md px-4 py-1 placeholder:text-[#118dc0] outline-none"
          placeholder="Pesquise o Produtos"
        />
        <button
          onClick={handleOpenModal}
          className="flex items-center gap-1 bg-[#118dc0] rounded-md text-white px-4 py-1 hover:bg-[#426b7b] transition-all duration-300"
        >
          <Plus size={14} weight="bold" />
          Novo Produto
        </button>
      </div>
    </header>
  );
}
