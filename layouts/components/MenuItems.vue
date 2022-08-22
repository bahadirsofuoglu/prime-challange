<template>
  <div>
    <h5>{{ headerTitle }}</h5>
    <div
      class="p-3 flex flex-row justify-content-between white text-600 cursor-pointer"
      :class="{ active: isActive(index) }"
      v-for="(item, index) in items"
      :key="item.title"
      @click="changeActiveIndex(index)"
    >
      <div>
        <icon :name="item.icon" class="icon" />
        <span class="pl-2 text-900 font-normal">{{ item.title }}</span>
      </div>
      <div
        v-if="item.count"
        class="flex align-items-center justify-content-center mr-1 border-circle count-color bg-blue-500 text-white"
      >
        {{ item.count }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    headerTitle: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      activeIndex: 0,
      hasAnyActiveItem: false
    }
  },
  mounted () {
    this.hasAnyActiveItem = this.items.some(item => item.active)
  },
  methods: {
    changeActiveIndex (index) {
      this.activeIndex = index
    },
    isActive (index) {
      if (!this.hasAnyActiveItem) {
        return
      }

      return this.activeIndex === index
    }
  }
}
</script>
