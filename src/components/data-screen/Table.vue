<template>
  <div>
    <!-- the classes on this table are from bootstrap, giving it different style types -->
    <table class="table container table-striped table-bordered table-hover table-dark">
      <tbody v-for="obj in data" v-bind:key="obj.name">
        <tr v-for="(value, key) in obj" v-bind:key="key">
          <!-- 'th' tags are for the information header, 'td is for the description' -->
          <th scope="row">{{key}}</th>
          <td scope="col">{{value}}</td>
        </tr>

        <!-- <tr>
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
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["data"]
  // created: function() {
  //   console.log(this.data);
  // }
};
</script>

<style>
.table {
  width: 50%;
}
</style>