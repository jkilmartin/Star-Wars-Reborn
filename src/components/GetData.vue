<template>
  <div>
    <ul>
      <li v-for="obj in data" v-bind:key="obj.name"></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "GetData",
  data: function() {
    return {
      data: []
    };
  },
  created: function() {
    this.getData("starships", "star");
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
        filteredList[i] = (({
          name,
          gender,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year
        }) => ({
          name,
          gender,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year
        }))(person);
      });
      return filteredList;
    },
    getStarshipsAttributes: function(dataArray) {
      let filteredList = [];
      $.each(dataArray, function(i, starship) {
        filteredList[i] = (({
          name,
          model,
          cost_in_credits,
          length,
          max_atmosphering_speed,
          starship_class
        }) => ({
          name,
          model,
          cost_in_credits,
          length,
          max_atmosphering_speed,
          starship_class
        }))(starship);
      });
      return filteredList;
    },
    getPlanetsAttributes: function(dataArray) {
      let filteredList = [];
      $.each(dataArray, function(i, planet) {
        filteredList[i] = (({
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population
        }) => ({
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population
        }))(planet);
      });
      return filteredList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
