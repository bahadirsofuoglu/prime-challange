<template>
  <div class="card white border-round">
    <div>
      <img src="@/assets/img/product-image2.png" />
    </div>
    <div class="flex justify-content-between align-items-center pt-1">
      <span class="text-900 font-medium">title</span>
      <div>
        <icon name="star-fill" class="text-yellow-500 mr-1" />
        <span class="text-900 font-small">5.0</span>
      </div>
    </div>
    <div class="pt-1">
      <span>subtitle</span>
    </div>
    <div class="pt-1">
      <span>subtitle</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 2px 6px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 21px;
  max-width: 306px;
}
</style>
