<template>
  <div>
    <v-tabs>
      <v-tab v-on:click="toRopa">Ropa</v-tab>
      <v-tab>Accesorios</v-tab>
      <v-tab>Deporte</v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    toRopa() {
      this.$router.push("/ropa");
    }
  }
};
</script>

<style lang="scss" scoped></style>
