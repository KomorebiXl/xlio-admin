<script setup lang="ts">
import { Expand, Fold, Moon, Sunny } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/modules/app'

const appStore = useAppStore()
</script>

<template>
  <header class="header">
    <div class="header-left">
      <el-icon class="header-action" :size="20" @click="appStore.toggleCollapsed">
        <Expand v-if="appStore.collapsed" />
        <Fold v-else />
      </el-icon>
      <!-- 2.3 替换为 Breadcrumb -->
      <span>Breadcrumb</span>
    </div>
    <div class="header-right">
      <el-icon class="header-action" :size="18" @click="appStore.toggleDark">
        <Sunny v-if="appStore.isDark" />
        <Moon v-else />
      </el-icon>
      <el-avatar :size="28">U</el-avatar>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  padding: 0 16px;
  background-color: #e1f5ee; // 占位色
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-action {
  cursor: pointer;
}
</style>
