<script setup lang="ts">
import {GlobalStore} from '@/store'
const global = GlobalStore();
</script>

<template>
<div class="token">
  {{global.token}}
</div>
</template>

<style lang="less" scoped>
.token{
  color: @primary-color;
}
</style>
