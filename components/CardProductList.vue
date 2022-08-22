<template>
  <div class="card white border-round">
    <div class="flex justify-content-between align-items-center">
      <h1 class="pb-1 text-900 text-lg line-height-4 mb-1">{{ title }}</h1>
      <Icon name="ellipsis-v" class="cursor-pointer" />
    </div>
    <div class="flex justify-content-between align-items-center">
      <div>
        <img src="@/assets/img/product-image.png" />
      </div>
      <div class="card-body flex justify-content-between flex-column">
        <span>Selected Exclusively</span>
        <div>
          <span>Zara</span>
          <span>Tag</span>
        </div>
        <div class="flex flex-row">
          <icon v-for="item in 5" :key="item" name="star-fill" />
        </div>
      </div>
      <div>
        <span>Zara</span>
        <span>Tag</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 2px 6px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 25px 21px;
}
.card-body {
  flex: 0.9;
  height: 78px;
}
</style>
