<template>
  <v-app>
    <Header />
    <div class="sample">
      <Home />
    </div>
    <NavBar />
  </v-app>
</template>

<script>
import Home from './views/Home';
import NavBar from './components/NavBar';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Home,
    NavBar,
    Header
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import './assets/sass/_variables.scss';

.sample {
  background: $bg;
  // height: 1000px;
}
</style>
