<template>
    <div class="table">
        <table>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data: function() {
            return {
                tableContents: []
            };
        },
    methods: {
        // I feel like I've done this wrong still wrapping my head around it
        getInformation: function() {
            this.$http
                .get("https://swapi.co/api/people/1/")
                .then(function(){
                    this.tableContents = data.body.tableContents;
                })
        }
    }
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>