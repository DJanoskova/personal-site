import { createApp } from "vue";
import "@fortawesome/fontawesome-free/js/all.js";

import App from "./App.vue";
import store from "./store";

createApp(App)
  .use(store)
  .mount("#app");
