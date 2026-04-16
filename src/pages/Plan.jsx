import { useState } from "react";

import PageContainer from "../components/layout/PageContainer";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Plan() {
  // estado simples para guardar o destino digitado
  const [destination, setDestination] = useState("");

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-900">
          Planejar viagem
        </h1>
        <p className="mt-2 text-slate-600">
          Comece definindo o destino da sua próxima viagem.
        </p>
      </div>

      <Card>
        <div className="flex flex-col gap-4">
          <Input
            id="destination"
            label="Destino"
            placeholder="Ex.: Barcelona"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />

          <div className="flex gap-3">
            <Button>Continuar</Button>
            <Button variant="secondary">Salvar rascunho</Button>
          </div>
        </div>
      </Card>
    </PageContainer>
  );
}