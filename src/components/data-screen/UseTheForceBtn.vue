<template>
  <div class="use-the-force">
    <button class="" @click.prevent="playSound('../../assets/audio/theme-[AudioTrimmer.com].mp3')">Beam me up Scottsdale</button>
  </div>
</template>

<script>
export default {
  name: "UseTheForceBtn",
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
};
</script>

<style scoped>
.use-the-force {
    position: relative;
    text-align: center;
}
</style>
