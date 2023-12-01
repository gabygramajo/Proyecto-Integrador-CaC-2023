console.log(location.search); // lee los argumentos pasados a este formulario
var id = location.search.slice(4);
console.log("id: ", id);
const { createApp } = Vue;

createApp({

  data() {
    return {
      id: 0,
      nombre: "",
      imagen: "",
      tipo: "",
      descripcion: "",
      url: "https://gabygramajo.pythonanywhere.com/mascotas/" + id,
    };
  },

  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("data: ",data);
          this.id = data.id;
          this.nombre = data.nombre;
          this.imagen = data.imagen;
          this.tipo = data.tipo;
          this.descripcion = data.descripcion;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },

    modificar() {
      let mascota = {
        nombre: this.nombre,
        tipo : this.tipo,
        descripcion : this.descripcion,
        imagen: this.imagen,
      };
      var options = {
        body: JSON.stringify(mascota),
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro modificado");
          window.location.href = "./mascotas.html";
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Modificar");
        });
    },
  },

  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
