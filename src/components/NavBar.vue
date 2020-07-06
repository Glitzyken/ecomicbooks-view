<template>
  <v-bottom-navigation class="pt-1" :value="activeBtn" height="60" grow app>
    <v-btn class="mt-2">
      <router-link active-class="nav-selected" to="/" exact>
        <v-icon large>mdi-home</v-icon>
        <span class="block-span">Home</span>
      </router-link>
    </v-btn>

    <v-btn class="mt-2">
      <router-link active-class="nav-selected" to="/explore">
        <v-icon large>mdi-magnify</v-icon>
        <span class="block-span">Explore</span>
      </router-link>
    </v-btn>

    <v-btn class="mt-2">
      <router-link active-class="nav-selected" to="/series">
        <v-icon large>mdi-book-alphabet</v-icon>
        <span class="block-span">Series</span>
      </router-link>
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
@import '../assets/sass/_variables';

.v-bottom-navigation {
  background: $bg-dark-2 !important;
}

.nav-selected {
  color: $primary !important;
}

.block-span {
  display: block;
}

a {
  text-decoration: none;
  color: $white !important;
}
</style>
