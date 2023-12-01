document.getElementById(
  "header"
).innerHTML = `
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <span class="badge bg-warning text-wrap fw-bold fs-5 me-4">Refugiaditos</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./">Catálogo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./mascotas.html">Admin CRUD</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;
