<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <router-link to="login">
                    <button class="btn btn-primary">Admin</button>
                </router-link>
            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-body">
                <router-link to="calculator">
                    <button class="btn btn-primary">Rechner</button>
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Start"
    }
</script>

<style scoped>

</style>
