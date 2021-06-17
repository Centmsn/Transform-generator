import { createStore } from "vuex";

import transforms from "./transforms";

const store = createStore({
  modules: {
    transforms,
  },
});

export default store;
