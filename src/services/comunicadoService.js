const URL = `${import.meta.env.VITE_API_URL}/comunicados`;

export async function listarComunicados() {
  const response = await fetch(URL);
  return await response.json();
}

export async function crearComunicado(comunicado) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comunicado),
  });

  return await response.json();
}

export async function actualizarComunicado(id, comunicado) {
  const response = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comunicado),
  });

  return await response.json();
}

export async function eliminarComunicado(id) {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
}