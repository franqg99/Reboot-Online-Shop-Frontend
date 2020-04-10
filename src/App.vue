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

  components: {
    Navbar,
    Search,
    Footer,
    Menu
  },

  data: () => ({
    //
  })
};
</script>
