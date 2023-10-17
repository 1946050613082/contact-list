// Clase Contacto
class Contacto {
  constructor(id, nombres, apellidos, telefono, ubicaciones) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.ubicaciones = ubicaciones;
  }
}

// Clase Ubicacion
class Ubicacion {
  constructor(ciudad, direccion) {
    this.ciudad = ciudad;
    this.direccion = direccion;
  }
}

// Lista de contactos con datos predefinidos
let listaDeContactos = [
  { id: 1, nombres: "Juan", apellidos: "Perez", telefono: "1234567890", ubicaciones: { ciudad: "Ciudad de México", direccion: "Calle 123" } },
  { id: 2, nombres: "Maria", apellidos: "Lopez", telefono: "0987654321", ubicaciones: { ciudad: "Madrid", direccion: "Avenida 456" } },
  { id: 3, nombres: "Carlos", apellidos: "Rodríguez", telefono: "9876543210", ubicaciones: { ciudad: "Buenos Aires", direccion: "Carrera 789" } },
];

// Función para mostrar los contactos en la consola
function mostrarContactos() {
  listaDeContactos.forEach((contacto) => {
    console.log(`ID: ${contacto.id}, Nombre: ${contacto.nombres} ${contacto.apellidos}, Teléfono: ${contacto.telefono}, Ubicación: ${contacto.ubicaciones.ciudad}, ${contacto.ubicaciones.direccion}`);
  });
}

// Función para agregar un nuevo contacto a la lista
document
  .getElementById("agregar-contacto")
  .addEventListener("click", function () {
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    const ciudad = document.getElementById("ciudad").value;
    const direccion = document.getElementById("direccion").value;

    if (nombres && apellidos && telefono && ciudad && direccion) {
      const id = listaDeContactos.length + 1;
      const ubicaciones = new Ubicacion(ciudad, direccion);
      const nuevoContacto = new Contacto(id, nombres, apellidos, telefono, ubicaciones);
      listaDeContactos.push(nuevoContacto);
      mostrarContactos();
      document.getElementById("nombres").value = "";
      document.getElementById("apellidos").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("ciudad").value = "";
      document.getElementById("direccion").value = "";
    }
  });

// Función para borrar un contacto existente de la lista
document
  .getElementById("borrar-contacto")
  .addEventListener("click", function () {
    const id = parseInt(document.getElementById("id-eliminar").value);
    if (id) {
      listaDeContactos = listaDeContactos.filter(
        (contacto) => contacto.id !== id
      );
      mostrarContactos();
      document.getElementById("id-eliminar").value = "";
    }
  });
