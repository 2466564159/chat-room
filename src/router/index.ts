import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home/Home.vue'),
      children: [
        {
          alias: '',
          path: 'chatList',
          component: () => import('@/views/Home/ChatList.vue')
        },
        {
          path: 'userList',
          component: () => import('@/views/Home/UserList.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue')
    }
  ]
})