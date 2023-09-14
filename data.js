// Lista de contactos con datos predefinidos
let listaDeContactos = [
  { nombreApellido: "Juan Perez" },
  { nombreApellido: "Maria Lopez" },
  { nombreApellido: "Carlos Rodríguez" },
];

// Función para mostrar los contactos en la consola
function mostrarContactos() {
  listaDeContactos.forEach((contacto) => {
    console.log(contacto.nombreApellido);
  });
}

// Función para agregar un nuevo contacto a la lista
document
  .getElementById("agregar-contacto")
  .addEventListener("click", function () {
    const nombreApellido = document.getElementById("nombre-apellido").value;
    if (nombreApellido) {
      listaDeContactos.push({ nombreApellido });
      mostrarContactos();
      document.getElementById("nombre-apellido").value = "";
    }
  });

// Función para borrar un contacto existente de la lista
document
  .getElementById("borrar-contacto")
  .addEventListener("click", function () {
    const nombreApellido = document.getElementById(
      "borrar-nombre-apellido"
    ).value;
    if (nombreApellido) {
      listaDeContactos = listaDeContactos.filter(
        (contacto) => contacto.nombreApellido !== nombreApellido
      );
      mostrarContactos();
      document.getElementById("borrar-nombre-apellido").value = "";
    }
  });
