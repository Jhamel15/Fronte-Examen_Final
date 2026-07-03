import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="top-header">
      <img src="/src/assets/images/banner.png" alt="Medinaceli" className="banner-img" />

      <Link to="/login" className="login-link">
        <FaUser /> Iniciar Sesión
      </Link>
    </header>
  );
}

export default Header;