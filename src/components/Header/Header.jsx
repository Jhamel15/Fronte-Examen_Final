import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import banner from "../../assets/images/banner.png";
import "./Header.css";

function Header() {
  return (
    <header className="top-header">
      <img
        src={banner}
        alt="Medinaceli"
        className="banner-img"
      />

      <Link to="/login" className="login-link">
        <FaUser /> Iniciar Sesión
      </Link>
    </header>
  );
}

export default Header;