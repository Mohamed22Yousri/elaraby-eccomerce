<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer :windowWidth="windowWidth" />
      <MenuDrawerVue :windowWidth="windowWidth" />
      <v-main
        :style="`padding-top:  ${
          $route.name == 'Check_out'
            ? '0px'
            : windowWidth <= 990
            ? '60px'
            : '160px'
        }`"
      >
        <slot></slot>
      </v-main>
      <AppNav v-show="windowWidth > 990" v-if="$route.name != 'Check_out'" />
      <ResponsiveNav
        v-show="windowWidth <= 990"
        v-if="$route.name != 'Check_out'"
      />
      <FixedNav v-show="windowWidth > 990" v-if="$route.name != 'Check_out'" />
      <AppFooter v-if="$route.name != 'Check_out'" />
    </v-layout>
  </div>
</template>

<script>
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import FixedNav from "@/components/gloal/FixedNav.vue";
import CartDrawer from "./CartDrawer.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
import MenuDrawerVue from "./MenuDrawer.vue";
export default {
  name: "AppLayout",
  data: () => ({
    drawer: false,
    windowWidth: 0,
  }),
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  components: {
    AppFooter,
    AppNav,
    CartDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawerVue,
  },
};
</script>
