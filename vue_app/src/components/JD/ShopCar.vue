<template>
  <div>
      <header class="car_top_container">
          <i class="el-icon-arrow-left" @click='clickGo'></i>
          <p>购物车</p>
          <i class="el-icon-more"></i>
      </header>
    <div class="car_shop_container">
            <ul>
                <li v-if="shopCar.length!=0" v-for="(item,index) in shopCar" :key="index" class="car_shop_list">
                    <input @click="select(item._id)" type="checkbox" id="img" :checked='item.isSelected'>
                   <label class="car_shop_img" for="img">
                       <img :src="'http://127.0.0.1:3000'+item.url" alt="">
                   </label>
                   <div class="car_shop_infor">
                       <p class="infor_p">{{item.info.length>34?item.info.slice(0,34)+'…':item.info}}</p>
                       <div class="money_container" :id="item._id">
                           <p class="money_p">
                               <span>￥</span>
                                <span>{{item.price.split('.')[0]}}.</span>
                                <span>{{item.price.split('.')[1]}}</span>
                           </p>
                           <p class="num_container" @click="clickNum(item._id)">
                               <i :class="item.num==1?'gray':''">-</i>
                               <span>{{item.num}}</span>
                               <i>+</i>
                           </p>
                       </div>
                       <p class="remove" @click="remove(item._id)"><span>删除</span></p>
                   </div>
                </li>
                <li v-if="shopCar.length==0" class="none_shopcar">
                    <img src="/static/JD_img/car.png" alt="">
                    <p>购物车是空的 . . .</p>
                </li>
            </ul>
    </div>
    <div class="all_container">
        <div class="all_checkbox">
            <input type="checkbox" name="" id="all" @click="all" :checked="allSelect()">
            <label for="all">全选</label>
        </div>
        <div class="buy_btn">
            <p>合计：<span>￥{{total().total_price}}.00</span></p>
            <p>结算<span> ({{total().total_num}}件)</span></p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkAll: false,
      isIndeterminate: true,
      value: "",
      num1: 1
    };
  },
  props: ["shopCar"],
  methods: {
    //   添加删除
    clickNum(id) {
      if (event.target.nodeName == "I") {
        for (let item of this.shopCar) {
          if (item._id == id) {
            item.num = parseInt(item.num);
            item.num += event.target.innerHTML == "+" ? 1 : -1;
          }
          if (item.num <= 1) {
            item.num = 1;
          }
        }
      }
    },
    // 删除
    remove(id) {
      for (let i = 0; i < this.shopCar.length; i++) {
        if (this.shopCar[i]._id == id) this.shopCar.splice(i, 1);
      }
    },
    // 选择
    select(id) {
      for (let item of this.shopCar) {
        if (item._id == id) {
          item.isSelected = !item.isSelected;
        }
      }
    },
    // 被全选
    allSelect() {
      let flag;
      for (let item of this.shopCar) {
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
      for (let item of this.shopCar) {
        if (item.isSelected) num++;
      }
      for (let item of this.shopCar)
        item.isSelected = num == this.shopCar.length ? false : true;
    },
    // 总价和总数
    total() {
      let total_num = 0;
      let total_price = 0;
      for (let item of this.shopCar) {
        if (item.isSelected) {
          total_num += parseInt(item.num);
          total_price += parseInt(item.num) * parseInt(item.price);
        }
      }
      return { total_num, total_price };
    },
    // 返回
    clickGo() {
      this.$router.go(-1);
    }
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.all_container {
  display: flex;
  justify-content: space-between;
  height: 3.3em;
  line-height: 3.3em;
  position: fixed;
  bottom: 3.12em;
  width: 100%;
  border-top: 1px solid rgb(229, 229, 229);
  background: white;
}
.car_shop_container {
  margin-top: 3.12em;
  margin-bottom: 3.5em;
}
.car_top_container {
  padding: 0 0.5em;
  display: flex;
  justify-content: space-between;
  height: 3.12em;
  line-height: 3.12em;
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  text-align: center;
  border-bottom: 1px solid rgb(229, 229, 229);
  background: white;
  font-weight: bold;
}
.car_top_container .el-icon-arrow-left {
  margin-top: 0.55em;
  font-size: 1.5em;
  font-weight: bold;
}
.el-icon-more {
  margin-top: 0.55em;
  font-size: 1.5em;
}
.car_shop_img > img {
  width: 7em;
  height: 7em;
}
.car_shop_img {
  width: 7em;
  height: 7em;
  margin-right: 0.4em;
}
.car_shop_list {
  display: flex;
  padding: 0.8em 0.6em;
  align-items: center;
  border-bottom: 1px solid rgb(229, 229, 229);
}
.el-input-number--mini {
  width: 6em;
  transform: scale(0.9);
}
.money_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.remove {
  text-align: right;
  font-size: 0.8em;
  margin-right: 0.1em;
  margin-top: 0.8em;
}
.car_shop_infor {
  margin-top: 0.4em;
  width: 14em;
}
.infor_p {
  margin-bottom: 0.7em;
  font-size: 0.9em;
  font-weight: bold;
}
.money_p {
  color: #f23030;
  font-size: 0.9em;
  font-weight: bold;
}
.money_p > span:nth-child(2) {
  font-size: 1.3em;
}
input[type="checkbox"] {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
}
input[type="checkbox"] + label {
  font-size: 0.9em;
}
.all_container > .buy_btn {
  display: flex;
}
.all_container > .buy_btn > p:first-child {
  font-size: 1em;
  font-weight: bold;
}
.all_container > .buy_btn > p:last-child {
  color: white;
  width: 7em;
  height: 3.1em;
  background: #f23030;
  text-align: center;
  line-height: 3.1em;
  font-weight: bold;
  margin-left: 0.6em;
  font-size: 1.05em;
}
.all_container > .buy_btn > p:first-child > span {
  color: #f23030;
}
.all_container > .buy_btn > p:last-child > span {
  font-size: 0.9em;
  font-weight: normal;
}
.all_checkbox {
  display: flex;
  align-items: center;
  padding: 0 0.5em;
}
.num_container {
  border: 0.07em solid #eee;
  color: black;
  display: flex;
  border-radius: 0.2em;
  align-items: center;
  font-weight: 600;
}
.num_container > * {
  font-style: normal;
  display: inline-block;
  width: 1.8em;
  text-align: center;
  height: 1.6em;
  line-height: 1.6em;
}
.num_container > span {
  font-size: 0.8em;
  width: 3em;
}
.num_container > i {
  background: #f1f1f1;
  font-size: 1em;
}
.gray {
  color: rgb(176, 173, 173);
}
.none_shopcar{
    margin-top: 13em;
    text-align: center;
    color: #8a8a8a;
}
.none_shopcar>img{
    width: 4em;
    margin-bottom: .8em;
}
/* 改变多选框样式 */
input[type="checkbox"] {
  width: 1.5em;
  height: 1.5em;
  background-color: #fff;
  -webkit-appearance: none;
  border: 0.1em solid #c9c9c9;
  border-radius: 50%;
  outline: none;
}
input[type="checkbox"]:checked {
  background: url("/static/JD_img/duo.png") no-repeat center;
  background-size: 126%;
  border: none;
}
</style>