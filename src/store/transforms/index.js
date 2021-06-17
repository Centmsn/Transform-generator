export default {
  namespaced: true,
  state() {
    return {
      translateX: 0,
      translateY: 0,
    };
  },
  actions: {
    changeX(context, value) {
      context.commit("changeX", value);
    },

    changeY(context, value) {
      context.commit("changeY", value);
    },
  },
  getters: {
    translateX(state) {
      return state.translateX;
    },

    translateY(state) {
      return state.translateY;
    },
  },
  mutations: {
    changeX(state, value) {
      state.translateX = value;
    },

    changeY(state, value) {
      state.translateY = value;
    },
  },
};
