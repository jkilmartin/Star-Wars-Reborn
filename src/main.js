import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Home from "./components/Home.vue";
import DataScreen from "./components/data-screen/DataScreen.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: "/", component: Home },
  { path: '/dataScreen', component: DataScreen, name: "datascreen", props: true }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");