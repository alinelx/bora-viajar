import Card from "../ui/Card";

// seção que explica a dor do usuário
export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold text-slate-900">
          Planejar uma viagem deveria ser empolgante, não cansativo.
        </h2>
        <p className="mt-4 text-slate-600">
          Entre mapas, TikToks salvos, blogs, listas e recomendações soltas,
          transformar ideias em um roteiro coerente pode virar uma tarefa pesada.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <h3 className="text-lg font-semibold text-slate-900">
            Informação demais
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Muitas abas, muitos links e pouca organização real.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900">
            Falta de priorização
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Nem sempre é fácil decidir o que realmente combina com você.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-slate-900">
            Roteiros engessados
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Muitas ferramentas não equilibram personalização, flexibilidade e praticidade.
          </p>
        </Card>
      </div>
    </section>
  );
}