<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-4 home-btn">
        <router-link v-bind:to="'/'">
          <i class="far fa-caret-square-left"></i>
        </router-link>
      </div>
      <div class="col-4 text-center">
        <h1>Search...</h1>
      </div>
      <div class="col-4">
      </div>
    </div>
    <!-- <button type="button" class="btn btn-danger btn-lg"> -->
    <div class="top-buttons">
      <button
        :value="0"
        :class="{buttonActive: buttonsAreActive[0]}"
        @click="handleCategory"
        type="button"
        class="btn btn-danger btn-lg"
      >People</button>
      <button
        :value="1"
        :class="{buttonActive: buttonsAreActive[1]}"
        @click="handleCategory"
        type="button"
        class="btn btn-danger btn-lg"
      >Starships</button>
      <button
        :value="2"
        :class="{buttonActive: buttonsAreActive[2]}"
        @click="handleCategory"
        type="button"
        class="btn btn-danger btn-lg"
      >Planets</button>
    </div>
    <form @submit.prevent="handleSearch">
      <div class="form-group">
        <input
          type="search"
          class="form-control"
          placeholder="Search"
          v-model="searchInput"
          ref="search"
        >
      </div>
    </form>

    <div>
      <DynamicImage :data="data"/>
    </div>
  </div>
</template>

<script>
import DynamicImage from "./DynamicImage.vue";
export default {
  name: "MyNav",
  components: {
    DynamicImage
  },
  props: ["imgValue"],
  data: function() {
    return {
      data: "https://i.ibb.co/1Z0sG8j/people-header.jpg",
      imgArray: [
        "https://i.ibb.co/1Z0sG8j/people-header.jpg",
        "https://i.ibb.co/z5CkCNC/ships-header.jpg",
        "https://i.ibb.co/w6fGGcK/planets-header.jpg"
      ],
      category: 0,
      searchInput: "",
      buttonsAreActive: [true, false, false]
    };
  },
  created: function() {
    this.data = this.imgArray[this.imgValue];
    if (this.imgValue == 0) {
        this.category = "people";
        this.buttonsAreActive = [true, false, false];
      } else if (this.imgValue == 1) {
        this.category = "starships";
        this.buttonsAreActive = [false, true, false];
      } else {
        this.category = "planets";
        this.buttonsAreActive = [false, false, true];
      }
  },
  methods: {
    handleCategory: function(evt) {
      let val = evt.target.value;
      this.data = this.imgArray[val];
      if (val == 0) {
        this.category = "people";
        this.buttonsAreActive = [true, false, false];
      } else if (val == 1) {
        this.category = "starships";
        this.buttonsAreActive = [false, true, false];
      } else {
        this.category = "planets";
        this.buttonsAreActive = [false, false, true];
      }
      // Need to use a ref on a DOM element to target it in script
      this.$refs.search.focus();
      // Set table display to none here until something is searched
    },
    handleSearch: function() {
      this.$parent.getData(this.category, this.searchInput);
    }
  }
};
</script>

<style scoped>
button,
h1 {
  font-family: "Arial Black";
  font-size: 40px;
}
h1 {
  color: #dc3545;
  -webkit-text-stroke: #fff 0.6px;
}
button {
  margin: 20px;
  box-shadow: 7px 10px 5px -5px rgba(0, 0, 0, 0.17);
}

.top-buttons {
  margin-bottom: 19px;
}
.has-search {
  margin-left: 20%;
  margin-right: 20%;
}

.form-control {
  font-size: 32px;
  color: #222;
  margin: 0 auto;
  width: 70%;
}

.form-control::placeholder {
  color: #b2b2b2;
}

.hidden {
  display: none;
}

button.buttonActive {
  border: white 1px solid;
}

a {
  color: white;
}
a:hover {
  text-decoration: none;
}

.home-btn {
  color: white;
  font-size: 40px;
  text-align: left;
}
i:hover {
  color: #dc3545;
}
</style>
