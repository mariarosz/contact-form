import { createRouter, createWebHistory } from "vue-router";
import ContactForm from "../views/ContactForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ContactForm,
    },
    {
      path: "/message-sent",
      name: "confirmation",
      component: () => import("../views/SendConfirmation.vue"),
    },
  ],
});

export default router;
