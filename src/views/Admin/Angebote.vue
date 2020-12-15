<template>
  <h1>Angebotsübersicht</h1>
  <nav class="form-group d-flex justify-content-between">
    <div class="col-sm-3">
      <select class="form-control" >
        <option value="1" selected>Alle</option>
        <option value="2">Neu</option>
        <option value="2">In Bearbeitung</option>
        <option value="3">Abgeschlossen</option>
      </select>
    </div>
    <div class="input-group col-sm-2">
      <input class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search">
      <div class="input-group-append">
          <span class="input-group-text lime lighten-2" id="basic-text1"><i class="fas fa-search text-grey"
                                                                            aria-hidden="true"></i></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "Angebote"
}
</script>

<style scoped>

</style>
