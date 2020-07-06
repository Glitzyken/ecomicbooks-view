<template>
  <v-sheet class="mx-auto" max-width="800">
    <v-slide-group
      :prev-icon="prevIcon ? 'mdi-minus' : undefined"
      :next-icon="nextIcon ? 'mdi-plus' : undefined"
    >
      <v-slide-item v-for="serie in series" :key="serie.title">
        <router-link to="/overview">
          <v-card class="ma-4 mr-0" height="270" width="220">
            <div class="cover">
              <img class="cover__img" :src="serie.imgUrl" />
            </div>
            <div class="title-info">
              <p class="name">{{ serie.title }}</p>
              <p class="text-truncate">{{ serie.des }}</p>
            </div>
          </v-card>
        </router-link>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
const img5 = require('../assets/mock-data/sample-5.jpg');
const img6 = require('../assets/mock-data/sample-6.jpg');
const img7 = require('../assets/mock-data/sample-7.jpg');
const img8 = require('../assets/mock-data/sample-8.jpg');
const img9 = require('../assets/mock-data/sample-9.jpg');

export default {
  data: () => ({
    prevIcon: false,
    nextIcon: false,
    series: [
      {
        imgUrl: img5,
        title: 'Gung Ho',
        des:
          'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.'
      },
      {
        imgUrl: img6,
        title: 'Firefly',
        des:
          'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.'
      },
      {
        imgUrl: img7,
        title: 'Tartarus',
        des:
          'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.'
      },
      {
        imgUrl: img8,
        title: 'Transformers',
        des:
          'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.'
      },
      {
        imgUrl: img9,
        title: 'The Low, Low Woods',
        des:
          'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.'
      }
    ]
  })
};
</script>

<style lang="scss">
@import '../assets/sass/variables';

.v-item-group {
  background: $bg;
}

.v-card {
  background: $bg-dark-1 !important;
}

.cover {
  width: 100%;
  height: 70%;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 20% 0px;
  }
}

.title-info {
  color: $white;
  padding: 10px;
}

.name {
  margin-bottom: 1px !important;
}
</style>
