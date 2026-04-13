## PT:
### 1. Product Overview
- BoraViajar é um planejador de viagens com IA que ajuda usuários a transformar preferências pessoais em roteiros organizados e personalizados.
- **Objetivo principal:** reduzir fricção e sobrecarga cognitiva no planejamento de viagens.

### 2. Problem Statement
- Planejar viagens exige consolidar múltiplas informações dispersas.
- Usuários frequentemente sentem overload ao transformar ideias em roteiros estruturados.
- Ferramentas atuais focam em booking, não em planejamento personalizado.

### 3. Target Users
- Viajantes independentes que gostam de planejar suas viagens.
- Usuários que valorizam personalização e organização visual.
- Pessoas com orçamento e interesses específicos.

### 4. Success Metrics (KPIs)
- Taxa de conclusão do fluxo de criação de viagem.
- Tempo médio até geração de roteiro.
- Número de viagens salvas por usuário.
- Taxa de edição manual após geração por IA.

### 5. Core User Stories
| ID User | Story | Priority |
| --- | --------- | --- |
| US-01 | Como usuário, quero inserir destino e preferências para receber um roteiro inicial. | P0 |
| US-02 | Como usuário, quero editar atividades sugeridas para personalizar meu roteiro. | P0 |
| US-03 | Como usuário, quero salvar viagens para revisitar depois. | P1 |
| US-04 | Como usuário, quero regenerar o roteiro caso não goste da sugestão inicial. | P1 |

### 6. MVP Scope
- Landing page explicativa
- Formulário de planejamento de viagem
- Integração com IA para geração de roteiro
- Planner visual por dia
- Persistência local das viagens
- Estados de loading/error/empty

### 7. Out of Scope
- Autenticação de usuários
- Integração com reservas/hotéis/voos
- Mapas interativos
- Colaboração em tempo real
- Pagamento / monetização

### 8. Acceptance Criteria (MVP)
| Feature | Acceptance Criteria |
| ------- | ---------- |
| Trip Form | Usuário consegue preencher e submeter todos os campos obrigatórios. |
| AI Generation | Sistema gera roteiro coerente em até 10 segundos. |
| Planner | Usuário consegue visualizar roteiro organizado por dias. |
| Editing | Usuário consegue adicionar/remover/editar atividades. |
| Persistence | Viagens ficam salvas após refresh da página. |

### 9. Technical Stack
- React + Vite
- Tailwind CSS
- React Router
- LocalStorage
- OpenAI / Gemini API
- Vercel Deployment

### 10. Risks / Assumptions
- Qualidade da IA depende do prompt e parsing estruturado.
- Escopo pode crescer rapidamente se não houver disciplina de MVP.
- Persistência local limita uso multi-device.

---

## EN:

### 1. Product Overview
- BoraViajar is an AI-powered travel planner that helps users transform personal preferences into organized and personalized itineraries.

- **Main Objective:** to reduce friction and cognitive overload in travel planning.

### 2. Problem Statement
- Planning trips requires consolidating multiple scattered pieces of information.

- Users often feel overloaded when transforming ideas into structured itineraries.

- Current tools focus on booking, not personalized planning.

### 3. Target Users
- Independent travelers who enjoy planning their trips.

- Users who value personalization and visual organization.

- People with specific budgets and interests.

### 4. Success Metrics (KPIs)
- Trip creation workflow completion rate.

- Average time to itinerary generation.

- Number of trips saved per user.

- Rate of manual editing after AI generation.

### 5. Core User Stories
| User ID | Story | Priority |
| --- | --------- | --- |
| US-01 | As a user, I want to enter a destination and preferences to receive an initial itinerary. | P0 |
| US-02 | As a user, I want to edit suggested activities to customize my itinerary. | P0 |
| US-03 | As a user, I want to save trips to revisit later. | P1 |
| US-04 | As a user, I want to regenerate the itinerary if I don't like the initial suggestion. | P1 |

### 6. MVP Scope
- Explanatory landing page
- Trip planning form
- AI integration for itinerary generation
- Visual planner by day
- Local persistence of trips
- Loading/error/empty statuses

### 7. Out of Scope
- User authentication
- Integration with reservations/hotels/flights
- Interactive maps
- Real-time collaboration
- Payment/monetization

### 8. Acceptance Criteria (MVP)
| Feature | Acceptance Criteria |
| ------- | ---------- |
| Trip Form | User can fill in and submit all required fields. |
| AI Generation | System generates a coherent itinerary in up to 10 seconds. |
| Planner | User can view an itinerary organized by days. |
| Editing | User can add/remove/edit activities. |
| Persistence | Trips are saved after page refresh. |

### 9. Technical Stack
- React + Vite
- Tailwind CSS
- React Router
- LocalStorage
- OpenAI / Gemini API
- Vercel Deployment

### 10. Risks / Assumptions
- AI quality depends on prompt and structured parsing.
- Scope can grow rapidly if there is no MVP discipline.
- Local persistence limits multi-device use.
