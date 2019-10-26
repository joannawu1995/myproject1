<template>
    <div class="left_container">
        <h3>添加好友</h3>
        <p class="head_img">
            <label for="">头像：</label>
            <input ref='head_url' type="text" />
        </p>
        <p>
            <label for="">申请人：</label>
            <input ref='name' type="text" />
        </p>
        <p>
            <label for="">账号：</label>
            <input ref='id' type="text" />
        </p>
        <button @click="clickAdd">申请添加</button>
    </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    clickAdd() {
      this.data.push({
        name: this.$refs.name.value,
        head_url: `/static/head_img/${this.$refs.head_url.value}.jpg`,
        id: this.$refs.id.value,
        isAdd: false
      });
      this.$refs.name.value = "";
      this.$refs.head_url.value = "";
      this.$refs.id.value = "";
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.left_container {
  margin-right: 10px;
  box-sizing: border-box;
  width: 350px;
  height: 454px;
  border: 2px solid black;
  border-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
 h3 {
  box-sizing: border-box;
  text-align: center;
  padding: 15px 10px;
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom: 55px;
}
.left_container input {
  border: 1px solid gray;
  font-size: 16px;
  padding: 5px;
  border-radius: 3px;
  width: 150px;
}
.left_container > p > label {
  width: 65px;
  display: inline-block;
  text-align: right;
}
.left_container > p {
  margin: 15px 0;
}
.left_container > button {
  cursor: pointer;
  margin-top: 40px;
  font-size: 16px;
  padding: 5px 8px;
}
</style>
