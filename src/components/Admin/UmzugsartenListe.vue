<template>
  <div class="card">
    <div class="table-responsive-sm">
      <table class="table table-striped table-bordered mb-0">
        <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="">Umzugsart</th>
          <th class="">Preis pro km</th>
          <th class="">Preis pro m³</th>
          <th class="">von km</th>
          <th class="">bis km</th>
          <th class=""></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="text-center">1</td>
          <td>Lokaler-Umzug</td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     value="0.7">
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     value="24">
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     value="0">
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     value="250">
            </div>
          </td>
          <td>
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
        <tr>
          <td class="text-center">2</td>
          <td>Fern-Umzug</td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     value="0.9">
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     value="32">
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     value="251">
            </div>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0"
                     value="9999">
            </div>
          </td>
          <td>
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
        <tr>
          <td class="text-center"></td>
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
export default {
  name: "UmzugsartenListe"
}
</script>

<style scoped>

</style>
