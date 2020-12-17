<template>
    <div class="card">
        <div class="card-header">
            <div class=" d-flex align-items-start justify-content-between flex-wrap">
                <h4 class="card-title">{{angebot.name}}</h4>
                <div class="ml-auto px-4">
                    <button
                            v-bind:class="{
                            'btn-secondary': angebot.status === 'Abgeschlossen',
                            'btn-success': angebot.status === 'Neu',
                            'btn-primary': angebot.status === 'In Bearbeitung',}"
                            class="btn btn-secondary">{{angebot.status}}</button>
                </div>
            </div>
            <h5>#{{angebot.number}} (Umzug)</h5>
        </div>
        <div class="card-body">
            <h4>Grunddaten</h4>
            <hr class="my-4">
            <h4>Objektangaben</h4>
            <hr class="my-4">
            <h4>Sonderleistungen</h4>
            <hr class="my-4">
            <h4>Bilder</h4>
            <hr class="my-4">
        </div>
    </div>

</template>

<script>
    export default {
        name: "Angebot",
        props:['angebot']
    }
</script>

<style scoped>

</style>
