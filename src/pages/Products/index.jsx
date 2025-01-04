/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import axios from "axios";

export default function Products() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  async function searchDatas() {
    const response = await axios.get("http://localhost:3000/products");

    setProducts(response.data);
  }

  useEffect(() => {
    searchDatas();
  }, []);

  console.log(products);

  return (
    <main>
      <Header open={open} setOpen={setOpen} />
      <Table products={products}/>
      <Modal open={open} setOpen={setOpen} />
    </main>
  );
}
