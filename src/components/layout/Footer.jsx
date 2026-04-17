import PageContainer from "./PageContainer";

// rodapé simples da landing
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <PageContainer>
        <div className="py-6 text-sm text-slate-500">
          © 2026 BoraViajar · MVP de portfolio em desenvolvimento
        </div>
      </PageContainer>
    </footer>
  );
}