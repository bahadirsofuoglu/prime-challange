<template>
  <div>
    <Navbar />
    <Sidebar />
    <section class="content-section"></section>
  </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>
<style>
.content-section {
  padding: 56px 0 0 280px;
}
</style>
