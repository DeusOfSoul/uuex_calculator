<template>
    <div class="table-responsive-sm">
        <table class="table table-striped table-bordered">
            <thead>
            <tr>
                <th class="text-center">#</th>
                <th class="">Raum</th>
                <th class="">Preis Normal €/m²</th>
                <th class="">Preis Extrem €/m²</th>
                <th class="">Preis Messi €/m²</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="zimmer in zimmerListe" :key="zimmer.id">
                    <th scope="row" class="text-center">{{zimmer.id}}</th>
                    <!-- Name-->
                    <td>{{zimmer.name}}</td>
                    <!-- Anzahl-->
                    <td>
                        <div>
                            <input type="number" class="form-control" min="0"
                                   value="0">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {zimmerListe} from "../../assets/data/admin/zimmerListe";
    import uniqueId from "lodash.uniqueid";

    export default {
        name: "ZimmerListeComponent",
        components: {},
        data(){
            return {
                zimmerListe,
                id: uniqueId('box-')
            }
        }
    }
</script>

<style scoped>

</style>
