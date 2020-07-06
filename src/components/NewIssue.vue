<template>
  <div>
    <v-row>
      <v-col cols="6" xl="2" lg="3" md="3" sm="3" v-for="issue in issues" :key="issue.imgUrl">
        <router-link to="/read">
          <div class="card">
            <v-img
              class="rounded"
              contain
              max-width="140"
              :src="issue.imgUrl"
              lazy-src="../assets/lazy-loader.jpg"
              :alt="issue.title"
            />
            <div class="card__text">{{ issue.title }}</div>
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
  name: 'Home',
  data() {
    return {
      issues: [
        {
          imgUrl: img1,
          title: 'Black Panther Issue #22'
        },
        {
          imgUrl: img2,
          title: 'Rescue 2020 Issue #4'
        },
        {
          imgUrl: img3,
          title: 'Die Issue #1'
        },
        {
          imgUrl: img4,
          title: 'Thor Issue #8'
        },
        {
          imgUrl: img5,
          title: 'Gung Ho Issue #3'
        },
        {
          imgUrl: img6,
          title: 'Firefly Issue #1'
        },
        {
          imgUrl: img7,
          title: 'Tartarus Issue #9'
        },
        {
          imgUrl: img8,
          title: 'Transformers Issue #6'
        },
        {
          imgUrl: img9,
          title: 'The Low, Low Woods Issue #34'
        }
      ]
    };
  },
  components: {
    Pagination
  }
};
</script>

<style lang="scss">
@import '../assets/sass/variables';

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