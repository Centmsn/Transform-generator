<template>
  <div class="w-full my-4">
    <p
      v-if="label"
      class="text-center text-gray-600 font-medium uppercase mb-2"
    >
      {{ label }}
    </p>
    <div
      class="w-full h-8 border-2 border-purple-600 rounded-lg relative text-white cursor-pointer shadow-md"
      ref="slider"
      @click="drag"
    >
      <div
        ref="progress"
        class="bg-gradient-to-r from-purple-300 to-purple-500 w-0 h-full rounded-lg"
        :style="{ width: position + 20 + 'px' }"
      ></div>

      <div
        @mousedown.prevent="startDrag"
        class="h-10 w-20 shadow-lg rounded-full absolute -top-1.5 bg-gradient-to-r from-purple-600 to-purple-900 cursor-pointer flex justify-between items-center"
        :style="{ left: position + 'px' }"
      >
        <chevron-left-icon
          @click="handleClick(-1)"
          :class="[
            'w-8',
            'h-8',
            { 'text-gray-400': minValue, 'hover:text-yellow-400': !minValue },
          ]"
        ></chevron-left-icon>
        <span class=" text-lg font-semibold">{{ value }}</span>
        <chevron-right-icon
          @click="handleClick(1)"
          :class="[
            'w-8',
            'h-8',
            { 'text-gray-400': maxValue, 'hover:text-yellow-400': !maxValue },
          ]"
        ></chevron-right-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";

export default {
  emits: ["sliderChange"],

  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },

  props: {
    min: {
      type: Number,
      required: false,
      default: 0,
    },
    max: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      position: -40,
      value: this.min,
    };
  },

  computed: {
    minValue() {
      return this.value === this.min;
    },

    maxValue() {
      return this.value === this.max;
    },
  },

  methods: {
    startDrag() {
      document.addEventListener("mouseup", this.endDrag);
      document.addEventListener("mousemove", this.drag);
    },

    endDrag() {
      document.removeEventListener("mousemove", this.drag);
      document.removeEventListener("mouseup", this.endDrag);
    },

    drag(e) {
      if (
        e.type === "click" &&
        e.target !== this.$refs.slider && e.target !== this.$refs.progress
      )
        return;
      const { left, width } = this.$refs.slider.getBoundingClientRect();
      const draggableWidth = 80;

      let offsetLeft = e.clientX - left;
      if (offsetLeft < 0) offsetLeft = 0;
      if (offsetLeft > width) offsetLeft = width;

      const newValue =
        Math.round(offsetLeft / (width / (this.max - this.min))) + this.min;

      if (newValue !== this.value) this.$emit("sliderChange", newValue);

      this.value = newValue;

      this.position = offsetLeft - draggableWidth / 2;
    },

    handleClick(value) {
      if (value === 1) {
        if (this.value + 1 > this.max) return;
        this.value = this.value + 1;
      }

      if (value === -1) {
        if (this.value - 1 < this.min) return;
        this.value = this.value - 1;
      }

      const { width } = this.$refs.slider.getBoundingClientRect();
      this.position = (width / (this.max - this.min)) * this.value - 40;
    },
  },
};
</script>
