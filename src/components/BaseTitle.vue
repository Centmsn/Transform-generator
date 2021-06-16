<template>
  <component
    :is="tag"
    class="w-full text-xl text-gray-600 uppercase border-b-2 my-2 font-semibold text-center"
    >{{ text }}</component
  >
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: "h1",
      validator: function(value) {
        const titles = ["h1", "h2", "h3", "h4", "h5", "h6"];
        if (titles.includes(value)) return true;
        return false;
      },
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
