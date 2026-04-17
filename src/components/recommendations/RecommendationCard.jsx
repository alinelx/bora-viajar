// card de recomendação individual
// mostra as informações da sugestão e permite marcar o status

export default function RecommendationCard({
  recommendation,
  onSelectStatus,
}) {
  // classes visuais base para os botões de decisão
  function getButtonClasses(type) {
    const isSelected = recommendation.status === type;

    if (isSelected) {
      return "rounded-xl border px-4 py-2 text-sm font-medium transition border-blue-600 bg-blue-600 text-white";
    }

    return "rounded-xl border px-4 py-2 text-sm font-medium transition border-slate-200 bg-white text-slate-700 hover:border-slate-300";
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* categoria */}
      <div className="flex flex-wrap gap-2">
        {(Array.isArray(recommendation.category) ? recommendation.category : [recommendation.category]).map((cat, idx) => (
          <p key={idx} className="rounded-full border px-4 py-2 text-sm font-medium transition inline-block text-slate-700 bg-slate-100">
            {cat}
          </p>
        ))}
      </div>

      {/* título */}
      <h2 className="mt-3 text-xl font-semibold text-slate-900">
        {recommendation.title}
      </h2>

      {/* descrição */}
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {recommendation.description}
      </p>

      {/* custo */}
      <div className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
        Custo estimado: {recommendation.estimatedCost}
      </div>

      {/* ações */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className={getButtonClasses("accept")}
          onClick={() => onSelectStatus(recommendation.id, "accept")}
        >
          Aceitar
        </button>

        <button
          type="button"
          className={getButtonClasses("maybe")}
          onClick={() => onSelectStatus(recommendation.id, "maybe")}
        >
          Talvez
        </button>

        <button
          type="button"
          className={getButtonClasses("reject")}
          onClick={() => onSelectStatus(recommendation.id, "reject")}
        >
          Rejeitar
        </button>
      </div>
    </div>
  );
}