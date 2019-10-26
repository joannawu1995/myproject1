<template>
    <div class="eye_container">
        <header>
            <nav>
                <!-- 导航左 -->
                <ul class="nav_l">
                    <li class="logo">
                        <img src="/static/eyeCat/logo_s.png" alt="">
                    </li>
                    <li class="nav_h nav_h_1">
                        <a>首页</a>
                    </li>
                    <li class="nav_h">
                        <a>电影</a>
                    </li>
                    <li class="nav_h nav_h_3">
                        <router-link  to="/container/cinema">影院</router-link>
                    </li>
                </ul>
            </nav>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods:{
        
    }
};
</script>

<style>
a {
  text-decoration: none;
  font-family: sans-serif;
  color: rgb(51, 51, 51);
  cursor: pointer;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.eye_container {
  margin: 5px;
  border: 2px solid rgb(172, 172, 172);
  width: 850px;
  height: 650px;
  border-radius: 5px;
  position: relative;
}
/* 顶部导航 */
header {
  width: 850px;
  position: fixed;
  top: 7px;
  background: white;
  z-index: 3;
}
nav {
  padding: 0 20px;
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d8d8d8;
}
nav a {
  font-size: 16px;
}
.nav_l {
  display: flex;
  line-height: 50px;
}
/* 导航左 */
.logo {
  line-height: 50px;
}
.logo > img {
  height: 32px;
  margin-top: 10px;
}
.welcome,
.welcome + i {
  font-size: 14px;
  margin-left: 2px;
  cursor: default;
}
.combo:hover ol {
  display: block;
}
.nav_h > a {
  display: block;
  padding: 0 15px;
}
.nav_h > a:hover,
.nav > a:focus {
  background: rgb(239, 66, 59);
}
.nav_h:hover a {
  color: white;
}
.nav_h_1 {
  margin-left: 30px;
}
.nav_h_3 > a {
  background: rgb(239, 66, 59);
  color: white;
}
</style>
