/* eslint-disable react/prop-types */
import axios from "axios";
import { NotePencil, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export default function Table({ products }) {
  //console.log(products);
  const navigate = useNavigate();

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3000/products/${id}`);
    navigate(0);
  }

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
        {products.map((product) => {
          return (
            <tr
              className="border-b hover:bg-gray-100 transition-all duration-300"
              key={product.id}
            >
              <td className="py-2">{product.id}</td>
              <td className="py-2">{product.name}</td>
              <td className="py-2">R$ {product.price},00</td>
              <td className="py-2">
                <div className="flex items-center justify-center gap-1">
                  <div className="bg-[#118dc0] border-none rounded-md p-2 text-white cursor-pointer hover:bg-[#426b7b] transition-all duration-300">
                    <NotePencil size={16} weight="bold" />
                  </div>
                  <div
                    onClick={() => handleDelete(product.id)}
                    className="bg-[#c01111] border-none rounded-md p-2 text-white cursor-pointer hover:bg-[#9e2828] transition-all duration-300"
                  >
                    <Trash size={16} weight="bold" />
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
