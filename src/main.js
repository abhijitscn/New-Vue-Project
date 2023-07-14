import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import HomeVue from "./container/Home.vue";

const vuetify = createVuetify({
  components,
  directives,
});

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
app.use(vuetify);
app.use(router);
app.mount("#app");
