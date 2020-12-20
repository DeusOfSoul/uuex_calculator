<template>
  <div class="card">
    <div class="table-responsive-sm">
      <table class="table table-striped table-bordered mb-0">
        <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="">Möbel</th>
          <th class="">Volumen in m³</th>
          <th class="text-center">Auf-/Abbaubar</th>
          <th class="">Preis Auf-/Abbau in €</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="moebel in moebelListe" :key="moebel.id">
          <th scope="row" class="text-center">{{ moebel.id }}</th>
          <!-- Name-->
          <td>{{ moebel.name }}</td>
          <!-- Volumen-->
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     :value="moebel.volume">
            </div>
          </td>
          <!--Abbaubar-->
          <td>
            <div class="custom-control custom-checkbox text-center">
              <input type="checkbox" class="custom-control-input" v-model="moebel.abbaubar"  :checked="moebel.abbaubar" :id="id+'-'+moebel.id">
              <label class="custom-control-label" :for="id+'-'+moebel.id"></label>
            </div>
          </td>
          <!-- Anzahl-->
          <td>
            <div>
              <input type="text" class="form-control" min="0" :disabled="!moebel.abbaubar"
                     :value="moebel.abbaupreis">
            </div>
          </td>
          <td>
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-center"/>
          <td>
            <div>
              <input type="text" class="form-control" min="0">
            </div>
          </td>
          <!-- Anzahl-->
          <td>
            <div>
              <input type="text" class="form-control" min="0">
            </div>
          </td>
          <td>
            <div class="custom-control custom-checkbox text-center">
              <input type="checkbox" class="custom-control-input" :id="id + '-add'">
              <label class="custom-control-label" :for="id + '-add'"></label>
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0">
            </div>
          </td>
          <td class="text-center">
            <button type="button" class="close" aria-label="Hinzufügen">
              <span aria-hidden="true">+</span>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {moebelListe} from "../../assets/data/admin/moebelListe";
import uniqueId from "lodash.uniqueid";

export default {
  name: "MoebelListeComponent",
  components: {},
  data() {
    return {
      moebelListe,
      id: uniqueId('box-')
    }
  }
}
</script>

<style scoped>

</style>
