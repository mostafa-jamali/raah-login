<template>
  <v-container>
    <v-row justify="center">
      <v-col outlined class="d-flex justify-center">
        <v-card class="register-card">
          <div class="text-center">
            <img src="@/assets/logo.png" alt="" width="100px" height="100px" />
          </div>
          <div class="d-flex">
            <a href="#" class="login-btn login-btn-active text-center my-4">ورود</a>
            <a href="#" class="registration-btn registration-btn-active text-center my-4">ثبت نام</a>
          </div>
          <user-sign-in v-if="loginShow" />
          <registeration v-else />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Registeration from '@/components/Registeration.vue';
import UserSignIn from '../../components/SignIn/UserSignIn.vue';
export default {
  name: 'Register',
  components: { Registeration, UserSignIn },
  data() {
    return {
      loginShow: false,
    };
  },
};
</script>
<style lang="scss">
.register-card {
  width: 450px;
  padding: 2rem;
  border-radius: 2rem !important;

  .login-btn,
  .registration-btn {
    width: 50%;
    height: 55px;
    text-decoration: none;
    border-radius: 30px 30px 30px 0;
    background-color: #eceff5;
    color: #90939a;
    padding: 1rem;
  }
  .login-btn {
    border-radius: 30px 30px 30px 0;
  }
  .registration-btn {
    border-radius: 30px 30px 0 30px;
  }
  .login-btn-active,
  .registration-btn-active {
    background-image: -webkit-linear-gradient(0deg, #109792 1%, #47e33f 100%);
    color: #fff;
  }
}
</style>
