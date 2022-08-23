<template>
  <div class="nav-container fixed top-0 w-screen surface-0">
    <div
      class="flex align-items-center justify-content-between border-solid border-1 border-300 border-top-0 p-0 h-full pl-3"
    >
      <icon
        id="sidebar-toggle-icon"
        name="bars"
        class="icon cursor-pointer"
        @click="toggleSidebar"
      />
      <SearchInput v-if="!isMobile()" />
      <div class="flex align-items-center">
        <Icon v-if="isMobile()" name="search" class="mr-3" />
        <Icon
          v-for="menuItem in menuItems"
          :key="menuItem.name"
          :name="menuItem.name"
          class="mr-3"
        />
        <img src="@/assets/img/avatar.png" class="mr-3" />
      </div>
    </div>
  </div>
</template>
<script>
import SearchInput from './components/SearchInput.vue'
import { useThemeStore } from '@/stores/theme'

export default {
  components: {
    SearchInput
  },
  data () {
    return {
      menuItems: [
        {
          name: 'inbox'
        },
        {
          name: 'bell'
        }
      ],
      themeStore: useThemeStore()
    }
  },

  methods: {
    toggleSidebar () {
      this.themeStore.changeSidebarStatus()
    },
    isMobile () {
      return screen.width < 568
    }
  }
}
</script>
