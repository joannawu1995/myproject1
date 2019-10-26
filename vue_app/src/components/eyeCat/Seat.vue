<template>
    <div class="seat_container">
        <div class="tside">
            <ul class="seat_info">
                <li v-for="(item,i) in seat_info" :key="i">
                    <img :src="item.url" alt="">
                    <span>{{item.seat}}</span>
                </li>
            </ul>
            <div class="seat_box">
                <p class="screen"><img src="/static/eyeCat/screen_bg.png"></p>
                <p class="screen_tips">银幕中央</p>
                <ul class="seat_ul" v-for="(item,index) in seatData" :key="index">
                    <span class="seat_num">{{index+1}}</span>
                    <li @click="select_seat(index+1,i+1)" v-for="(row,i) in item" :key="i" >
                        <img v-if="row==0" :src="seat_info[0].url" :checked=false :id="index+''+i" :name='row'>
                        <img v-if="row==2" :src="seat_info[1].url" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="bside">
            <div class="cinema_info">
                <p>影院：{{cinema_name}}</p>
                <p>影厅：{{room_name}}</p>
                <p>场次：<span>周五 6月15 18:30</span></p>
            </div>
            <div class="select_seat">
                <div class="select_seatArr">
                    <div>
                        <h3 class="seat_h3">座位：<span :class="tips_color?'red':''">（最多可购买4张）</span></h3>
                        <ul class="select_seat_ul">
                            <li v-for="(item,i) in selectedArr" :key="i">{{item.index}}排{{item.i}}座</li>
                        </ul>
                    </div>
                </div>
                <p class="buy_ticket" @click="buy_ticket">立即购票</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cinema_name: "",
      room_name: "",
      seat_info: [
        { seat: "可选座位", url: "/static/eyeCat/seat_01.png" },
        { seat: "已售座位", url: "/static/eyeCat/seat_02.png" },
        { seat: "已选座位", url: "/static/eyeCat/seat_03.png" }
      ],
      selectedArr: [],
      id: "",
      tips_color: false
    };
  },
  methods: {
    // 点击选中或取消
    select_seat(index, i) {
      let seat = event.target;
      if (seat.name == 0) {
        if (!seat.checked && this.selectedArr.length < 4) {
          seat.src = this.seat_info[2].url;
          this.selectedArr.push({ id: seat.id, index, i });
        } else {
          seat.src = this.seat_info[0].url;
          this.selectedArr = this.selectedArr.filter(
            item => item.id != seat.id
          );
        }
        seat.checked = !seat.checked;
      }
      this.tips_color = this.selectedArr.length == 4 ? true : false;
    },
    // 确认购买
    buy_ticket() {
      console.log(this.selectedArr);
      console.log(this.$store.state.eyeCat.seatData);
      this.$store.dispatch({
        type: "buyTicket",
        select: this.selectedArr,
        room_name: this.room_name
      });
      this.selectedArr = [];
    }
  },
  created() {
    this.cinema_name = this.$route.query.c_name;
    let id = this.$route.query.id;
    this.id = id;
    let room_name = this.$route.query.r_name;
    this.room_name = room_name;
    this.$store.dispatch({
      type: "getSeats",
      id,
      room_name
    });
  },
  computed: {
    seatData() {
      return this.$store.state.eyeCat.seatData;
    }
  }
};
</script>

<style>
.seat_container {
  padding: 50px 0;
  box-sizing: border-box;
  height: 650px;
}
.seat_container > h3 {
  margin: 35px 30px;
  color: white;
}
.seat_info {
  display: flex;
  margin: 20px auto;
}
.seat_info > li {
  display: flex;
  align-items: center;
  margin: 0 20px;
}
.seat_info > li > img {
  width: 22px;
  height: 22px;
  margin-right: 7px;
}
.tside {
  background: rgb(248, 248, 248);
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bside {
  width: 100%;
  height: 154px;
  background: rgb(248, 248, 248);
  padding: 25px;
  box-sizing: border-box;
  display: flex;
}
.seat_box {
  background: white;
  width: 800px;
  height: 380px;
  border: 2px solid rgb(220, 220, 220);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: auto; */
}
.screen > img {
  width: 280px;
  margin-bottom: 15px;
}
.screen_tips {
  margin-bottom: 25px;
  color: gray;
}
.seat_ul {
  display: flex;
}
.seat_ul > li {
  margin: 4px 2px;
  width: 22px;
  height: 22px;
}
.seat_ul > li > img {
  width: 22px;
  height: 22px;
}
.hidden {
  visibility: hidden;
}
.seat_num {
  /* margin-right: 20px; */
  font-size: 14px;
  flex-grow: 1;
  position: relative;
  right: 30px;
  top: 7px;
}
.cinema_info {
  width: 230px;
  box-sizing: border-box;
  border-right: 2px solid rgb(220, 220, 220);
  margin-left: 10px;
}
.cinema_info > p {
  margin-bottom: 18px;
}
.cinema_info > p > span {
  color: red;
}
.buy_ticket:hover {
  background: rgb(255, 180, 0);
  color: rgb(223, 45, 45);
}
.select_seat {
  position: relative;
  width: 560px;
  height: 104px;
}
.buy_ticket {
  font-weight: bold;
  margin: 30px 0;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: rgb(223, 45, 45);
  color: white;
  width: 100px;
  font-size: 14px;
  border-radius: 4px;
  position: absolute;
  bottom: -28px;
  right: 5px;
  cursor: pointer;
}
.select_seatArr {
  margin-left: 30px;
}
.select_seat_ul {
  display: flex;
}
.select_seat_ul > li {
  margin-top: 15px;
  height: 28px;
  width: 64px;
  text-align: center;
  line-height: 30px;
  border: 2px solid rgb(223, 45, 45);
  color: rgb(223, 45, 45);
  border-radius: 4px;
  margin-right: 18px;
  font-size: 14px;
}
.seat_h3 > span {
  font-weight: normal;
  font-size: 14px;
  color: gray;
}
.seat_h3 > .red {
  color: red;
}
</style>
