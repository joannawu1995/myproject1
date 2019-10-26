// IP
const IP = "http://127.0.0.1:3111/";

// 引入ajax
import axios from "axios";

import Vue from 'vue'

export default {
    state: {
        cinema: [],
        room: [],
        roomId: '',
        seatData: [],
        allSeat: []
    },
    mutations: {
        // 获取影院
        getCinema(state, obj) {
            state.cinema = obj.cinemaData;
        },
        // 获取放映厅
        getRoom(state, obj) {
            state.room = obj.roomData;
            state.roomId = obj.roomId;
        },
        // 获取座位
        getSeat(state, obj) {
            state.seatData = obj.seatData;
            state.allSeat = obj.allSeatData;
        }
    },
    actions: {
        // 获取影院
        getCinemas(context) {
            axios.get(IP + 'getCinema').then(function (param) {
                context.commit({
                    type: 'getCinema',
                    cinemaData: param.data
                })
                console.log(param.data)
            })
        },
        // 获取放映厅
        getRooms(context, obj) {
            axios.get(IP + 'getRoom', { params: { id: obj.id } }).then(function (param) {
                context.commit({
                    type: 'getRoom',
                    roomData: param.data.index,
                    roomId: param.data._id
                })
            })
        },
        // 获取座位
        getSeats(context, obj) {
            let room_name = obj.room_name
            axios.get(IP + 'getSeat', { params: { id: obj.id } }).then(function (param) {
                let newData = [];
                for (let item of param.data.index) {
                    if (item.cinema_room_name == room_name) {
                        newData.push(item)
                    }
                }
                context.commit({
                    type: 'getSeat',
                    seatData: newData[0].cinema_seat,
                    allSeatData: param.data
                })
            })
        },
        // 买票
        buyTicket(context, obj) {
            let id = this.state.eyeCat.allSeat._id;
            let room_name = obj.room_name;
            let allSeat = this.state.eyeCat.allSeat.index;
            for (let k = 0; k < allSeat.length; k++) {
                for (let j = 0; j < obj.select.length; j++) {
                    if (allSeat[k].cinema_room_name == obj.room_name) {
                        allSeat[k].cinema_seat[obj.select[j].index - 1][obj.select[j].i - 1] = '2';
                    }

                }
            }
            axios.get(IP + 'buyTicket', { params: { newData: JSON.stringify(this.state.eyeCat.allSeat.index), id: this.state.eyeCat.allSeat._id } }).then(function (param) {
                context.dispatch({
                    type: "getSeats",
                    id,
                    room_name
                })
            })
        },
    }
}