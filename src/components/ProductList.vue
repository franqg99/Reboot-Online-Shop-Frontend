<template>
  <div>
    <ProductCard v-for="(product, idx) in data" :key="idx" :data="product" />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    ProductCard
  },
  props: {
    data: Array
  }
};
</script>

<style lang="scss" scoped></style>
