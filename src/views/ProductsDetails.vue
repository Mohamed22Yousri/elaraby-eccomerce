<template>
  <div class="products-details mt-16">
    <v-container>
      <v-row>
        <v-col :cols="12" md="7">
          <img
            :src="tab ? tab : signleProduct.thumbnail"
            alt=""
            class="w-100"
            height="450"
          />
          <v-tabs center-active height="220px" class="mt-10" v-model="tab">
            <v-tab
              v-for="(img, i) in signleProduct.images"
              :key="i"
              :value="img"
            >
              <img width="100" height="100" :src="img" alt="" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col :cols="12" md="5" class="pt-0 pl-6 mt-8 mt-sm-0">
          <v-card elevation="0">
            <v-card-title
              class="px-0"
              style="
                font-size: 16px;
                color: #7c7c7c;
                font-weight: 700;
                white-space: pre-wrap;
              "
              >({{ signleProduct.title }}) Sample -
              {{ signleProduct.description }} For Sale
            </v-card-title>
            <div class="rating d-flex align-center" style="gap: 10px">
              <v-rating
                class="pt-0"
                v-model="signleProduct.rating"
                half-increments
                size="x-small"
                density="cobact"
                color="yellow-darken-2"
              ></v-rating>
              <span style="font-size: 14px; color: #7c7c7c"
                >Stock: {{ signleProduct.stock }}</span
              >
            </div>
            <v-card-text class="px-0" style="font-size: 14px; color: #7c7c7c">
              {{ signleProduct.description }}
            </v-card-text>
            <v-card-text class="px-0" style="font-size: 14px; color: #7c7c7c">
              Brand: {{ signleProduct.brand }}
            </v-card-text>
            <v-card-text class="px-0" style="font-size: 14px; color: #7c7c7c">
              Availabilty:
              {{ signleProduct.stock > 0 ? "In Stock" : "Out Stock" }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              <del>${{ signleProduct.price }}</del> from
              <span style="font-size: 16px; font-weight: 900">
                ${{
                  Math.ceil(
                    signleProduct.price -
                      (signleProduct.price * signleProduct.discountPercentage) /
                        100
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
              <v-btn
                class="text-white w-75 mt-7"
                style="
                  background-color: black;
                  text-transform: none;
                  border-radius: 30px;
                "
                height="50"
                density="compact"
                variant="outlined"
                @click="addTocart(signleProduct)"
                :loading="btnLoading"
                >Add To Cart</v-btn
              >
            </v-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/Prodcuts";
import { mapActions, mapState } from "pinia";
import { carStore } from "@/stores/Cart";
export default {
  inject: ["Emitter"],
  computed: {
    ...mapState(productsModule, ["signleProduct"]),
  },
  methods: {
    ...mapActions(productsModule, ["getSignleProducts"]),
    ...mapActions(carStore, ["addItem"]),
    addTocart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
      }, 1000);
    },
  },
  data: () => ({
    tab: "",
    quantity: 1,
    btnLoading: false,
  }),
  mounted() {
    this.getSignleProducts(this.$route.params.productId);
  },
};
</script>
