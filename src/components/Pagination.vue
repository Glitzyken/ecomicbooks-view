<template>
  <div class="text-center mt-5">
    <!--active color styling will come with router-link applied-->
    <v-pagination v-model="page" :length="10"></v-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1
    };
  }
};
</script>

<style lang="scss" scoped>
</style>