import { defineStore } from "pinia";

export const carStore = defineStore("carStore", {
  state: () => ({
    cartItem: [],
  }),
  actions: {
    addItem(item) {
      let exists = false;
      for (let i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].id == item.id) {
          this.cartItem[i].quantity += item.quantity;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.cartItem.push(JSON.parse(JSON.stringify(item)));
      }
      localStorage.setItem("cartItem", JSON.stringify(this.cartItem));
      console.log(this.cartItem);
    },
    getcartItems() {
      if (localStorage.getItem("cartItem")) {
        this.cartItem = JSON.parse(localStorage.getItem("cartItem"));
        console.log(this.cartItem);
      }
    },
    delteItems(id) {
      for (let i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].id == id) {
          this.cartItem.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cartItem", JSON.stringify(this.cartItem));
    },
    setToLoacalStorage() {
      localStorage.setItem("cartItem", JSON.stringify(this.cartItem));
    },
    resetItem() {
      this.cartItem = [];
      localStorage.removeItem("cartItem");
    },
  },
});
