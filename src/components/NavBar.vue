<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    color="#d93f51"
    background-color="#291b29"
    height="58"
    app
  >
    <v-btn class="pa-7">
      <span>Home</span>
      <v-icon large>mdi-home</v-icon>
    </v-btn>

    <v-btn class="pa-7">
      <span>Search</span>
      <v-icon large>mdi-magnify</v-icon>
    </v-btn>

    <v-btn class="pa-7">
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
