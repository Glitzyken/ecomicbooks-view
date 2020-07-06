<template>
  <div>
    <v-row>
      <v-col cols="6" v-for="serie in series" :key="serie.title">
        <router-link to="/overview">
          <div class="card">
            <v-img
              class="rounded"
              contain
              max-width="140"
              :src="serie.imgUrl"
              lazy-src="../assets/lazy-loader.jpg"
              :alt="serie.title"
            />
            <div class="card__text">{{ serie.title }}</div>
          </div>
        </router-link>
      </v-col>
    </v-row>
    <Pagination />
  </div>
</template>

<script>
import Pagination from './Pagination';

const img1 = require('../assets/mock-data/sample-1.jpg');
const img2 = require('../assets/mock-data/sample-2.jpg');
const img3 = require('../assets/mock-data/sample-3.jpg');
const img4 = require('../assets/mock-data/sample-4.jpg');
const img5 = require('../assets/mock-data/sample-5.jpg');
const img6 = require('../assets/mock-data/sample-6.jpg');
const img7 = require('../assets/mock-data/sample-7.jpg');
const img8 = require('../assets/mock-data/sample-8.jpg');
const img9 = require('../assets/mock-data/sample-9.jpg');

export default {
  data: () => ({
    series: [
      {
        imgUrl: img1,
        title: 'Black Panther',
        des:
          'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.'
      },
      {
        imgUrl: img2,
        title: 'Rescue 2020',
        des:
          'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.'
      },
      {
        imgUrl: img3,
        title: 'Die Issue',
        des:
          'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.'
      },
      {
        imgUrl: img4,
        title: 'Thor',
        des:
          'Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus.'
      },
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
  }),
  components: {
    Pagination
  }
};
</script>

<!-- Style obtained from NewIssue component-->