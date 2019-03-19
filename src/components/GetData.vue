<template>
  <div></div>
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
      this.getData("people", "darth");
  },
  methods: {
    getData: function(searchCategory, searchInput) {
      this.$http
      .get("https://swapi.co/api/" + searchCategory + "/?search=" + searchInput + "&format=json")
      .then(function(data) {
        this.filterData(searchCategory, data.body.results);
        console.log(this.data);
      });
    },
    filterData: function(searchCategory, dataArray) {
        switch(searchCategory) {
            case "people":
                this.data = this.getPeopleAttributes(dataArray);
                break;
            case "starships":
                // this.getStarshipsAttributes(dataArray);
                break;
            case "planets":
                // this.getPlanetsAttributes(dataArray);
                break;
        }
    },
    getPeopleAttributes: function(dataArray) {
        let filteredList = [];
        $.each(dataArray, function(i, person){
            filteredList[i] = (({name, gender, height, mass, hair_color, skin_color, eye_color, birth_year}) => ({name, gender, height, mass, hair_color, skin_color, eye_color, birth_year}))(person);
        });
        return filteredList;
    },
    // getStarshipsAttributes: function(dataArray) {
    //     return {name: name, model: model, cost_in_credits: cost_in_credits, length: length, max_atmosphering_speed: max_atmosphering_speed, starship_class: starship_class} = dataArray;
    // },
    // getPlanetsAttributes: function(dataArray) {
    //     return {name: name, rotation_period: rotation_period, orbital_period: orbital_period, diameter: diameter, climate: climate, gravity: gravity, terrain: terrain, surface_water: surface_water, population: population} = dataArray;
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
