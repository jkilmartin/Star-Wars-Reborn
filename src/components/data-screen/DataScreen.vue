<template>
  <div class="secondary-page-bg-img">
    <MyNav :imgValue="imgValue" />
    <div :show="active" class="spinner-grow text-danger loading" style="width: 60px; height: 60px;" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <Table :data="data" />
    <!-- <ul v-for="obj in data" v-bind:key="obj">
      <li>{{obj.name}}</li>
      <li>{{obj.terrain}}</li>
    </ul>-->
  </div>
</template>

<script>
import pick from "lodash/pick";
import MyNav from "./MyNav.vue";
import Table from "./Table.vue";
export default {
  name: "DataScreen",
  components: {
    MyNav,
    Table
  },
  data: function() {
    return {
      data: [],
      urlTag: "",
      imgValue: 0, 
      active: false
    };
  },
  created: function() {
    this.getInitialData();
    this.getInitialImage();
  },
  methods: {
    getInitialImage: function() {
      if (this.$route.params.imgValue) {
        this.imgValue = this.$route.params.imgValue;
      }
    },
    getInitialData: function() {
      if (this.$route.params.urlTag) {
        this.active = true;
        this.urlTag = this.$route.params.urlTag;
        let array = [];
        this.$http
          .get("https://swapi.co/api/" + this.urlTag + "?format=json")
          .then(function(data) {
            array.push(data.body);
            if (/planets/i.test(this.urlTag)) {
              this.data = this.getPlanetsAttributes(array);
            } else if (/people/i.test(this.urlTag)) {
              this.data = this.getPeopleAttributes(array);
            } else if (/starships/i.test(this.urlTag)) {
              this.data = this.getStarshipsAttributes(array);
            }
            this.active = false;
          });
      } else {
        let array = [];
        this.$http
          .get("https://swapi.co/api/people/1/?format=json")
          .then(function(data) {
            array.push(data.body);
            this.data = this.getPeopleAttributes(array);
          });
      }
    },
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
        filteredList.push(
          pick(person, [
            "name",
            "gender",
            "height",
            "mass",
            "hair_color",
            "skin_color",
            "eye_color",
            "birth_year"
          ])
        );
      });
      return filteredList;
    },
    getStarshipsAttributes: function(dataArray) {
      let filteredList = [];
      $.each(dataArray, function(i, starship) {
        filteredList.push(
          pick(starship, [
            "name",
            "model",
            "cost_in_credits",
            "length",
            "max_atmosphering_speed",
            "starship_class"
          ])
        );
      });
      return filteredList;
    },
    getPlanetsAttributes: function(dataArray) {
      let filteredList = [];
      $.each(dataArray, function(i, planet) {
        filteredList.push(
          pick(planet, [
            "name",
            "rotation_period",
            "orbital_period",
            "diameter",
            "climate",
            "gravity",
            "surface_water",
            "terrain",
            "population"
          ])
        );
      });
      return filteredList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.secondary-page-bg-img {
  background-image: url(../../assets/final/secondary-page.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 1300px;
  width: 100vw;}

  .loading {
    display: none;
  }

  .loading.active {
    display: block;
  }
</style>
