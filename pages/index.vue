<template>
  <NuxtLayout>
    <div class="p-3">
      <h1 class="pb-1 text-900 text-lg line-height-4 mb-1">Populer Products</h1>
      <span>Selected Exclusively</span>
      <div class="pt-3">
        <card-product-list title="Top Sales" :products="products" />
      </div>
      <div class="grid pt-3">
        <div
          class=" md:col-12 sm:col-12 lg:col-4"
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
      ],
      detailProducts: [
        {
          name: 'Natoque penatibus',
          subTitle:
            'Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
          stars: '5.0',
          price: '$123.00'
        },
        {
          name: 'Natoque penatibus',
          subTitle:
            'Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
          stars: '5.0',
          price: '$123.00'
        },
        {
          name: 'Natoque penatibus',
          subTitle:
            'Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
          stars: '5.0',
          price: '$123.00'
        }
      ]
    }
  }
}
</script>
