<template>
    <div class="secondary-page-bg-img">
        <MyNav />
        <Table />
    </div>
</template>

<script>
    import MyNav from "./MyNav.vue"
    import Table from "./Table.vue"

    export default {
        name: "SecondaryPage",
        components: {
            MyNav,
            Table
        }
}
</script>

<style>
    body {
        background-image: url(../assets/final/secondary-page.png);
        background-size: cover;
    }
</style>