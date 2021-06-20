<template>
  <div class="w-full h-full">
    <base-title text="Preview" tag="h2"></base-title>

    <div class="h-full flex items-center justify-center relative">
      <div
        class="w-40 h-40 bg-purple-400"
        :style="{ transform: transforms }"
      ></div>

      <div class="w-40 h-40 border border-gray-300 absolute">
        <span class="text-gray-300 absolute -top-6 text-center w-full"
          >160px</span
        >

        <span class="text-gray-300 absolute h-full transform -rotate-90 left-8"
          >160px</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("transforms", [
      "translateX",
      "translateY",
      "rotate",
      "skewX",
      "skewY",
      "translateXCss",
      "translateYCss",
      "rotateCss",
      "skewXCss",
      "skewYCss",
    ]),
    transforms() {
      return `${this.translateXCss} ${this.translateYCss} ${this.rotateCss} ${this.skewXCss} ${this.skewYCss}`;
    },
  },
};
</script>
