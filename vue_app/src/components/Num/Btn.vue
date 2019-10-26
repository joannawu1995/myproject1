<template>
    <button @click="clickChange">{{name}}</button>
</template>

<script>
export default {
  name: "Btn",
  data() {
    return {};
  },
  methods: {
    clickChange(e) {
      this.$emit("add");
      this.$emit("remove");
    }
  },
  props: ["name"]
};
</script>

