# BoraViajar – User Flow
## PT:
## Objetivo principal do usuário

Criar um roteiro de viagem personalizado de forma rápida e intuitiva, com base no destino, nas preferências de viagem e no orçamento.

---

## Fluxo Principal

### 1. Página Inicial

**O usuário acessa a página inicial**

Opções:

- Saiba mais sobre o produto
- Clique em “Planejar minha viagem”

### 2. Formulário de Configuração da Viagem

**O usuário preenche as informações da viagem**

Entradas:

- Destino
- Datas de início e término
- Faixa de orçamento
- Interesses/Preferências

### 3. Enviar Solicitação de Viagem

**O usuário clica em “Gerar Opções”**

Sistema:

- Valida o formulário
- Envia os dados para o serviço de geração de IA

### 4. Carregando Status

**O sistema gera o itinerário**

Exibe:

- Indicador de progresso/mensagem de carregamento

### 5. Resultados das Opções de IA

**O usuário recebe opções de viagem geradas com 10 restaurantes, 10 atrações e 10 atividades para combinar/descombinar**

Exibe:

- Resumo das Opções
- Visão Geral do Orçamento (€ a €€€)
- Breve descrição e categoria
- Cartões por Opções

### 6. Opções de Revisão do Usuário

Opções:

- Aceitar opção
- Recusar opção
- Talvez opção
- Gerar mais opções
- Finalizar seleções

### 7. Resultados do Itinerário com IA

O usuário recebe o plano de viagem gerado

Exibe:

- Resumo da Viagem
- Visão Geral do Orçamento
- Itinerário sugerido dia a dia
- Cartões de atividades por dia

### 8. Revisão do Itinerário pelo Usuário

Opções:

- Aceitar itinerário
- Editar atividades
- Remover atividades
- Adicionar atividades personalizadas
- Recomeçar do zero

### 9. Salvar Viagem

**O usuário salva o itinerário**

Sistema:

- Armazena a viagem localmente / no banco de dados

### 10. Painel de Viagens Salvas

**O usuário pode acessar os itinerários salvos**

Opções:

- Visualizar viagem salva
- Editar viagem
- Excluir viagem
- Duplicar viagem

---

## Secundário Fluxos

### Estado Vazio

Nenhuma viagem salva ainda
- Solicitar ao usuário que crie a primeira viagem

---

### Estado de Erro

A geração de IA falhou
- Exibir mensagem de nova tentativa/recurso alternativo

---
## EN:
## Primary User Goal

Create a personalized travel itinerary quickly and intuitively based on destination, travel preferences, and budget.

---

## Main Flow

### 1. Landing Page

**User lands on homepage**

Options:

- Learn about product
- Click “Plan My Trip”

### 2. Trip Setup Form

**User fills trip information**

Inputs:

- Destination
- Start / End Dates
- Budget Range
- Interests / Preferences

### 3. Submit Trip Request

**User clicks Generate Options**

System:

- Validates form
- Sends data to AI generation service

### 4. Loading State

**System generates itinerary**

Displays:

- Progress indicator / loading message

### 5. AI Options Results

**User receives generated trip options with 10 restaurants, 10 attractions and 10 activities to match/unmatch**

Displays:

- Option Summary
- Budget Overview (€ to €€€)
- Brief description and category
- Cards by Option

### 6. User Reviews Options

Options:

- Accept option
- Deny option
- Maybe option
- Generate more options
- Finish selections

### 7. AI Itinerary Results

User receives generated trip plan

Displays:

- Trip Summary
- Budget Overview
- Suggested Day-by-Day Itinerary
- Activity Cards by Day

### 8. User Reviews Itinerary

Options:

- Accept itinerary
- Edit activities
- Remove activities
- Add custom activities
- Restart from scratch

### 9. Save Trip

**User saves itinerary**

System:

- Stores trip locally / database

### 10. Saved Trips Dashboard

**User can access saved itineraries**

Options:

- View saved trip
- Edit trip
- Delete trip
- Duplicate trip

---

## Secondary Flows

### Empty State

No saved trips yet
- Prompt user to create first trip

---

### Error State

AI generation fails
- Show retry / fallback message

---

### Validation State

Missing required form fields
- Prompt user to complete inputs
