<template>
  <div>
    <img class="header-image" :src="data">
  </div>
</template>

<script>
export default {
  name: "DynamicImage",
  props: ["data"]
};
</script>

<style scoped>
.header-img {
  width: 100vw;
}
</style>
