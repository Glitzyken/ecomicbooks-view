<template>
  <v-container class="pa-5 mx-auto">
    <h1><span class="custom-span"> New </span> Issues</h1>

    <!-- Dummy dynamic contents (to be replaced with real data from the backend) -->

    <v-row>
      <v-col cols="6" v-for="issue in issues" :key="issue.imgUrl">
        <div class="card">
          <v-img
            class="rounded"
            contain
            max-width="150px"
            :src="issue.imgUrl"
            lazy-src="../assets/img/lazy-loader.jpg"
            :alt="issue.title"
          />
          <div class="card__text">{{ issue.title }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const img1 = require('../assets/img/sample-1.jpg');
const img2 = require('../assets/img/sample-2.jpg');
const img3 = require('../assets/img/sample-3.jpg');
const img4 = require('../assets/img/sample-4.jpg');
const img5 = require('../assets/img/sample-5.jpg');
const img6 = require('../assets/img/sample-6.jpg');
const img7 = require('../assets/img/sample-7.jpg');
const img8 = require('../assets/img/sample-8.jpg');
const img9 = require('../assets/img/sample-9.jpg');

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
          title: 'The Low, Low Woods Issue 34'
        }
      ]
    };
  },
  components: {}
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
