<template>
     <div class="right_container">
        <h3>好友列表</h3>
        <ul>
            <li  v-for="(item,index) in data" :key="index"  class="had_friend_li">
                <p><img :src='item.head_url'/></p>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['data'],
    methods:{

    }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.right_container > h3 {
  box-sizing: border-box;
  text-align: center;
  padding: 15px 10px;
  width: 100%;
  border-bottom: 2px solid black;
}
.right_container {
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
.right_container > ul::-webkit-scrollbar,
.friend_ul::-webkit-scrollbar {
  width: 4px;
}
.right_container > ul::-webkit-scrollbar-thumb,
.friend_ul::-webkit-scrollbar-thumb {
  background-color: rgb(206, 204, 204);
}
.right_container > ul {
  overflow: auto;
  width: 100%;
}
.had_friend_li {
  display: flex;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid black;
}
.had_friend_li:hover {
  background: #eee;
  cursor: pointer;
}
.had_friend_li > p:last-child {
  margin-left: 20px;
}
.had_friend_li > p:first-child {
  border: 1px solid #eee;
  border-radius: 50%;
    margin: 0 10px;
}
.had_friend_li > p:first-child,
.had_friend_li > p > img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.friend_li > p > button {
  cursor: pointer;
  font-size: 14px;
  padding: 3px 5px;
  margin-left: 10px;
}
</style>
