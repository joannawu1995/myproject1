<template>
    <div>
        <Top @clickAdd="clickAdd"></Top>
        <Center :data='sendData()' :allData="this.list_content" @clickChange="clickChange"></Center>
        <Bottom @clickSelect="clickSelect"  :select="select_item"></Bottom>
    </div>
</template>

<script>
// 引入组件
import Top from "./Top.vue";
import Center from "./Center.vue";
import Bottom from "./Bottom.vue";

export default {
  components: {
    Top,
    Center,
    Bottom
  },
  data() {
    return {
      list_content: [
        {
          id: "1",
          event: "打扫",
          isDone: true
        },
        {
          id: "2",
          event: "购物",
          isDone: true
        },
        {
          id: "3",
          event: "去海边",
          isDone: false
        }
      ],
      select_item: "全部"
    };
  },
  methods: {
    //   添加任务
    clickAdd(value) {
      this.list_content.push({
        id: this.list_content.length + 1,
        event: value,
        isDone: false
      });
    },
    // 改变颜色
    clickChange(id) {
      for (let item of this.list_content) {
        if (item.id == id) 
            item.isDone = !item.isDone;
      }
    },
    // 发送数据
    sendData() {
      return this.list_content.filter(item => {
        switch (this.select_item) {
          case "全部":
            return item;
          case "已完成":
            return item.isDone;
          case "未完成":
            return !item.isDone;
        }
      });
    },
    // 切换标签
    clickSelect(select) {
      this.select_item = select;
    }
  }
};
</script>

<style>
</style>
