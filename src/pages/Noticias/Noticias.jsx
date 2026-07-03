import { useEffect, useState } from "react";
import {
  listarNoticias,
  crearNoticia,
  actualizarNoticia,
  eliminarNoticia,
} from "../../services/noticiaService";
import "./Noticias.css";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    imagen: "",
  });
  const [editId, setEditId] = useState(null);

  const cargarNoticias = async () => {
    const data = await listarNoticias();
    setNoticias(data);
  };

  useEffect(() => {
    cargarNoticias();
  }, []);

  const guardar = async (e) => {
    e.preventDefault();

    if (editId) {
      await actualizarNoticia(editId, form);
    } else {
      await crearNoticia(form);
    }

    setForm({ titulo: "", descripcion: "", fecha: "", imagen: "" });
    setEditId(null);
    cargarNoticias();
  };

  const editar = (noticia) => {
    setEditId(noticia.id);
    setForm({
      titulo: noticia.titulo || "",
      descripcion: noticia.descripcion || "",
      fecha: noticia.fecha || "",
      imagen: noticia.imagen || "",
    });
  };

  const eliminar = async (id) => {
    if (confirm("¿Seguro que deseas eliminar esta noticia?")) {
      await eliminarNoticia(id);
      cargarNoticias();
    }
  };

  return (
    <div className="noticias-page">
      <div className="noticias-title">GESTIÓN DE NOTICIAS</div>

      <div className="noticias-content">
        <form className="noticias-form" onSubmit={guardar}>
          <input
            type="text"
            placeholder="Título de la noticia"
            value={form.titulo}
            onChange={(e) => setForm({ ...form, titulo: e.target.value })}
            required
          />

          <textarea
            placeholder="Descripción de la noticia"
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

          <input
            type="text"
            placeholder="URL de imagen"
            value={form.imagen}
            onChange={(e) => setForm({ ...form, imagen: e.target.value })}
          />

          <button type="submit">
            {editId ? "Actualizar noticia" : "Guardar noticia"}
          </button>
        </form>

        <div className="noticias-list">
          {noticias.map((noticia) => (
            <div className="noticia-card" key={noticia.id}>
              {noticia.imagen && (
                <img src={noticia.imagen} alt={noticia.titulo} />
              )}

              <div className="noticia-info">
                <h3>{noticia.titulo}</h3>
                <p>{noticia.descripcion}</p>
                <p>
                  <strong>Fecha:</strong> {noticia.fecha}
                </p>

                <div className="noticia-actions">
                  <button onClick={() => editar(noticia)}>Editar</button>
                  <button
                    className="delete"
                    onClick={() => eliminar(noticia.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Noticias;