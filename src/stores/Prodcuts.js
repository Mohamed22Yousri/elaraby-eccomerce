import axios from "axios";
import { defineStore } from "pinia";
export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    Furniture: [],
    fragrances: [],
    groceries: [],
    categoryProducts: [],
    signleProduct: "",
    categories: [
      {
        title: "Smart Phones",
        Route: "smartphones",
      },
      {
        title: "Laptops",
        Route: "laptops",
      },
      {
        title: "Furniture",
        Route: "furniture",
      },
      {
        title: "Mens Shoes",
        Route: "mens-shoes",
      },
      {
        title: "Men`s Watches",
        Route: "mens-watches",
      },
      {
        title: "Womens Shoes",
        Route: "womens-shoes",
      },
      {
        title: "Motorcycle",
        Route: "motorcycle",
      },
    ],
  }),
  actions: {
    async getproducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProducts = res.data.products.filter(
            (el) => el.category === "groceries"
          );
          this.Furniture = res.data.products.filter(
            (el) => el.category === "furniture"
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.groceries = res.data.products.filter(
            (el) => el.category === "groceries"
          );

          this.flashDeals = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
    async getProductsCategories(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryProducts = res.data));
    },
    async getSignleProducts(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => (this.signleProduct = res.data));
    },
  },
});
