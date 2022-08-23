<template>
  <input :placeholder="placeholder" :class="{ 'border-none': noBorder }" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    noBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>
