<template>
  <div class="secondary-page-bg-img">
    <MyNav class="my-nav" :imgValue="imgValue" />
    <div :class="{active: spinnerIsActive}" class="spinner-grow text-danger loading" style="width: 60px; height: 60px;" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <Table v-show="tableIsActive" :data="data" />
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
      spinnerIsActive: true,
      tableIsActive: false
    };
  },
  created: function() {
    this.getInitialData();
    this.getInitialImage();
  },
  methods: {
    //handles initial image based on home page click
    getInitialImage: function() {
      if (this.$route.params.imgValue) {
        //targets router and gets param of imgValue, binds that to local component data and sent to MyNav
        this.imgValue = this.$route.params.imgValue;
      }
    },
    //handles initial data based on home page click
    getInitialData: function() {
      //handles table and loading active states
      this.spinnerIsActive = true;
      this.tableIsActive = false;
      //targets router and gets param of urlTag, binds that to local component data
      if (this.$route.params.urlTag) {
        this.urlTag = this.$route.params.urlTag;
        let array = [];
        //gets api data based on url tag and filters the data based on category
        this.$http
          .get("https://swapi.co/api/" + this.urlTag + "?format=json")
          .then(function(data) {
            this.spinnerIsActive = false;
            //.body required from slightly strange api data return
            array.push(data.body);
            //RegEx checks for category
            if (/planets/i.test(this.urlTag)) {
              this.data = this.getPlanetsAttributes(array);
            } else if (/people/i.test(this.urlTag)) {
              this.data = this.getPeopleAttributes(array);
            } else if (/starships/i.test(this.urlTag)) {
              this.data = this.getStarshipsAttributes(array);
            }
            this.tableIsActive = true;
          });
      } else {
        let array = [];
        //makes default data to lukas von skywalk incase user arrives at page without a click
        this.$http
          .get("https://swapi.co/api/people/1/?format=json")
          .then(function(data) {
            this.spinnerIsActive = false;
            array.push(data.body);
            this.data = this.getPeopleAttributes(array);
            this.tableIsActive = true;
          });
      }
    },
    /** 
      * handles search requests
      * @param {number} searchCategory
      * @param {string} searchInput
      */
    getData: function(searchCategory, searchInput) {
      this.spinnerIsActive = true;
      this.tableIsActive = false;
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
          this.spinnerIsActive = false;
          this.tableIsActive = true;
        });
    },
    /** 
      * filters retrieved data into objects with only desired fields
      * @param {number} searchCategory
      * @param {array} dataArray
    */
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
    /** 
      * takes array of returned objects from api. filters people to desired fields 
      * @param {number} searchCategory
      * @returns {array} filteredList
    */
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
    /** 
      * takes array of returned objects from api. filters people to desired fields 
      * @param {number} searchCategory
      * @returns {array} filteredList
    */
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
    /** 
      * takes array of returned objects from api. filters people to desired fields 
      * @param {number} searchCategory
      * @returns {array} filteredList
    */
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
  min-height: 100vh;
  width: 100vw;
  }

  .my-nav {
    padding-top: 2%;
  }

  .spinner-grow {
    display: none;
    margin: 3% auto;
  }

  .spinner-grow.active {
    display: block;
  }

</style>
