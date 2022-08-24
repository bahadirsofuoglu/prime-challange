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
      <SearchInput v-if="!isMobileDevice" class="pl-3" />
      <div class="flex align-items-center">
        <Icon v-if="isMobileDevice" name="search" class="mr-5" />
        <Icon
          v-for="menuItem in menuItems"
          :key="menuItem.name"
          :name="menuItem.name"
          class="mr-5"
        />
        <img src="@/assets/img/avatar.png" class="mr-4" />
      </div>
    </div>
  </div>
</template>
<script>
import SearchInput from './components/SearchInput.vue'
import { useThemeStore } from '@/stores/theme'
import { isMobile } from '@/utils'

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
      themeStore: useThemeStore(),
      isMobileDevice: null
    }
  },
  mounted () {
    this.isMobileDevice = isMobile()
  },
  methods: {
    toggleSidebar () {
      this.themeStore.changeSidebarStatus()
    }
  }
}
</script>
