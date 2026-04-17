import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";
import Button from "../components/ui/Button";
import RecommendationCard from "../components/recommendations/RecommendationCard";
import { mockRecommendations } from "../data/mockRecommendations";

// página de recomendações mockadas
export default function Recommendations() {
  // usado para navegar para a próxima página
  const navigate = useNavigate();

  // estado local da lista de recomendações
  const [recommendations, setRecommendations] = useState(mockRecommendations);

  // atualiza o status de uma recomendação
  function handleSelectStatus(recommendationId, newStatus) {
    setRecommendations((previousRecommendations) =>
      previousRecommendations.map((recommendation) =>
        recommendation.id === recommendationId
          ? { ...recommendation, status: newStatus }
          : recommendation
      )
    );
  }

  // calcula quantas recomendações já tiveram alguma decisão
  const reviewedCount = recommendations.filter(
    (recommendation) => recommendation.status !== "unselected"
  ).length;

  // navega para a página do itinerário
  function handleGenerateItinerary() {
    navigate("/itinerary");
  }

  return (
    <PageContainer>
      <div className="mx-auto max-w-5xl">
        {/* cabeçalho da página */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">
            Avalie as recomendações
          </h1>
          <p className="mt-2 text-slate-600">
            Escolha o que combina mais com a sua viagem para refinar o itinerário.
          </p>
        </div>

        {/* barra de progresso simples */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-700">
            Recomendações avaliadas:{" "}
            <span className="font-semibold">{reviewedCount}</span> de{" "}
            <span className="font-semibold">{recommendations.length}</span>
          </p>
        </div>

        {/* lista de cards */}
        <div className="grid gap-6">
          {recommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
              onSelectStatus={handleSelectStatus}
            />
          ))}
        </div>

        {/* ações finais */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={handleGenerateItinerary}>
            Gerar itinerário
          </Button>
          <Button variant="secondary">Gerar mais recomendações</Button>
          <p className="w-full text-sm text-slate-600">
            Limite diário: 3 gerações de recomendações . Você pode revisar suas escolhas ou gerar mais atividades para refinar ainda mais o itinerário.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}