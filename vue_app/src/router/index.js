import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShoppingCar from '@/components/shoppingCar/ShoppingCar.vue'
import ToDoList from '@/components/todolist/Todolist.vue'

// ------------------------------- 二级路由 -----------------------------
// import s1 from '@/components/Num/active/s1'
// import s2 from '@/components/Num/active/s2'
// import s3 from '@/components/Num/active/s3'
// import s4 from '@/components/Num/active/s4'


// ----------------------------- 好友列表 ----------------------------
// import Tab from '@/components/friend/Tab'
// import AddFriend from '@/components/friend/AddFriend'
// import AddList from '@/components/friend/AddList'
// import FriendList from '@/components/friend/FriendList'

// --------------------------------- 京东 ------------------------------
// import Tab from '@/components/JD/Tab'
// import Main from '@/components/JD/Main'
// import Search from '@/components/JD/Search'
// import ShopCar from '@/components/JD/ShopCar'

// ---------------------------------- 微信 ------------------------------------
// import Tab from '@/components/WeChat/Tab'
// import Chat from '@/components/WeChat/Chat'
// import FriendList from '@/components/WeChat/FriendList'
// import Login from '@/components/WeChat/Login'
// import Reg from '@/components/WeChat/Reg'
// import My from '@/components/WeChat/My'

/* --------------------------------- 计数器 ------------------------------------ */
// import Num from '@/components/Num/Num'

/* --------------------------------- 猫眼选座 ------------------------------------ */
import Cinema from '@/components/eyeCat/Cinema'
import Room from '@/components/eyeCat/Room'
import Seat from '@/components/eyeCat/Seat'
import Container from '@/components/eyeCat/Container'


Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/num',
    //   name: 'Num',
    //   component: Num,
    //   children: [
    //     {
    //       path: 's1',
    //       component: s1
    //     },
    //     {
    //       path: 's2',
    //       component: s2
    //     },
    //     {
    //       path: 's3',
    //       component: s3
    //     },
    //     {
    //       path: 's4',
    //       component: s4
    //     }]
    // },
    // 好友列表
    // {
    //   path: '/tab',
    //   name: 'friend',
    //   component: Tab,
    //   children: [
    //     {
    //       path: 'addfriend',
    //       component: AddFriend
    //     },
    //     {
    //       path: 'addlist',
    //       component: AddList
    //     },
    //     {
    //       path: 'friendlist',
    //       component: FriendList
    //     }
    //   ]
    // },
    // 京东
    // {
    //   path: '/tab',
    //   name: 'JD',
    //   component: Tab,
    //   children: [
    //     {
    //       path: 'main',
    //       component: Main
    //     },
    //     {
    //       path: 'search',
    //       component: Search
    //     },
    //     {
    //       path: 'shopCar',
    //       component: ShopCar
    //     }
    //   ]
    // },
    // 微信
    // {
    //   path: '/tab',
    //   name: 'weChat',
    //   component: Tab,
    //   children: [
    //     {
    //       path: 'chat',
    //       component: Chat
    //     },
    //     {
    //       path: 'login',
    //       component: Login
    //     },
    //     {
    //       path: 'reg',
    //       component: Reg
    //     },
    //     {
    //       path: 'log',
    //       component: Login
    //     },
    //     {
    //       path: 'friendlist',
    //       component: FriendList
    //     },
    //     {
    //       path: 'my',
    //       component: My
    //     }
    //   ]
    // },
    // // 计数器
    // {
    //   path: '/num',
    //   component:Num
    // },
    // -------------------------------- 猫眼选座 -----------------------
    {
      path: '/container',
      component: Container,
      children: [
        {
          path: 'cinema',
          name:'cinema',
          component: Cinema
        },
        {
          path: 'room',
          name:'room',
          component: Room
        },
        {
          path: 'seat',
          name:'seat',
          component: Seat
        }
      ]
    }
  ]
})

