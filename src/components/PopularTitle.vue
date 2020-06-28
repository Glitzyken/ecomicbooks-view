<template>
  <div>
    <v-sheet class="mx-auto" max-width="800">
      <v-slide-group
        :prev-icon="prevIcon ? 'mdi-minus' : undefined"
        :next-icon="nextIcon ? 'mdi-plus' : undefined"
      >
        <v-slide-item v-for="n in 15" :key="n">
          <v-card color="#1c101c" class="ma-4 mr-0" height="170" width="220">
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    prevIcon: false,
    nextIcon: false
  })
};
</script>

<style lang="scss">
.v-item-group {
  background: #362936;
}
</style>
