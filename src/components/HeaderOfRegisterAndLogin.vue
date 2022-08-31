<template>
  <div class="header-of-register-and-login">
    <div class="text-center">
      <img src="@/assets/logo.png" alt="" width="100px" height="100px" />
    </div>
    <div class="d-flex">
      <a href="/login" class="login-btn text-center my-4" :class="routePath == '/login' ? 'login-btn-active' : ''">
        ورود
      </a>
      <a
        href="/register"
        class="registration-btn text-center my-4"
        :class="routePath == '/register' ? 'registration-btn-active' : ''"
      >
        ثبت نام
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderOfRegisterAndLogin',
  data() {
    return {
      routePath: '/login',
    };
  },
  mounted() {
    this.routePath = this.$route.path;
  },
};
</script>
<style lang="scss">
.header-of-register-and-login {
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
