<template>
  <v-app>
    <Navbar />
    <Menu />
    <Search />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  // data() {
  //   return {
  //     productsList: []
  //   };
  // },
  components: {
    Navbar,
    Search,
    Footer,
    Menu
  },
  methods: {
    addToCart(newProduct) {
      this.$root.$emit("addtocart", newProduct);
    }
  },
  mounted() {
    this.$on("addtocart", newProduct => {
      this.productsList.push(newProduct);
    });
  }
};
</script>
