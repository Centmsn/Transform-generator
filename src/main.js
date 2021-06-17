import "./index.css";

import { createApp } from "vue";

import store from "./store";
import App from "./App.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseSlider from "./components/BaseSlider.vue";
import BaseTitle from "./components/BaseTitle.vue";

const app = createApp(App);

app.use(store);

app.component("base-button", BaseButton);
app.component("base-slider", BaseSlider);
app.component("base-title", BaseTitle);

app.mount("#app");
