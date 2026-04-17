import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Card from "../ui/Card";

// seção principal da landing page
export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* coluna esquerda: texto principal */}
        <div>
          <p className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Planejamento de viagens com IA
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Organize sua próxima viagem sem se perder em mil abas.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            O BoraViajar ajuda você a transformar destino, orçamento e preferências
            em um itinerário visual e personalizado, com apoio de IA.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/plan">
              <Button>Começar agora</Button>
            </Link>

            <a href="#how-it-works">
              <Button variant="secondary">Ver como funciona</Button>
            </a>
          </div>
        </div>

        {/* coluna direita: card visual de exemplo */}
        <Card>
          <div className="space-y-4">
            <p className="text-sm font-medium text-slate-500">
              Exemplo de viagem
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Barcelona · 5 dias
              </h2>
              <p className="mt-1 text-slate-600">
                Arte, gastronomia e praia · orçamento médio
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Dia 1</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Passeio pelo Bairro Gótico</li>
                <li>• Tapas na Barceloneta</li>
                <li>• Mirante ao pôr do sol</li>
              </ul>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Dia 2</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Sagrada Família</li>
                <li>• Pausa para brunch</li>
                <li>• Museu e caminhada urbana</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}