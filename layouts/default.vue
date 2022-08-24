<template>
  <div>
    <div v-if="sideBarStatus()" class="overlay"></div>
    <Navbar />
    <Sidebar />

    <section class="content-section">
      <slot />
    </section>
  </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import { useThemeStore } from '@/stores/theme'
import { isMobile } from '@/utils'

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
    sideBarStatus () {
      if (!isMobile()) {
        return false
      }
      return this.themeStore.sidebarStatus
    }
  }
}
</script>
<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.content-section {
  padding: 56px 0 0 280px;
}
</style>
