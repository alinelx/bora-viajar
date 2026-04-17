// pill clicável para seleção múltipla de interesses
export default function InterestPill({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-sm font-medium transition",
        selected
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
      ].join(" ")}
    >
      {label}
    </button>
  );
}