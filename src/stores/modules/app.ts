import { useDark, useStorage } from '@vueuse/core'

export const useAppStore = defineStore('app', () => {
  /** 侧边栏是否折叠，持久化到 localStorage */
  const collapsed = useStorage('xlio-sidebar-collapsed', false)

  /** 暗黑模式：自动给 <html> 切换 .dark 类，并持久化 */
  const isDark = useDark({ storageKey: 'xlio-color-scheme' })

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  const toggleDark = () => {
    isDark.value = !isDark.value
  }

  return { collapsed, isDark, toggleCollapsed, toggleDark }
})
