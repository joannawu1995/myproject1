<template>
    <div>
        <input ref='text' />
        <button @click='clickAdd' @keyup.enter="clickAdd">添加</button>
    </div>
</template>

<script>
export default {
  methods: {
    clickAdd() {
      if (this.$refs.text.value != "")
        this.$emit("clickAdd", this.$refs.text.value);
      this.$refs.text.value = "";
    }
  }
};
</script>

<style scoped>
input,
button {
  border: 2px solid black;
  outline: 0;
  border-radius: 5px;
  background: white;
}

input {
  margin-right: 5px;
  font-size: 18px;
  width: 214px;
  padding: 5px 8px;
}

button {
  font-size: 16px;
  cursor: pointer;
  height: 35px;
  vertical-align: top;
}
</style>
