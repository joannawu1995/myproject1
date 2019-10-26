<template>
    <div class="container">
      <div class="head">购物车</div>
      <Center v-for="(item,index) in goods"  
      :key="index" :item='item' 
      @change="change" 
      @remove="remove" 
      @select="select"></Center>
      <div class="bottom">
        <input type="checkbox" id="all" :checked="allSelect()" @click="all"/>
        <label for="all">全选</label>
        <p>总价：{{sendData().total_price}}元</p>
        <button>结算 ({{sendData().total_num}})</button>
      </div>
    </div>
</template>

<script>
// 引入组件
import Center from "./Center.vue";

export default {
  data() {
    return {
      goods: [
        {
          id: "1",
          name: "iPhone X",
          price: "7299元",
          discript: "64G 星空灰",
          num: 1,
          url: "/static/img/iphone.jpg",
          isSelected: false
        },
        {
          id: "2",
          name: "扫地机器人",
          price: "1288元",
          discript: "白色",
          num: 1,
          url: "/static/img/saodi.jpg",
          isSelected: false
        },
        {
          id: "3",
          name: "Adidas 板鞋",
          price: "458元",
          discript: "绿尾",
          num: 1,
          url: "/static/img/adi.jpg",
          isSelected: false
        }
      ]
    };
  },
  // 注册组件
  components: {
    Center
  },
  methods: {
    // 增加或减少
    change(id, param) {
      for (let item of this.goods) {
        if (id == item.id) {
          item.num += param == "+" ? 1 : -1;
        }
        if (item.num < 0) item.num = 0;
      }
    },
    // 移除
    remove(id) {
      this.goods = this.goods.filter(item => item.id != id);
    },
    // 选择
    select(id) {
      for (let item of this.goods) {
        if (item.id == id) {
          item.isSelected = !item.isSelected;
        }
      }
    },
    // 发送总价和总数
    sendData() {
      let total_price = 0;
      let total_num = 0;
      for (let item of this.goods) {
        if (item.isSelected) {
          total_price += parseInt(item.price) * parseInt(item.num);
          total_num += item.num;
        }
      }
      return { total_price, total_num };
    },
    // 被全选
    allSelect() {
      let flag;
      for (let item of this.goods) {
        if (item.isSelected) {
          flag = true;
        } else {
          return false;
        }
      }
      return flag;
    },
    // 全选
    all() {
      let num = 0;
      for (let item of this.goods) {
        if (item.isSelected) num++;
      }
      for (let item of this.goods)
        item.isSelected = num == this.goods.length ? false : true;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.head {
  padding: 18px 0;
  border-bottom: 2px solid black;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.container {
  position: relative;
  margin: 10px;
  width: 460px;
  height: 650px;
  border: 2px solid black;
  border-radius: 5px;
  margin-top: 10px;
}
.bottom {
  align-items: center;
  box-sizing: border-box;
  padding: 10px 15px;
  width: 100%;
  border-top: 2px solid black;
  position: absolute;
  bottom: 0;
  display: flex;
}
.bottom > p {
  flex-grow: 1;
}
#all,
#all + label {
  cursor: pointer;
}
#all + label {
  margin-right: 20px;
}
.bottom > button {
  font-weight: bold;
  font-size: 16px;
  padding: 5px 10px;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
}
</style>
