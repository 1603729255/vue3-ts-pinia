<template>
<div class="page1">
  我是page1{{userInfo.token}}
  <van-icon name="chat-o" />
  <van-button type="success">成功按钮</van-button>
</div>
</template>

<script lang="ts" setup>
import {userStore} from '@/store'

const userInfo = userStore();

</script>

<style lang="less" scoped>
.page1{
  width: 300px;
  height: 200px;
  color: @primary-color;
  margin: auto;
  border: 1px solid #ccc;
}
</style>