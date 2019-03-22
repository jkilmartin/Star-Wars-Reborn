<template>
  <div class="container text-center">
    <div class="top-buttons">
      <button :value="0" @click="handleCategory" type="button" class="btn btn-danger btn-lg">People</button>
      <button :value="1" @click="handleCategory" type="button" class="btn btn-danger btn-lg">Starships</button>
      <button :value="2" @click="handleCategory" type="button" class="btn btn-danger btn-lg">Planets</button>
    </div>
    <form @submit.prevent="handleSearch">
      <div class="form-group">
        <input type="search" class="form-control" placeholder="Search" v-model="searchInput" ref="search">
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
  props: ['imgValue'],
  data: function() {
    return {
      data: "https://i.ibb.co/1Z0sG8j/people-header.jpg",
      imgArray: [
        "https://i.ibb.co/1Z0sG8j/people-header.jpg",
        "https://i.ibb.co/z5CkCNC/ships-header.jpg",
        "https://i.ibb.co/w6fGGcK/planets-header.jpg"
      ],
      category: 0,
      searchInput: ''
    };
  },
  created: function() {
    this.data = this.imgArray[this.imgValue];
  },
  methods: {
    handleCategory: function(evt) {
      let val = evt.target.value;
      this.data = this.imgArray[val];
      if(val==0) {
        this.category = 'people';
      }else if(val==1) {
        this.category = 'starships';
      }else {
        this.category = 'planets';
      }
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
button {
  font-family: "Arial Black";
  font-size: 40px;
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
}

.form-control::placeholder {
  color: #b2b2b2;
}

.hidden {
  display: none;
}
</style>
