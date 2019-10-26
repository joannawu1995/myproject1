<template>
    <div class="container">
        <ul @click="turnTab">
            <li :class="select=='好友列表'?'selectd':''">好友列表</li>            
            <li :class="select=='添加好友'?'selectd':''">添加好友</li>
            <li :class="select=='申请列表'?'selectd':''">申请列表</li>
            <i class="point" v-if="point()!=0">{{point()}}</i>
        </ul>
        <router-view :data="friends" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "张三",
          head_url: "/static/head_img/1.jpg",
          isAdd: false
        },
        {
          id: "2",
          name: "李四",
          head_url: "/static/head_img/1.jpg",
          isAdd: true
        },
        {
          id: "3",
          name: "李四",
          head_url: "/static/head_img/2.jpg",
          isAdd: true
        },
        {
          id: "4",
          name: "刘备",
          head_url: "/static/head_img/3.jpg",
          isAdd: true
        },
        {
          id: "5",
          name: "Cindy",
          head_url: "/static/head_img/4.jpg",
          isAdd: true
        },
        {
          id: "6",
          name: "司马懿",
          head_url: "/static/head_img/5.jpg",
          isAdd: true
        }
      ],
      select: "好友列表"
    };
  },
  methods: {
    turnTab() {
      if (event.target.nodeName == "LI") {
        switch (event.target.innerHTML) {
          case "好友列表":
            this.$router.push("/tab/friendlist");
            this.select = "好友列表";
            break;
          case "申请列表":
            this.$router.push("/tab/addlist");
            this.select = "申请列表";
            break;
          case "添加好友":
            this.$router.push("/tab/addfriend");
            this.select = "添加好友";
            break;
        }
      }
    },
    point() {
      let num = 0;
      for (let item of this.friends) {
        if (!item.isAdd) num++;
      }
      return num;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
}
ul {
  display: inline-block;
  height: 450px;
  border: 2px solid black;
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  position: relative;
}
li {
  list-style: none;
  border: 2px solid black;
  border-radius: 6px;
  width: 66px;
  margin: 20px 10px;
  text-align: center;
  padding: 8px 14px;
  cursor: pointer;
  font-weight: bold;
  color: black;
}
li:hover,
.selectd {
  background: orange;
  color: white;
}
.point {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: orangered;
  position: absolute;
  top: 134px;
  right: 5px;
  font-size: 12px;
  font-style: normal;
  color: white;
  line-height: 18px;
  text-align: center;
}
</style>

