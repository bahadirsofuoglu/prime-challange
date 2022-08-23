<template>
  <div class="nav-container fixed top-0 w-screen surface-0 ">
    <div
      class="flex align-items-center justify-content-between border-solid border-1 border-300 border-top-0 p-0 h-full pl-3"
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
