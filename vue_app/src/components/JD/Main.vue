<template>
    <div class="main_container">
        <header>
            <div class="top_container">
                <i class="own-icon-daohang-caidan"></i>
                <el-input
                    placeholder="六一宠娃必备礼物"
                    prefix-icon="el-icon-search"
                    v-model="search"
                    size="small"
                    @click.native="clickSearch">
                </el-input>
                <span class="login">登录</span>
            </div>
        </header>
        <div class="block" style="overflow-x:'auto'">
            <el-carousel height="12em" arrow='always'>
              <el-carousel-item v-for="(item,index) in bannerArr" :key="index">
                <img :src="'http://127.0.0.1:3000'+item" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        <img class="intro" src="/static/JD_img/gif3.gif" alt="">
        <ul class="intro_ul">
            <li v-for="(item,index) in tenTab" :key="index">
                <figure>
                    <img :src="'http://127.0.0.1:3000'+item.url" alt="">
                    <figcaption>
                        {{item.head}}
                    </figcaption>
                </figure>
            </li>
        </ul>
        <div class="news_container">
            <div class="news">
                <img src="/static/JD_img/jd-news-tit.png" alt="">
                <p><span>热</span>坑爹的笔记本，害得我好惨！</p>
                <span>更多</span>
            </div>
            <img class="everyday" src="/static/JD_img/everyday.jpg" alt="">
        </div>
    </div>
</template>

<script>
// 引入ajax
import axios from "axios";

export default {
  data() {
    return {
      bannerArr: [],
      tenTab: [],
      activeBg: "url('http://127.0.0.1:3000/JD_img/1.jpg')",
      search: ""
    };
  },
  props: ["selectTabText"],
  methods: {
    //   轮播
    banner() {
      let i = 0;
      setInterval(() => {
        i++;
        this.activeBg = `url(http://127.0.0.1:3000${this.bannerArr[i]})`;
        if (i == 9) {
          i = -1;
        }
      },4000);
    },
    // 点击搜索框
    clickSearch() {
      this.$router.push("/tab/search");
      this.selectTabText.splice(0, 1, "分类");
    }
  },
  created() {
    this.banner();
    // 请求轮播图
    axios.post("http://127.0.0.1:3111/get_banner").then(msg => {
      this.bannerArr = msg.data[0].bannerArr;
    });

    // 请求十个标签信息
    axios.post("http://127.0.0.1:3111/get_tenTab").then(msg => {
      this.tenTab = msg.data[0].tenTab;
    });
  }
};
</script>

<style>
body {
  padding-bottom: 3em;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.main_container {
  overflow: auto;
}
.main_container::-webkit-scrollbar{
    display: none;
}
header {
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-color: rega(0, 0, 0, 0);
}
.top_container {
  padding: 0 0.5em;
  display: flex;
  height: 3.12em;
  line-height: 3.12em;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#000),
    to(transparent)
  );
  background: -webkit-linear-gradient(#000, transparent);
  background: -o-linear-gradient(#000, transparent);
  background: linear-gradient(#000, transparent);
}
.own-icon-daohang-caidan {
  margin-right: 0.6em;
  color: white;
  font-size: 1.3em;
}
.main_container .el-input__inner {
  border-radius: 1.5em !important;
  padding: 0 2.5em;
}
.login {
  margin-left: 0.6em;
  width: 3em;
  color: white;
  text-align: center;
  font-size: 0.9em;
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
.intro {
  z-index: 2;
  position: relative;
  top: -1em;
  width: 100%;
  height: 7.3em;
  border-top-left-radius: 0.7em;
  border-top-right-radius: 0.7em;
}
.intro_ul {
  position: relative;
  top: -0.9em;
  display: flex;
  background: white;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 0.8em;
  padding: 0.4em;
}
.intro_ul li {
  width: 4em;
  text-align: center;
  margin: 0.5em 0;
}
figcaption {
  font-size: 0.8em;
  margin-top: 0.2em;
}
figure > img {
  width: 2.5em;
}
.news_container {
  position: relative;
  top: -0.2em;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.everyday {
  width: 100%;
  height: 7.3em;
}
.news {
  width: 90%;
  background: white;
  display: flex;
  align-items: center;
  padding: 0.4em 0.5em;
  border-radius: 0.6em;
}
.news > p,
.news > span {
  font-size: 0.8em;
}
.news > p > span {
  margin: 0 0.5em;
  color: red;
}
.news > p {
  flex-grow: 1;
}
.news > img {
  height: 1.1em;
}
.block img {
  height: 12em;
}
.el-carousel__indicator {
  padding: 0;
}
.el-carousel__button {
  width: 0.5em;
  height: 0.5em;
  margin: 0 0.4em;
}
.el-carousel__indicators {
  bottom: 1.3em;
}
.el-carousel__arrow--right,.el-carousel__arrow--left{
  display: none;
}
</style>
