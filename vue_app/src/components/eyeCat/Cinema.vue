<template>
    <div class="cinema_container">
        <h3>影院一览</h3>
        <ul class="cinema_ul">
            <li v-for="(item,i) in cinemaArr" :key="i">
                <div><img :src='cinemaUrl[i]' alt=""></div>
                <p class="cinema_name">{{item.cinema_name}}</p>
                <p @click="enterCinema(item.room[0],item.cinema_name)" class="start_cinema" >点击进入影院</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cinemaUrl: [
        "/static/eyeCat/xingmei.jpg",
        "/static/eyeCat/wanda.jpg",
        "/static/eyeCat/cgv.jpg"
      ]
    };
  },
  computed: {
    cinemaArr() {
      return this.$store.state.eyeCat.cinema;
    }
  },
  created() {
    this.$store.dispatch({
      type: "getCinemas"
    });
  },
  methods: {
    enterCinema(id, c_name) {
      this.$router.push({ name: "room", query: { id, c_name } });
    }
  }
};
</script>

<style>
.cinema_container {
  padding: 50px 0;
  box-sizing: border-box;
  background: url("/static/eyeCat/beijing.png");
  background-size: 500%;
  background-position: center;
  height: 650px;
}
.cinema_container > h3 {
  margin: 35px 30px;
  color: white;
}
.cinema_ul {
  display: flex;
  width: 850px;
  justify-content: space-around;
}
.cinema_ul > li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cinema_ul > li > div {
  width: 190px;
  height: 190px;
  border: 4px solid white;
  margin: 20px 0;
}
.cinema_ul > li > div > img {
  width: 190px;
  height: 190px;
}
.cinema_ul > li:hover .start_cinema {
  background: rgb(255, 180, 0);
  color: rgb(223, 45, 45);
}

.cinema_name {
  margin-top: 20px;
  color: white;
}
.start_cinema {
  margin: 30px 0;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: rgb(223, 45, 45);
  color: white;
  width: 140px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
