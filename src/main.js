import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});
//mitt
import mitt from "mitt";
const Emitter = mitt();
//swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

createApp(App)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(router)
  .use(createPinia())
  .mount("#app");
