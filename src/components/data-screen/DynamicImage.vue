<template>
  <div>
    <transition name="header-transition" mode="out-in">
        <img class="header-image" :src="data"> 
    </transition> 
  </div>
</template>

<script>
export default {
  name: "DynamicImage",
  props: ["data"]
};
</script>

<style scoped>
.header-image {
  margin-top: 30px;
  width: 100%;
  transition: opacity 2s linear;
}

.header-transition-enter-active,
.header-transition-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.header-transition-enter,
.header-transition-leave-to {
  opacity: 0;
}

</style>
