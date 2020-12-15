<template>
  <h1 class="display-4">Listen</h1>
  <nav class="d-flex align-items-start justify-content-between flex-wrap">
    <div class="col-sm-3">
      <select class="form-control">
        <option value="1" selected>Möbel</option>
        <option value="2">Zimmer</option>
        <option value="2">Entrümpelungs
          Objekte</option>
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
  <h4>Möbel</h4>
  <moebel-liste-component/>
  <hr class="my-4">
  <h4>Umzugsobjekte</h4>
  <object-list-component/>
  <hr class="my-4">
  <h4>Räume</h4>
  <room-list-component/>
</template>

<script>
import MoebelListeComponent from "../../components/Admin/MoebelListeComponent";
import ObjectListComponent from "../../components/Admin/ObjectListComponent";
import RoomListComponent from "../../components/Admin/RoomListComponent";
export default {
name: "ListenEditor",
  components: {RoomListComponent, ObjectListComponent, MoebelListeComponent}
}
</script>

<style scoped>

</style>
