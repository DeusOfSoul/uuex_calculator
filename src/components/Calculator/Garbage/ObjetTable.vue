<template>
  <div class="table-responsive-sm">
    <table class="table table-striped table-sm table-bordered">
      <thead>
      <tr>
        <th class="text-center">#</th>
        <th class="col-sm-2">Objekt</th>
        <th class="col-sm-2">Fläche in m²</th>
        <th class="col-sm-2 text-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" :id="id+'normal'">
            <label class="form-check-label" :for="id+'normal'">
              Normal
            </label>
          </div>
        </th>
        <th class="col-sm-2 text-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" :id="id+'extreme'">
            <label class="form-check-label" :for="id+'extreme'">
              Extrem
            </label>
          </div>
        </th>
        <th class="col-sm-2 text-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" :id="id+'messi'">
            <label class="form-check-label" :for="id+'messi'">
              Messi
            </label>
          </div>
          <i class="bi bi-question-circle"></i>
        </th>
        <th class="col-sm-2">Etage</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <object-table-row
          v-for="(object, index) in objects "
          :key="index"
          :name="object.name"
          :objectid="index"
      ></object-table-row>
      </tbody>
    </table>
  </div>
</template>

<script>
import ObjectTableRow from "@/components/Calculator/Garbage/ObjectTableRow";
import uniqueId from "lodash.uniqueid";

export default {
  name: "ObjetTable",
  components: {ObjectTableRow},
  data(){
    return {
      id: uniqueId('table-header-')
    }
  },

  props: ['objects']
}
</script>

<style scoped>

</style>
