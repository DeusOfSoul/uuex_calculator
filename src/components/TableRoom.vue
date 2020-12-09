<template>
    <div class="card">
        <div class="card-header">
            <h4 class="dropdown-toggle col-sm-4" data-toggle="collapse"
                href="#collapseExample2" aria-expanded="false"
                aria-controls="collapseExample2">
                Schlafzimmer
            </h4>
        </div>
        <div class="collapse" id="collapseExample2">
            <div class="card-body">
                <div class="table-responsive-sm">
                    <table class="table table-striped table-sm table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Möbel</th>
                            <th class="col-sm-2" scope="col">Anzahl</th>
                            <th class="text-center" scope="col">
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Beistelltisch</td>
                            <td>
                                <div>
                                    <input type="number" class="form-control"
                                           value="0">
                                </div>
                            </td>
                            <td>
                                <div class="custom-control custom-checkbox text-center">
                                    <input type="checkbox" class="custom-control-input" id="tableDefaultCheck10">
                                    <label class="custom-control-label" for="tableDefaultCheck10"></label>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>1-Türiger Kleiderschrank</td>
                            <td>
                                <div>
                                    <input type="number" class="form-control"
                                           value="0">
                                </div>
                            </td>
                            <td>
                                <div class="custom-control custom-checkbox text-center">
                                    <input type="checkbox" class="custom-control-input"
                                           id="tableDefaultCheck4" checked>
                                    <label class="custom-control-label"
                                           for="tableDefaultCheck4"></label>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>2-türiger Kleiderschrank</td>
                            <td>
                                <div>
                                    <input type="number" class="form-control"
                                           value="0">
                                </div>
                            </td>
                            <td>
                                <div class="custom-control custom-checkbox text-center">
                                    <input type="checkbox" class="custom-control-input"
                                           id="tableDefaultCheck5">
                                    <label class="custom-control-label"
                                           for="tableDefaultCheck5"></label>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Einzelbett + Matratze</td>
                            <td>
                                <div>
                                    <input type="number" class="form-control"
                                           value="0">
                                </div>
                            </td>
                            <td>
                                <div class="custom-control custom-checkbox text-center">
                                    <input type="checkbox" class="custom-control-input"
                                           id="tableDefaultCheck6" checked>
                                    <label class="custom-control-label"
                                           for="tableDefaultCheck6"></label>
                                </div>
                            </td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TableRoom"
    }
</script>

<style scoped>

</style>
