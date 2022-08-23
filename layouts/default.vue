<template>
  <div>
    <Navbar />
    <Sidebar v-if="sideBarStatus" />
    <section class="content-section">
      <slot />
    </section>
  </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import { useThemeStore } from '@/stores/theme'
export default {
  components: {
    Navbar,
    Sidebar
  },
  data () {
    return {
      themeStore: useThemeStore()
    }
  },
  mounted () {
    this.sideBarStatus()
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
    sideBarStatus () {
      if (!this.isMobile()) {
        return true
      }
      return this.themeStore.sidebarStatus
    }
  }
}
</script>
<style>
.content-section {
  padding: 56px 0 0 280px;
}
</style>
