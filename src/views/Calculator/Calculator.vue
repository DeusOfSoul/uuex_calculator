<template>
  <br>
  <div class="container">
    <div class="multisteps-form">
      <!--progress bar-->
      <div class="row">
        <div class="col-14 col-lg-8 ml-auto mr-auto mb-4">
          <div class="multisteps-form__progress">
            <button v-bind:class="{'js-active' : state.currentPage >= 1}"
                    class="multisteps-form__progress-btn js-active" title="Auswahl Info" type="button">
              <a v-bind:class="state.currentPage >= 1 ?  'text_active' : 'text_passiv'">Auswahl</a>
            </button>
            <button v-bind:class="{'js-active' : state.currentPage >= 2}"
                    class="multisteps-form__progress-btn " type="button" title="Grunddaten">
              <a v-bind:class="state.currentPage >= 2 ?  'text_active' : 'text_passiv'">Grunddaten</a>
            </button>
            <button v-bind:class="{'js-active' : state.currentPage >= 3}"
                    class="multisteps-form__progress-btn " type="button" title="Objektangaben">
              <a v-bind:class="state.currentPage >= 3 ?  'text_active' : 'text_passiv'">Objektangaben</a>
            </button>
            <button v-bind:class="{'js-active' : state.currentPage >= 4}"
                    class="multisteps-form__progress-btn " type="button" title="Sonderleistungen">
              <a v-bind:class="state.currentPage >= 4 ?  'text_active' : 'text_passiv'">Sonderleistungen</a>
            </button>
            <button v-bind:class="{'js-active' : state.currentPage >= 5}"
                    class="multisteps-form__progress-btn " type="button" title="Bilder">
              <a v-bind:class="state.currentPage >= 5 ?  'text_active' : 'text_passiv'">Bilder</a>
            </button>
            <button v-bind:class="{'js-active' : state.currentPage >= 6}"
                    class="multisteps-form__progress-btn" type="button" title="Bestätigen">
              <a v-bind:class="state.currentPage >= 6 ?  'text_active' : 'text_passiv'">Bestätigen</a>
            </button>
          </div>
        </div>
      </div>

      <!--form panels-->
      <div class="row">
        <div class=" col m-auto">
          <form class="multisteps-form__form" v-on:submit.prevent>
            <!-- Startseite -->
            <div v-bind:class="{'js-active' : state.currentPage === 1}"
                 class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
              <h1 class="multisteps-form__title">Auswahl</h1>
              <p>Hier noch einen netten Text zur Begrüßung hinzufügen</p>
              <div class="d-flex flex-column align-items-center">
                <div class="">
                  <button v-on:click="nextStep(state.workTypes.moving)" class="btn btn-primary">
                    Umziehen
                  </button>
                </div>
                <br>
                <div>
                  <a>oder</a>
                </div>
                <br>
                <div class="">
                  <button v-on:click="nextStep(state.workTypes.garbage)" class="btn btn-primary">
                    Entrümpeln
                  </button>
                </div>
              </div>
            </div>

            <!-- Grunddaten -->
            <div v-bind:class="{'js-active' : state.currentPage === 2}"
                 class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
              <h1 class="multisteps-form__title">Grunddaten</h1>
              <div>
                <h4 v-if="state.workTypes.moving === state.currentWorkType"> Startort</h4>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Stadt</label>
                    <input type="text" class="form-control" id="inputCity">
                  </div>
                  <div class="form-group col-md-2">
                    <label for="inputZip">PLZ</label>
                    <input type="text" class="form-control" id="inputZip">
                  </div>

                  <div v-if="state.workTypes.moving === state.currentWorkType" class="form-group col-md-4">
                    <label for="inputWohnung">Objektart</label>
                    <select id="inputWohnung" class="form-control">
                      <option selected disabled>Wähle...</option>
                      <option>Haus</option>
                      <option>Wohnung</option>
                    </select>
                  </div>
                  <div v-if="state.workTypes.moving === state.currentWorkType" class="form-group col-md-2">
                    <label for="etage">Etage</label>
                    <input type="number" class="form-control" id="etage">
                  </div>
                </div>
                <div v-if="state.workTypes.moving === state.currentWorkType">
                  <br>
                  <h4>Zielort</h4>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCity2">Stadt</label>
                      <input type="text" class="form-control" id="inputCity2">
                    </div>
                    <div class="form-group col-md-2">
                      <label for="inputZip2">PLZ</label>
                      <input type="text" class="form-control" id="inputZip2">
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputWohnung2">Objektart</label>
                      <select id="inputWohnung2" class="form-control">
                        <option selected disabled>Wähle...</option>
                        <option>Haus</option>
                        <option>Wohnung</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <label for="etage2">Etage</label>
                      <input type="number" class="form-control" id="etage2">
                    </div>
                  </div>
                  <br>
                  <div class="form-row">
                    <div class="col-md-4">
                      <label for="distance">Distanz zwischen Start und Zielort</label>
                      <div class="input-group ">
                        <input type="number" class="form-control" id="distance">
                        <div class="input-group-prepend">
                          <div class="input-group-text">km</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br>
                </div>
                <div class="form-row">
                  <div class="col-md-4">
                    <label
                        for="date">{{
                        state.workTypes.moving === state.currentWorkType ? 'Umzugsdatum' : 'Datum'
                      }}</label>
                    <input type="date" class="form-control" id="date">
                  </div>
                </div>

              </div>
              <div class="d-flex justify-content-between mt-4">
                <div>
                  <button v-on:click="backStep" class="btn btn-secondary " type="button"
                          title="Zurück">Zurück
                  </button>
                </div>
                <div>
                  <h5>Preis: {{ state.costs }}€</h5>
                </div>
                <div v-if="state.currentWorkType === state.workTypes.moving">
                  <h5>Volumen: {{ state.volume }}m³</h5>
                </div>
                <div>
                  <button v-on:click="nextStep" class="btn btn-primary ml-auto" type="button"
                          title="Weiter">
                    Weiter
                  </button>
                </div>
              </div>
            </div>

            <!-- Objektangaben -->
            <div v-bind:class="{'js-active' : state.currentPage === 3}"
                 class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
              <div class="d-flex justify-content-between align-self-center">
                <h1 class="multisteps-form__title">Objektangaben</h1>
              </div>
              <br>

              <!-- Moving -->
              <div v-if="state.currentWorkType === state.workTypes.moving">
                <room-table v-for="room in rooms"
                            :key="room.id"
                            :room="room">
                </room-table>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <select class="form-control">
                      <option selected disabled>Wähle...</option>
                      <option>Wohnzimmer</option>
                      <option>Schlafzimmer</option>
                      <option>Kinderzimmer</option>
                      <option>Esszimmer</option>
                      <option>Küche</option>
                      <option>Keller</option>
                      <option>Speicher</option>
                      <option>Garage</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div class="form-group ">
                    <button class="btn btn-secondary">+ Objekt hinzufügen</button>
                  </div>
                </div>
                <br>
              </div>

              <!-- Garbage -->
              <div v-if="state.currentWorkType === state.workTypes.garbage">
                <objet-table :objects="objects"></objet-table>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <select class="form-control">
                      <option selected disabled>Wähle...</option>
                      <option >Wohnzimmer</option>
                      <option>Schlafzimmer</option>
                      <option>Kinderzimmer</option>
                      <option>Esszimmer</option>
                      <option>Küche</option>
                      <option>Keller</option>
                      <option>Speicher</option>
                      <option>Garage</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <button class="btn btn-secondary">+ Raum hinzufügen</button>
                  </div>
                </div>
              </div>


              <div class="d-flex justify-content-between mt-4">
                <div>
                  <button v-on:click="backStep" class="btn btn-secondary " type="button"
                          title="Zurück">Zurück
                  </button>
                </div>
                <div>
                  <h5>Preis: {{ state.costs }}€</h5>
                </div>
                <div v-if="state.currentWorkType === state.workTypes.moving">
                  <h5>Volumen: {{ state.volume }}m³</h5>
                </div>
                <div>
                  <button v-on:click="nextStep" class="btn btn-primary ml-auto" type="button"
                          title="Weiter">
                    Weiter
                  </button>
                </div>
              </div>
            </div>

            <!--single form panel-->
            <div v-bind:class="{'js-active' : state.currentPage === 4}"
                 class="multisteps-form__panel shadow p-4 rounded bg-white"
                 data-animation="scaleIn">
              <h3>Sonderleistungen</h3>
              <div class="multisteps-form__content">

                <!-- Moving -->
                <div v-if="state.currentWorkType === state.workTypes.moving">

                </div>

                <!-- Garbage -->
                <div v-if="state.currentWorkType === state.workTypes.garbage">

                </div>
                <div class="row">

                </div>
                <div class="d-flex justify-content-between mt-4">
                  <div>
                    <button v-on:click="backStep" class="btn btn-secondary " type="button"
                            title="Zurück">Zurück
                    </button>
                  </div>
                  <div>
                    <h5>Preis: {{ state.costs }}€</h5>
                  </div>
                  <div v-if="state.currentWorkType === state.workTypes.moving">
                    <h5>Volumen: {{ state.volume }}m³</h5>
                  </div>
                  <div>
                    <button v-on:click="nextStep" class="btn btn-primary ml-auto" type="button"
                            title="Weiter">
                      Weiter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div v-bind:class="{'js-active' : state.currentPage === 5}"
                 class="multisteps-form__panel shadow p-4 rounded bg-white"
                 data-animation="scaleIn">
              <h3>Bilder hinzufügen</h3>
              <div class="multisteps-form__content">
                <div class="row">
                  <div class="col-12 col-md-6 mt-4">
                    <div class="card shadow-sm">
                      <div class="card-header">
                        <button type="button" class="close" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <img src="../../assets/fotos/interior-1961070_640.jpg" class="card-img-top">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="description">Beschreibung:</label>
                          <input id="description" class="form-control" type="text"
                                 value="Wohnzimmer">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 mt-4">
                    <div class="card shadow-sm">
                      <div class="card-body">
                        <div class="row justify-content-center">
                          <div class="col-md-12 col-lg-10 col-12">
                            <div class="form-group files"
                                 data-before="Zieh dein Foto hierher oder klicken sie auf den obigen Button">
                              <label class="my-auto">Laden sie hier ihr Bild hoch</label>
                              <input id="file" type="file" class="form-control"/>
                            </div>
                          </div>
                        </div>
                        <small>Format: .jpg, .png, .jpeg </small><br>
                        <small>Maximale Größe: 2Mb</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-4">
                  <div>
                    <button v-on:click="backStep" class="btn btn-secondary " type="button"
                            title="Zurück">Zurück
                    </button>
                  </div>
                  <div>
                    <h5>Preis: {{ state.costs }}€</h5>
                  </div>
                  <div v-if="state.currentWorkType === state.workTypes.moving">
                    <h5>Volumen: {{ state.volume }}m³</h5>
                  </div>
                  <div>
                    <button v-on:click="nextStep" class="btn btn-primary ml-auto" type="button"
                            title="Weiter">
                      Weiter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!--single form panel-->
            <div v-bind:class="{'js-active' : state.currentPage === 6 }"
                 class="multisteps-form__panel shadow p-4 rounded bg-white " data-animation="scaleIn">
              <h3 class="multisteps-form__title">Bestätigen</h3>
              <div class="multisteps-form__content">
                <p>Netter Text um Kunden zum Angebot zu verleiten</p>
                <div class="form-row">
                  <div class="form-group col-md-2">
                    <label for="anrede">Anrede</label>
                    <select id="anrede" class="form-control">
                      <option selected disabled>Wähle...</option>
                      <option>Frau</option>
                      <option>Herr</option>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="nachname">Nachname</label>
                    <input type="text" class="form-control" id="nachname">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="email">E-Mail</label>
                    <input type="email" class="form-control" id="email">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="number">Telefonnummer (optional)</label>
                    <input type="text" class="form-control" id="number">
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="agb">
                    <label class="form-check-label" for="agb">
                      Hiermit akzeptiere ich die AGBs und den Datenschutz.
                    </label>
                  </div>
                </div>
                <button class="btn-warning btn">kostenloses Angebot anfordern</button>

                <div class="button-row d-flex mt-4">
                  <button v-on:click="backStep" class="btn btn-secondary " type="button"
                          title="Zurück">Zurück
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue';
import RoomTable from "../../components/Calculator/Moving/RoomTable";
import ObjetTable from "@/components/Calculator/Garbage/ObjetTable";
import {rooms} from "../../assets/data/calc/rooms";
import {objects} from "../../assets/data/calc/objects";

