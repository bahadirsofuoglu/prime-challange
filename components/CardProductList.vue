<template>
  <div class="card white border-round">
    <div class="flex justify-content-between align-items-center ">
      <h1 class="pb-1 text-900 text-lg line-height-4 mb-1">{{ title }}</h1>
      <Icon name="ellipsis-v" class="cursor-pointer" />
    </div>
    <div
      v-for="list in products"
      :key="list.name"
      class="flex justify-content-between align-items-center pt-3 "
    >
      <div>
        <img src="@/assets/img/product-image.png" />
      </div>
      <div class="card-body flex justify-content-between flex-column">
        <span class="text-900 font-medium">{{ list.name }}</span>
        <div>
          <span class="text-600 font-normal">{{ list.brand }}</span>
          <span class="ml-1">{{ list.tag }}</span>
        </div>
        <div class="flex flex-row">
          <icon
            v-for="(star, index) in list.stars"
            :key="star"
            name="star-fill"
            class="text-yellow-500"
            :class="{ 'ml-1': index !== 0 }"
          />
          <icon
            v-for="star in 5 - list.stars"
            :key="star"
            name="star"
            class="ml-1"
          />
        </div>
      </div>
      <div class="card-footer flex align-items-end flex-column">
        <span class="text-900 font-medium">{{ list.price }}</span>
        <span class="pt-2 text-600 font-normal">{{ list.reviewers }}</span>
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
    },
    products: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 2px 6px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 7px 21px 25px 21px;
}
.card-body {
  flex: 0.9;
  height: 78px;
}
.card-footer {
  height: 78px;
}
</style>
