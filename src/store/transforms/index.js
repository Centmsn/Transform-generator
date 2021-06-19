export default {
  namespaced: true,
  state() {
    return {
      translateX: 0,
      translateY: 0,
      rotate: 0,
    };
  },
  actions: {
    changeX(context, value) {
      context.commit("changeX", value);
    },

    changeY(context, value) {
      context.commit("changeY", value);
    },

    changeRotate(context, value) {
      context.commit("changeRotate", value);
    },
  },
  getters: {
    translateX(state) {
      return state.translateX;
    },

    translateY(state) {
      return state.translateY;
    },

    rotate(state) {
      return state.rotate;
    },
  },
  mutations: {
    changeX(state, value) {
      state.translateX = value;
    },

    changeY(state, value) {
      state.translateY = value;
    },

    changeRotate(state, value) {
      state.rotate = value;
    },
  },
};
