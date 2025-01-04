/* eslint-disable react/prop-types */
export default function Input({title, id}) {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        id={id}
        className="border border-[#118dc0] rounded-md px-4 py-2 outline-none"
      />
    </div>
  );
}
