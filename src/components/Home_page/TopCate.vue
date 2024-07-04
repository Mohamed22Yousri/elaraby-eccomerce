<template>
  <div class="top-cate">
    <div class="cyber-banner">
      <img class="w-100" src="@/assets/images/cyber-banner.webp" alt="" />
    </div>
    <div class="categores pt-13">
      <div class="title d-flex justify-center align-center px-5 mb-3">
        <h3 class="flex-grow-1" style="font-weight: 900; font-size: 20px">
          Top Categories
        </h3>
        <a class="text-black" href="#">Shop All</a>
      </div>
      <v-container fluid>
        <v-row>
          <v-col
            :cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="cate in categores"
            :key="cate.title"
          >
            <v-card class="text-center py-3 px-2" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent pb-3"
                  style="
                    width: 100%;
                    overflow: hidden;
                    height: 170px;
                    border-radius: 50%;
                  "
                >
                  <img
                    :src="cate.images"
                    alt=""
                    v-bind="props"
                    :style="`transition: 0.4s all ease-in-out;
                    cursor: pointer;
                    height: 100%;
                    width: 100%;
                    scale: ${isHovering ? 1.05 : 1};
                  `"
                  />
                </div>
              </v-hover>
              <v-text-card>{{ cate.title }} </v-text-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categores: [
        {
          title: "Mobile Phones",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
        },
        {
          title: "Labtops",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
        },
        {
          title: "TVS",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
        },
        {
          title: "PCs",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
        },
        {
          title: "Audio & Video",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
        },
        {
          title: "Gaming",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
        },
        {
          title: "Home Appliances",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
        },
        {
          title: "Kitchen",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
        },
        {
          title: "Cameras",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
        },
        {
          title: "Consumables",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
        },
        {
          title: "Smart Homes",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
        },
        {
          title: "Accessories",
          images:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
        },
      ],
    };
  },
};
</script>
