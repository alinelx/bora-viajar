// dados mockados para a tela de itinerário
// depois serão substituídos por um resultado real do sistema

export const mockItinerary = {
  destination: "Barcelona",
  duration: "5 dias",
  summary:
    "Uma viagem equilibrada entre arte, gastronomia, caminhada urbana e momentos de descanso.",
  days: [
    {
      id: "day-1",
      title: "Dia 1",
      activities: [
        "Passeio pelo Bairro Gótico",
        "Almoço com tapas",
        "Mirante ao pôr do sol",
      ],
    },
    {
      id: "day-2",
      title: "Dia 2",
      activities: [
        "Visita à Sagrada Família",
        "Brunch em café local",
        "Caminhada por avenidas principais",
      ],
    },
    {
      id: "day-3",
      title: "Dia 3",
      activities: [
        "Praia na Barceloneta",
        "Mercado de La Boqueria",
        "Noite em El Born",
      ],
    },
  ],
};