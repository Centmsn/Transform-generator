<template>
  <button
    class="shadow rounded text-white text-xl px-4 py-2 transform focus:bg-red-700 focus:outline-none duration-300"
    :class="variantClasses"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    variant: {
      type: String,
      required: false,
      default: "default",
      validator: function(value) {
        const options = ["default", "danger"];
        if (options.includes(value)) return true;
        return false;
      },
    },
  },

  computed: {
    variantClasses() {
      if (this.variant === "danger") return "bg-red-600 hover:bg-red-700";
      return "bg-purple-600 hover:bg-purple-700";
    },
  },
};
</script>
