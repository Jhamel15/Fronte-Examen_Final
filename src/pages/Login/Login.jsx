import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { listarUsuarios } from "../../services/usuarioService";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();

    const usuarios = await listarUsuarios();

    const usuarioEncontrado = usuarios.find(
      (u) =>
        u.nombreUsuario === nombreUsuario &&
        u.password === password &&
        u.activo === true
    );

    if (usuarioEncontrado) {
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      navigate("/");
    } else {
      setMensaje("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Ingreso al sistema</h2>

        <form onSubmit={iniciarSesion}>
          <input
            type="text"
            placeholder="Usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Ingresar</button>
        </form>

        {mensaje && <p className="error">{mensaje}</p>}
      </div>
    </div>
  );
}

export default Login;