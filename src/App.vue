<script setup lang="ts">
import { useAppStore } from '@/stores/modules/app'

// 尽早初始化，保证 404 等不在 Layout 里的页面也能应用暗黑模式
useAppStore()
</script>

<template>
  <router-view />
</template>
