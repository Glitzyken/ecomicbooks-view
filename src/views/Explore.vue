<template>
  <div>
    <h1 class="h1"><span class="custom-span"> Popular </span> Titles</h1>
    <PopularTitle />
  </div>
</template>

<script>
import PopularTitle from '../components/PopularTitle';

export default {
  components: {
    PopularTitle
  }
};
</script>

<style lang="scss" scoped>
.h1 {
  margin: 20px 0px 10px 20px;
}
</style>
