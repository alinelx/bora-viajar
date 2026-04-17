import Card from "../ui/Card";

// seção que explica o fluxo do produto
export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold text-slate-900">
          Como funciona
        </h2>
        <p className="mt-4 text-slate-600">
          O BoraViajar combina suas preferências com IA para criar um fluxo de
          curadoria e geração de itinerário mais personalizado.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <p className="text-sm font-medium text-blue-700">01</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            Configure sua viagem
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Defina destino, orçamento, estilo e interesses.
          </p>
        </Card>

        <Card>
          <p className="text-sm font-medium text-blue-700">02</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            Curadoria por preferências
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Avalie sugestões com aceitar, rejeitar ou talvez para refinar o resultado.
          </p>
        </Card>

        <Card>
          <p className="text-sm font-medium text-blue-700">03</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            Receba e ajuste o itinerário
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Veja o roteiro por dia, edite atividades e salve seus planos.
          </p>
        </Card>
      </div>
    </section>
  );
}