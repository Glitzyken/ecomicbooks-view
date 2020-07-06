<template>
  <v-container class="pa-5 mx-auto mt-n4">
    <v-row>
      <v-col lg="8">
        <h1 class="h1">
          <span class="custom-span">Popular</span> Titles
        </h1>
        <PopularTitle />
        <h1 class="h1">
          <span class="custom-span">New</span> Series
        </h1>

        <NewSerie />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PopularTitle from '../components/PopularTitle';
import NewSerie from '../components/NewSerie';

export default {
  components: {
    PopularTitle,
    NewSerie
  }
};
</script>

<style lang="scss">
.h1 {
  margin: 20px 0px 0px 20px;
}
</style>
