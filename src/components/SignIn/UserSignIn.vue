<template>
  <div class="user-sign-in">
    <v-form ref="form" lazy-validation class="w-100">
      <div class="mb-4">
        <label for="phone" class="d-block mb-2 mt-3"> شماره تماس :</label>
        <input
          v-model="phone"
          type="number"
          name="phone"
          class="input-field"
          placeholder="شماره تماس خود را وارد کنید"
          required
        />
      </div>

      <v-btn color="primary" class="user-sign-in-btn my-4">ارسال کد تأیید </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  name: 'UserSignIn',
  data: () => ({
    phone: '',
  }),
};
</script>
<style lang="scss" scoped>
.user-sign-in {
  width: 100%;
  .input-field {
    height: 50px;
    width: 100%;
    border-radius: 30px;
    padding: 0.25rem 1.25rem 0.25rem 3rem;
    box-shadow: 0 0 19px 1px rgb(149 152 160 / 18%);
    border: 1px solid transparent;
  }
  .input-field:focus {
    outline: none;
    border: 1px solid #2db259;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .user-sign-in-btn {
    width: 100%;
    height: 50px !important;
    border-radius: 30px;
    background-image: -webkit-linear-gradient(0deg, #109792 1%, #47e33f 100%);
  }
}
</style>
