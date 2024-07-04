<template>
  <div class="why-shop py-14">
    <div class="title text-center pt-4 pt-lg-0">
      <h2><span> Why Shop </span>With Us?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col :cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card
            class="text-white text-center"
            elevation="0"
            style="background-color: transparent"
          >
            <div class="parent-img">
              <img src="@/assets/images/free-shipping.png" alt="" />
            </div>
            <v-card-title style="white-space: pre-wrap; line-height: 1.2">
              Free Shipping On first Oreder
            </v-card-title>
            <v-card-text class="pb-0">Lorem ipsum dolor sit amet. </v-card-text>
            <a class="text-white text-center" href="#">Learn More</a>
          </v-card>
        </v-col>
        <v-col :cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card
            class="text-white text-center"
            elevation="0"
            style="background-color: transparent"
          >
            <div class="parent-img">
              <img src="@/assets/images/weekly-flash-sales.png" alt="" />
            </div>
            <v-card-title style="white-space: pre-wrap; line-height: 1.2">
              Weekly Flash Sale
            </v-card-title>
            <v-card-text class="pb-0">Lorem ipsum dolor sit amet. </v-card-text>
            <a class="text-white text-center" href="#">Learn More</a>
          </v-card>
        </v-col>
        <v-col :cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card
            class="text-white text-center"
            elevation="0"
            style="background-color: transparent"
          >
            <div class="parent-img">
              <img src="@/assets/images/discount.png" alt="" />
            </div>
            <v-card-title style="white-space: pre-wrap; line-height: 1.2">
              Anual Payment Discount
            </v-card-title>
            <v-card-text class="pb-0">Lorem ipsum dolor sit amet. </v-card-text>
            <a class="text-white text-center" href="#">Learn More</a>
          </v-card>
        </v-col>
        <v-col :cols="12" sm="6" md="4" lg="3" class="mb-4 mb-lg-0">
          <v-card
            class="text-white text-center"
            elevation="0"
            style="background-color: transparent"
          >
            <div class="parent-img">
              <img src="@/assets/images/cash-back.png" alt="" />
            </div>
            <v-card-title style="white-space: pre-wrap; line-height: 1.2">
              Cashback Reward Program
            </v-card-title>
            <v-card-text class="pb-0">Lorem ipsum dolor sit amet. </v-card-text>
            <a class="text-white text-center" href="#">Learn More</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.why-shop {
  background: url(../../assets//images/why-shop-with-us-banner.webp);
  background-repeat: repeat-x;
  background-position: -60 top;
  background-size: cover;
}
.why-shop .title h2 {
  font-size: 35px;
  color: white;
  font-weight: 700;
}
.why-shop h2 span {
  color: rgb(58 243 255);
}
</style>
