<template>
  <div v-for="room in angebot.rooms"
       :key="room.id">
    <div class="card mb-4">
      <h5 class=" card-header card-title">{{ room.name }}</h5>
      <div class="card-body">
        <div class="table-responsive-sm">
          <table class="table table-striped table-bordered mb-0">
            <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="">Möbelstück</th>
              <th class="">Anzahl</th>
              <th class="">Volumen in m³</th>
              <th class="">Auf-/Abbauen</th>
<!--              <th class="">Auf-/Abbaupreis in €</th>
              <th class="">Preis</th>-->
            </tr>
            </thead>
            <tbody>
            <tr v-for="moebel in room.moebel" :key="moebel.id">
              <th scope="row" class="text-center">{{ moebel.id }}</th>
              <!-- Name-->
              <td>{{ moebel.name }}</td>
              <!-- Anzahl-->
              <td>
                <div>
                  <input type="text" class="form-control" min="0"
                         :value="moebel.anzahl">
                </div>
              </td>
              <td>
                <div>
                  <input type="text" class="form-control" min="0"
                         :value="moebel.volumen">
                </div>
              </td>
              <td>
                <div class="custom-control custom-checkbox text-center">
                  <input type="checkbox" class="custom-control-input" :checked="moebel.abbauen" v-model="moebel.abbauen"
                         :id="id + '-' +  room.id + '-' + moebel.id">
                  <label class="custom-control-label" :for="id + '-' +  room.id + '-' + moebel.id"></label>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import uniqueId from "lodash.uniqueid";

export default {
  name: "AngebotObjectTable",
  props: ['angebot'],
  data() {
    return {
      id: uniqueId('box-')
    }
  }
}
</script>

<style scoped>

</style>
