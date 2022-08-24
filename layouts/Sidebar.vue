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
      <avatar-dropdown />
    </div>
  </div>
</template>

<script>
import MenuItems from './components/MenuItems.vue'
import AvatarDropdown from './components/AvatarDropdown.vue'
import { useThemeStore } from '@/stores/theme'
import { isMobile } from '@/utils'
import { items } from '@/data/menuItems'
export default {
  components: {
    MenuItems,
    AvatarDropdown
  },
  data () {
    return {
      menuItems: items,
      themeStore: useThemeStore()
    }
  },
  mounted () {
    if (isMobile()) {
      this.themeStore.changeSidebarStatus(false)
    }
  },
  methods: {
    toggleSidebar () {
      this.themeStore.changeSidebarStatus()
    },
    clickOutside () {
      if (!isMobile()) {
        return
      }

      this.themeStore.changeSidebarStatus(false)
    }
  }
}
</script>
