<template>
  <div class="card white border-round">
    <div>
      <img src="@/assets/img/test.png" />
    </div>
    <div class="flex justify-content-between align-items-center pt-1">
      <span class="text-900 font-medium">{{ product.name }}</span>
      <div>
        <icon name="star-fill" class="text-yellow-500 mr-1" />
        <span class="text-900 font-small">{{ product.stars }}</span>
      </div>
    </div>
    <div class="pt-2">
      <span class="text-sm">{{ product.subTitle }}</span>
    </div>
    <div class="pt-2">
      <span class="text-blue-500">{{ product.price }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 2px 6px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 21px;

  img {
    width: 100%;
  }
}
</style>
