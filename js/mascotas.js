const { createApp } = Vue;

createApp({
  data() {
    return {
      mascotas: [],
      url: "https://gabygramajo.pythonanywhere.com/mascotas", // si ya lo subieron a pythonanywhere
      error: false,
      bbdd_error: false,
      cargando: true,
      bbdd_check: true,
      /*atributos para el guardar los valores del formulario */
      id: 0,
      nombre: "",
      imagen: "",
      tipo: "",
      descripcion: "",
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.mascotas = data;
          this.cargando = false;
          if (data.length < 30) {
            this.bbdd_error = false;
          } else {
            this.bbdd_error = true;
          }
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar(mascota) {
      const url = this.url + "/" + mascota;
      var options = {
        method: "DELETE",
      };
      fetch(url, options)
        .then((res) => res.text()) // or res.json()
        .then((res) => {
          location.reload();
        });
    },
    grabar() {
      let mascota = {
        nombre: this.nombre,
        tipo: this.tipo,
        descripcion: this.descripcion,
        imagen: this.imagen,
      };

      var options = {
        body: JSON.stringify(mascota),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };

      if (!(Object.values(mascota)).includes("")) {
        fetch(this.url, options)
        .then(function (response) {
          alert("Registro grabado");
          window.location.href = "./mascotas.html";
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Grabar");
        });
      } else {
        alert("Todos los campos deben completarse");
      }
    },
  },
  created() {
    this.fetchData(this.url);
  },

}).mount("#app");
