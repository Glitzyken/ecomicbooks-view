<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex mx-auto" cols="12" lg="6">
        <v-select :items="items" filled label="Sort"></v-select>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="mb-n5" cols="6" lg="3" v-for="serie in series" :key="serie.title">
        <v-card>
          <p>{{ serie.title }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ['A - Z', 'Z - A', 'Publisher'],
    series: [
      {
        title: 'Black Panther'
      },
      {
        title: 'Rescue 2020'
      },
      {
        title: 'Die Issue'
      },
      {
        title: 'Thor'
      },
      {
        title: 'Gung Ho'
      },
      {
        title: 'Firefly'
      },
      {
        title: 'Tartarus'
      },
      {
        title: 'Transformers'
      },
      {
        title: 'The Low, Low Woods'
      },
      {
        title: 'Gung Ho'
      },
      {
        title: 'Firefly'
      },
      {
        title: 'Tartarus'
      },
      {
        title: 'Transformers'
      },
      {
        title: 'The Low, Low Woods'
      },
      {
        title: 'Gung Ho'
      },
      {
        title: 'Firefly'
      },
      {
        title: 'Tartarus'
      },
      {
        title: 'Transformers'
      },
      {
        title: 'The Low, Low Woods'
      },
      {
        title: 'Gung Ho'
      },
      {
        title: 'Firefly'
      },
      {
        title: 'Tartarus'
      },
      {
        title: 'Transformers'
      },
      {
        title: 'The Low, Low Woods'
      },
      {
        title: 'Gung Ho'
      },
      {
        title: 'Firefly'
      },
      {
        title: 'Tartarus'
      },
      {
        title: 'Transformers'
      },
      {
        title: 'The Low, Low Woods'
      },
      {
        title: 'Gung Ho'
      },
      {
        title: 'Firefly'
      },
      {
        title: 'Tartarus'
      },
      {
        title: 'Transformers'
      },
      {
        title: 'The Low, Low Woods'
      },
      {
        title: 'Gung Ho'
      },
      {
        title: 'Firefly'
      },
      {
        title: 'Tartarus'
      },
      {
        title: 'Transformers'
      },
      {
        title: 'The Low, Low Woods'
      },
      {
        title: 'Gung Ho'
      },
      {
        title: 'Firefly'
      },
      {
        title: 'Tartarus'
      },
      {
        title: 'Transformers'
      },
      {
        title: 'The Low, Low Woods'
      },
      {
        title: 'Gung Ho'
      },
      {
        title: 'Firefly'
      },
      {
        title: 'Tartarus'
      },
      {
        title: 'Transformers'
      },
      {
        title: 'The Low, Low Woods'
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/variables';

p {
  color: $white !important;
  margin: 5px;
  line-height: 20px;
  text-align: center;
  font-size: 13px;
}
</style>