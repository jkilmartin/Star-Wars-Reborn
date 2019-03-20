import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
// import Home from "./components/Home.vue";
import SecondaryPage from "./components/SecondaryPage.vue";


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  // { path: "/", component: Home},
  { path: "/", component: SecondaryPage},
  { path: "/secondarypage", component: SecondaryPage }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
