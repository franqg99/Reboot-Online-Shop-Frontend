<template>
  <div>
    <label>
      Búsqueda:
      <input type="text" v-model="mySearch" @keyup.enter="toSearchView()" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mySearch: ""
    };
  },
  methods: {
    toSearchView() {
      this.$router.push(`/search/${this.mySearch}`);
      this.$root.$emit("mySearch", this.mySearch);
    }
    // makeASearch: function() {
    //   this.$root.$emit("mySearch", this.mySearch);
    // }
  }
};
</script>

<style lang="scss" scoped></style>