export default {
  name: "Calculator",
  components: {ObjetTable, RoomTable},
  setup: function () {
    const state = reactive({
      workTypes: {
        moving: 1,
        garbage: 2
      },
      currentPage: 1,
      currentWorkType: 0,
      costs: 0,
      volume: 0
    });

    function nextStep(value = null) {
      if (value === state.workTypes.garbage || value === state.workTypes.moving) {
        state.currentWorkType = value
      }
      state.currentPage++;
    }

    function backStep() {
      state.currentPage--;
    }

    return {
      state,
      rooms,
      objects,
      nextStep,
      backStep
    }
  }
}
</script>

<style lang="scss" scoped>
#file {
  border: 2px dashed #92b0b3 !important
}

.color input {
  background-color: #f1f1f1
}

.files:before {
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
  content: attr(data-before);
  color: #000;
  font-size: 12px;
  font-weight: 600;
  text-align: center
}

#file {
  display: inline-block;
  width: 100%;
  padding: 95px 0 0 100%;
  background: url("../../assets/fotos/upload.png") top center no-repeat #fff;
  background-size: 55px 55px
}

.multisteps-form__progress {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 2fr));
}

.multisteps-form__progress-btn {
  transition-property: all;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  transition-delay: 0s;
  position: relative;
  padding-top: 20px;
  color: rgba(108, 117, 125, 0.7);
  text-indent: -9999px;
  border: none;
  background-color: transparent;
  outline: none !important;
  cursor: default;
}

