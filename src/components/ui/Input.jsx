export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      {/* mostra o texto do campo */}
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>

      {/* campo de input */}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition focus:border-blue-500"
      />
    </div>
  );
}