import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Historia from "../pages/Historia/Historia";
import Noticias from "../pages/Noticias/Noticias";
import Comunicados from "../pages/Comunicados/Comunicados";
import Contacto from "../pages/Contacto/Contacto";
import Login from "../pages/Login/Login";
import Usuarios from "../pages/Usuarios/Usuarios";

function AppRoutes() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/comunicados" element={<Comunicados />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default AppRoutes;