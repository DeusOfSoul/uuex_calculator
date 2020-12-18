<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between">
                <div class=" d-flex flex-column justify-content-between">
                    <h4 class="card-title">{{angebot.name}}</h4>
                    <h5>#{{angebot.number}} (Umzug)</h5>
                </div>
                <div class="d-flex flex-column justify-content-between">
                    <h4>800€</h4>
                    <h4>30m³</h4>
                </div>
                <div class="d-flex flex-column justify-content-between">
                    <div class="  px-4">
                        <button
                                v-bind:class="{
                            'btn-secondary': angebot.status === 'Abgeschlossen',
                            'btn-success': angebot.status === 'Neu',
                            'btn-primary': angebot.status === 'In Bearbeitung',}"
                                class="btn btn-secondary">{{angebot.status}}</button>
                    </div>
                    <a>Status ändern</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <h4
                    class="dropdown-toggle col-sm-4"
                    data-toggle="collapse"
                    :href="'#' + id + '-data-' + angebot.number"
                    aria-expanded="false"
                    :aria-controls="id + '-data-' + angebot.number">
                Grunddaten
            </h4>
            <div class="collapse " :id="id + '-data-' + angebot.number">
                <div class="card-body" >
                    Test
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
                <div class="card-body" >
                    Test
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
                <div class="card-body" >
                    Test
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
                <div class="card-body" >
                    Test
                </div>
            </div>
            <hr class="my-4">
        </div>
    </div>

</template>

<script>
    import uniqueId from "lodash.uniqueid";

    export default {
        name: "Angebot",
        setup(){
          return {
              id: uniqueId('angebot-')
          }
        },
        props:['angebot']
    }
</script>

<style scoped>
    h4.dropdown-toggle {
        cursor: pointer;
    }

</style>
