<template>
  <div class="legal-user-registration">
    <v-form ref="form" v-model="valid" lazy-validation class="w-100">
      <div class="mb-4">
        <label for="companyName" class="d-block mb-2 mt-3">نام شرکت :</label>
        <input v-model="companyName" name="companyName" class="input-field" placeholder="نام شرکت را وارد کنید" required />
      </div>
      <div class="mb-4">
        <label for="companyType" class="d-block mb-2 mt-3">نوع شرکت :</label>
        <input v-model="companyType" name="companyType" class="input-field" placeholder="نوع شرکت را وارد کنید" required />
      </div>
      <div class="mb-4">
        <label for="nationalID" class="d-block mb-2 mt-3">شناسه ملی :</label>
        <input v-model="nationalID" name="nationalID" class="input-field" placeholder="شناسه ملی را وارد کنید" required />
      </div>
      <div class="mb-4">
        <label for="email" class="d-block mb-2 mt-3"> ایمیل :</label>
        <input v-model="email" name="email" class="input-field" placeholder="ایمیل را وارد کنید" required />
      </div>
      <div class="mb-4">
        <label for="phone" class="d-block mb-2 mt-3"> شماره تماس :</label>
        <input v-model="phone" name="phone" class="input-field" placeholder="شماره تماس را وارد کنید" required />
      </div>
      <div class="mb-4">
        <label for="password" class="d-block mb-2 mt-3"> گذر واژه :</label>
        <input v-model="password" name="password" class="input-field" placeholder="گذر واژه را وارد کنید" required />
      </div>

      <!-- <v-text-field v-model="companyName" :rules="fieldRules" label="نام شرکت" required></v-text-field> -->

      <v-btn color="primary" class="user-registration-btn my-4" @click="resetValidation"> ایجاد کاربر </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  name: 'LegalUserRegistration',
  data: () => ({
    valid: true,
    companyName: '',
    companyType: '',
    nationalID: '',
    phone: '',
    password: '',
    fieldRules: [v => !!v || 'این فیلد الزامی می باشد.'],
    email: '',
    emailRules: [v => !!v || 'این فیلد الزامی می باشد.', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
  }),

  methods: {
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style lang="scss" scoped>
.legal-user-registration {
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

  .user-registration-btn {
    width: 100%;
    height: 50px !important;
    border-radius: 30px;
    background-image: -webkit-linear-gradient(0deg, #109792 1%, #47e33f 100%);
  }
}
</style>
