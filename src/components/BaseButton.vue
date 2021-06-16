<template>
  <button
    class="shadow rounded bg-purple-600 text-white text-xl p-2 hover:bg-purple-700"
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
  },
};
</script>
