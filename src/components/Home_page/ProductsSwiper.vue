<template>
  <div class="flashdeals py-16 pb-5">
    <div class="mb-10 px-5 title d-flex align-center justify-space-between">
      <h2
        style="font-size: 30px; font-weight: 900; text-align: left"
        :class="[`text-${titleColor}`]"
      >
        {{ title }}
      </h2>
      <a style="font-size: 14px" class="text-black" href="#">Shop All</a>
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col :cols="12">
          <v-row>
            <v-col :cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      class="pb-13 px-5"
      :pagination="{ el: `.swiper-pagination`, clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="30"
      :navigation="{ prevIcon: `.prev-swiper`, nextIcon: `.next-swiper` }"
      :autoplay="{ dealy: 3000 }"
      :breakpoints="breakPoints"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="img-parent"
              style="height: 200px; overflow: hidden; position: relative"
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
                  width: 60px;
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
              item.description + " " + item.title.split(" ").length <= 9
                ? item.description
                : item.description
                    .split(" ")
                    .slice(0, 9 - item.title.split(" ").length)
                    .join(" ")
            }}
          </v-card-text>
          <v-rating
            class="pt-0"
            v-model="item.rating"
            half-increments
            size="x-small"
            density="cobact"
            color="yellow-darken-2"
          ></v-rating>
          <v-card-text class="pl-0 pt-0">
            <del>${{ item.price }}</del> from
            <span style="color: red; font-size: 16px; font-weight: 900">
              ${{
                Math.ceil(
                  item.price - (item.price * item.discountPercentage) / 100
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
              class="py-3 px-12 my-5"
              style="border-radius: 30px"
              >Choose Options</v-btn
            >
          </div>
        </v-card>
      </swiper-slide>
      <div class="next-swiper"></div>
      <div class="prev-swiper"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQucikView", product);
    },
  },
  props: {
    products: {
      typeof: Array,
    },
    title: {
      typeof: String,
    },
    titleColor: {
      typeof: String,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  data: () => ({
    showenItem: {},
    breakPoints: {
      0: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  }),
};
</script>

<style>
.flashdeals .swiper-button-next,
.flashdeals .swiper-button-prev {
  height: 40px;
  width: 40px;
  border: 2px solid rgb(39, 39, 39);
  border-radius: 50%;
  background: white;
  top: 43%;
}
.flashdeals .swiper-button-next::after,
.flashdeals .swiper-button-prev::after {
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-weight: 900;
  color: rgb(39, 39, 39);
}
.img-parent:hover .quick-view {
  opacity: 1 !important;
}

/* media query */
@media (max-width: 580px) {
  .flashdeals .img-parent {
    height: 300px !important;
  }
  .flashdeals .swiper-button-next,
  .flashdeals .swiper-button-prev {
    top: 56%;
  }
}
</style>
