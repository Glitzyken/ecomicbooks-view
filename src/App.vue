<template>
  <v-app>
    <Header />
    <div class="main-bg">
      <router-view></router-view>
      <div class="white-space"></div>
    </div>
    <NavBar />
  </v-app>
</template>

<script>
import Header from './components/Header';
import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: {
    Header,
    NavBar
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import './assets/sass/_variables.scss';

.white-space {
  height: 60px; // White space due to NavBar covering the bottom view
}

.main-bg {
  background: $bg;
}

.custom-span {
  font-weight: 100;
}

h1 {
  color: $white;
  font-size: 20px;
  margin-bottom: 5px;
}
</style>
