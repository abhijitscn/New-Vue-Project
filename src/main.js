import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import HomeVue from "./container/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeVue,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
