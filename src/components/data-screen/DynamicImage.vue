<template>
    <div>
        <img class="header-image" :src="data">
    </div>
</template>

<script>
    export default {
        name: "DynamicImage",
        props: ["data"],
        // created: function() {
        //     let pathToImg = require.context(this.data, true);
        // },
        // data: {
        //     function() {
        //         return{
        //             data: require.context(this.data, true)
        //         }
        //     }
        // }
        // data: function() {
        //     return {
        //         srcsyntax: require(imgsrc)
        //     }
        // }
    //     data: function() {
    //         return {
    //             imgsrc: require("../../assets/final/people-header.jpg")
    //         }
    // }

    //     methods: {
    //         changeSource: function(data) {
                
    //         }
    //     },
    //     watch: {
    //         data: function(data) {
    //             this.changeSource(data);
    //     }
    // }
}
</script>

<style scoped>
    .header-img {
        width: 100vw;
    }
</style>
