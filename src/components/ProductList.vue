<template>
  <div id="list">
    <ProductCard
      v-for="(product, idx) in data"
      :key="idx"
      :data="product"
      v-on:addtocart="addToCart(product)"
    />
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
  },
  methods: {
    addToCart(newProduct) {
      this.$emit("addtocart", newProduct);
    }
  }
};
</script>

<style lang="scss" scoped>
#list {
  display: flex;
  flex-wrap: wrap;
}
</style>
