const URL = `${import.meta.env.VITE_API_URL}/noticias`;

export async function listarNoticias() {
  const response = await fetch(URL);
  return await response.json();
}

export async function crearNoticia(noticia) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noticia),
  });

  return await response.json();
}

export async function actualizarNoticia(id, noticia) {
  const response = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noticia),
  });

  return await response.json();
}

export async function eliminarNoticia(id) {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
}