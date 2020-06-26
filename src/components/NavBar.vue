<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    color="#d93f51"
    background-color="#1c101c"
    height="58"
    app
  >
    <v-btn>
      <span>Home</span>
      <v-icon large>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Search</span>
      <v-icon large>mdi-magnify</v-icon>
    </v-btn>

    <v-btn>
      <span>Series</span>
      <v-icon large>mdi-book-alphabet</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 0
    };
  }
};
</script>

<style lang="scss">
// @import '../assets/sass/_variables.scss';
</style>
