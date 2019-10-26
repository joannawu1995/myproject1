<template>
    <div class="room_container">
        <h3>{{cinema_name}}</h3>
        <ul class="room_ul">
            <li v-for="(item,i) in seatArr" :key="i">
                <div>
                    <img :src="seatUrl[i]" alt="">
                </div>
                <p class="room_name">{{item.cinema_room_name}}</p>
                <p class="start_room" @click="select_seat(item.cinema_room_name)">点击选座</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      seatUrl: [
        "/static/eyeCat/room1.jpg",
        "/static/eyeCat/room2.jpg",
        "/static/eyeCat/room3.jpg"
      ],
      cinema_name: ""
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.cinema_name = this.$route.query.c_name;
    this.$store.dispatch({
      type: "getRooms",
      id: this.id
    });
  },
  computed: {
    seatArr() {
      return this.$store.state.eyeCat.room;
    }
  },
  methods: {
    select_seat(r_name) {
      this.$router.push({
        name: "seat",
        query: {
          c_name: this.cinema_name,
          r_name,
          id: this.$store.state.eyeCat.roomId
        }
      });
    }
  }
};
</script>

<style>
.room_container {
  padding: 50px 0;
  box-sizing: border-box;
  background: url("/static/eyeCat/beijing.png");
  background-size: 500%;
  background-position: center;
  height: 650px;
}
.room_container > h3 {
  margin: 35px 30px;
  color: white;
}
.room_ul {
  display: flex;
  width: 850px;
  justify-content: space-around;
}
.room_ul > li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.room_ul > li > div {
  width: 190px;
  height: 190px;
  border: 4px solid white;
  margin: 20px 0;
}
.room_ul > li > div > img {
  width: 190px;
  height: 190px;
}
.room_ul > li:hover .start_room {
  background: rgb(255, 180, 0);
  color: rgb(223, 45, 45);
}
.room_name {
  margin-top: 20px;
  color: white;
}
.start_room {
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
