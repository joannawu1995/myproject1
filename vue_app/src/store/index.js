import Vue from 'vue'

Vue.use(VueX)
import VueX from 'vuex'

import emps from './modules/emps.js'
import eyeCat from './modules/eyeCat.js'

// 创建store
export default new VueX.Store({
    modules: {
        // 员工表格
        emps,
        eyeCat
    }
})