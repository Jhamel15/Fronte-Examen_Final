import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaNewspaper, FaBullhorn, FaEnvelope, FaLock } from "react-icons/fa";
import "./Sidebar.css";
import { FaUsers } from "react-icons/fa";
function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>CARLOS MEDINACELI</h3>

      <NavLink to="/"><FaHome /> INICIO</NavLink>
      <NavLink to="/historia"><FaBook /> HISTORIA</NavLink>
      <NavLink to="/noticias"><FaNewspaper /> NOTICIAS</NavLink>
      <NavLink to="/comunicados"><FaBullhorn /> COMUNICADOS</NavLink>
      <NavLink to="/contacto"><FaEnvelope /> CONTACTO</NavLink>
      <NavLink to="/login"><FaLock /> LOGIN</NavLink>
      <NavLink to="/usuarios"><FaUsers /> USUARIOS</NavLink>
      <div className="gold-news">
        <h4>NOTICIAS DE ORO</h4>
        <span>★</span>
      </div>
    </aside>
  );
}

export default Sidebar;