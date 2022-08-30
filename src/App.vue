<template>
  <v-app>
    <!-- <router-view></router-view> -->
    <register />
  </v-app>
</template>

<script>
import Register from './views/pages/Register.vue';

export default {
  name: 'App',
  components: { Register },
};
</script>

