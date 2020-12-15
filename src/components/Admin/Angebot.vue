<template>
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">{{angebot.name}}</h5>
            <div class="ml-auto px-4">
                <button class="btn btn-light">Status</button>
            </div>
        </div>
        <div class="card-body">

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
