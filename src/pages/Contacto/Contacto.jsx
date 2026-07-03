import { useEffect, useState } from "react";
import {
  listarContactos,
  crearContacto,
  actualizarContacto,
  eliminarContacto,
} from "../../services/contactoService";
import "./Contacto.css";

function Contacto() {
  const [contactos, setContactos] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
    fecha: "",
  });
  const [editId, setEditId] = useState(null);

  const cargarContactos = async () => {
    const data = await listarContactos();
    setContactos(data);
  };

  useEffect(() => {
    cargarContactos();
  }, []);

  const guardar = async (e) => {
    e.preventDefault();

    if (editId) {
      await actualizarContacto(editId, form);
    } else {
      await crearContacto(form);
    }

    setForm({
      nombre: "",
      correo: "",
      asunto: "",
      mensaje: "",
      fecha: "",
    });
    setEditId(null);
    cargarContactos();
  };

  const editar = (contacto) => {
    setEditId(contacto.id);
    setForm({
      nombre: contacto.nombre || "",
      correo: contacto.correo || "",
      asunto: contacto.asunto || "",
      mensaje: contacto.mensaje || "",
      fecha: contacto.fecha || "",
    });
  };

  const eliminar = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este contacto?")) {
      await eliminarContacto(id);
      cargarContactos();
    }
  };

  return (
    <div className="contacto-page">
      <div className="contacto-title">GESTIÓN DE CONTACTOS</div>

      <div className="contacto-content">
        <form className="contacto-form" onSubmit={guardar}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={(e) => setForm({ ...form, correo: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Asunto"
            value={form.asunto}
            onChange={(e) => setForm({ ...form, asunto: e.target.value })}
            required
          />

          <input
            type="date"
            value={form.fecha}
            onChange={(e) => setForm({ ...form, fecha: e.target.value })}
          />

          <textarea
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            required
          />

          <button type="submit">
            {editId ? "Actualizar contacto" : "Guardar contacto"}
          </button>
        </form>

        <div className="contacto-list">
          {contactos.map((contacto) => (
            <div className="contacto-card" key={contacto.id}>
              <h3>{contacto.nombre}</h3>
              <p><strong>Correo:</strong> {contacto.correo}</p>
              <p><strong>Asunto:</strong> {contacto.asunto}</p>
              <p><strong>Fecha:</strong> {contacto.fecha}</p>
              <p>{contacto.mensaje}</p>

              <div className="contacto-actions">
                <button onClick={() => editar(contacto)}>Editar</button>
                <button className="delete" onClick={() => eliminar(contacto.id)}>
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

export default Contacto;