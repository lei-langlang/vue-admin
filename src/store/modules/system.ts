import { defineStore } from 'pinia'

interface Doc extends Document {
  startViewTransition: (arg: unknown) => Tran
}
type Tran = { ready: Promise<void> }

export const useSystemStore = defineStore('system', {
  state: () => {
    return {
      isDark: false,
    }
  },
  actions: {
    toggleDark(isDark: boolean, e: MouseEvent) {
      // 执行切换主题的操作
      const transition = (document as Doc).startViewTransition(() => {
        // 动画过渡切换主题色
        this.isDark = isDark
        document.documentElement.classList.toggle('dark')
      })

      // document.startViewTransition 的 ready 返回一个 Promise
      transition.ready.then(() => {
        // 获取鼠标的坐标
        const { clientX, clientY } = e

        // 计算最大半径
        const radius = Math.hypot(
          Math.max(clientX, innerWidth - clientX),
          Math.max(clientY, innerHeight - clientY),
        )

        const clipPath = [
          `circle(0px at ${clientX}px ${clientY}px)`,
          `circle(${radius}px at ${clientX}px ${clientY}px)`,
        ]

        // 圆形动画扩散开始
        document.documentElement.animate(
          { clipPath: this.isDark ? clipPath.reverse() : clipPath },
          // 设置时间，已经目标伪元素
          {
            duration: 500,
            pseudoElement: this.isDark
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)',
          },
        )
      })
    },
  },
})
