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
   <div class="container characters">
     <div class="row">
       <div class="col-12 release-date">
         <h1>March 34<sup>th</sup> 1956</h1>
       </div>
     </div>
     <div class="row sky-live-images">
       <div class="col-6">
          <img 
            @mouseover="smallMoonImage = true" 
            @mouseleave="smallMoonImage = false"
            class="character-img" 
            src="../assets/final/small-moon.png"
            >
            <transition 
              name="image-transition" 
              mode="out-in"
            >
              <img 
                  v-show="smallMoonImage" 
                  class="character-img full" 
                  mode="out-in" 
                  src="../assets/final/small-moon-full.png"
              >
            </transition>
       </div>
       <div class="col-6">
         <img 
            @mouseover="starshipFightersImage = true" 
            @mouseleave="starshipFightersImage = false"
            class="character-img" 
            src="../assets/final/starship-fighters.png"
            >
            <transition 
              name="image-transition" 
              mode="out-in"
            >
              <img 
                  v-show="starshipFightersImage" 
                  class="character-img full" 
                  mode="out-in" 
                  src="../assets/final/starship-fighters-full.png"
              >
            </transition>
       </div>
     </div>
     <div class="row">
       <div class="col-3">
          <img 
            @mouseover="lukeImage = true" 
            @mouseleave="lukeImage = false"
            class="character-img" 
            src="../assets/final/luke.png"
            >
            <transition 
              name="image-transition" 
              mode="out-in"
            >
              <img 
                  v-show="lukeImage" 
                  class="character-img full" 
                  mode="out-in" 
                  src="../assets/final/luke-full.png"
              >
            </transition>
       </div>
       <div class="col-3">
          <img 
            @mouseover="yodaImage = true" 
            @mouseleave="yodaImage = false"
            class="character-img" 
            src="../assets/final/yoda.png"
            >
            <transition 
              name="image-transition" 
              mode="out-in"
            >
              <img 
                  v-show="yodaImage" 
                  class="character-img full" 
                  mode="out-in" 
                  src="../assets/final/yoda-full.png"
              >
            </transition>
       </div>
       <div class="col-3">
          <img 
            @mouseover="leiaImage = true" 
            @mouseleave="leiaImage = false"
            class="character-img" 
            src="../assets/final/leia.png"
            >
            <transition 
              name="image-transition" 
              mode="out-in"
            >
              <img 
                  v-show="leiaImage" 
                  class="character-img full" 
                  mode="out-in" 
                  src="../assets/final/leia-full.png"
              >
            </transition>
       </div>
       <div class="col-3">
          <img 
            @mouseover="darthVaderImage = true" 
            @mouseleave="darthVaderImage = false"
            class="character-img" 
            src="../assets/final/darthvader.png"
            >
            <transition 
              name="image-transition" 
              mode="out-in"
            >
              <img 
                  v-show="darthVaderImage" 
                  class="character-img full" 
                  mode="out-in" 
                  src="../assets/final/darthvader-full.png"
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
    leiaImage: false,
    darthVaderImage: false,
    smallMoonImage: false,
    starshipFightersImage: false,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-bg-img {
    background-image: url(../assets/final/home-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
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
    bottom: 0px;
    left: 20%;
  }

  .sky-live-images {
    position: relative;
    bottom: 180px;
    left: 12%;
  }

  .release-date {
    position: relative;
    text-align: center;
    text-transform: uppercase;
  }

  .release-date h1 {
    font-size: 32px;
    font-family: 'Anton', sans-serif;
    color: #222;
    position: relative;
    bottom: 40px;
    text-align: center;
    text-transform: uppercase;
  }

  /*Image classes for z-index and position  */
  .big-moon-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }

  .big-moon-img.full {
    z-index: 1;
    cursor: pointer;
  }

  .character-img {
    position: absolute;
    z-index: 2;
    cursor: pointer;
  }

  .character-img.full {
    z-index: 1;
    cursor: pointer;
  }

</style>
