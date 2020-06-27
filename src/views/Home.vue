<!--
<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to eComicbooks
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
-->

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

  &__img {
    width: 150px;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }

  &__text {
    font-weight: 500;
    line-height: 18px;
    color: $white;
    text-align: center;
    margin-top: 15px;
  }
}
</style>
