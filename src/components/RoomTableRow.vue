<template>
    <tr>
        <th scope="row">1</th>
        <!-- Name-->
        <td>{{name}}</td>
        <!-- Anzahl-->
        <td>
            <div>
                <input type="number" class="form-control" min="0"
                       value="0">
            </div>
        </td>
        <!-- Volumen-->
        <td>
            <div>
                <input type="tel" class="form-control" min="0"
                       :value="volumen">
            </div>
        </td>
        <!--Abbaubar-->
        <td>
            <div v-if="abbaubar" class="custom-control custom-checkbox text-center">
                <input type="checkbox" class="custom-control-input" :id="id" min="0">
                <label class="custom-control-label" :for="id"></label>
            </div>
        </td>
    </tr>
</template>

<script>
    import uniqueId from 'lodash.uniqueid';

    export default {
        name: "RoomTableRow",
        data() {
            return {
                id: uniqueId('box-')
            }
        },
        props: ['name', 'abbaubar', 'volumen']
    }
</script>

<style scoped>

</style>
