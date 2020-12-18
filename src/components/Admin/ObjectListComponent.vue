<template>
  <div class="card">
    <div class="table-responsive-sm">
      <table class="table table-striped table-bordered mb-0">
        <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="">Objekt</th>
          <th class="">Preis Normal €/m²</th>
          <th class="">Preis Extrem €/m²</th>
          <th class="">Preis Messi €/m²</th>
          <th class="text-center"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="object in objectListe" :key="object.id">
          <th scope="row" class="text-center">{{ object.id }}</th>
          <!-- Name-->
          <td>{{ object.name }}</td>
          <!-- Anzahl-->
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     :value="object.multNormal">
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     :value="object.multExtrem">
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     :value="object.multMessi">
            </div>
          </td>
          <td class="text-center">
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
            <div>
              <input type="text" class="form-control" min="0">
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0">
            </div>
          </td>
          <td class="text-center">
            <button type="button" class="close" aria-label="Close">
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
import {objectListe} from "../../assets/data/admin/objectList";
import uniqueId from "lodash.uniqueid";

export default {
  name: "ObjectListComponent",
  components: {},
  data() {
    return {
      objectListe,
      id: uniqueId('box-')
    }
  }
}
</script>

<style scoped>

</style>
