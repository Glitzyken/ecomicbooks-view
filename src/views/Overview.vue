<template>
  <div>
    <v-card width="200" height="280" class="mx-auto">
      <img class="img" src="../assets/mock-data/sample-5.jpg" />
    </v-card>

    <div class="title-info-box">
      <div class="title-info">
        <P class="title-prop">TITLE:</P>
        <p>Gung Ho</p>

        <P class="title-prop">GENRES:</P>
        <p>Action, Comedy</p>

        <P class="title-prop">PUBLISHER:</P>
        <p>N/A</p>

        <P class="title-prop">DESCRIPTION:</P>
        <p>
          Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
          convallis tellus. Suspendisse faucibus, nunc et pellentesque egestas,
          lacus ante convallis tellus.
        </p>
      </div>

      <div class="title-issues">
        <P class="title-issues__prop">ISSUES:</P>
        <router-link to="/read">
          <v-card max-width="360">
            <p class="title-issues__name">Gung Ho Issue #1</p>
          </v-card>
        </router-link>
        <router-link to="/read">
          <v-card max-width="360">
            <p class="title-issues__name">Gung Ho Issue #2</p>
          </v-card>
        </router-link>
        <router-link to="/read">
          <v-card max-width="360">
            <p class="title-issues__name">Gung Ho Issue #3</p>
          </v-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const img5 = require('../assets/mock-data/sample-5.jpg');

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
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/variables';

.img {
  width: 100%;
  height: 100%;
}

.title-info-box {
  background: $primary;
  color: $white;
  padding: 30px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  margin-top: -50px;
}

.title-info {
  margin-top: 30px;
}

.title-prop {
  margin-bottom: -1px;
  color: $primary-light;
  font-weight: 700;
}

.title-issues {
  &__prop {
    color: $bg-dark-2;
    margin-left: 50px;
    margin-bottom: 2px;
    font-weight: 700;
  }

  &__name {
    color: $white;
    text-align: center;
  }
}
</style>
