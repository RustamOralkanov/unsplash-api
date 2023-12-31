import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ImagePage from "../views/ImagePage.vue";
import FavoritePage from "../views/FavoritePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/image/:id?",
      name: "image",
      component: ImagePage,
    },
    {
      path: "/favorite",
      name: "favorite",
      component: FavoritePage,
    },
  ],
});

export default router;
