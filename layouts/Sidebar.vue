<template>
  <div class="sidebar-container fixed left-0 flex flex-column pl-3">
    <div>
      <img src="@/assets/svg/logo-export.svg" class="pt-3" />
    </div>
    <menu-items
      v-for="menuItem in menuItems"
      :key="menuItem.title"
      :items="menuItem.children"
      :header-title="menuItem.title"
    />
  </div>
</template>

<script>
import MenuItems from './components/MenuItems.vue'
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
      ]
    }
  }
}
</script>
