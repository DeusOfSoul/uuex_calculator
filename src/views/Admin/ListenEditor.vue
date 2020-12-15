<template>
  <h1 class="display-4">Listen</h1>
  <nav class="d-flex align-items-start justify-content-between flex-wrap">
    <div class="col-sm-3">
      <select class="form-control">
        <option value="1" selected>Möbel</option>
        <option value="2">Zimmer</option>
        <option value="2">Objekte</option>
        <option value="2">Sonderleistungen</option>
      </select>
    </div>
    <div class="input-group col-sm-4">
      <input class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search">
      <div class="input-group-append">
          <span class="input-group-text lime lighten-2" id="basic-text1"><i class="fas fa-search text-grey"
                                                                            aria-hidden="true"></i></span>
      </div>
    </div>
  </nav>
  <hr class="my-4">
  <moebel-liste-component></moebel-liste-component>

</template>

<script>
import MoebelListeComponent from "../../components/Admin/MoebelListeComponent";
export default {
name: "ListenEditor",
  components: {MoebelListeComponent}
}
</script>

<style scoped>

</style>
