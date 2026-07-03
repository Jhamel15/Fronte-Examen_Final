import { useEffect, useState } from "react";
import {
  listarComunicados,
  crearComunicado,
  actualizarComunicado,
  eliminarComunicado,
} from "../../services/comunicadoService";
import "./Comunicados.css";

function Comunicados() {
  const [comunicados, setComunicados] = useState([]);
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    estado: "ACTIVO",
  });
  const [editId, setEditId] = useState(null);

  const cargarComunicados = async () => {
    const data = await listarComunicados();
    setComunicados(data);
  };

  useEffect(() => {
    cargarComunicados();
  }, []);

  const guardar = async (e) => {
    e.preventDefault();

    if (editId) {
      await actualizarComunicado(editId, form);
    } else {
      await crearComunicado(form);
    }

    setForm({ titulo: "", descripcion: "", fecha: "", estado: "ACTIVO" });
    setEditId(null);
    cargarComunicados();
  };

  const editar = (comunicado) => {
    setEditId(comunicado.id);
    setForm({
      titulo: comunicado.titulo || "",
      descripcion: comunicado.descripcion || "",
      fecha: comunicado.fecha || "",
      estado: comunicado.estado || "ACTIVO",
    });
  };

  const eliminar = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este comunicado?")) {
      await eliminarComunicado(id);
      cargarComunicados();
    }
  };

  return (
    <div className="comunicados-page">
      <div className="comunicados-title">GESTIÓN DE COMUNICADOS</div>

      <div className="comunicados-content">
        <form className="comunicados-form" onSubmit={guardar}>
          <input
            type="text"
            placeholder="Título del comunicado"
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
            required
          />

          <textarea
            placeholder="Descripción del comunicado"
            value={form.descripcion}
            onChange={(e) =>
              setForm({ ...form, descripcion: e.target.value })
            }
            required
          />

          <input
            type="date"
            value={form.fecha}
            onChange={(e) => setForm({ ...form, fecha: e.target.value })}
          />

          <select
            value={form.estado}
            onChange={(e) => setForm({ ...form, estado: e.target.value })}
          >
            <option value="ACTIVO">ACTIVO</option>
            <option value="INACTIVO">INACTIVO</option>
          </select>

          <button type="submit">
            {editId ? "Actualizar comunicado" : "Guardar comunicado"}
          </button>
        </form>

        <div className="comunicados-list">
          {comunicados.map((comunicado) => (
            <div className="comunicado-card" key={comunicado.id}>
              <h3>{comunicado.titulo}</h3>
              <p>{comunicado.descripcion}</p>
              <p>
                <strong>Fecha:</strong> {comunicado.fecha}
              </p>
              <p>
                <strong>Estado:</strong> {comunicado.estado}
              </p>

              <div className="comunicado-actions">
                <button onClick={() => editar(comunicado)}>Editar</button>
                <button
                  className="delete"
                  onClick={() => eliminar(comunicado.id)}
                >
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

export default Comunicados;