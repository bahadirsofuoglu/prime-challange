import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeStore', {
  state: () => {
    return {
      sidebarStatus: true
    }
  },
  actions: {
    changeSidebarStatus (status) {
      this.sidebarStatus = status ? status : !this.sidebarStatus

      const body = document.querySelector('body')
      const sidebarStyle = document.querySelector('.sidebar-container').style
      const contentStyle = document.querySelector('.content-section').style

      if (this.sidebarStatus) {
        sidebarStyle.setProperty('display', 'flex', 'important')
        contentStyle.setProperty('backdrop-filter', 'blur(4px)')
        contentStyle.setProperty('opacity', '0.3')
      } else {
        sidebarStyle.setProperty('display', 'none', 'important')
        contentStyle.setProperty('backdrop-filter', 'unset')
        contentStyle.setProperty('opacity', 'unset')
      }
    }
  }
})
