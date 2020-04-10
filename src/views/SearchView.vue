<template>
  <div>
    <ProductList :data="products" />
  </div>
</template>

<script>
import Api from "@/services/Api.js";
import ProductList from "@/components/ProductList.vue";

export default {
  components: {
    ProductList
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.$root.$on("mySearch", mySearch => {
      this.search(mySearch);
    });
    Api.getAllProducts().then(serviceProducts => {
      this.products = serviceProducts;
    });
  },
  methods: {
    search: function(query) {
      Api.showProduct(query).then(serviceProducts => {
        this.products = serviceProducts;
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
