import { useEffect, useState } from "react";
import {
  listarUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../../services/usuarioService";
import "./Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState({
    nombreUsuario: "",
    password: "",
    rol: "ADMIN",
    activo: true,
  });
  const [editId, setEditId] = useState(null);

  const cargarUsuarios = async () => {
    const data = await listarUsuarios();
    setUsuarios(data);
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const guardar = async (e) => {
    e.preventDefault();

    if (editId) {
      await actualizarUsuario(editId, form);
    } else {
      await crearUsuario(form);
    }

    setForm({
      nombreUsuario: "",
      password: "",
      rol: "ADMIN",
      activo: true,
    });
    setEditId(null);
    cargarUsuarios();
  };

  const editar = (usuario) => {
    setEditId(usuario.id);
    setForm({
      nombreUsuario: usuario.nombreUsuario || "",
      password: usuario.password || "",
      rol: usuario.rol || "ADMIN",
      activo: usuario.activo ?? true,
    });
  };

  const eliminar = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
      await eliminarUsuario(id);
      cargarUsuarios();
    }
  };

  return (
    <div className="usuarios-page">
      <div className="usuarios-title">GESTIÓN DE USUARIOS</div>

      <div className="usuarios-content">
        <form className="usuarios-form" onSubmit={guardar}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={form.nombreUsuario}
            onChange={(e) =>
              setForm({ ...form, nombreUsuario: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <select
            value={form.rol}
            onChange={(e) => setForm({ ...form, rol: e.target.value })}
          >
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
          </select>

          <select
            value={form.activo}
            onChange={(e) =>
              setForm({ ...form, activo: e.target.value === "true" })
            }
          >
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>

          <button type="submit">
            {editId ? "Actualizar usuario" : "Guardar usuario"}
          </button>
        </form>

        <div className="usuarios-list">
          {usuarios.map((usuario) => (
            <div className="usuario-card" key={usuario.id}>
              <h3>{usuario.nombreUsuario}</h3>
              <p><strong>Rol:</strong> {usuario.rol}</p>
              <p><strong>Estado:</strong> {usuario.activo ? "Activo" : "Inactivo"}</p>

              <div className="usuario-actions">
                <button onClick={() => editar(usuario)}>Editar</button>
                <button className="delete" onClick={() => eliminar(usuario.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Usuarios;