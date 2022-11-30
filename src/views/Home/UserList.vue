<template>
  <ul>

    <li>
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

      <div>
        <h1>何博</h1>
      </div>
    </li>

    <li>
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

      <div>
        <h1>何博</h1>
      </div>
    </li>

    <li>
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

      <div>
        <h1>何博</h1>
      </div>
    </li>

    <li>
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />

      <div>
        <h1>何博</h1>
      </div>
    </li>
  </ul>

  <section>
    <div class="user-info">
      <div>
        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />
        <h1>何博</h1>
      </div>
      <el-button>发消息</el-button>
    </div>
  </section>
</template>

<style lang="less" scoped>
ul {
  width: 250px;
  background-color: #ece9e8;
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
      display: flex;
      align-items: center;

      h1 {
        font-weight: bolder;
        font-size: 16px;
        text-align: left;
      }
    }
  }

  .active {
    background-color: #c6c5c5;
  }
}


section {
  flex: 1;
  background-color: #f5f5f5;
  .user-info {
    margin: auto;
    margin-top: 120px;
    width: 330px;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
      .el-image {
        width: 60px;
        height: 60px;
        border-radius: 6px;
        margin-right: 10px;
      }
      h1 {
        font-size: 18px;
        font-weight: bold;
      }
    }

    .el-button {
      padding: 0 35px;
      color: #fff;
      background-color: #07c160;
      &:hover {
        background-color: #38cd7f;
      }
    }
  }
}
</style>