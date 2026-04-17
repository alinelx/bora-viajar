// card clicável para opções únicas, como orçamento ou estilo de viagem
export default function OptionCard({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-2xl border px-4 py-4 text-left transition",
        selected
          ? "border-blue-600 bg-blue-50 text-blue-900"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
      ].join(" ")}
    >
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}