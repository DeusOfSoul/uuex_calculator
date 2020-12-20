<template>
  <div class="card">
    <div class="table-responsive-sm">
      <table class="table table-striped table-bordered mb-0">
        <thead>
        <tr>
          <th class="text-center">#</th>
          <th class="">Name</th>
          <th class="">Verwendung</th>
          <th class="">Beschreibung</th>
          <th class="">Typ</th>
          <th class="">Preisart</th>
          <th class="">Preis pro Einheit</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row" class="text-center">1</th>
          <!-- Name-->
          <td>
            <div>
              <input type="text" class="form-control" min="0" value="Klaviertransport">
            </div>
          </td>
          <td>
            <select class="form-control" >
              <option value="1">Universal</option>
              <option value="2" selected>Umzug</option>
              <option value="3">Entrümpelung</option>
            </select>
          </td>
          <td>
            <div>
              <textarea class="form-control" rows="2"></textarea>
            </div>
          </td>
          <!--Typ-->
          <td>
            <select class="form-control" id="test">
              <option value="1" selected>Checkbox</option>
              <option value="2">Anzahl</option>
            </select>
          </td>
          <!-- Einheit-->
          <td>
            <select class="form-control" disabled>
              <option value="1">Festpreis</option>
              <option value="2"></option>
            </select>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0" value="350">
            </div>
          </td>
          <td>
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-center">2</th>
          <!-- Name-->
          <td>
            <div>
              <input type="text" class="form-control" min="0" value="Umzugskarton Verleih">
            </div>
          </td>
          <td>
            <select class="form-control" >
              <option value="1" >Universal</option>
              <option value="2" selected>Umzug</option>
              <option value="3">Entrümpelung</option>
            </select>
          </td>
          <td>
            <div>
              <textarea class="form-control" rows="2"></textarea>
            </div>
          </td>
          <!--Typ-->
          <td>
            <select class="form-control">
              <option value="1" >Checkbox</option>
              <option value="2" selected>Anzahl</option>
            </select>
          </td>
          <!-- Einheit-->
          <td>
            <select class="form-control" >
              <option value="1" disabled>Festpreis</option>
              <option value="2" >Pro km</option>
              <option value="3" selected>Pro Einheit</option>
              <option value="3" >Pro m²</option>
              <option value="3" >Pro m³</option>
            </select>
          </td>
          <td>
            <div>
              <input type="text" class="form-control" min="0" value="2">
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
          <td>
            <select class="form-control" >
              <option value="1" selected>Universal</option>
              <option value="2">Umzug</option>
              <option value="3">Entrümpelung</option>
            </select>
          </td>
          <td>
            <div>
              <textarea class="form-control" rows="2"></textarea>
            </div>
          </td>
          <!--Typ-->
          <td>
            <select class="form-control">
              <option value="1" selected>Checkbox</option>
              <option value="2">Anzahl</option>
            </select>
          </td>
          <!-- Einheit-->
          <td>
            <select class="form-control" disabled>
              <option value="1">Festpreis</option>
              <option value="2"></option>
            </select>
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
export default {
  name: "SonderleistungenComponent"
}
</script>

<style scoped>

</style>
