<template>
 <div class="home-bg-img">
   <div>
    <img 
      @mouseover="moonImage = true" 
      @mouseleave="moonImage = false"
      class="big-moon-img" 
      src="../assets/final/big-moon.png"
      >
      <transition 
        name="image-transition" 
        mode="out-in"
      >
        <img 
            v-show="moonImage" 
            class="big-moon-img full" 
            mode="out-in" 
            src="../assets/final/big-moon-full.png"
        >
      </transition>
   </div>
   <div class="characters">
     <div class="row">
       <div class="col-12 full-width">
          <img 
            @mouseover="lukeImage = true" 
            @mouseleave="lukeImage = false"
            class="luke-img" 
            src="../assets/final/luke.png"
            >
            <transition 
              name="image-transition" 
              mode="out-in"
            >
              <img 
                  v-show="lukeImage" 
                  class="luke-img full" 
                  mode="out-in" 
                  src="../assets/final/luke-full.png"
              >
            </transition>
          <img 
            @mouseover="yodaImage = true" 
            @mouseleave="yodaImage = false"
            class="yoda-img" 
            src="../assets/final/yoda.png"
            >
            <transition 
              name="image-transition" 
              mode="out-in"
            >
              <img 
                  v-show="yodaImage" 
                  class="yoda-img full" 
                  mode="out-in" 
                  src="../assets/final/yoda-full.png"
              >
            </transition>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
    moonImage: false,
    lukeImage: false,
    yodaImage: false,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-bg-img {
    background-image: url(../assets/final/home-bg.jpg);
    height: 1300px;
    width: 100vw;
  }

  .image-transition-enter-active, .image-transition-leave-active {
  transition: opacity .5s ease-in-out, transform .5s ease-in-out;
  }

  .image-transition-enter, .image-transition-leave-to {
    opacity: 0;
  }

  .characters {
    position: absolute;
    bottom: -80px;
  }

  .full-width {
    width: 100vw;
  }

  /*Image classes for z-index and position  */
  .big-moon-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .big-moon-img.full {
    z-index: 1;
  }

  .luke-img {
    position: absolute;
    z-index: 2;
    left: 20%;
  }

  .luke-img.full {
    z-index: 1;
  }

  .yoda-img {
    position: absolute;
    z-index: 2;
    left: 30%;
    top: 80px;
  }

  .yoda-img.full {
    z-index: 1;
  }


</style>
