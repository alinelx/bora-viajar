import { Link } from "react-router-dom";
import PageContainer from "./PageContainer";
import Button from "../ui/Button";

// componente da barra superior do site
export default function Navbar() {
  return (
    // header semântico da página
    <header className="border-b border-slate-200 bg-white">
      <PageContainer>
        {/* linha principal da navbar */}
        <div className="flex items-center justify-between gap-4 py-4">
          {/* logo/nome do produto que leva para a home */}
          <Link to="/" className="text-xl font-bold text-slate-900">
            BoraViajar
          </Link>

          {/* links principais da landing */}
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#problem" className="text-sm text-slate-600 hover:text-slate-900">
              Problema
            </a>
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900">
              Como funciona
            </a>
          </nav>

          {/* botão principal */}
          <Link to="/plan">
            <Button>Planejar viagem</Button>
          </Link>
        </div>
      </PageContainer>
    </header>
  );
}