import PageContainer from "../components/layout/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <h1 className="text-4xl font-bold text-slate-900">BoraViajar</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Planeje viagens com ajuda de IA e preferências personalizadas.
      </p>
    </PageContainer>
  );
}