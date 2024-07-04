<template>
  <UpparBanner />
  <TheFeature />
  <TopOffer />
  <ProductsComponents
    :products="flashDeals"
    title="FlashDeals"
    titleColor="red"
  />
  <TopCate />
  <NewProducts :products="newProducts" />
  <QualityFeature />
  <ProductsComponents
    :products="mobilePhone"
    title="Top Mobile"
    titleColor="black"
  />
  <v-container>
    <v-row>
      <v-col :cols="6">
        <img
          src="@/assets/images/band-left-cover.webp"
          class="w-100 pr-3"
          alt=""
        />
      </v-col>
      <v-col :cols="6">
        <img
          src="@/assets/images/band-right-cover.webp"
          class="w-100 pl-3"
          alt=""
        />
      </v-col>
    </v-row>
  </v-container>
  <ProductsComponents
    :products="fragrances"
    title="Top Fragrances"
    titleColor="black"
  />
  <v-container fluid>
    <img src="@/assets/images/tv-banner.webp" alt="" class="w-100" />
  </v-container>
  <ProductsComponents
    :products="groceries"
    title="Top Groceries"
    titleColor="black"
  />
  <WhyShopeWithUs />
</template>

<script>
import UpparBanner from "@/components/Home_page/UpparBanner.vue";
import TheFeature from "@/components/Home_page/TheFeature.vue";
import TopOffer from "@/components/Home_page/TopOffer.vue";
import ProductsComponents from "@/components/Home_page/ProductsSwiper.vue";
import { productsModule } from "@/stores/Prodcuts";
import { mapActions, mapState } from "pinia";
import TopCate from "@/components/Home_page/TopCate.vue";
import NewProducts from "@/components/Home_page/NewProducts.vue";
import QualityFeature from "@/components/Home_page/QualityFeatures.vue";
import WhyShopeWithUs from "@/components/Home_page/WhyShopWithUs.vue";

export default {
  name: "HomeView",
  components: {
    UpparBanner,
    TheFeature,
    TopOffer,
    ProductsComponents,
    TopCate,
    NewProducts,
    QualityFeature,
    WhyShopeWithUs,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "mobilePhone",
      "fragrances",
      "groceries",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getproducts"]),
  },
  async mounted() {
    await this.getproducts();
  },
};
</script>
