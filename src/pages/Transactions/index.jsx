import { useState } from "react";
import ModalNewTransaction from "../../components/ModalNewTransaction/ModalNewTransaction";
import TableTransactions from "../../components/TableTransactions/TableTransactions";
import HeaderTransactions from "../../components/HeaderTransactions/HeaderTransactions";

function Transactions() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-[#F1F2F5] w-full h-screen flex flex-col">
      <HeaderTransactions />
      <TableTransactions />
      <ModalNewTransaction open={open} setOpen={setOpen} />
    </main>
  );
}

export default Transactions;
