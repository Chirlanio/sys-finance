import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import axios from "axios";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";

export default function Products() {
  const [open, setOpen] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  // console.log(searchInput);
  const [products, setProducts] = useState([]);

  async function searchDatas() {
    const response = await axios.get("http://localhost:3000/products");

    setProducts(response.data);
  }

  function handleFilterProducts() {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (filteredProducts.length > 0) {
      setProducts(filteredProducts);
    }

    if (filteredProducts.length === "") {
      setProducts(products);
    }
  }

  useEffect(() => {
    handleFilterProducts();
  }, [searchInput]);

  useEffect(() => {
    searchDatas();
  }, []);

  function handleUpdateProduct(product) {
    setSelectedProduct(product);
    setOpenModalUpdate(true);
  }

  // console.log(selectedProduct);

  return (
    <main>
      <Header open={open} setOpen={setOpen} setSearchInput={setSearchInput} />
      <Table products={products} openModalUpdate={handleUpdateProduct} />
      <Modal open={open} setOpen={setOpen} />
      <ModalUpdate
        open={openModalUpdate}
        setOpen={setOpenModalUpdate}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </main>
  );
}
