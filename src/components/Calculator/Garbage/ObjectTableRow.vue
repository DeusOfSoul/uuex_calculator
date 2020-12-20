<template>
  <tr>
    <td>{{objectid +1}}</td>
    <!-- Name-->
    <td>{{ name }}</td>
    <!-- Fläche-->
    <td>
      <div>
        <input type="text" class="form-control" min="0"
               value="0">
      </div>
    </td>
    <!--messi-->
    <td>
      <div class="custom-control custom-checkbox text-center">
        <input type="checkbox" class="custom-control-input" :id="'normal-'+id">
        <label class="custom-control-label" :for="'normal-'+id"></label>
      </div>
    </td>
    <td>
      <div class="custom-control custom-checkbox text-center">
        <input type="checkbox" class="custom-control-input" :id="'extrem-'+id">
        <label class="custom-control-label" :for="'extrem-'+id"></label>
      </div>
    </td>
    <td>
      <div class="custom-control custom-checkbox text-center">
        <input type="checkbox" class="custom-control-input" :id="'messi-'+id">
        <label class="custom-control-label" :for="'messi-'+id"></label>
      </div>
    </td>
    <td>
      <div v-if="levelneeded">
        <input type="number" class="form-control" min="0"
               value="0">
      </div>
    </td>
    <td>
        <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </td>
  </tr>
</template>

<script>
import uniqueId from "lodash.uniqueid";

export default {
  name: "ObjectTableRow",
  data() {
    return {
      id: uniqueId('box-')
    }
  },
  props: ['name', 'levelneeded', 'objectid']
}
</script>

<style scoped>

</style>
