<template>
    <div>
        <router-view :selectTabText="select" :shopCar="shopCar_shop"/>
        <footer>
            <ul @click="selectTab"> 
                <li :class="this.select=='首页'?'red':''" :id='1'>
                    <i :id='1' class="own-icon-weibiaoti1"></i>
                    <span :id='1'>首页</span>
                </li>
                <li :class="this.select=='分类'?'red':''" :id='2'>
                    <i :id='2' class="own-icon-fenlei"></i>
                    <span :id='2'>分类</span>
                </li>
                <li :class="this.select=='购物车'?'red':''" :id='3'>
                    <i :id='3' class="own-icon-03"></i>
                    <span :id='3'>购物车</span>
                </li>
                <i class="point" v-if='total_num()!=0'>{{total_num()}}</i>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      select: ["首页"],
      shopCar_shop: [
        {
          _id: "5b128ca9730f583d5b745ada",
          url: "/JD_img/pot1.jpg",
          info:
            "炊大皇 不粘锅 炒锅34cm无烟锅具 电磁炉燃气煤气灶明火通用 赠送木铲",
          price: "99.00",
          num: "1",
          isSelected: true
        }
      ]
    };
  },
  methods: {
    selectTab() {
      if (event.target.nodeName == "I" || "SPAN" || "LI") {
        switch (event.target.id) {
          case "1":
            this.select = ["首页"];
            this.$router.push("/tab/main");
            break;
          case "2":
            this.select = ["分类"];
            this.$router.push("/tab/search");
            break;
          case "3":
            this.select = ["购物车"];
            this.$router.push("/tab/shopCar");
            break;
        }
      }
    },
    total_num() {
      let total_num = 0;
      for (let item of this.shopCar_shop) {
        total_num+=parseInt(item.num);
      }
      return total_num;
    }
  },
  created() {
    switch (location.hash.split("/")[2]) {
      case "main":
        this.select = ["首页"];
        break;
      case "search":
        this.select = ["分类"];
        break;
      case "shopCar":
        this.select = ["购物车"];
        break;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  padding: 0;
}
footer {
  position: fixed;
  bottom: 0;
  background: white;
  height: 3.12em;
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: 2em;
  box-shadow: 5px 5px 5px black;
  border-top: 1px solid rgb(229, 229, 229);
}
footer span {
  font-size: 0.5em !important;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
ul > li {
  width: 4em;
  height: 4em;
  display: flex;
  flex-direction: column;
  text-align: center;
}
i {
  display: inline-block;
  height: 1em;
}
.own-icon-fenlei {
  font-size: 1.6em;
  height: 0.75em;
}
.red {
  color: red;
}
.point {
  display: inline-block;
  width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
  background: #e93b3d;
  color: white;
  text-align: center;
  line-height: 1.3em;
  font-style: normal;
  font-size: 0.7em;
  position: absolute;
  right: 3.5em;
  top: 0.1em;
}
</style>
