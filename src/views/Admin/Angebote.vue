<template>
  <h1 class="display-4">Angebotsübersicht</h1>
  <nav class="d-flex flex-row align-items-start justify-content-between flex-wrap">
    <div class="d-flex flex-column justify-content-between col-2">
      <div class=" mb-1">
        <select class="form-control" v-model="selected" id="test">
          <option value="1">Alle</option>
          <option value="2">Neu</option>
          <option value="2">In Bearbeitung</option>
          <option value="3">Abgeschlossen</option>
        </select>
      </div>
      <div class="">
        <select class="form-control">
          <option value="1" selected>Alle</option>
          <option value="2">Umzug</option>
          <option value="2">Entrümpelung</option>
        </select>
      </div>
    </div>

    <div class="input-group col-sm-4">
      <input class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search">
      <div class="input-group-append">
          <span class="input-group-text lime lighten-2" id="basic-text1">
            <img src="@/assets/icons/search.svg" alt="" width="24" height="24" title="Bootstrap">
          </span>
      </div>
    </div>
  </nav>
  <hr class="my-4">
  <angebot class="mb-2"
           v-for="angebot in angeboteListe"
           :key="angebot.id"
           :angebot="angebot"
  />
</template>

<script>
import Angebot from "../../components/Admin/AngebotComponent";
import {angeboteListe} from "../../assets/data/admin/angebote";

export default {
  name: "Angebote",
  components: { Angebot },
  data() {
    let selected = 2;
    return {
      angeboteListe,
      selected
    }
  }
}
</script>

<style scoped>

</style>
