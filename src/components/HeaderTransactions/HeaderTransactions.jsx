import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollarSimple,
} from "phosphor-react";
import Card from "../Card/Card";

export default function HeaderTransactions() {
  return (
    <header className="bg-[#1123c6] p-6 flex justify-center w-full text-white">
      <div className="max-w-6xl flex flex-col w-full">
        <section className="flex justify-between items-center pb-16">
          <div className="font-semibold">digital money</div>
          <button className="bg-[#3747d8] px-10 py-3 rounded transition-all duration-300 hover:bg-[#2a32a7]">
            Nova transação
          </button>
        </section>

        <section className="transform translate-y-24 flex justify-between space-x-4">
          <Card
            title={"Entradas"}
            value={100}
            bgcolor={"bg-white"}
            txcolor={"text-[#363f5f]"}
            icon={<ArrowCircleUp color="#32CD95" size={32} />}
          />

          <Card
            title={"Saídas"}
            value={50}
            bgcolor={"bg-white"}
            txcolor={"text-[#363f5f]"}
            icon={<ArrowCircleDown color="#E52E4E" size={32} />}
          />

          <Card
            title={"Total"}
            value={50}
            bgcolor={"bg-[#32CD95]"}
            txcolor={"text-white"}
            icon={<CurrencyDollarSimple color="#fff" size={32} />}
          />
        </section>
      </div>
    </header>
  );
}
