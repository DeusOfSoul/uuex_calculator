<template>
  <h1 class="display-4">Listen</h1>
  <nav class="d-flex align-items-start justify-content-between flex-wrap">
    <div class="col-sm-3">
      <select class="form-control" v-model="state.selected">
        <option value=1 selected>Möbel</option>
        <option value=2>Räume</option>
        <option value=3>Entrümpelungs Objekte</option>
        <option value="4">Sonderleistungen</option>
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
  <div v-if="state.selected == 1">
    <h4>Möbel</h4>
    <moebel-liste-component/>
  </div>
  <div v-if="state.selected == 2">
    <h4>Räume</h4>
    <room-list-component/>
  </div>
  <div v-if="state.selected == 3">
    <h4>Entrümpelungsobjekte</h4>
    <object-list-component/>
  </div>

</template>

<script>
import MoebelListeComponent from "../../components/Admin/MoebelListeComponent";
import ObjectListComponent from "../../components/Admin/ObjectListComponent";
import RoomListComponent from "../../components/Admin/RoomListComponent";
import {reactive} from "vue";
export default {
name: "ListenEditor",
  components: {RoomListComponent, ObjectListComponent, MoebelListeComponent},
  setup(){
    const state = reactive({
      selected: 1,
    });

    function onChange(event) {
      state.selected = event.target.value;
      console.log(state.selected);
    }

    return{
      state,
      onChange
    }
  }
}
</script>

<style scoped>

</style>
