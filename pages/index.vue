<template>
  <NuxtLayout>
    <div class="px-4 py-3 surface-50">
      <h1
        class="text-900 text-2xl font-normal line-height-3 line-height-4 mb-1"
      >
        Popular Products
      </h1>
      <span class="text-lg">Selected Exclusively</span>
      <div class="pt-4">
        <card-product-list title="Top Sales" :products="products" />
      </div>
      <div class="grid content-wrapper">
        <div
          class="mt-4 px-2  md:col-12 sm:col-12 lg:col-4"
          v-for="product in detailProducts"
          :key="product.name"
        >
          <card-product :product="product"></card-product>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import { productsList, productDetails } from '../data/products'
export default {
  data () {
    return {
      products: productsList,
      detailProducts: productDetails
    }
  }
}
</script>
