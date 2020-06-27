<template>
  <v-container class="pa-5 mx-auto">
    <v-row>
      <v-col cols="6">
        <div class="card">
          <v-img
            class="rounded"
            contain
            eager
            max-width="150px"
            src="../assets/img/sample-1.jpg"
            lazy-src="../assets/img/lazy-loader.jpg"
            alt="issue image"
          />
          <div class="card__text">Black Panther 2020 Issue #1</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {}
};
</script>

<style lang="scss">
@import '../assets/sass/_variables.scss';

.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__text {
    font-weight: 500;
    line-height: 18px;
    color: $white;
    text-align: center;
    margin-top: 15px;
  }
}
</style>
