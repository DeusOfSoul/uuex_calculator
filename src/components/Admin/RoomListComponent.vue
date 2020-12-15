<template>
    <div v-for="room in roomList" :key="room.id">
        <div class="card">
            <div class="card-header">
                <div class=" d-flex align-items-start justify-content-between flex-wrap">
                    <h4 class="card-title">{{room.name}}</h4>
                    <div class="ml-auto px-4">
                        <button class="btn btn-secondary">löschen</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex  align-items-start  flex-wrap">
                    <div class="card m-1 " v-for="moebel in moebelListe" :key="moebel.id">
                        <div class="custom-control custom-checkbox text-center bd-h m-3 ">
                            <input type="checkbox" class="custom-control-input" :id="id+'-'+room.id+'-'+moebel.id" >
                            <label class="custom-control-label" :for="id+'-'+room.id+'-'+moebel.id">{{moebel.name}}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p></p>
    </div>
</template>

<script>
    import {roomList} from "../../assets/data/admin/roomList";
    import {moebelListe} from "../../assets/data/admin/moebelListe";
    import uniqueId from "lodash.uniqueid";

    export default {
        name: "RoomListComponent",
        data() {
            return {
                roomList,
                moebelListe,
                id: uniqueId('box-')
            }
        }
    }
</script>

<style scoped>

</style>
