import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeStore', {
  state: () => {
    return {
      sidebarStatus: false
    }
  },
  actions: {
    async changeSidebarStatus (status) {
      this.sidebarStatus = status === false ? status : !this.sidebarStatus

      const bodyStyle = document.querySelector('body').style

      const sidebarStyle = document.querySelector('.sidebar-container').style
      const contentStyle = document.querySelector('.content-section').style

      if (this.sidebarStatus) {
        sidebarStyle.setProperty('display', 'flex', 'important')
        contentStyle.setProperty('backdrop-filter', 'blur(4px)')
        contentStyle.setProperty('opacity', '0.9')
        bodyStyle.setProperty('overflow', 'hidden')
      } else {
        sidebarStyle.setProperty('display', 'none', 'important')
        contentStyle.setProperty('backdrop-filter', 'unset')
        contentStyle.setProperty('opacity', 'unset')
        bodyStyle.setProperty('overflow', 'unset')
      }
    }
  }
})
