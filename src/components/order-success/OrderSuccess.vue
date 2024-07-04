<template>
  <v-dialog v-model="dialog" width="50%" persistent>
    <v-card class="text-center py-7">
      <div class="text-center">
        <v-icon
          color="green"
          style="
            border: 1px solid green;
            background: white;
            font-size: 78px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
          "
          >mdi-check</v-icon
        >
      </div>
      <v-card-title style="font-size: 30px; font-weight: bold; color: #787878"
        >Order Place Successfuly!</v-card-title
      >
      <v-card-text style="font-size: 17px; color: #787878"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Necessitatibus fuga non id aut tenetur porro inventore eos beatae, nam
        rerum modi atque obcaecati cupiditate! Quidem ut enim pariatur quod
        dolorum?</v-card-text
      >
      <v-card-actions class="justify-center mt-5">
        <v-btn variant="elevated" color="blue" @click="resetData()"
          >Got it!</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { carStore } from "@/stores/Cart";
import { mapActions } from "pinia";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: ["popup"],
  mounted() {
    this.dialog = this.popup;
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("close_popup");
        }, 200);
      }
    },
  },
  methods: {
    ...mapActions(carStore, ["resetItem"]),
    resetData() {
      this.dialog = false;
      this.resetItem();
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style></style>
