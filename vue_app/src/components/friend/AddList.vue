<template>
    <div class="center_container">
        <h3>好友请求</h3>
        <ul class="friend_ul">
            <li v-for="(item,index) in data" :key="index" v-if='!item.isAdd' class="friend_li">
                <p>
                    <img :src="item.head_url" alt="" />
                </p>
                <div>
                    <span>{{item.name}}</span>
                    <p class="tips">请求添加你为好友</p>
                </div>
                <p>
                    <button class="agree" :id='item.id' @click="addFriend">接受</button>
                    <button class="refuse" :id='item.id' @click="refuseFriend">拒绝</button>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    addFriend() {
      for (let item of this.data) {
        if (item.id == event.target.id)
             item.isAdd = true;
      }
    },
    refuseFriend() {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].id == event.target.id) 
            this.data.splice(i, 1);
      }
    }
  }
};
</script>

<style scoped>
/* 中间 */
* {
  padding: 0;
  margin: 0;
}
.center_container {
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
.center_container {
  padding: 0;
  align-items: flex-start;
}
.friend_ul {
  width: 100%;
  overflow: auto;
}
.friend_ul::-webkit-scrollbar {
  width: 4px;
}
.friend_ul::-webkit-scrollbar-thumb {
  background-color: rgb(206, 204, 204);
}
.friend_li {
  padding: 10px 15px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
}
.friend_li > p:first-child,
.had_friend_li > p:first-child {
  border: 1px solid #eee;
  border-radius: 50%;
}
.friend_li > p > img,
.friend_li > p:first-child,
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
.tips {
  margin-top: 5px;
  color: gray;
  font-size: 14px;
}
.right_container {
  width: 280px;
  padding: 0;
  align-items: flex-start;
}
.left_container > h3,
.center_container > h3,
.right_container > h3 {
  box-sizing: border-box;
  text-align: center;
  padding: 15px 10px;
  width: 100%;
  border-bottom: 2px solid black;
}
</style>
