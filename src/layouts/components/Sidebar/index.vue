<script setup lang="ts">
import { useAppStore } from '@/stores/modules/app'

const appStore = useAppStore()
</script>

<template>
  <aside class="sidebar" :class="{ 'is-collapsed': appStore.collapsed }">
    <div class="sidebar-logo">
      <img src="/favicon.svg" alt="logo" />
      <span v-show="!appStore.collapsed">Xlio Admin</span>
    </div>
    <div class="sidebar-menu">Sidebar</div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: $sidebar-width;
  overflow: hidden;
  background-color: #eeedfe; // 占位色
  transition: width 0.25s;

  &.is-collapsed {
    width: $sidebar-collapsed-width;
  }
}

.sidebar-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: $header-height;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  background-color: #cecbf6; // 占位色

  img {
    width: 28px;
    height: 28px;
  }
}

.sidebar-menu {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}
</style>
