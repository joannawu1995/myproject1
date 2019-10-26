<template>
    <div class='data_container'>
        <ul class='data_container_ul' @click="clickChange">
            <li v-for="(item,index) in data" 
            :key='index' 
            :class="item.isDone==false?'no_do':'done'"
            :id="item.id"
            >{{item.event}}</li>
        </ul>
        <p>{{data.length}} /{{allData.length}} </p>
    </div>
</template>

<script>
export default {
  props: ["data", "allData"],
  methods: {
    clickChange(e) {
      if (e.target.nodeName == "LI") 
        this.$emit("clickChange", e.target.id);
    }
  }
};
</script>

<style scoped>
.data_container {
  border-radius: 5px;
  margin-top: 10px;
  width: 287px;
  height: 350px;
  border: 2px solid black;
  position: relative;
}
ul {
  list-style: none;
}
.data_container_ul > li {
  margin: 10px 0;
}

.no_do {
  color: orangered;
}
.done {
  color: green;
}
p {
  position: absolute;
  bottom: -5px;
  right: 15px;
}
</style>
