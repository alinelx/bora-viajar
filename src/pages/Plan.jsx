import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import FormSection from "../components/forms/FormSection";
import OptionCard from "../components/forms/OptionCard";
import InterestPill from "../components/forms/InterestPill";

import {
  budgetOptions,
  travelStyleOptions,
  mobilityOptions,
  interestOptions,
} from "../constants/tripOptions";

// página de configuração inicial da viagem
export default function Plan() {
  // hook do react router para navegar para a próxima página
  const navigate = useNavigate();

  // estado principal do formulário
  const [tripSetup, setTripSetup] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    travelStyle: "",
    mobilityPreference: "",
    interests: [],
  });

  // estado para mostrar erros simples de validação
  const [errors, setErrors] = useState({});

  // atualiza qualquer campo simples do formulário
  function updateField(fieldName, value) {
    setTripSetup((previousState) => ({
      ...previousState,
      [fieldName]: value,
    }));
  }

  // adiciona ou remove interesses da lista
  function toggleInterest(interest) {
    const alreadySelected = tripSetup.interests.includes(interest);

    if (alreadySelected) {
      updateField(
        "interests",
        tripSetup.interests.filter((item) => item !== interest)
      );
    } else {
      updateField("interests", [...tripSetup.interests, interest]);
    }
  }

  // validação mínima antes de avançar
  function validateForm() {
    const newErrors = {};

    if (!tripSetup.destination.trim()) {
      newErrors.destination = "Informe um destino.";
    }

    if (!tripSetup.startDate) {
      newErrors.startDate = "Escolha uma data de início.";
    }

    if (!tripSetup.endDate) {
      newErrors.endDate = "Escolha uma data de fim.";
    }

    if (tripSetup.interests.length === 0) {
      newErrors.interests = "Selecione pelo menos um interesse.";
    }

    if (tripSetup.interests.length > 10) {
      newErrors.interests = "Selecione no máximo 10 interesses.";
    }

    setErrors(newErrors);

    // retorna true se não houver erros
    return Object.keys(newErrors).length === 0;
  }

  // ação do botão continuar
  function handleContinue() {
    const isValid = validateForm();

    if (!isValid) return;

    // no futuro, aqui podemos salvar em contexto/localStorage
    navigate("/recommendations");
  }

  return (
    <PageContainer>
      <div className="mx-auto max-w-4xl">
        {/* cabeçalho da página */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">
            Configure sua viagem
          </h1>
          <p className="mt-2 text-slate-600">
            Defina os pontos principais para começarmos a montar sugestões
            personalizadas.
          </p>
        </div>

        <Card>
          <div className="space-y-10">
            {/* secção destino e datas */}
            <FormSection
              title="Destino e datas"
              description="Comece com as informações básicas da sua viagem."
            >
              <div className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-1">
                  <Input
                    id="destination"
                    label="Destino"
                    placeholder="Ex.: Barcelona"
                    value={tripSetup.destination}
                    onChange={(event) =>
                      updateField("destination", event.target.value)
                    }
                  />
                  {errors.destination ? (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.destination}
                    </p>
                  ) : null}
                </div>

                <div>
                  <Input
                    id="start-date"
                    label="Data de início"
                    type="date"
                    value={tripSetup.startDate}
                    onChange={(event) =>
                      updateField("startDate", event.target.value)
                    }
                  />
                  {errors.startDate ? (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.startDate}
                    </p>
                  ) : null}
                </div>

                <div>
                  <Input
                    id="end-date"
                    label="Data de fim"
                    type="date"
                    value={tripSetup.endDate}
                    onChange={(event) =>
                      updateField("endDate", event.target.value)
                    }
                  />
                  {errors.endDate ? (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.endDate}
                    </p>
                  ) : null}
                </div>
              </div>
            </FormSection>

            {/* secção orçamento */}
            <FormSection
              title="Orçamento"
              description="Escolha a faixa que melhor representa sua viagem."
            >
              <div className="grid gap-3 md:grid-cols-3">
                {budgetOptions.map((option) => (
                  <OptionCard
                    key={option.value}
                    label={option.label}
                    selected={tripSetup.budget === option.value}
                    onClick={() => updateField("budget", option.value)}
                  />
                ))}
              </div>
            </FormSection>

            {/* secção estilo */}
            <FormSection
              title="Estilo da viagem"
              description="Qual ritmo combina mais com você?"
            >
              <div className="grid gap-3 md:grid-cols-3">
                {travelStyleOptions.map((option) => (
                  <OptionCard
                    key={option.value}
                    label={option.label}
                    selected={tripSetup.travelStyle === option.value}
                    onClick={() => updateField("travelStyle", option.value)}
                  />
                ))}
              </div>
            </FormSection>

            {/* secção mobilidade */}
            <FormSection
              title="Mobilidade"
              description="Como você prefere se deslocar durante a viagem?"
            >
              <div className="grid gap-3 md:grid-cols-3">
                {mobilityOptions.map((option) => (
                  <OptionCard
                    key={option.value}
                    label={option.label}
                    selected={tripSetup.mobilityPreference === option.value}
                    onClick={() =>
                      updateField("mobilityPreference", option.value)
                    }
                  />
                ))}
              </div>
            </FormSection>

            {/* secção interesses */}
            <FormSection
              title="Interesses"
              description="Selecione temas que gostaria de priorizar."
            >
              <div className="flex flex-wrap gap-3">
                {interestOptions.map((interest) => (
                  <InterestPill
                    key={interest}
                    label={interest}
                    selected={tripSetup.interests.includes(interest)}
                    onClick={() => toggleInterest(interest)}
                  />
                ))}
              </div>

              {errors.interests ? (
                <p className="mt-3 text-sm text-red-500">
                  {errors.interests}
                </p>
              ) : null}
            </FormSection>

            {/* ações finais */}
            <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-6">
              <Button onClick={handleContinue}>Continuar</Button>
              <Button variant="secondary">Salvar rascunho</Button>
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}