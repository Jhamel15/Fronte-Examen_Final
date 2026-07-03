const URL = `${import.meta.env.VITE_API_URL}/contactos`;

export async function listarContactos() {
  const response = await fetch(URL);
  return await response.json();
}

export async function crearContacto(contacto) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contacto),
  });

  return await response.json();
}

export async function actualizarContacto(id, contacto) {
  const response = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contacto),
  });

  return await response.json();
}

export async function eliminarContacto(id) {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
}