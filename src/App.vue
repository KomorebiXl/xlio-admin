<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

const btnRef = ref()

const handleClick = () => {
  console.log('click', btnRef.value)
}
</script>

<template>
  <HelloWorld/>
  <el-button ref="btnRef" @click="handleClick">aaaa</el-button>
</template>
