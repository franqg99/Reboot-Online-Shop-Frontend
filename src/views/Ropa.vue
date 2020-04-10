<template>
  <div>
    <ProductList :data="products" />
    <h1>Hola!</h1>
  </div>
</template>

<script>
import Api from "@/services/Api.js";
import ProductList from "@/components/ProductList.vue";

export default {
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductList
  },
  mounted() {
    Api.showProduct("ropa").then(serviceProducts => {
      console.log(serviceProducts);
      this.products = serviceProducts;
    });
  }
};
</script>

<style lang="scss" scoped></style>
