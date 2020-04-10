<template>
  <div>
    <v-app-bar color="light-blue" dense dark>
      <v-btn icon @click="toHome">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title>Reboot Online Shop</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="btn" icon @click="toSignup">
        Sign-up
      </v-btn>
      <v-btn class="btn" icon @click="toLogin">
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn class="btn" icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn class="btn" icon @click="toCart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    toCart() {
      this.$router.push("/cart");
    },
    toSignup() {
      this.$router.push("/signup");
    },
    toHome() {
      this.$router.push("/");
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  border: 0;
  margin: 10px;
}
</style>
