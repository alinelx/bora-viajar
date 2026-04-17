import { Link } from "react-router-dom";
import Button from "../ui/Button";

// seção final com chamada para ação
export default function CTASection() {
  return (
    <section className="py-16 md:py-20">
      <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center md:px-12">
        <h2 className="text-3xl font-bold text-white">
          Comece a planejar sua próxima viagem.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Menos caos, mais clareza. Transforme preferências em um roteiro visual
          e personalizado.
        </p>

        <div className="mt-8">
          <Link to="/plan">
            <Button variant="secondary">Planejar minha viagem</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}