<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">UuEx</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="login">
            <a class="nav-link" >Home<span class="sr-only">(current)</span></a>
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAngebote" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            Angebote</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownAngebote">
            <router-link to="login">
              <a class="dropdown-item">Neu</a>
            </router-link>
            <router-link to="login">
              <a class="dropdown-item">In Bearbeitung</a>
            </router-link>
            <router-link to="login">
              <a class="dropdown-item">Alle</a>
            </router-link>
            <router-link to="login">
              <a class="dropdown-item">Abgeschlossen</a>
            </router-link>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kalkulator</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Listen</a>
        </li>
      </ul>
    </div>
    <div class="navbar-nav ml-auto">
      <router-link to="login">
        <a class="nav-item nav-link">Logout</a>
      </router-link>
    </div>
  </nav>

  <!-- Page Content -->
  <div class="jumbotron">
    <router-view></router-view>
  </div>



</template>

<script>
export default {
  name: "Admin",
}
</script>

<style scoped>

</style>
