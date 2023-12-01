const { createApp } = Vue;

createApp({
  data() {
    return {
      mascotas: [],
      url: "https://gabygramajo.pythonanywhere.com/mascotas",
      // url: "http://127.0.0.1:5000/mascotas",
      name: "Firulais",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      error: false,
      cargando: true
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.mascotas = data;
          this.cargando = false;
        })
        .catch( err => {
          console.log(err);
          this.error = true;
        })
    }
  },
  created() {
    this.fetchData(this.url);
  }
}).mount("#app");
