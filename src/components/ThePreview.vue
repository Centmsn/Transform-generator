<template>
  <div class="w-full h-full">
    <base-title text="Preview" tag="h2"></base-title>

    <div class="h-full flex items-center justify-center relative">
      <div
        class="w-40 h-40 bg-purple-400"
        :style="{ transform: transforms }"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("transforms", ["translateX", "translateY"]),
    transforms() {
      let cssPropety = "";
      if (this.translateX > 0) cssPropety += `translateX(${this.translateX}px)`;
      if (this.translateY > 0) cssPropety += `translateY(${this.translateY}px)`;
      console.log(this.translateY);
      console.log(cssPropety);
      return cssPropety;
    },
  },
};
</script>
