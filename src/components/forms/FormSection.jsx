// componente para agrupar blocos do formulário com título e descrição
export default function FormSection({ title, description, children }) {
  return (
    <section className="space-y-4">
      {/* cabeçalho da secção */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        ) : null}
      </div>

      {/* conteúdo da secção */}
      <div>{children}</div>
    </section>
  );
}