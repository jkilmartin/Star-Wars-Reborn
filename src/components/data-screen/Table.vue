<template>
  <div>
    <!-- the classes on this table are from bootstrap, giving it different style types -->
    <table class="table container table-striped table-bordered table-hover table-dark">
      <tbody v-for="obj in data" v-bind:key="obj.name">
        <tr v-for="(value, key) in obj" v-bind:key="key">
          <!-- 'th' tags are for the information header, 'td is for the description' -->
          <th scope="row">{{snakeToTitleCase(key)}}</th>
          <td scope="col">{{value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["data"],
  methods: {
    snakeToTitleCase: function(s) {
      let camel = s.replace(/(_\w)/g, function(m) {
        return m[1].toUpperCase();
      });
      let title = camel.replace( /([A-Z])/g, " $1" )
      let finalTitle = title.charAt(0).toUpperCase() + title.slice(1);
      return finalTitle;
    }
  }
};
</script>

<style>
.table {
  width: 50%;
  margin-top: 3%;
}

td {
  text-transform: capitalize;
}
</style>