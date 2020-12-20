<template>
  <h1 class="display-4">Kalkulator</h1>
  <nav class="d-flex flex-row align-items-start justify-content-between flex-wrap">
    <div class="d-flex flex-column justify-content-between col-2">
      <div class=" mb-1">
        <select class="form-control" v-model="state.selected" id="test">
          <option value="1">1. Startseite</option>
          <option value="2">2. Grunddaten</option>
          <option value="3">3. Objektangaben</option>
          <option value="4">4. Sonderleistungen</option>
          <option value="5">5. Bilder</option>
          <option value="6">6. Bestätigen</option>
        </select>
      </div>
    </div>
  </nav>
  <hr class="my-4">
  <div v-if="state.selected == 1" class="card card-body">
    <h3>Startseite</h3>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Mitteilung</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="4">
        Hier Ihr netter Text zur Begrüßung der Kunden.
      </textarea>
    </div>
  </div>
  <div v-if="state.selected == 2" class="card card-body">
    <h3>Grunddaten</h3>
    <div class="form-group">
      <label for="exampleFormControlTextarea2">Mitteilung</label>
      <textarea class="form-control" id="exampleFormControlTextarea2" rows="4"></textarea>
    </div>
  </div>
  <div v-if="state.selected == 3" class="card card-body">
    <h3>Objektangaben</h3>
    <div class="form-group">
      <label for="exampleFormControlTextarea3">Mitteilung</label>
      <textarea class="form-control" id="exampleFormControlTextarea3" rows="4"></textarea>
    </div>
  </div>
  <div v-if="state.selected == 4" class="card card-body">
    <h3>Sonderleistungen</h3>
    <div class="form-group">
      <label for="exampleFormControlTextarea4">Mitteilung</label>
      <textarea class="form-control" id="exampleFormControlTextarea4" rows="4"></textarea>
    </div>
  </div>
  <div v-if="state.selected == 5" class="card card-body">
  <h3>Bilder</h3>
    <div class="form-group">
      <label for="exampleFormControlTextarea5">Mitteilung</label>
      <textarea class="form-control" id="exampleFormControlTextarea5" rows="4"></textarea>
    </div>
  </div>
  <div v-if="state.selected === 6" class="card card-body">
  <h3>Bestätigen</h3>
    <div class="form-group">
      <label for="exampleFormControlTextarea6">Mitteilung</label>
      <textarea class="form-control" id="exampleFormControlTextarea6" rows="4"></textarea>
    </div>
  </div>



</template>

<script>
import {reactive} from "vue";

export default {
  name: "CalculatorEditor",
  setup(){
    const state = reactive({
      selected: 1,
    });

    return{
      state
    }
  }
}
</script>

<style scoped>

</style>
