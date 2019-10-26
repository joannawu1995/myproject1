<template>
      <li class="good">
          <input type="checkbox" @click="clickSelect" :checked="item.isSelected"/>
          <div class="img_box"><img :src='item.url' alt="" /></div>
          <div class="goodName">
              <p>{{item.name}}</p>
              <p class="discript">{{item.discript}}</p>
          </div>
          <div class="add_rec" @click="clickChange">
              <button class="-">-</button>
              <label>{{item.num}}</label>
              <button class="+">+</button>
          </div>
          <span class="good_price">{{item.price}}</span>
          <button class="remove" @click="clickRemove">移除</button>
      </li>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    clickChange(e) {
      if (e.target.nodeName == "BUTTON")
        this.$emit("change", this.item.id, e.target.className);
    },
    clickRemove(e) {
      this.$emit("remove", this.item.id);
    },
    clickSelect(e) {
      this.$emit("select", this.item.id);
    }
  }
};
</script>

<style scoped>
.head {
  padding: 18px 0;
  border-bottom: 2px solid black;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.good {
  border-bottom: 1px solid black;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.goodName {
  width: 90px;
  margin: 5px 0;
}
.good_price {
  width: 70px;
}
.discript {
  margin-top: 5px;
  font-size: 14px;
  color: gray;
}
.img_box {
  width: 70px;
  height: 70px;
  border: 1px solid gray;
  margin-right: 10px;
}
.img_box > img {
  width: 70px;
  height: 70px;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
}
button {
  cursor: pointer;
}
.add_rec > button {
  margin: 0 8px;
  width: 20px;
  height: 20px;
  line-height: 18px;
}
.remove {
  padding: 3px 8px;
}
button + label {
  width: 15px;
  display: inline-block;
  text-align: center;
}

</style>
