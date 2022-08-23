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

      const sidebarStyle = document.querySelector('.sidebar-container').style
      const navbarStyle = document.querySelector('.content-section').style

      if (this.sidebarStatus) {
        sidebarStyle.setProperty('display', 'block', 'important')
      } else {
        sidebarStyle.setProperty('display', 'none', 'important')
      }
    }
  }
})
