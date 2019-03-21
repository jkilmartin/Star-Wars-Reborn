<template>
    <div>
        <img class="header-image" v-bind:src="this.imgsrc">
    </div>
</template>

<script>
    export default {
        name: "DynamicImage",
        props: ["imgsrc"],
        methods: {
            changeSource: function(src) {
                
            }
        }
        watch: {
        imgsrc: function(src) {
            this.changeSource(src);
        }
    }
}
</script>

<style scoped>
    .header-img {
        width: 100vw;
    }
</style>
