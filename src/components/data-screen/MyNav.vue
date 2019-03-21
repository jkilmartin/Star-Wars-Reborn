<template>
  <div class="container text-center">
    <button :value="0" @click="changeImg" type="button" class="btn btn-danger btn-lg">People</button>
    <button :value="1" @click="changeImg" type="button" class="btn btn-danger btn-lg">Starships</button>
    <button :value="2" @click="changeImg" type="button" class="btn btn-danger btn-lg">Planets</button>
    <div class="form-group has-search">
      <span class="fa fa-search form-control-feedback"></span>
      <input type="text" class="form-control" placeholder="Search">
    </div>

    <div>
      <DynamicImage :data="data"/>
      <!-- <img class="people-header" src="../assets/final/people-header.jpg" alt="">
      <img class="hidden" src="../assets/final/planets-header.jpg" alt="">
      <img class="hidden" src="../assets/final/ships-header.jpg" alt="">-->
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
      data: "https://i.ibb.co/XyXWfjF/people-header.jpg",
      imgArray: [
        "https://i.ibb.co/XyXWfjF/people-header.jpg",
        "https://i.ibb.co/z5CkCNC/ships-header.jpg",
        "https://i.ibb.co/w6fGGcK/planets-header.jpg"
      ]
    };
  },
  created: function() {
    console.log(this.imgValue)
    this.data = this.imgArray[this.imgValue];
  },
  methods: {
    changeImg: function(evt) {
      this.data = this.imgArray[evt.target.value];
      // this.data = this.props[key];
      // console.log(this.data);
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

.has-search {
  margin-left: 20%;
  margin-right: 20%;
}

.hidden {
  display: none;
}
</style>
