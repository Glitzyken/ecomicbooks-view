<template>
  <v-bottom-navigation :value="activeBtn" grow background-color="#1c101c" app>
    <v-btn class="mt-2">
      <router-link active-class="nav-selected" to="/" exact>
        <v-icon large>mdi-home</v-icon>
        <span class="span">Home</span>
      </router-link>
    </v-btn>

    <v-btn class="mt-2">
      <router-link active-class="nav-selected" to="/search">
        <v-icon large>mdi-magnify</v-icon>
        <span class="span">Search</span>
      </router-link>
    </v-btn>

    <v-btn class="mt-2">
      <router-link active-class="nav-selected" to="/series">
        <v-icon large>mdi-book</v-icon>
        <span class="span">Series</span>
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
@import "../assets/sass/_variables.scss";

.nav-selected {
  color: $primary !important;
}

a {
  text-decoration: none;
  color: white !important;

  &:focus {
    background-color: $bg-dark-1;
    width: 140px;
  }
}

.span {
  display: block;
  margin-bottom: 4px;
}
</style>
