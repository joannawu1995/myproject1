<template>
    <div class="msg_container">
        <div v-if="user.length!=0">
            <ul class="chat_ul">
                <li v-for='(item,index) in chatBox' :key="index" :class="item.name==user[0].name?'my':'other'">
                    <p v-if="item.name!=user[0].name" id="other_name">{{item.name}}</p>
                    <p id="msg_box" :class="item.name==user[0].name?'my_msg':'other_msg'">{{item.msg}}</p>
                    <p v-if="item.name==user[0].name" id="my_name">{{item.name}}</p>
                </li>
            </ul>
            <p class="input_box">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <span @click="senMsg">发送</span>
            </p>
        </div>
        <p  v-if="user.length==0" class="please_log">请先登录 . . .</p>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.use(VueX)

// IP
const IP = "http://127.0.0.1:3111/";

// 引入ajax
import axios from "axios";

// 引入vuex
import VueX from 'vuex'


const store = new VueX.Store({
  state:{
    name:'张三',
    age:'22'
  },
  mutations:{
    test(s,obj){
      s.name=obj.name
      console.log(s)
    }
  }
})
store.commit({
  type:'test',
  name:'王五'
})

export default {
  data() {
    return {
      chatBox: [],
      input: ""
    };
  },
  props: ["user"],
  methods: {
    senMsg() {
      axios
        .post(IP + "sendMsg", { msg: this.input, name: this.user[0].name })
        .then(msg => {});
      this.input = "";
    },
    getMsg() {
      setInterval(() => {
        axios.post(IP + "chat").then(msg => {
          this.chatBox = msg.data
        });
      }, 50);
    }
  },
  created() {
    this.getMsg();
  }
};
</script>

<style>
li {
  list-style: none;
}
* {
  margin: 0;
  padding: 0;
}
.input_box {
  height: 3em;
  position: fixed;
  bottom: 3.75em;
  left: 0;
  right: 0;
  background: #eee;
  padding: 0.5em;
  display: flex;
  align-items: center;
}
.input_box > span {
  width: 3.4em;
  padding: 0.4em 0;
  border-radius: 0.4em;
  border: 0.1em solid rgb(150, 149, 149);
  color:rgb(93, 93, 93);
  margin-left: 0.4em;
}
.msg_container {
  padding: 0.6em;
  overflow: auto;
  height: 28.95em;
}
.chat_ul > li {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.chat_ul > li {
  margin-bottom: 0.8em;
}
#other_name,
#my_name {
  width: 3.4em;
  height: 1.8em;
  line-height: 1.8em;
  border-radius: 0.4em;
  border: .08em solid rgb(150, 149, 149);
  color:rgb(93, 93, 93);
  padding: 0 .2em;
}
.my {
  justify-content: flex-end;
}
.other {
  justify-content: flex-start;
}
#msg_box {
  border-radius: 0.4em;
  border: 1px solid rgb(229, 229, 229);
  height: 1.8em;
  line-height: 1.8em;
  padding: 0.2em 0.8em;
  margin: 0 0.6em;
}
.my_msg {
  background: greenyellow;
}
.other_msg{
    background: #eee;
}
.please_log{
    margin-top: 8em;
}
</style>
