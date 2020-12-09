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
                            Auswahl
                        </button>
                        <button v-bind:class="{'js-active' : state.currentPage >= 2}"
                                class="multisteps-form__progress-btn " type="button" title="Grunddaten">Grunddaten
                        </button>
                        <button v-bind:class="{'js-active' : state.currentPage >= 3}"
                                class="multisteps-form__progress-btn " type="button" title="Raumangaben">Objektangaben
                        </button>
                        <button v-bind:class="{'js-active' : state.currentPage >= 4}"
                                class="multisteps-form__progress-btn " type="button" title="Order Info">Bilder
                        </button>
                        <button v-bind:class="{'js-active' : state.currentPage >= 5}"
                                class="multisteps-form__progress-btn" type="button" title="Comments">Bestätigen
                        </button>
                    </div>
                </div>
            </div>

            <!--form panels-->
            <div class="row">
                <!--                <div class="col-12 col-lg-8 m-auto">-->
                <div class=" col m-auto">
                    <form class="multisteps-form__form">

                        <div v-bind:class="{'js-active' : state.currentPage === 1}"
                             class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                            <h1 class="multisteps-form__title">Auswahl</h1>
                            <p>Hier noch einen netten Text zur Begrüßung hinzufügen</p>
                            <div class="d-flex flex-column align-items-center">
                                <div class="">
                                    <button v-on:click="nextStep(state.workTypes.moving)" class="btn btn-primary">Umziehen
                                    </button>
                                </div>
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
                        <!--single form panel-->
                        <div v-bind:class="{'js-active' : state.currentPage === 2}"
                             class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                            <h1 class="multisteps-form__title">Grunddaten</h1>
                            <div>
                                <h4>Startort</h4>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">Startort</label>
                                        <input type="text" class="form-control" id="inputCity">
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputZip">PLZ</label>
                                        <input type="text" class="form-control" id="inputZip">
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="inputWohnung">Objektart</label>
                                        <select id="inputWohnung" class="form-control">
                                            <option selected disabled>Wähle...</option>
                                            <option>Haus</option>
                                            <option>Wohnung</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="etage">Etage</label>
                                        <input type="number" class="form-control" id="etage">
                                    </div>
                                </div>
                                <br>
                                <div v-if="state.workTypes.moving === state.currentWorkType">
                                    <h4>Zielort</h4>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputCity2">Zielort</label>
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
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <label for="distance">Distanz zwischen Start und Zielort</label>
                                            <div class="input-group ">
                                                <input type="number" class="form-control" id="distance">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">km</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-row d-flex mt-4">
                                <button v-on:click="backStep" class="btn btn-primary js-btn-Zurück" type="button"
                                        title="Zurück">Zurück
                                </button>
                                <button v-on:click="nextStep" class="btn btn-primary ml-auto" type="button"
                                        title="Weiter">
                                    Weiter
                                </button>
                            </div>
                        </div>

                        <!--single form panel-->
                        <div v-bind:class="{'js-active' : state.currentPage === 3}"
                             class="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                            <h1 class="multisteps-form__title">Objektangaben</h1>
                            <br>

                            <!-- Moving -->

                            <div v-if="state.currentWorkType === state.workTypes.moving">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="dropdown-toggle col-sm-4" data-toggle="collapse"
                                            href="#collapseExample" role="button" aria-expanded="false"
                                            aria-controls="collapseExample">
                                            Wohnzimmer
                                        </h4>
                                    </div>
                                    <div class="collapse" id="collapseExample">
                                        <div class="card-body">
                                            <div class="table-responsive-sm">
                                                <table class="table table-striped table-sm table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Möbel</th>
                                                        <th class="col-sm-2" scope="col">Anzahl</th>
                                                        <th class="text-center" scope="col">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input"
                                                                       id="tableDefaultCheck1">
                                                                <label class="custom-control-label"
                                                                       for="tableDefaultCheck1">Auf-/Abbau</label>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Beistelltisch</td>
                                                        <td>
                                                            <div>
                                                                <input type="number" class="form-control"
                                                                        value="0">
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="custom-control custom-checkbox text-center">
                                                                <input type="checkbox" class="custom-control-input" id="tableDefaultCheck3" checked>
                                                                <label class="custom-control-label" for="tableDefaultCheck3"></label>
                                                            </div>
                                                        </td>
                                    
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>1-Türiger Kleiderschrank</td>
                                                        <td>
                                                            <div>
                                                                <input type="number" class="form-control"
                                                                        value="0">
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="custom-control custom-checkbox text-center">
                                                                <input type="checkbox" class="custom-control-input"
                                                                       id="tableDefaultCheck3" checked>
                                                                <label class="custom-control-label"
                                                                       for="tableDefaultCheck3"></label>
                                                            </div>
                                                        </td>
                                    
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>2-türiger Kleiderschrank</td>
                                                        <td>
                                                            <div>
                                                                <input type="number" class="form-control"
                                                                        value="0">
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="custom-control custom-checkbox text-center">
                                                                <input type="checkbox" class="custom-control-input"
                                                                       id="tableDefaultCheck3">
                                                                <label class="custom-control-label"
                                                                       for="tableDefaultCheck3"></label>
                                                            </div>
                                                        </td>
                                    
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Einzelbett + Matratze</td>
                                                        <td>
                                                            <div>
                                                                <input type="number" class="form-control"
                                                                        value="0">
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="custom-control custom-checkbox text-center">
                                                                <input type="checkbox" class="custom-control-input"
                                                                       id="tableDefaultCheck3" checked>
                                                                <label class="custom-control-label"
                                                                       for="tableDefaultCheck3"></label>
                                                            </div>
                                                        </td>
                                    
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <TableRoom></TableRoom>
                                <br>
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
                                    <div class="form-group col-md-4">
                                        <button class="btn btn-secondary">+ Raum hinzufügen</button>
                                    </div>
                                </div>
                                <br>
                            </div>


                            <!-- Garbage -->
                            <div v-if="state.currentWorkType === state.workTypes.garbage">

                            </div>


                            <div class="button-row d-flex mt-4">
                                <button v-on:click="backStep" class="btn btn-primary js-btn-Zurück" type="button"
                                        title="Zurück">Zurück
                                </button>
                                <button v-on:click="nextStep" class="btn btn-primary ml-auto" type="button"
                                        title="Weiter">
                                    Weiter
                                </button>
                            </div>
                        </div>

                        <!--single form panel-->
                        <div v-bind:class="{'js-active' : state.currentPage === 4}"
                             class="multisteps-form__panel shadow p-4 rounded bg-white"
                             data-animation="scaleIn">
                            <h3 class="multisteps-form__title">Bilder hinzufügen</h3>
                            <div class="multisteps-form__content">
                                <div class="row">
                                    <div class="col-12 col-md-6 mt-4">
                                        <div class="card shadow-sm">
                                            <div class="card-header">
                                                <button type="button" class="close" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <img src="../assets/fotos/interior-1961070_640.jpg" class="card-img-top">
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
                                                             data-before="Drag file here or click the above button">
                                                            <label class="my-auto">Upload Your File </label>
                                                            <input id="file" type="file" class="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <small>Format: .jpg, .png, .jpeg </small><br>
                                                <small>Maximale Größe: 3Mb</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="button-row d-flex mt-4 col-12">
                                        <button v-on:click="backStep" class="btn btn-primary js-btn-Zurück"
                                                type="button"
                                                title="Zurück">Zurück
                                        </button>
                                        <button v-on:click="nextStep" class="btn btn-primary ml-auto" type="button"
                                                title="Weiter">
                                            Weiter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--single form panel-->
                        <div v-bind:class="{'js-active' : state.currentPage === 5 }"
                             class="multisteps-form__panel shadow p-4 rounded bg-white " data-animation="scaleIn">
                            <h3 class="multisteps-form__title">Bestätigen</h3>
                            <div class="multisteps-form__content">
                                <button class="btn-primary btn">kostenloses Angebot anfordern</button>

                                <div class="button-row d-flex mt-4">
                                    <button v-on:click="backStep" class="btn btn-primary js-btn-Zurück" type="button"
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


    <!--    Page 1   -->
    <div v-if="state.currentPage === 1">
    </div>

    <div v-if="state.currentPage === 2">

    </div>

    <div v-if="state.currentPage === 3">

    </div>


