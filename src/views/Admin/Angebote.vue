<template>
  <h1>Angebotsübersicht</h1>
  <nav class="form-group row">
    <div class="col-sm-4">
      <select class="form-control" >
        <option value="1" selected>Alle</option>
        <option value="2">Neu</option>
        <option value="2">In Bearbeitung</option>
        <option value="3">Abgeschlossen</option>
      </select>
    </div>

    <div class="input-group ml-auto">
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
