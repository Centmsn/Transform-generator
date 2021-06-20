export default {
  namespaced: true,
  state() {
    return {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      skewY: 0,
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

    changeSkewX(context, value) {
      context.commit("changeSkewX", value);
    },

    changeSkewY(context, value) {
      context.commit("changeSkewY", value);
    },
  },
  getters: {
    // translate X
    translateX(state) {
      return state.translateX;
    },
    translateXCss(state) {
      return `translateX(${state.translateX}px)`;
    },

    // translate Y
    translateY(state) {
      return state.translateY;
    },
    translateYCss(state) {
      return `translateY(${state.translateY}px)`;
    },

    // rotate
    rotate(state) {
      return state.rotate;
    },
    rotateCss(state) {
      return `rotate(${state.rotate}deg)`;
    },

    // skewX
    skewX(state) {
      return state.skewX;
    },
    skewXCss(state) {
      return `skewX(${state.skewX}deg)`;
    },

    // skewY
    skewY(state) {
      return state.skewY;
    },
    skewYCss(state) {
      return `skewY(${state.skewY}deg)`;
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

    changeSkewX(state, value) {
      state.skewX = value;
    },

    changeSkewY(state, value) {
      state.skewY = value;
    },
  },
};
