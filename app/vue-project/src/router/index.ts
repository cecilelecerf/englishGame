import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component:()=> import("../view/HomeView.vue")
    },
    {
      path: "/rules",
      name: "rules",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ()=> import("../view/RulesView.vue"),
    },
    {
      path: "/versus",
      name: "versus",
      component: ()=> import("../view/VersusView.vue"),
    },
  ],
});

export default router;
