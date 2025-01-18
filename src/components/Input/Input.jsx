/* eslint-disable react/prop-types */
export default function Input({ id, title, value, onChange }) {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className="border border-[#118dc0] rounded-md px-4 py-2 outline-none"
      />
    </div>
  );
}
