<template>
  <div
    class="nav-container fixed top-0 w-screen  bg-black surface-0 flex align-items-center justify-content-between"
  >
    <SearchInput />
    <div>
      <Icon
        v-for="menuItem in menuItems"
        :key="menuItem.name"
        :name="menuItem.name"
        class="mr-3"
      />
      <img />
    </div>
  </div>
</template>
<script>
import SearchInput from './components/SearchInput.vue'
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
      ]
    }
  }
}
</script>
<style>
.nav-container {
  height: 56px;
  padding-left: 200px;
}
</style>
