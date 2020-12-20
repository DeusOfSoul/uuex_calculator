<template>
  <div class="card">
    <div class="card-header"
         data-toggle="collapse"
         :href="'#' + id + '-header-' + angebot.number"
         aria-expanded="false"
         :aria-controls="id + '-header-' + angebot.number">
      <div class="d-flex justify-content-between">
        <div class=" d-flex flex-column justify-content-between">
          <h4 class="card-title">{{ angebot.name }}</h4>
          <h5>#{{ angebot.number }} ({{ angebot.type }})</h5>
        </div>
        <div class="d-flex flex-column justify-content-between">
          <h4>{{ angebot.price }}€</h4>
          <h4>{{ angebot.volume }}m³</h4>
        </div>
        <div class="d-flex flex-column  justify-content-between align-items-center">
          <div class="  px-4">
            <button
                v-bind:class="{
                            'btn-secondary': angebot.status === 'Abgeschlossen',
                            'btn-success': angebot.status === 'Neu',
                            'btn-primary': angebot.status === 'In Bearbeitung'}"
                class="btn">{{ angebot.status }}
            </button>
          </div>
          <a>Status ändern</a>
        </div>
      </div>
    </div>
    <div class="card-body pb-2 collapse" :id="id + '-header-' + angebot.number">
      <h4
          class="dropdown-toggle col-sm-4"
          data-toggle="collapse"
          :href="'#' + id + '-data-' + angebot.number"
          aria-expanded="false"
          :aria-controls="id + '-data-' + angebot.number">
        Grunddaten
      </h4>
      <div class="collapse " :id="id + '-data-' + angebot.number">
        <div class="card card-body border-secondary">
          <div class="form-row">
            <div class="col-2">Name:</div>
            <div class="col-2">{{ angebot.kontakt.anrede + ' ' + angebot.kontakt.nachname }}</div>
          </div>
          <div class="form-row">
            <div class="col-2">Vorname:</div>
            <div class="col-2">{{ angebot.kontakt.vorname }}</div>
          </div>
          <div class="form-row">
            <div class="col-2">E-Mail:</div>
            <div class="col-2">{{ angebot.kontakt.email }}</div>
          </div>
          <div class="form-row">
            <div class="col-2">Telefon:</div>
            <div class="col-2">{{ angebot.kontakt.phone }}</div>
          </div>
          <hr>
          <h5>Startort</h5>
          <div class="form-row">
            <div class="col-2">Stadt:</div>
            <div class="col-2">{{ angebot.grunddaten.start.plz + ' ' + angebot.grunddaten.start.ort }}</div>
          </div>
          <div class="form-row">
            <div class="col-2">Distanz zum Parkplatz:</div>
            <div class="col-2">{{ angebot.grunddaten.start.distanceToParkingSpot }}m</div>
          </div>
          <div class="form-row">
            <div class="col-2">Haltezone benötigt:</div>
            <div class="col-2">{{ (angebot.grunddaten.start.haltezone) ? 'Ja' : 'Nein' }}</div>
          </div>
          <hr>
          <h5>Endort</h5>
          <div class="form-row">
            <div class="col-2">Stadt:</div>
            <div class="col-2">{{ angebot.grunddaten.end.plz + ' ' + angebot.grunddaten.end.ort }}</div>
          </div>
          <div class="form-row">
            <div class="col-2">Distanz zum Parkplatz:</div>
            <div class="col-2">{{ angebot.grunddaten.end.distanceToParkingSpot }}m</div>
          </div>
          <div class="form-row">
            <div class="col-2">Haltezone benötigt:</div>
            <div class="col-2">{{ (angebot.grunddaten.end.haltezone) ? 'Ja' : 'Nein' }}</div>
          </div>
        </div>
      </div>

      <hr class="my-4">
      <h4
          class="dropdown-toggle col-sm-4"
          data-toggle="collapse"
          :href="'#' + id + '-object-' + angebot.number"
          aria-expanded="false"
          :aria-controls="id + '-object-' + angebot.number">
        Objektangaben
      </h4>
      <div class="collapse " :id="id + '-object-' + angebot.number">
        <div class="card-body">
          <angebot-object-table :angebot="angebot"></angebot-object-table>
        </div>
      </div>

      <hr class="my-4">
      <h4
          class="dropdown-toggle col-sm-4"
          data-toggle="collapse"
          :href="'#' + id + '-special-' + angebot.number"
          aria-expanded="false"
          :aria-controls="id + '-special-' + angebot.number">
        Sonderleistungen
      </h4>
      <div class="collapse " :id="id + '-special-' + angebot.number">
        <div class="card-body">
          <div class="table-responsive-sm">
            <table class="table table-striped table-bordered mb-0">
              <thead>
              <tr>
                <th class="">#</th>
                <th class="">Sonderleistung</th>
                <th class="">Preisart</th>
                <th class="">Preis</th>
                <th class="">Einheiten</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Umzugskartonverleih</td>
                <td>je Stk.</td>
                <td>2€</td>
                <td>10</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Umzugskaton Ein-/Auspacken</td>
                <td>je 0.5m³</td>
                <td>0.5€</td>
                <td>10</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <hr class="my-4">
      <h4
          class="dropdown-toggle col-sm-4"
          data-toggle="collapse"
          :href="'#' + id + '-bilder-' + angebot.number"
          aria-expanded="false"
          :aria-controls="id + '-bilder-' + angebot.number">
        Bilder
      </h4>
      <div class="collapse " :id="id + '-bilder-' + angebot.number">
        <div class="card-body d-flex flex-row flex-wrap">
          <div class="card shadow-sm m-1" style="max-width: 300px;">
            <div class="card-header d-flex justify-content-between">
              <p class="p-0">wohnzimmer.jpg</p>
              <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <img src="@/assets/fotos/interior-1961070_640.jpg" class="card-img-top">
            <div class="card-body">
              <div class="form-group">
                <label for="description">Beschreibung:</label>
                <input id="description" class="form-control" type="text"
                       value="Wohnzimmer">
              </div>
            </div>
          </div>

          <div class="card shadow-sm m-1" style="max-width: 300px;">
            <div class="card-header d-flex justify-content-between">
              <p class="p-0">wohnzimmer.jpg</p>
              <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <img src="@/assets/fotos/interior-1961070_640.jpg" class="card-img-top">
            <div class="card-body">
              <div class="form-group">
                <label for="description2">Beschreibung:</label>
                <input id="description2" class="form-control" type="text"
                       value="Wohnzimmer">
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-4">
      <h4
          class="dropdown-toggle col-sm-4"
          data-toggle="collapse"
          :href="'#' + id + '-vehicle-' + angebot.number"
          aria-expanded="false"
          :aria-controls="id + '-vehicle-' + angebot.number">
        Fahrzeuge
      </h4>
      <div class="collapse " :id="id + '-vehicle-' + angebot.number">
        <div class="card-body">
          <div class="table-responsive-sm">
            <table class="table table-striped table-bordered mb-0">
              <thead>
              <tr>
                <th class="">Anzahl</th>
                <th class="">Art</th>
                <th class="">gefüllt</th>
                <th class="">Volumen in m³</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>klein</td>
                <td>50%</td>
                <td>8m³</td>
              </tr>
              <tr>
                <td>1</td>
                <td>groß</td>
                <td>100%</td>
                <td>24m³</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr class="my-4">
      <button class="btn btn-secondary">PDF</button>
    </div>
  </div>
</template>

<script>
import uniqueId from "lodash.uniqueid";
import AngebotObjectTable from "@/components/Admin/AngebotObjectTable";

export default {
  name: "Angebot",
  components: {AngebotObjectTable},
  setup() {
    return {
      id: uniqueId('angebot-')
    }

  },

  props: ['angebot']
}
</script>

<style scoped>
h4.dropdown-toggle {
  cursor: pointer;
}
</style>
