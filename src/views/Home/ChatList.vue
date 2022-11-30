<template>
  <ul>

    <li class="active">
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

      <div>
        <h1>何博</h1>
        <p>最近自己的复习是怎么安排的呀？看的单一知识点的学习还是结合一些项目内容的资料来边学习边做的！自己额外去做的项</p>
      </div>
    </li>

    <li>
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

      <div>
        <h1>何博</h1>
        <p>最近自己的复习是怎么安排的呀？看的单一知识点的学习还是结合一些项目内容的资料来边学习边做的！自己额外去做的项</p>
      </div>
    </li>

    <li>
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

      <div>
        <h1>何博</h1>
        <p>最近自己的复习是怎么安排的呀？看的单一知识点的学习还是结合一些项目内容的资料来边学习边做的！自己额外去做的项</p>
      </div>
    </li>

    <li>
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

      <div>
        <h1>何博</h1>
        <p>最近自己的复习是怎么安排的呀？看的单一知识点的学习还是结合一些项目内容的资料来边学习边做的！自己额外去做的项</p>
      </div>
    </li>
  </ul>

  <section>
    <h1>何博</h1>
    <div class="msg-list">
      <div class="other">
        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

        <p class="msg">
          最近自己的复习是怎么安排的呀？看的单一知识点的学习还是结合一些项目内容的资料来边学习边做的！自己额外去做的项目有去做没得，进展这些怎么样？对理论知识和自己项目相关的描述的话术这些都要一一去准备一下哟！招聘网站平时也可以时不时的去浏览一下，现在疫情，企业的招聘没有那么多，如果万一有遇到那种肯回复的企业自己也可以去聊一聊，遇到有些不知道怎么回复的消息也可以及时反馈给我们各个老师一起帮忙看看！
        </p>
      </div>
      <div class="me">
        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

        <p class="msg">
          最近自己的复习是怎么安排的呀？看的单一知识点的学习还是结合一些项目内容的资料来边学习边做的！自己额外去做的项目有去做没得，进展这些怎么样？对理论知识和自己项目相关的描述的话术这些都要一一去准备一下哟！招聘网站平时也可以时不时的去浏览一下，现在疫情，企业的招聘没有那么多，如果万一有遇到那种肯回复的企业自己也可以去聊一聊，遇到有些不知道怎么回复的消息也可以及时反馈给我们各个老师一起帮忙看看！
        </p>
      </div>

      <div class="me">
        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

        <p class="msg">
          最近自己的复习是怎么安排的呀？看的单一知识点的学习还是结合一些项目内容的资料来边学习边做的！自己额外去做的项目有去做没得，进展这些怎么样？对理论知识和自己项目相关的描述的话术这些都要一一去准备一下哟！招聘网站平时也可以时不时的去浏览一下，现在疫情，企业的招聘没有那么多，如果万一有遇到那种肯回复的企业自己也可以去聊一聊，遇到有些不知道怎么回复的消息也可以及时反馈给我们各个老师一起帮忙看看！
        </p>
      </div>
    </div>
    <div class="send-msg">
      <el-input v-model="textarea" type="textarea" resize="none" />
      <el-button>发送</el-button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const textarea = ref('')
</script>

<style lang="less" scoped>
ul {
  width: 250px;
  background-color: #e6e5e5;
  border: 1px solid #e2e2e2;

  li {
    width: 100%;
    padding: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    column-gap: 10px;

    &:hover {
      background-color: #d9d8d8;
    }

    .el-image {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
    }

    >div {
      flex-shrink: 1;
      overflow: hidden;

      h1 {
        font-weight: bolder;
        font-size: 15px;
        text-align: left;
      }

      p {
        line-height: 12px;
        padding-top: 11px;
        font-size: 12px;
        color: #abaaaa;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .active {
    background-color: #c6c6c5;
  }
}

section {
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: left;
    line-height: 65px;
    font-size: 20px;
    font-weight: bold;
    padding: 0 30px;
    border-bottom: 1px solid #e2e2e2;
  }

  .msg-list {
    flex: 1;
    padding: 0 30px;
    overflow-y: auto;
    .other {
      display: flex;
      flex-direction: row;
      width: 350px;
      padding: 15px 0;
      .el-image {
        flex-shrink: 0;
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
      .msg {
        &:hover {
          background-color: #ebebeb;
        }
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 19px;
        text-align: left;
        background-color: #fff;
      }
    }

    .me {
      margin-left: auto;
      display: flex;
      flex-direction: row-reverse;
      width: 350px;
      padding: 15px 0;
      .el-image {
        flex-shrink: 0;
        width: 35px;
        height: 35px;
        margin-left: 10px;
      }
      .msg {
        &:hover {
          background-color: #89d961;
        }
        border-radius: 8px;
        padding: 6px 10px;
        font-size: 14px;
        line-height: 19px;
        text-align: left;
        background-color: #95ec69;
      }
    }
  }

  .send-msg {
    height: 140px;
    position: relative;

    .el-textarea {
      height: 100%;

      > :deep(textarea) {
        height: 100%;
      }
    }

    .el-button {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #4ab673;
      padding: 0 30px;
      background-color: #e9e9e9;
      border: none;

      &:hover {
        background-color: #d2d2d2;
      }
    }
  }
}
</style>