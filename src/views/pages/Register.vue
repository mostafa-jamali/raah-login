<template>
  <v-container>
    <v-row justify="center">
      <v-col outlined class="d-flex justify-center">
        <v-card class="register-card">
          <header-of-register-and-login />
          <registeration />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Registeration from '@/components/Registeration.vue';
import HeaderOfRegisterAndLogin from '@/components/HeaderOfRegisterAndLogin.vue';
export default {
  name: 'Register',
  components: { Registeration, HeaderOfRegisterAndLogin },
};
</script>
<style lang="scss">
.register-card {
  width: 450px;
  padding: 2rem;
  border-radius: 2rem !important;
}
</style>
