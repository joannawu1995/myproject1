<template>
  <div id="app">
    <router-view></router-view>

    <!-- 购物车 -->
    <!-- <shopping-car></shopping-car> -->

    <!-- 任务列表 -->
    <!-- <to-do-list></to-do-list> -->
    
    </div>
</template>

<script>
// 引入组件
import ShoppingCar from "./components/shoppingCar/ShoppingCar.vue";
import toDoList from "./components/todolist/Todolist.vue";
import Num from "./components/Num/Num.vue";

export default {
  name: "App",
  components: {
    /*------------ 购物车 ------------*/
    // ShoppingCar,

    /* ----------- 任务列表 ------------ */
    toDoList,

    /* ----------- 计步器 ------------ */
    Num
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  color: black;
}
*{
  margin: 0;
  padding: 0;
}
</style>
