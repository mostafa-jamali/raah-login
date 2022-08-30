<template>
  <v-app class="app">
    <register />
  </v-app>
</template>

<script>
import Register from './views/pages/Register.vue';
import './styles/app.scss';

export default {
  name: 'App',
  components: { Register },
};
</script>
