import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

createApp(App).use(router).mount("#app");
