<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="alert alert-info">
                    <strong>Admin </strong> - U: admin P: admin
                </div>
                <h2>Login</h2>
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input id="username" type="text"  class="form-control"/>
                        <div class="invalid-feedback">
                            <div>Username is required</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input id="password" type="password" class="form-control" />
                        <div class="invalid-feedback">
                            <div>Password is required</div>
                        </div>
                    </div>
                    <div class="form-group">

                        <router-link to="admin">
                            <button class="btn btn-primary">Login</button>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
