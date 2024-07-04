<template>
  <div class="drawer">
    <v-navigation-drawer
      location="right"
      temporary
      v-model="drawer"
      :width="windowWidth <= 767 ? windowWidth / 2 : 370"
      class="pr-0 cart-drawer"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="pl-0 pr-2 d-flex justify-space-between align-center"
          style="font-size: 18px; font-weight: 700"
          >Shopping Cart
          <v-icon @click="drawer = false" style="cursor: pointer"
            >mdi-close</v-icon
          >
        </v-card-title>
        <v-card-text style="color: #979797" class="px-0 py-1 pb-5"
          >{{ cartItem.length }} items</v-card-text
        >
        <v-card-text class="px-0" style="color: #979797" v-if="!cartItem.length"
          >Free Shipping For all orders over $1000.00</v-card-text
        >
        <v-card-text
          v-if="!cartItem.length"
          style="color: #979797"
          class="text-center"
          >Your Cart is empty</v-card-text
        >
        <div
          class="prog-parent mr-2"
          style="position: relative"
          v-if="cartItem.length"
        >
          <svg
            class="icon-shipping-truck"
            viewBox="0 0 40.55 24"
            width="30"
            :fill="
              parseInt((CalcTotalPrice / 10000) * 100) < 50
                ? '#F44336'
                : parseInt((CalcTotalPrice / 10000) * 100) > 50 &&
                  parseInt((CalcTotalPrice / 10000) * 100) < 100
                ? '#ff9800'
                : '#4CAF50'
            "
            :style="`position: absolute;
              bottom: 50%;
              z-index: 1;
              left: calc(${
                parseInt((CalcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((CalcTotalPrice / 10000) * 100)
                  : 100
              }% - 30px);
              transition: 0.15s all ease-in-out;`"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="truck-body"
                  d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                ></path>
                <path
                  class="truck-body"
                  d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                ></path>
                <path
                  class="wheel"
                  fill="white"
                  d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                ></path>
                <path
                  class="wheel"
                  fill="white"
                  d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                ></path>
              </g>
            </g>
          </svg>
          <v-progress-linear
            :model-value="
              parseInt((CalcTotalPrice / 10000) * 100) <= 100
                ? parseInt((CalcTotalPrice / 10000) * 100)
                : 100
            "
            striped
            height="10"
            :color="
              parseInt((CalcTotalPrice / 10000) * 100) < 50
                ? 'red'
                : parseInt((CalcTotalPrice / 10000) * 100) > 50 &&
                  parseInt((CalcTotalPrice / 10000) * 100) < 100
                ? 'orange'
                : 'green'
            "
          ></v-progress-linear>
        </div>
        <v-card-text
          class="px-0"
          style="color: #979797"
          v-if="cartItem.length && 10000 - CalcTotalPrice > 0"
        >
          Only ${{ 10000 - CalcTotalPrice }} away From Free
          Shipping</v-card-text
        >
        <v-card-text
          class="px-0"
          style="color: #979797"
          v-if="cartItem.length && 10000 - CalcTotalPrice <= 0"
        >
          Your order now is included Free Shiping
        </v-card-text>
        <v-card-actions v-if="!cartItem.length">
          <v-btn
            @click="drawer = fasle"
            class="w-100 mb-5"
            variant="outlined"
            density="compact"
            style="
              border-radius: 30px;
              height: 45px;
              border-color: #c7c7c7;
              text-transform: none;
            "
            >Continue Shopping</v-btn
          >
        </v-card-actions>
      </v-card>

      <v-card
        elevation="0"
        class="pa-0 mt-5 items-card"
        v-if="cartItem.length"
        max-height="270"
        style="overflow-y: auto"
      >
        <v-container class="px-0">
          <v-row v-for="item in cartItem" :key="item.id" class="align-center">
            <v-col :cols="12" sm="5">
              <img class="w-100" :src="item.thumbnail" alt="" />
            </v-col>
            <v-col :cols="12" sm="7">
              <v-card-title
                class="px-0"
                style="font-size: 14px; white-space: pre-wrap"
                >{{ item.title }} Sample - {{ item.category }}</v-card-title
              >
              <v-card-text class="px-0" style="color: #979797">
                category: {{ item.category }}
              </v-card-text>
              <v-card-text class="px-0 pt-2">
                ${{
                  Math.ceil(
                    item.price - (item.price * item.discountPercentage) / 100
                  ) * item.quantity
                }}
              </v-card-text>
              <div
                class="item-footer d-flex align-center justify-space-between"
              >
                <div
                  class="count px-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid #7c7c7c;
                    width: fit-content;
                  "
                >
                  <v-icon
                    style="color: #7c7c7c"
                    size="18"
                    @click="item.quantity > 1 ? item.quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="
                      outline: none;
                      border: none;
                      width: 40px;
                      font-size: 12px;
                    "
                    value="1"
                    v-model="item.quantity"
                    class="text-center py-3"
                  />
                  <v-icon
                    style="color: #7c7c7c"
                    size="18"
                    @click="item.quantity++"
                    >mdi-plus</v-icon
                  >
                </div>
                <v-icon @click="delteItems(item.id)" style="cursor: pointer"
                  >mdi-close</v-icon
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card class="mt-5 pa-0" elevation="0" v-if="cartItem.length">
        <v-card-actions
          class="flex-column align-center justify-center"
          style="gap: 10px"
        >
          <v-btn
            @click="$router.push({ name: 'Check_out' })"
            class="w-100"
            height="45"
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            variant="elevated"
            density="compact"
            elevation="0"
            color="blue"
            >Check Out</v-btn
          >
          <v-btn
            @click="$router.push({ name: 'cart_page' })"
            class="w-100"
            height="45"
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: rgb(199, 199, 199);
            "
            variant="outlined"
            density="compact"
            >View Cart</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { carStore } from "@/stores/Cart";
import { mapActions, mapState } from "pinia";
export default {
  computed: {
    ...mapState(carStore, ["cartItem"]),
    CalcTotalPrice() {
      let total = 0;
      this.cartItem.forEach((product) => {
        total +=
          Math.ceil(
            product.price - (product.price * product.discountPercentage) / 100
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(carStore, ["addItem", "delteItems"]),
    addTocart(item) {
      item.quantity = this.quantity;
      this.addItem(item);
    },
  },
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
  },
  props: ["windowWidth"],
};
</script>

<style lang="scss">
.items-card {
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    width: 7px;
    background-color: red;
    background-color: rgb(149, 149, 149);
  }
  &::-webkit-scrollbar-track {
    width: 7px;
    background-color: rgb(154, 154, 154);
  }
  // media query
  @media (max-width: 580px) {
    .drawer {
      .v-card-text {
        font-size: 12px;
      }
      button {
        height: 30px !important;
        font-size: 11px !important;
      }
    }
  }
}
</style>
