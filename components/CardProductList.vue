<template>
  <div class="card white border-round">
    <div class="flex justify-content-between align-items-center ">
      <h1 class="pb-1 text-900 text-2xl line-height-4 font-medium mb-1">
        {{ title }}
      </h1>
      <Icon name="ellipsis-v" class="cursor-pointer" />
    </div>
    <div
      v-for="list in products"
      :key="list.name"
      class="flex justify-content-between align-items-center pt-3 "
    >
      <div>
        <img
          v-if="isMobileDevice"
          src="@/assets/img/product-mobile.png"
          style="height:165px"
        />
        <img v-else src="@/assets/img/product-image.png" />
      </div>
      <div
        class="card-mobile-body flex flex-row md:align-items-center  flex-1 pl-3"
      >
        <div class="card-body flex justify-content-between flex-column ">
          <span class=" text-900 font-medium">{{ list.name }}</span>
          <div class="mobile-padding ">
            <span class="text-600 font-normal">{{ list.brand }}</span>
            <span class="p-1 text-green-600 border-round bg-green-100 ml-2">{{
              list.tag
            }}</span>
          </div>
          <div class="mobile-padding flex flex-row">
            <icon
              v-for="(star, index) in list.stars"
              :key="star"
              name="star-fill"
              class="text-yellow-500 text-xs"
              :class="{ 'ml-1': index !== 0 }"
            />
            <icon
              v-for="star in 5 - list.stars"
              :key="star"
              name="star"
              class="ml-1 text-xs"
            />
          </div>
        </div>
        <div
          class="card-footer flex md:align-items-end sm:align-items-start flex-column"
        >
          <span class="pb-3 text-900 font-medium">{{ list.price }}</span>
          <span class="text-600 font-normal">{{ list.reviewers }}</span>
        </div>
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
  },
  data () {
    return {
      isMobileDevice: false
    }
  },
  mounted () {
    this.isMobileDevice = this.isMobile()
  },
  methods: {
    isMobile () {
      if (!process.client) {
        return
      }

      return screen.width < 568
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
  margin-left: auto;
}

@media only screen and (max-width: 560px) {
  .card-mobile-body {
    flex-direction: column !important;
    align-self: baseline;
  }
  .mobile-padding {
    padding-top: 14px;
  }
  .card-footer {
    justify-content: end;
    margin-left: unset !important;
  }
}
</style>