</template>

<script>
    import {reactive} from 'vue';
    import TableRoom from "../components/TableRoom";

    export default {
        name: "Calculator",
        components: {TableRoom},
        setup: function () {
            const state = reactive({
                workTypes: {
                    moving: 1,
                    garbage: 2
                },
                currentPage: 1,
                currentWorkType: 0
            })

            function nextStep(value = null) {
                if (value === state.workTypes.garbage || value === state.workTypes.moving) {
                    state.currentWorkType = value
                }
                state.currentPage++;
                console.log(state.currentWorkType);
            }

            function backStep() {
                state.currentPage--;
            }

            return {
                state,
                nextStep,
                backStep
            }
        }
    }
</script>

<style lang="css" scoped>
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
        background: url('https://i.imgur.com/VXWKoBD.png') top center no-repeat #fff;
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
        cursor: pointer;
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
        transition: all 0.15s linear 0s, transform 0.15s cubic-bezier(0.05, 1.09, 0.16, 1.4) 0s, -webkit-transform 0.15s cubic-bezier(0.05, 1.09, 0.16, 1.4) 0s;
        border: 2px solid currentColor;
        border-radius: 50%;
        background-color: #fff;
        box-sizing: border-box;
        z-index: 3;
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
        color: #007bff;
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
        top: 0;
        left: 0;
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

</style>