@media (min-width: 500px) {
  .multisteps-form__progress-btn {
    text-indent: 0;
  }
}

.multisteps-form__progress-btn:before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 13px;
  height: 13px;
  content: '';
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  transition: all 0.15s linear 0s, -webkit-transform 0.15s cubic-bezier(0.05, 1.09, 0.16, 1.4) 0s;
  transition: all 0.15s linear 0s, transform 0.15s cubic-bezier(0.05, 1.09, 0.16, 1.4) 0s;
  transition: all 0.15s linear 0s, transform 0.15s cubic-bezier(0.05, 1.09, 0.16, 1.4) 0s,
  -webkit-transform 0.15s cubic-bezier(0.05, 1.09, 0.16, 1.4) 0s;
  border: 1px solid rgba(108, 117, 125, 0.7);
  border-radius: 50%;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 3;
}

.multisteps-form__progress > button {
  cursor: default;
}

.multisteps-form__progress-btn:after {
  position: absolute;
  top: 5px;
  left: calc(-50% - 13px / 2);
  transition-property: all;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  transition-delay: 0s;
  display: block;
  width: 100%;
  height: 2px;
  content: '';
  background-color: currentColor;
  z-index: 1;
}

.multisteps-form__progress-btn:first-child:after {
  display: none;
}

.multisteps-form__progress-btn.js-active {
  /*color: #007bff;*/
  color: theme-color('primary');
}

.multisteps-form__progress-btn.js-active:before {
  -webkit-transform: translateX(-50%) scale(1.2);
  transform: translateX(-50%) scale(1.2);
  background-color: currentColor;
}

.multisteps-form__form {
  position: relative;
}

.multisteps-form__panel {
  position: absolute;
  //top: 0;
  //left: 0;
  width: 100%;
  height: 0;
  opacity: 0;
  visibility: hidden;
}

.multisteps-form__panel.js-active {
  height: auto;
  opacity: 1;
  visibility: visible;
}

a.text_passiv {
  color: rgba(108, 117, 125, 0.7);
  text-decoration: none;
  cursor: default;

}

a.text_active {
  color: #2c3e50;
  text-decoration: none;
  cursor: default;
}

</style>
