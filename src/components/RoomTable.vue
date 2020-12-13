<template>
        <div class="card">
            <div class="card-header">
                <div class="d-flex justify-content-between">
                    <div class="d-flex justify-content-between">
                        <h4
                                class="dropdown-toggle col-sm-4"
                                data-toggle="collapse"
                                :href="'#' + id"
                                aria-expanded="false"
                                :aria-controls="id">
                            {{room.name}}
                        </h4>
                        <h5>20m³</h5>
                    </div>
                    <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

            </div>
            <div class="collapse" :id="id">
                <div class="card-body">
                    <div class="table-responsive-sm">
                        <table class="table table-striped table-sm table-bordered">
                            <thead>
                            <tr>
                                <th class="col-sm-1">#</th>
                                <th class="col-sm-4">Möbel</th>
                                <th class="col-sm-2">Anzahl</th>
                                <th class="col-sm-2">Volumen in m³</th>
                                <th class="col-sm-2 text-center">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input"
                                               id="tableDefaultCheck11">
                                        <label class="custom-control-label"
                                               for="tableDefaultCheck11">Auf-/Abbau</label>
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <room-table-row
                                    v-for=" teil in room.moebel"
                                    :key="teil.id"
                                    :abbaubar="teil.abbaubar"
                                    :name="teil.name"
                                    :volumen="teil.volumen"
                            />
                            </tbody>
                        </table>
                    </div>
                    <div class="">
                        <button class="btn btn-secondary">+ Möbelstück hinzufügen</button>
                    </div>
                </div>
            </div>
        </div>
        <br>
</template>

<script>
    import {rooms} from '../assets/rooms'
    import RoomTableRow from "./RoomTableRow";
    import uniqueId from 'lodash.uniqueid';

    export default {
        name: "TableRoom",
        components: {RoomTableRow},
        setup() {
            return {
                rooms,
                id: uniqueId('room-')
            }
        },
        props: ['room',  ]
    }
</script>

<style scoped>
    h4 {
        cursor: pointer;
    }
</style>
