const URL = `${import.meta.env.VITE_API_URL}/usuarios`;

export async function listarUsuarios() {
  const response = await fetch(URL);
  return await response.json();
}

export async function crearUsuario(usuario) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  return await response.json();
}

export async function actualizarUsuario(id, usuario) {
  const response = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  return await response.json();
}

export async function eliminarUsuario(id) {
  await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
}