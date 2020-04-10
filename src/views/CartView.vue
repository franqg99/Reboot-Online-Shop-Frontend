<template>
  <div>
    {{ productsList }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsList: []
    };
  },
  mounted() {
    this.$root.$on("addtocart", newProduct => {
      this.productsList.push(newProduct);
      console.log(this.productsList);
    });
  }
};
</script>

<style lang="scss" scoped></style>
