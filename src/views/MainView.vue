<template>
  <div class="h-screen mx-auto p-5 grid grid-cols-12 grid-rows-6 gap-4">
    <div class="border p-2 rounded row-start-1 col-start-1 row-end-6 col-end-4">
      <base-title text="Adjust properties"></base-title>

      <base-slider :max="50" label="Translate X"></base-slider>
      <base-slider :max="50" label="Translate Y"></base-slider>
      <base-slider :max="100" label="Rotate"></base-slider>
      <base-slider :max="50" label="Skew X"></base-slider>
      <base-slider :max="50" label="Skew Y"></base-slider>
    </div>

    <div
      class="row-start-1 row-end-6 col-start-4 col-end-13 border rounded p-2"
    >
      <the-preview></the-preview>
    </div>

    <div
      class="h-full row-start-6 row-end-7 col-start-1 col-end-13 bg-gray-100 border"
    >
      code
    </div>
  </div>
</template>

<script>
import BaseTitle from "../components/BaseTitle.vue";
import ThePreview from "../components/ThePreview.vue";

export default {
  components: {
    ThePreview,
    BaseTitle,
  },

  data() {
    return {};
  },
};
</script>
