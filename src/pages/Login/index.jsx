import { useState } from "react";
import image from "../../assets/login-animate.svg";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function clickLogin() {
    navigate("/products");

    console.log(user);
    console.log(password);
  }

  return (
    <div className="w-full h-screen bg-[#4337c8] text-white flex">
      <div className="w-[50%] h-full flex justify-center items-center flex-col">
        <div className="w-full h-[20%] flex justify-center items-center">
          <h1 className="text-[30px] font-bold text-[#cccccc]">
            Faça o login
            <br />E entre para o nosso time!
          </h1>
        </div>
        <div className="w-full h-[80%]">
          <img src={image} alt="image" width={550} />
        </div>
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[60%] h-[50%] bg-[#5555d6] rounded-xl">
          <div className="w-full h-[20%] flex items-center justify-center">
            <h1 className="text-[#cccccc] font-bold text-[30px]">LOGIN</h1>
          </div>
          <div className="w-full h-[60%] flex items-center flex-col gap-5">
            <div className="w-[80%] flex flex-col">
              <label className="text-[16px]" htmlFor="">
                Usuário
              </label>
              <input
                className="rounded-lg border-none w-full h-[35px] text-[16px] bg-[#eeeeee] p-2 outline-none text-[#000000]"
                placeholder="Digite o seu usuário..."
                type="text"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="w-[80%] flex flex-col">
              <label className="text-[16px]" htmlFor="">
                Senha
              </label>
              <input
                className="rounded-lg border-none w-full h-[35px] text-[16px] bg-[#eeeeee] p-2 outline-none text-[#000000]"
                placeholder="Digite sua senha"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full flex items-center justify-center leading-[0]">
              <a href="#" className="text-[10px] hover:underline decoration-1">
                Recupere sua senha
              </a>
            </div>
          </div>
          <div className="w-full h-[20%] flex justify-center">
            <button
              onClick={clickLogin}
              className="w-[80%] h-[35px] rounded-lg bg-[#cccccc] text-[#7875d2] font-bold hover:bg-[#aba9e1] transition-all hover:text-white"
            >
              Acessar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
