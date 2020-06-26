<template>
  <v-app>
    <div class="sample">
      <Home />
    </div>
    <NavBar />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    NavBar,
    Home
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
