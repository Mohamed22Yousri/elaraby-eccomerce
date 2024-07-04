<template>
  <div class="menu_drawer">
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :width="windowWidth <= 767 ? windowWidth / 2 : 370"
      class="px-5 pt-0 cart-drawer"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="pl-0 pr-2 d-flex justify-space-between align-center"
          style="font-size: 18px; font-weight: 700"
          >Menu
          <v-icon @click="drawer = false" style="cursor: pointer"
            >mdi-close</v-icon
          >
        </v-card-title>
        <v-list>
          <v-list-item
            class="px-0"
            v-for="cat in categories"
            :key="cat.title"
            @click="
              $router.push({
                name: 'products_category',
                params: {
                  category: cat.Route,
                  title: cat.title,
                },
              })
            "
          >
            <v-list-item-title>{{ cat.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { productsModule } from "@/stores/Prodcuts";
import { mapState } from "pinia";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  inject: ["Emitter"],
  mounted() {
    this.Emitter.on("openMenu", () => {
      this.drawer = !this.drawer;
    });
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  props: ["windowWidth"],
};
</script>
