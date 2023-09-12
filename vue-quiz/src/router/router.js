import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/exercise",
      name: "Exercise",
      component: () => import("../views/ExerciseView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

// Quit Test if Page is Refreshed
let isPageRefreshed = false;

router.beforeEach((to, from, next) => {
  if (!isPageRefreshed) {
    isPageRefreshed = true;
    if (to.name === "Exercise") {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
