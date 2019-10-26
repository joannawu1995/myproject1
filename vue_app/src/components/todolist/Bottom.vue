<template>
    <ul class='select_container' @click="clickSelect">
        <li v-for="(item,i) in li" 
        :key=i 
        :class="select == item ? 'selected' : ''">{{item}}</li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      li: ["全部", "已完成", "未完成"]
    };
  },
  props: ["select"],
  methods:{
      clickSelect(e){
          if(e.target.nodeName=='LI')
            this.$emit('clickSelect',e.target.innerHTML)
      }
  }
};
</script>

<style scoped>
.select_container {
  list-style: none;
  border-radius: 5px;
  padding: 0;
  margin-top: 10px;
  width: 287px;
  height: 31px;
  border: 2px solid black;
  display: flex;
  justify-content: space-around;
  line-height: 31px;
}
li {
  cursor: pointer;
}
.select_container > li:hover,
button:hover,
.selected {
  color: rgb(42, 105, 231);
}
</style>
