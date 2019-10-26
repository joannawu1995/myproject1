<template>
    <div>
        <ul class="friendList_ul">
            <li v-for="(item,index) in data" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
// IP
const IP = "http://127.0.0.1:3111/";

// 引入ajax
import axios from "axios";

export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    //   getData()
  },
  created() {
    // function getData() {
    axios.post(IP + "getData").then(msg => {
      this.data = msg.data;
    });
    // }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.friendList_ul {
  padding: 0.5em 0.8em;
}
.friendList_ul > li {
  text-align: left;
  border-bottom: 0.05em solid rgb(229, 229, 229);
  padding: 1em 2em;
}
</style>
