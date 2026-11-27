<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import Header from './components/Header/index.vue'
import AppMain from './components/AppMain.vue'
</script>

<template>
  <div class="layout">
    <Sidebar />
    <div class="layout-right">
      <Header />
      <AppMain />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.layout-right {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
}
</style>
