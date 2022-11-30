<template>
  <div class="home">
    <nav>
      <el-badge :is-dot="ChatRoundIsDot" @click="handleChatRound">
        <el-icon :class="{ active: activeNav == 'ChatRound' }">
          <ChatRound />
        </el-icon>
      </el-badge>
      <el-badge :is-dot="UserIsDot" @click="handleUser">
        <el-icon :class="{ active: activeNav == 'User' }">
          <User />
        </el-icon>
      </el-badge>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ChatRound, User } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const activeNav = ref('ChatRound')
const ChatRoundIsDot = ref(false)
const UserIsDot = ref(true)

const handleChatRound = () => {
  activeNav.value = 'ChatRound'
  ChatRoundIsDot.value = false
  router.push('/home/chatList')
}

const handleUser = () => {
  activeNav.value = 'User'
  UserIsDot.value = false
  router.push('/home/userList')
}
</script>

<style lang="less" scoped>
.home {
  width: 870px;
  height: 610px;
  display: flex;
  flex-direction: row;
  border: 1px solid #e2e2e2;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);

  nav {
    width: 55px;
    background-color: #2e2e2e;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    row-gap: 18px;

    .el-badge {
      cursor: pointer;
    }

    .el-icon {
      font-size: 22px;
      color: #6c6c6c;
    }

    .active {
      color: #07c160;
    }
  }
}
</style>
