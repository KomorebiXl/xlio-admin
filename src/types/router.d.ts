import 'vue-router'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    /** 菜单 / 面包屑标题 */
    title?: string
    /** 菜单图标（Element Plus 图标组件名） */
    icon?: string
    /** 为 true 时不在侧边栏显示 */
    hidden?: boolean
  }
}
