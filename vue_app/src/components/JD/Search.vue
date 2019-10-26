<template>
    <div class="search_container">
        <header class="search_top_container">
            <i class="el-icon-arrow-left" @click='clickGo'></i>
            <el-input
                placeholder="搜你想要的…"
                v-model="queryParam"
                prefix-icon="el-icon-search"
                size="small">
            </el-input>
            <button @click="searchShop">搜索</button>
        </header>
        <div>
            <ul>
                <li v-if="shopArr.length!=0" v-for="(item,index) in shopArr" :key="index" class="shop_container">
                    <div class="shop_img">
                        <img :src="'http://127.0.0.1:3000/'+item.url" alt="">
                    </div>
                    <div class="shop_info">
                        <p>{{item.info.length>33?item.info.slice(0,33)+'…':item.info}}</p>
                        <div class="shop_money_btn">
                            <p class="shop_money">
                                <span>￥</span>
                                <span>{{item.price.split('.')[0]}}.</span>
                                <span>{{item.price.split('.')[1]}}</span>
                            </p>
                            <p class="buy_btn" :id="item._id" @click="buy_shop">加购</p>
                        </div>
                    </div>
                </li>
                <li class="search_tips" v-if="shopArr.length==0">
                    <p>热门搜索</p>
                    <ul>
                        <li v-for="(item,index) in search_tips" :key="index">{{item}}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// 引入ajax
import axios from "axios";

export default {
  data() {
    return {
      shopArr: [],
      queryParam: "",
      search_tips: [
        "不锈钢蒸锅",
        "双卡双待手机",
        "夏日连衣裙",
        "电脑",
        "面膜",
        "剃须刀",
        "照片扫描仪",
        "小米笔记本",
        "蓝球",
        '扫地机器人'
      ]
    };
  },
  props: ["selectTabText", "shopCar"],
  created() {
    if (location.hash.indexOf("?") >= 0) {
      let queryText = location.hash
        .split("?")
        .splice(1, 2)
        .join("")
        .split("&");
      for (let item of queryText) {
        this.queryParam += item.split("=")[1];
      }
      this.queryParam = decodeURI(this.queryParam);
      axios
        .post("http://127.0.0.1:3111/search", { info: this.queryParam })
        .then(msg => {
          this.shopArr = msg.data;
        });
    }
  },
  methods: {
    // 搜索
    searchShop() {
      location.hash = `/tab/search?0=${this.queryParam}`;
      axios
        .post("http://127.0.0.1:3111/search", { info: this.queryParam })
        .then(msg => {
          this.shopArr = msg.data;
        });
    },
    // 返回
    clickGo() {
      this.$router.push('/tab/main');
    },
    // 加入购物车
    buy_shop() {
      for (let item of this.shopArr) {
        if (item._id == event.target.id) {
          this.shopCar.push(item);
        }
      }
      this.$router.push('/tab/shopCar');
      this.selectTabText.splice(0,1,"购物车");
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
body {
  padding-bottom: 3em;
}
.search_container {
  overflow: auto;
}

.search_container::-webkit-scrollbar{
    display: none;
}
.search_top_container {
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  padding: 0 0.5em;
  display: flex;
  height: 3.12em;
  line-height: 3.12em;
  border-bottom: 1px solid rgb(229, 229, 229);
  background: white;
}
.search_top_container + div {
  margin-top: 3.12em;
}
.top_container + div {
  border-top: 1px solid rgb(229, 229, 229);
}
.search_top_container .el-icon-arrow-left {
  margin-top: 0.55em;
  margin-right: 0.6em;
  font-size: 1.5em;
  font-weight: bold;
}
.search_top_container .el-input__inner {
  border-radius: 1.5em !important;
  padding: 0 2.5em;
}
button {
  margin-left: 0.6em;
  margin-top: 0.75em;
  width: 4.3em;
  height: 2.3em;
  border: #e93b3d;
  border-radius: 0.3em;
  color: #fff;
  background: #e93b3d;
}
.shop_container {
  display: flex;
  padding: 0.4em;
}
.shop_img > img {
  width: 7em;
  height: 7em;
}
.shop_img {
  width: 7em;
  height: 7em;
  margin-right: 0.5em;
}
.shop_info {
  width: 14.5em;
  padding-bottom: 0.8em;
  border-bottom: 1px solid rgb(229, 229, 229);
}
.shop_info > p {
  line-height: 1.4em;
  width: 16.2em;
  margin-top: 0.6em;
  height: 3em;
  font-size: 0.9em;
}
.shop_money_btn {
  display: flex;
  justify-content: space-between;
  margin-top: 1.2em;
  align-items: center;
}
.shop_money_btn > .buy_btn {
  width: 4.5em;
  height: 2.2em;
  line-height: 2.4em;
  background: #e93b3d;
  font-size: 0.8em;
  border-radius: 0.2em;
  color: white;
  text-align: center;
  margin-right: 0.4em;
}
.shop_money {
  color: #f23030;
  font-size: 0.9em;
}
.shop_money > span:nth-child(2) {
  font-size: 1.3em;
}
.search_tips {
  padding: 1em;
}
.search_tips > p {
  font-size: 1em;
  margin-bottom: 0.8em;
}
.search_tips > ul {
  font-size: 0.7em;
  display: flex;
  flex-wrap: wrap;
}
.search_tips > ul > li {
  background: #f0f2f5;
  padding: 0.4em 0.8em;
  margin-right: 1em;
  margin-bottom: 1em;
  border-radius: 0.3em;
  color: #0c0707;
}
</style>
