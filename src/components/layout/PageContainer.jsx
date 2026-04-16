export default function PageContainer({ children }) {
  return (
    // centraliza o conteúdo e limita a largura máxima
    <div className="mx-auto w-full max-w-7xl px-6 py-8">
      {children}
    </div>
  );
}