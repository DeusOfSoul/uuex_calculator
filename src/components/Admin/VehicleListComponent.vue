<template>
  <div class="card">
    <div class="table-responsive-sm">
      <table class="table table-striped table-bordered mb-0">
        <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="">Fahrklasse</th>
          <th class="">Maximal Volumen in m³</th>
          <th class="">Aufpreis in €/km</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="vehicle in vehicleList" :key="vehicle.id">
          <th scope="row" class="text-center">{{ vehicle.id }}</th>
          <!-- Name-->
          <td>{{ vehicle.name }}</td>
          <!-- Volumen-->
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     :value="vehicle.volume">
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     :value="vehicle.price">
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
import uniqueId from "lodash.uniqueid";
import {vehicleList} from "@/assets/data/admin/vehicleList";

export default {
  name: "VehicleListComponent",
  data() {
    return {
      vehicleList,
      id: uniqueId('box-')
    }
  }
}


</script>

<style scoped>

</style>
