<template>
  <div class="top-offer bg-grey-lighten-4 py-9">
    <v-container fulid>
      <v-row>
        <v-col :cols="4" class="py-0 pr-6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden">
              <img
                src="@/assets/images/playstations.webp"
                alt=""
                :style="`width: 100%; cursor: pointer; transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col :cols="4" class="py-0 pr-6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden">
              <img
                src="@/assets/images/headset.webp"
                alt=""
                :style="`width: 100%; cursor: pointer; transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col :cols="4" class="py-0 pr-6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent" v-bind="props" style="overflow: hidden">
              <img
                src="@/assets/images/chairs.webp"
                alt=""
                :style="`width: 100%; cursor: pointer; transition: .5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-row class="mt-9">
          <v-col :cols="6" class="mt-3 pl-5 py-0">
            <v-hover v-slot="{ isHovering, props }">
              <div
                class="parent pr-2"
                v-bind="props"
                style="overflow: hidden; height: 100%"
              >
                <img
                  src="@/assets/images/iphones.webp"
                  alt=""
                  :style="`width: 100%; cursor: pointer; transition: .5s all ease-in-out; scale: ${
                    isHovering ? 1.05 : 1
                  }`"
                />
              </div>
            </v-hover>
          </v-col>
          <v-col :cols="6" class="mt-3 pr-5 py-0">
            <v-hover v-slot="{ isHovering, props }">
              <div
                class="parent pl-2"
                v-bind="props"
                style="height: 100%; overflow: hidden"
              >
                <img
                  src="@/assets/images/laptops.webp"
                  alt=""
                  :style="`width: 100%; cursor: pointer; transition: .5s all ease-in-out; scale: ${
                    isHovering ? 1.05 : 1
                  }`"
                />
              </div>
            </v-hover>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>
