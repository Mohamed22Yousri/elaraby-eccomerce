<template>
  <div class="quick-view mt-16">
    <v-dialog v-model="dialog" max-width="700" max-height="500">
      <v-icon
        @click="dialog = false"
        style="
          background-color: black;
          position: absolute;
          top: -14px;
          right: -14px;
          color: white;
          font-size: 18px;
          z-index: 10;
          padding: 13px;
          cursor: pointer;
        "
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content">
        <v-container fluid class="bg-white pt-10">
          <v-row>
            <v-col :cols="12" md="7">
              <img
                :src="tab ? tab : product.thumbnail"
                alt=""
                class="w-100"
                height="400"
              />
              <v-tabs center-active height="220px" class="mt-10" v-model="tab">
                <v-tab v-for="(img, i) in product.images" :key="i" :value="img">
                  <img width="70" height="80" :src="img" alt="" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col :cols="12" md="5" class="pt-0 pl-6 mt-5 mt-md-0">
              <v-card elevation="0">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 16px;
                    color: #7c7c7c;
                    font-weight: 700;
                    white-space: pre-wrap;
                  "
                  >({{ product.title }}) Sample - {{ product.description }} For
                  Sale
                </v-card-title>
                <div class="rating d-flex align-center" style="gap: 10px">
                  <v-rating
                    class="pt-0"
                    v-model="product.rating"
                    half-increments
                    size="x-small"
                    density="cobact"
                    color="yellow-darken-2"
                  ></v-rating>
                  <span style="font-size: 14px; color: #7c7c7c"
                    >Stock: {{ product.stock }}</span
                  >
                </div>
                <v-card-text
                  class="px-0"
                  style="font-size: 14px; color: #7c7c7c"
                >
                  {{ product.description }}
                </v-card-text>
                <v-card-text
                  class="px-0"
                  style="font-size: 14px; color: #7c7c7c"
                >
                  Brand: {{ product.brand }}
                </v-card-text>
                <v-card-text
                  class="px-0"
                  style="font-size: 14px; color: #7c7c7c"
                >
                  Availabilty:
                  {{ product.stock > 0 ? "In Stock" : "Out Stock" }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ product.price }}</del> from
                  <span style="font-size: 16px; font-weight: 900">
                    ${{
                      Math.ceil(
                        product.price -
                          (product.price * product.discountPercentage) / 100
                      )
                    }}</span
                  >
                </v-card-text>
                <v-card-text class="pl-0 pt-0"> Quantity </v-card-text>
                <div
                  class="count px-1"
                  style="
                    border-radius: 30px;
                    border: 1px solid #7c7c7c;
                    width: fit-content;
                  "
                >
                  <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="
                      outline: none;
                      border: none;
                      width: 60px;
                      font-size: 13px;
                    "
                    value="1"
                    v-model="quantity"
                    class="text-center py-3"
                  />
                  <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
                </div>
                <v-action class="w-100 px-0">
                  <v-card-text class="pl-0">
                    Subtotal: ${{
                      Math.ceil(
                        product.price -
                          (product.price * product.discountPercentage) / 100
                      ) * quantity
                    }}
                  </v-card-text>
                  <v-btn
                    @click="addTocart(product)"
                    class="text-white w-75 mt-7"
                    style="
                      background-color: black;
                      text-transform: none;
                      border-radius: 30px;
                    "
                    height="50"
                    density="compact"
                    variant="outlined"
                    :loading="btnLoading"
                    >Add To Cart</v-btn
                  >
                </v-action>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { carStore } from "@/stores/Cart";
import { mapActions } from "pinia";
export default {
  methods: {
    ...mapActions(carStore, ["getcartItems", "addItem"]),
    addTocart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.dialog = false;
      }, 1000);
    },
  },
  inject: ["Emitter"],

  data: () => ({
    tab: "",
    quantity: 1,
    dialog: false,
    product: "",
    btnLoading: false,
  }),
  mounted() {
    this.Emitter.on("openQucikView", (data) => {
      this.dialog = true;
      this.product = data;
      this.getcartItems();
    });
  },
};
</script>

<style lang="scss">
.content {
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
    background-color: rgb(200, 200, 200);
  }
}
</style>
