<template>
  <i :class="iconName"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    }
  },
  computed: {
    iconName () {
      return `pi pi-${this.name}`
    }
  }
}
</script>
