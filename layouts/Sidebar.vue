<template>
  <div
    class="sidebar-mobile sidebar-container fixed left-0 flex flex-column justify-content-between surface-0 border-right-solid border-right-1 border-300 border-top-0 pl-3"
    v-click-outside="clickOutside"
  >
    <div>
      <img src="@/assets/svg/logo-export.svg" class="pt-3" />
    </div>
    <div class="flex-1 pt-3">
      <menu-items
        v-for="menuItem in menuItems"
        :key="menuItem.title"
        :items="menuItem.children"
        :header-title="menuItem.title"
      />
    </div>
    <div class="pr-3">
      <div
        class="border-top-1 border-300 flex justify-content-between align-items-center py-2"
      >
        <img src="@/assets/img/avatar.png" />
        <span class="text-900 flex-1 pl-2">Amy Elsner</span>
        <icon name="chevron-up" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuItems from './components/MenuItems.vue'
import { useThemeStore } from '@/stores/theme'

export default {
  components: {
    MenuItems
  },
  data () {
    return {
      menuItems: [
        {
          title: 'Favorites',
          children: [
            {
              title: 'Dashboard',
              icon: 'home',
              active: true
            },
            {
              title: 'Bookmarks',
              icon: 'bookmark'
            },
            {
              title: 'Team',
              icon: 'users'
            },
            {
              title: 'Messages',
              icon: 'comments',
              count: 3
            },
            {
              title: 'Calendar',
              icon: 'calendar'
            }
          ]
        },
        {
          title: 'Application',
          children: [
            {
              title: 'Projects',
              icon: 'folder'
            },
            {
              title: 'Reports',
              icon: 'chart-bar'
            },
            {
              title: 'Settings',
              icon: 'cog'
            }
          ]
        }
      ],
      themeStore: useThemeStore()
    }
  },
  mounted () {
    if (this.isMobile()) {
      this.themeStore.changeSidebarStatus(false)
    }
  },
  methods: {
    toggleSidebar () {
      this.themeStore.changeSidebarStatus()
    },
    isMobile () {
      if (process.client) {
        return screen.width < 568
      }
      return true
    },
    clickOutside () {
      if (!this.isMobile()) {
        return
      }

      this.themeStore.changeSidebarStatus(false)
    }
  }
}
</script>
