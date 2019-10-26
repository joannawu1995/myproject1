<template>
    <div>
        <el-container>
            <el-header>{{head}}</el-header>
            <el-main>
                    <router-view :user='user'></router-view>
            </el-main>
            <el-footer>
                <ul @click="clickTab">
                    <li :class="this.select=='微信'?'green':''">
                        <i :id="1" class="own-icon-weixintubiao-"></i>
                        <span :id="1">微信</span>
                    </li>
                    <li :class="this.select=='通讯录'?'green':''">
                        <i :id="2" class="own-icon-contact"></i>
                        <span :id="2">通讯录</span>
                    </li>
                    <li :class="this.select=='我的'?'green':''">
                        <i :id="3" class="own-icon-wo" style="font-weight:bold"></i>
                        <span :id="3">我的</span>
                    </li>
                </ul>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      head: "微信",
      select: "微信",
      user:[]
    };
  },
  methods: {
    clickTab() {
      if (event.target.nodeName == "I" || "SPAN") {
        switch (event.target.id) {
          case "1":
            this.select = "微信";
            this.head = '微信';
            this.$router.push("/tab/chat");
            break;
          case "2":
            this.select = "通讯录";
            this.head = '通讯录';
            this.$router.push("/tab/friendlist");
            break;
          case "3":
            this.select = "我的";
            this.head = '我的';
            this.$router.push("/tab/login");
            break;
        }
      }
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
.el-header,
.el-footer {
  background-color: #333;
  color: #333;
  text-align: center;
  line-height: 3.75em;
  color: white;
}
.el-main {
  color: #333;
  text-align: center;
  padding: 0;
}
.el-footer {
  border-top: 0.05em solid rgb(229, 229, 229);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
}
.el-footer > ul {
  display: flex;
  justify-content: space-around;
  line-height: 3em;
  color: gray;
}
i {
  height: 0.8em !important;
  font-size: 1.4em !important;
}
li {
  display: flex;
  flex-direction: column;
}
li > span {
  font-size: 0.7em;
}
.green {
  color: rgb(33, 174, 60);
}
</style>

