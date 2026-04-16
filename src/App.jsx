import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Recommendations from "./pages/Recommendations";
import Itinerary from "./pages/Itinerary";
import Trips from "./pages/Trips";

// componente principal da aplicação
export default function App() {
  return (
    // BrowserRouter habilita navegação por URL no navegador
    <BrowserRouter>
      {/* Routes agrupa todas as rotas */}
      <Routes>
        {/* cada Route liga um caminho a uma página */}
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </BrowserRouter>
  );
}