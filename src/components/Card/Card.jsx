/* eslint-disable react/prop-types */

export default function Card({ title, value, bgcolor, txcolor, icon }) {
  return (
    <div className={`${bgcolor} p-8 space-y-6 rounded shadow-md w-full`}>
      <header className="flex justify-between items-center">
        <h2 className={txcolor}>{title}</h2>
        {icon}
      </header>
      <h1 className={`${txcolor} text-4xl`}>R$ {value},00</h1>
    </div>
  );
}
