import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/products/:category/:title",
    name: "products_category",
    component: () => import("@/views/ProductsCategories.vue"),
    meta: {
      title: "Categories",
    },
  },
  {
    path: "/products/products-details/:productId",
    name: "products_details",
    component: () => import("@/views/ProductsDetails"),
    meta: {
      title: "products",
    },
  },
  {
    path: "/cart-page",
    name: "cart_page",
    component: () => import("@/views/CartPage"),
    meta: {
      title: "View Cart",
    },
  },
  {
    path: "/Check-out",
    name: "Check_out",
    component: () => import("@/views/CheckOut"),
    meta: {
      title: "Check Out",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});
router.beforeEach((to) => {
  document.title = to.meta.title;
});

export default router;
