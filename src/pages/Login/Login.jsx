import { useState } from "react";
import { listarUsuarios } from "../../services/usuarioService";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [mensaje, setMensaje] = useState("");

  const ingresar = async (e) => {
    e.preventDefault();

    try {
      const usuarios = await listarUsuarios();

      const usuarioEncontrado = usuarios.find(
        (u) =>
          (u.username === form.username || u.usuario === form.username) &&
          (u.password === form.password || u.contrasena === form.password)
      );

      if (usuarioEncontrado) {
        localStorage.setItem("admin", JSON.stringify(usuarioEncontrado));
        setMensaje("Acceso correcto");
        window.location.href = "/usuarios";
      } else {
        setMensaje("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      setMensaje("Error al conectar con el backend");
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="section-title">LOGIN ADMINISTRADOR</div>

      <div className="login-box">
        <h2>Ingreso al sistema</h2>

        <form onSubmit={ingresar}>
          <input
            type="text"
            placeholder="Usuario"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button type="submit">Ingresar</button>
        </form>

        {mensaje && <p className="login-message">{mensaje}</p>}
      </div>
    </div>
  );
}

export default Login;