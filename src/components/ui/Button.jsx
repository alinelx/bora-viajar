export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}) {
  // estilos base compartilhados por todos os botões
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition";

  // estilos específicos por variante
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}