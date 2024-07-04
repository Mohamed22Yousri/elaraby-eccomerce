<template>
  <app-layout-vue>
    <router-view />
    <QuickView />
  </app-layout-vue>
</template>

<script>
import QuickView from "@/components/gloal/QuickView.vue";
import AppLayoutVue from "./components/gloal/AppLayout.vue";
export default {
  components: {
    AppLayoutVue,
    QuickView,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
