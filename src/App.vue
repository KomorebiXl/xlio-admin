<script setup lang="ts">
const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<template>
  <div class="app">
    <el-button type="primary" @click="toggleDark">切换暗黑模式</el-button>
  </div>
</template>

<style scoped lang="scss">
.app {
  padding: 24px;
  width: $sidebar-width;
}
</style>
