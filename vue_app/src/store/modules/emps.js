// IP
const IP = "http://127.0.0.1:3111/";

// 引入ajax
import axios from "axios";

import Vue from 'vue'

// 创建store
export default {
    state: {
        num: 1,
        page: 1,
        rows: 10,
        maxPage: 0,
        emps: [],
        searchFlag: false
    },
    mutations: {
        // 计数器
        changeNum(state, obj) {
            state.num += obj.num;
            if (state.num <= 0) {
                state.num = 0;
            }
        },
        // 获取数据、页码
        getEmp(state, obj) {
            state.emps = obj.data;
            state.maxPage = obj.maxPage;
            state.page = obj.page;
        }
    },
    actions: {
        // 获取员工数据
        getEmps(context, obj) {
            let paramArr = {
                page: obj.page,
                rows: this.state.emps.rows,
            }
            if (obj.value && obj.key) {
                paramArr[obj.key] = obj.value
            }
            axios.get(IP + 'getEmps', { params: paramArr }).then(function (param) {
                context.commit({
                    type: 'getEmp',
                    data: param.data.rows,
                    maxPage: param.data.maxpage,
                    page: param.data.curpage
                })
            })
        },
        // 删除员工
        deletEmps(context, obj) {
            axios.get(IP + 'delEmps', { params: { id: obj.id } }).then(function (param) {
                context.dispatch({
                    type: 'getEmps',
                    page: context.state.page,
                    rows: 10
                })
            })
        },
        // 编辑员工
        editEmp(context, obj) {
            let { name, year, sex, money, city, marry, _id } = obj.msg;
            axios.get(IP + 'editEmp', { params: { name, year, sex, money, city, marry, _id } }).then(function (param) {
                context.dispatch({
                    type: 'getEmps',
                    page: context.state.page,
                    rows: 10
                })
            })
        },
        // 增加员工
        addNewEmp(context, obj) {
            console.log(obj.msg)
            let { name, year, sex, money, city, marry } = obj.msg;
            axios.get(IP + 'addEmp', { params: { name, year, sex, money, city, marry } }).then(function (param) {
                context.dispatch({
                    type: 'getEmps',
                    page: context.state.page,
                    rows: 10
                })
            })
        },
    }
}