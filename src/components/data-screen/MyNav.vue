<template>
  <div class="container text-center">
    <button type="button" class="btn btn-danger btn-lg ">People</button>
    <button type="button" class="btn btn-danger btn-lg">Starships</button>
    <button type="button" class="btn btn-danger btn-lg">Planets</button>
    <div class="form-group has-search">
      <span class="fa fa-search form-control-feedback"></span>
      <input type="text" class="form-control" placeholder="Search" />
    </div>

    <div>
      <DynamicImage :data="imgsrc"/>
      <!-- <img class="people-header" src="../assets/final/people-header.jpg" alt="">
      <img class="hidden" src="../assets/final/planets-header.jpg" alt="">
      <img class="hidden" src="../assets/final/ships-header.jpg" alt=""> -->
    </div>
  </div>
</template>

<script>
    import DynamicImage from "./DynamicImage.vue"
    export default {
        name: "MyNav",
        components: {
          DynamicImage
        },
        data: function(){
          return {
            //require needed to tell webpack to handle as a strong dependency
                imgsrc: require("../../assets/final/people-header.jpg")

          }
        }
    }
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
