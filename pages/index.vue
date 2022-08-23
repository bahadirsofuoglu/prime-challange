<template>
  <NuxtLayout>
    <div class="p-3">
      <h1 class="pb-1 text-900 text-lg line-height-4 mb-1">Populer Products</h1>
      <span>Selected Exclusively</span>
      <div class="pt-3">
        <card-product-list title="Top Sales" :products="products" />
      </div>
      <div class="pt-3">
        <card-product></card-product>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: 'Dui id ornare arcu',
          brand: 'Zara',
          tag: '$12.34',
          stars: 4,
          price: '$12345.00',
          reviewers: '123K Reviews'
        },
        {
          name: 'Dui id ornare arcu',
          brand: 'Zara',
          tag: '$12.34',
          stars: 4,
          price: '$12345.00',
          reviewers: '123K Reviews'
        },
        {
          name: 'Dui id ornare arcu',
          brand: 'Zara',
          tag: '$12.34',
          stars: 4,
          price: '$12345.00',
          reviewers: '123K Reviews'
        },
        {
          name: 'Dui id ornare arcu',
          brand: 'Zara',
          tag: '$12.34',
          stars: 4,
          price: '$12345.00',
          reviewers: '123K Reviews'
        },
        {
          name: 'Dui id ornare arcu',
          brand: 'Zara',
          tag: '$12.34',
          stars: 4,
          price: '$12345.00',
          reviewers: '123K Reviews'
        }
      ]
    }
  }
}
</script>
