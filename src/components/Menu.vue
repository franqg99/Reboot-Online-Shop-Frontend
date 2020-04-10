<template>
  <div>
    <v-tabs>
      <v-tab v-on:click="toRopa">Ropa</v-tab>
      <v-tab v-on:click="toAccesorios">Accesorios</v-tab>
      <v-tab v-on:click="toDeporte">Deporte</v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    toRopa() {
      this.$router.push("/ropa");
    },
    toAccesorios() {
      this.$router.push("/accesorios");
    },
    toDeporte() {
      this.$router.push("/deporte");
    }
  }
};
</script>

<style lang="scss" scoped></style>
