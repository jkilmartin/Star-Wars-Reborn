<template>
  <div>
    <ul v-for="obj in data" v-bind:key="obj">
      <li>{{obj.name}}</li>
      <li>{{obj.terrain}}</li>
    </ul>
  </div>
</template>

<script>
import pick from "lodash/pick";
export default {
  name: "GetData",
  data: {
      data: []
  },
  created: function() {
    this.getData("planets", "ald");
  },
  methods: {
    getData: function(searchCategory, searchInput) {
      this.$http
        .get(
          "https://swapi.co/api/" +
            searchCategory +
            "/?search=" +
            searchInput +
            "&format=json"
        )
        .then(function(data) {
          this.filterData(searchCategory, data.body.results);
          console.log(this.data);
        });
    },
    filterData: function(searchCategory, dataArray) {
      switch (searchCategory) {
        case "people":
          this.data = this.getPeopleAttributes(dataArray);
          break;
        case "starships":
          this.data = this.getStarshipsAttributes(dataArray);
          break;
        case "planets":
          this.data = this.getPlanetsAttributes(dataArray);
          break;
      }
    },
    getPeopleAttributes: function(dataArray) {
      let filteredList = [];
      $.each(dataArray, function(i, person) {
        filteredList.push(pick((person), [
          'name',
          'gender',
          'height',
          'mass',
          'hair_color',
          'skin_color',
          'eye_color',
          'birth_year'
        ]));
      });
      return filteredList;
    },
    getStarshipsAttributes: function(dataArray) {
      let filteredList = [];
      $.each(dataArray, function(i, starship) {
        filteredList.push(pick((starship), [
          'name',
          'model',
          'cost_in_credits',
          'length',
          'max_atmosphering_speed',
          'starship_class'
        ]));
      });
      return filteredList;
    },
    getPlanetsAttributes: function(dataArray) {
      let filteredList = [];
      $.each(dataArray, function(i, planet) {
        filteredList.push(pick((planet), [
          'name',
          'rotation_period',
          'orbital_period',
          'diameter',
          'climate',
          'gravity',
          'surface_water',
          'terrain',
          'population'
        ]));
      });
      return filteredList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
