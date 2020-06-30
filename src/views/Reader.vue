<template>
  <div>
    <VuePictureSwipe :items="items" :options="{ shareEl: false }" />
  </div>
</template>

<script>
import VuePictureSwipe from 'vue-picture-swipe';

const page1 = require('../assets/mock-data/RCO001.jpg');
const page2 = require('../assets/mock-data/RCO002.jpg');
const page3 = require('../assets/mock-data/RCO003.jpg');
const page4 = require('../assets/mock-data/RCO004.jpg');
const page5 = require('../assets/mock-data/RCO005.jpg');
const page6 = require('../assets/mock-data/RCO006.jpg');
const page7 = require('../assets/mock-data/RCO007.jpg');
const page8 = require('../assets/mock-data/RCO008.jpg');
const page9 = require('../assets/mock-data/RCO009.jpg');
const page10 = require('../assets/mock-data/RCO010.jpg');
const page11 = require('../assets/mock-data/RCO011.jpg');
const page12 = require('../assets/mock-data/RCO012.jpg');
const page13 = require('../assets/mock-data/RCO013.jpg');
const page14 = require('../assets/mock-data/RCO014.jpg');
const page15 = require('../assets/mock-data/RCO015.jpg');
const page16 = require('../assets/mock-data/RCO016.jpg');
const page17 = require('../assets/mock-data/RCO017.jpg');
const page18 = require('../assets/mock-data/RCO018.jpg');
const page19 = require('../assets/mock-data/RCO019.jpg');
const page20 = require('../assets/mock-data/RCO020.jpg');
const page21 = require('../assets/mock-data/RCO021.jpg');
const page22 = require('../assets/mock-data/RCO022.jpg');
const page23 = require('../assets/mock-data/RCO023.jpg');
const page24 = require('../assets/mock-data/RCO024.jpg');
const page25 = require('../assets/mock-data/RCO025.jpg');
const page26 = require('../assets/mock-data/RCO026.jpg');
const page27 = require('../assets/mock-data/RCO027.jpg');
const page28 = require('../assets/mock-data/RCO028.jpg');
const page29 = require('../assets/mock-data/RCO029.jpg');
const page30 = require('../assets/mock-data/RCO030.jpg');
const page31 = require('../assets/mock-data/RCO031.jpg');
const page32 = require('../assets/mock-data/RCO032.jpg');
const page33 = require('../assets/mock-data/RCO033.jpg');
const page34 = require('../assets/mock-data/RCO034.jpg');

export default {
  data() {
    return {
      items: [
        {
          src: page1,
          thumbnail: page1,
          w: 1200,
          h: 1700
        },
        {
          src: page2,
          thumbnail: page2,
          w: 1200,
          h: 1700
        },
        {
          src: page3,
          thumbnail: page3,
          w: 1200,
          h: 1700
        },
        {
          src: page4,
          thumbnail: page4,
          w: 1200,
          h: 1700
        },
        {
          src: page5,
          thumbnail: page5,
          w: 1200,
          h: 1700
        },
        {
          src: page6,
          thumbnail: page6,
          w: 1200,
          h: 1700
        },
        {
          src: page7,
          thumbnail: page7,
          w: 1200,
          h: 1700
        },
        {
          src: page8,
          thumbnail: page8,
          w: 1200,
          h: 1700
        },
        {
          src: page9,
          thumbnail: page9,
          w: 1200,
          h: 1700
        },
        {
          src: page10,
          thumbnail: page10,
          w: 1200,
          h: 1700
        },
        {
          src: page11,
          thumbnail: page11,
          w: 1200,
          h: 1700
        },
        {
          src: page12,
          thumbnail: page12,
          w: 1200,
          h: 1700
        },
        {
          src: page13,
          thumbnail: page13,
          w: 1200,
          h: 1700
        },
        {
          src: page14,
          thumbnail: page14,
          w: 1200,
          h: 1700
        },
        {
          src: page15,
          thumbnail: page15,
          w: 1200,
          h: 1700
        },
        {
          src: page16,
          thumbnail: page16,
          w: 1200,
          h: 1700
        },
        {
          src: page17,
          thumbnail: page17,
          w: 1200,
          h: 1700
        },
        {
          src: page18,
          thumbnail: page18,
          w: 1200,
          h: 1700
        },
        {
          src: page19,
          thumbnail: page19,
          w: 1200,
          h: 1700
        },
        {
          src: page20,
          thumbnail: page20,
          w: 1200,
          h: 1700
        },
        {
          src: page21,
          thumbnail: page21,
          w: 1200,
          h: 1700
        },
        {
          src: page22,
          thumbnail: page22,
          w: 1200,
          h: 1700
        },
        {
          src: page23,
          thumbnail: page23,
          w: 1200,
          h: 1700
        },
        {
          src: page24,
          thumbnail: page24,
          w: 1200,
          h: 1700
        },
        {
          src: page25,
          thumbnail: page25,
          w: 1200,
          h: 1700
        },
        {
          src: page26,
          thumbnail: page26,
          w: 1200,
          h: 1700
        },
        {
          src: page27,
          thumbnail: page27,
          w: 1200,
          h: 1700
        },
        {
          src: page28,
          thumbnail: page28,
          w: 1200,
          h: 1700
        },
        {
          src: page29,
          thumbnail: page29,
          w: 1200,
          h: 1700
        },
        {
          src: page30,
          thumbnail: page30,
          w: 1200,
          h: 1700
        },
        {
          src: page31,
          thumbnail: page31,
          w: 1200,
          h: 1700
        },
        {
          src: page32,
          thumbnail: page32,
          w: 1200,
          h: 1700
        },
        {
          src: page33,
          thumbnail: page33,
          w: 1200,
          h: 1700
        },
        {
          src: page34,
          thumbnail: page34,
          w: 1200,
          h: 1700
        }
      ]
    };
  },
  components: {
    VuePictureSwipe
  }
};
</script>
