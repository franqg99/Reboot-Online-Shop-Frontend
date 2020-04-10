<template>
  <div>
    <ProductList :data="products" />
  </div>
</template>

<script>
import Api from "@/services/Api.js";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductList
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    Api.getAllProducts().then(serviceProducts => {
      this.products = serviceProducts;
    });

    // this.$root.$on("mySearch", mySearch => this.search(mySearch));
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
    search: function(query) {
      Api.showProduct(query).then(serviceProducts => {
        console.log(serviceProducts);
        this.products = serviceProducts;
      });
    }
  }
};
</script>
