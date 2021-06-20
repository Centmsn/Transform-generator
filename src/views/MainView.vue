<template>
  <div class="h-screen mx-auto p-5 grid grid-cols-12 grid-rows-6 gap-4">
    <div
      class="border p-12 rounded row-start-1 col-start-1 row-span-5 col-span-4"
    >
      <base-title text="Adjust properties"></base-title>

      <base-slider
        :max="100"
        :min="-100"
        label="Translate X"
        @slider-change="changeX"
      ></base-slider>
      <base-slider
        :min="-100"
        :max="100"
        label="Translate Y"
        @slider-change="changeY"
      ></base-slider>
      <base-slider
        :max="360"
        label="Rotate (deg)"
        @slider-change="changeRotate"
      ></base-slider>
      <base-slider
        :max="50"
        :min="-50"
        label="Skew X"
        @slider-change="changeSkewX"
      ></base-slider>
      <base-slider
        :max="50"
        :min="-50"
        label="Skew Y"
        @slider-change="changeSkewY"
      ></base-slider>

      <div class="flex justify-center flex-wrap py-5 mt-10 border-t-2 ">
        <p
          class="text-gray-600 uppercase font-semibold w-full text-center
        my-4"
        >
          Set all to initial value
        </p>
        <base-button variant="danger" @click="resetAll">Reset</base-button>
      </div>
    </div>

    <div
      class="row-start-1 row-span-5 col-start-5 col-span-8 border rounded p-2"
    >
      <the-preview></the-preview>
    </div>

    <div
      class="h-full row-start-6 col-span-full p-4 text-2xl font-semibold text-white bg-purple-500 border overflow-auto rounded"
    >
      <base-title text="Your code" variant="light"></base-title>
      <p>{{ code }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseButton from "../components/BaseButton.vue";
import BaseTitle from "../components/BaseTitle.vue";
import ThePreview from "../components/ThePreview.vue";

export default {
  components: {
    ThePreview,
    BaseTitle,
    BaseButton,
  },

  computed: {
    ...mapGetters("transforms", [
      "translateXCss",
      "translateYCss",
      "rotateCss",
      "skewXCss",
      "skewYCss",
      "translateX",
      "translateY",
      "rotate",
      "skewX",
      "skewY",
    ]),

    code() {
      const translateX = this.translateX ? this.translateXCss : "";
      const translateY = this.translateY ? this.translateYCss : "";
      const rotate = this.rotate ? this.rotateCss : "";
      const skewX = this.skewX ? this.skewXCss : "";
      const skewY = this.skewY ? this.translateXCss : "";

      const code = `${translateX} ${translateY} ${rotate} ${skewX} ${skewY}`;

      return code.trim().length ? `transform: ${code};` : "";
    },
  },

  methods: {
    ...mapActions("transforms", [
      "changeX",
      "changeY",
      "changeRotate",
      "changeSkewX",
      "changeSkewY",
    ]),

    resetAll() {
      this.changeX(0);
      this.changeY(0);
      this.changeRotate(0);
      this.changeSkewX(0);
      this.changeSkewY(0);
    },
  },
};
</script>
