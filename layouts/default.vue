<template>
  <div>
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
  methods: {
    toggleSidebar () {
      this.themeStore.changeSidebarStatus()
    }
  }
}
</script>
<style>
.content-section {
  padding: 56px 0 0 280px;
}
</style>
