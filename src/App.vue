<template>
  <v-app>
    <div class="sample"></div>
    <NavBar />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: {
    NavBar
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
  height: 400px;
}
</style>
