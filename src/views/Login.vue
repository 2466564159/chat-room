<template>
  <el-input v-model="username" placeholder="请输入你的名称" />
  <el-button style="margin-top: 30px" @click="login">登录</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const login = () => {
  router.push({ path: '/home', query: { username: username.value } })
}
</script>