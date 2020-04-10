<template>
  <v-card class="mx-auto" id="card" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="data.img_url">
      <v-card-title></v-card-title>
    </v-img>

    <v-card-subtitle class="text--primary">{{ data.name }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ data.description }}</div>
    </v-card-text>
    <v-card-text class="text--primary">
      <div>{{ data.price }}€</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text @click="addToCart">
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    addToCart() {
      this.$emit("addtocart", this.data);
    }
  }
};
</script>

<style lang="scss" scoped>
#card {
  width: 400px;
  margin: 10px 15px;
}
</style>
