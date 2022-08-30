<template>
  <div class="legal-register-page">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="companyName" :rules="fieldRules" label="نام شرکت" required></v-text-field>
      <v-text-field v-model="companyType" :rules="fieldRules" label="نوع شرکت" required></v-text-field>
      <v-text-field v-model="nationalID" :rules="fieldRules" label="شناسه ملی" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="ایمیل" required></v-text-field>
      <v-text-field v-model="phone" :rules="fieldRules" label="شماره تماس" required></v-text-field>
      <v-text-field v-model="password" :rules="fieldRules" label="گذر واژه" required></v-text-field>

      <v-btn color="primary" class="my-4" @click="resetValidation"> ایجاد کاربر </v-btn>
      <p>قبلا ثبت نام کرده اید؟ <a href="/login">وارد شوید</a></p>
    </v-form>
  </div>
</template>
<script>
export default {
  name: 'LegalRegister',
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
<style lang="scss" scoped></style>
