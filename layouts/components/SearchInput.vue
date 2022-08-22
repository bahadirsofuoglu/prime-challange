<template>
  <div class="search-input-container flex flex-row align-items-center">
    <Icon name="search" class="pr-1" />
    <Input type="text" placeholder="asdas" class="border-none" />
  </div>
</template>

<style scoped>
.search-input-container {
  width: 780px;
  height: 28px;
}
input {
  width: 100%;
}
input:focus {
  outline: none;
}
</style>
