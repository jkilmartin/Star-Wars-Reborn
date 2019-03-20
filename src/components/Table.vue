<template>
    <div >
        <!-- the classes on this table are from bootstrap, giving it different style types -->
        <table class="table container table-striped table-bordered table-hover table-dark">
            <tbody>
                <tr>
                    <!-- 'th' tags are for the information header, 'td is for the description' -->
                    <th scope="col">Eye Colour</th>
                    <td></td>
                </tr>

                <tr>
                    <th scope="col"></th>
                    <td></td>
                </tr>

                <tr>
                    <th scope="col"></th>
                    <td></td>
                </tr>

                <tr>
                    <th scope="col"></th>
                    <td></td>
                </tr>

                <tr>
                    <th scope="col"></th>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Table"
}
</script>

<style>
.table {
    width: 50%;
}

</style>