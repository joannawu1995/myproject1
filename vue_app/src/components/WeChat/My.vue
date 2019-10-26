<template>
    <div class="my_container">
        <ul class="my_list">
            <li>
              <p v-if="user.length!=0">昵称：{{user[0].name}}</p>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li>
              <p>钱包</p>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li>
              <p>收藏</p>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li>
              <p>相册</p>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li>
              <p>卡包</p>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li>
              <p>表情</p>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li>
              <p>设置</p>
              <i class="el-icon-arrow-right"></i>
            </li>
        </ul>
    </div>
</template>

<script>


export default {
  data() {
    return {
      name: ""
    };
  },
  props: ["user"]
};
</script>

<style>
.my_list > li {
  background: white;
  text-align: left;
  border-bottom: 0.05em solid rgb(229, 229, 229);
  padding: 1em 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.my_list > li > i {
  color: gray;
}
</style>
