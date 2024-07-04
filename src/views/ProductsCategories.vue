<template>
  <div class="products-categories mt-10">
    <h1 class="text-center">{{ $route.params.title }}</h1>
    <v-container>
      <v-card elevation="0" :loading="loading" class="pt-5" min-height="700px">
        <v-row v-if="loading">
          <v-col :cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader
              type="image, article, button"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            :cols="12"
            sm="6"
            md="4"
            lg="3"
            class="px-10 px-sm-5 mt-8 mt-lg-0"
            v-for="item in categoryProducts.products"
            :key="item.id"
          >
            <v-lazy>
              <v-card elevation="0">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent"
                    style="height: 170px; overflow: hidden; position: relative"
                  >
                    <img
                      :src="
                        showenItem[item.title]
                          ? showenItem[item.title]
                          : item.thumbnail
                      "
                      alt=""
                      v-bind="props"
                      class="w-100"
                      :style="`height: 100%; transition: 0.5s all ease-in-out; scale: ${
                        isHovering ? 1.05 : 1
                      }; cursor:pointer`"
                    />
                    <v-btn
                      @click="openQuickView(item)"
                      density="compact"
                      variant="outlined"
                      style="
                        width: 100px;
                        background: white;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 14px;
                        border-radius: 30px;
                        text-transform: none;
                        opacity: 0;
                        transition: 0.3s;
                      "
                      class="quick-view"
                      >Quick View</v-btn
                    >
                  </div>
                </v-hover>
                <v-card-text class="pl-0 pb-1">
                  ({{ item.title }})
                  {{
                    item.description + " " + item.title.split(" ").length <= 8
                      ? item.description
                      : item.description
                          .split(" ")
                          .slice(0, 8 - item.title.split(" ").length)
                          .join(" ")
                  }}
                </v-card-text>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ item.price }}</del> from
                  <span style="color: red; font-size: 16px; font-weight: 900">
                    ${{
                      Math.ceil(
                        item.price -
                          (item.price * item.discountPercentage) / 100
                      )
                    }}</span
                  >
                </v-card-text>
                <v-btn-toggle v-model="showenItem[item.title]">
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :value="pic"
                    :key="i"
                    size="x-small"
                    ><img
                      :src="pic"
                      alt=""
                      width="30"
                      height="30"
                      rounded="xl"
                      style="border-radius: 50%; border: 1px solid #b0b0b0"
                    />
                  </v-btn>
                </v-btn-toggle>
                <div>
                  <v-btn
                    @click="
                      $router.push({
                        name: 'products_details',
                        params: { productId: item.id },
                      })
                    "
                    density="combact"
                    variant="outlined"
                    class="py-2 px-5 my-5"
                    style="border-radius: 30px"
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/Prodcuts";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

export default {
  inject: ["Emitter"],
  data: () => ({
    showenItem: {},
    loading: false,
  }),
  components: {
    VSkeletonLoader,
  },
  methods: {
    ...mapActions(productsModule, ["getProductsCategories"]),
    openQuickView(product) {
      this.Emitter.emit("openQucikView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getProductsCategories(this.$route.params.category);
      this.loading = false;
    },
  },
};
</script>
