<template>
    <div class="table-responsive-sm">
        <table class="table table-striped table-sm table-bordered">
            <thead>
            <tr>
                <th class="col-sm-1">#</th>
                <th class="col-sm-4">Objekt</th>
                <th class="col-sm-2">Fläche in m²</th>
                <th class="col-sm-2 text-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="agb">
                            <label class="form-check-label" for="agb">
                                Messi
                            </label>
                        </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <room-table-row
                    v-for=" teil in room.moebel"
                    :key="teil.id"
            />
            </tbody>
        </table>
    </div>
    <div class="">
        <button class="btn btn-secondary">+ Möbelstück hinzufügen</button>
    </div>
    <br>
</template>

<script>
    export default {
        name: "ObjetTable"
    }
</script>

<style scoped>

</style>
