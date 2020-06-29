<template>
  <v-container class="pa-5 mx-auto">
    <h1>
      <span class="custom-span">New</span> Issues
    </h1>

    <!-- dynamically rendering dummy contents (to be replaced with real data from the backend) -->
    <NewIssue />
  </v-container>
</template>

<script>
import NewIssue from '../components/NewIssue';

export default {
  components: {
    NewIssue
  }
};
</script>

