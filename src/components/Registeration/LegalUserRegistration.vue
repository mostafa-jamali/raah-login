<template>
  <div class="legal-user-registration">
    <v-form ref="form" v-model="valid" lazy-validation class="w-100">
      <div class="input-field-container mb-4">
        <label for="companyName" class="d-block mb-2 mt-3">نام شرکت :</label>
        <input
          v-model="companyName"
          type="text"
          name="companyName"
          class="input-field"
          placeholder="نام شرکت را وارد کنید"
          required
        />
        <v-icon class="inputs-icon">{{ iconPathes.company }}</v-icon>
      </div>
      <div class="input-field-container mb-4">
        <label for="companyType" class="d-block mb-2 mt-3">نوع شرکت :</label>
        <input
          v-model="companyType"
          type="text"
          name="companyType"
          class="input-field"
          placeholder="نوع شرکت را وارد کنید"
          required
        />
        <v-icon class="inputs-icon">{{ iconPathes.company }}</v-icon>
      </div>
      <div class="input-field-container mb-4">
        <label for="nationalID" class="d-block mb-2 mt-3">شناسه ملی :</label>
        <input
          v-model="nationalID"
          type="text"
          name="nationalID"
          class="input-field"
          placeholder="شناسه ملی را وارد کنید"
          required
        />
        <v-icon class="inputs-icon">{{ iconPathes.company }}</v-icon>
      </div>
      <div class="input-field-container mb-4">
        <label for="email" class="d-block mb-2 mt-3"> ایمیل :</label>
        <input
          v-model="email"
          type="email"
          name="email"
          class="input-field"
          placeholder="ایمیل را وارد کنید"
          required
        />
        <v-icon class="inputs-icon">{{ iconPathes.email }}</v-icon>
      </div>
      <div class="input-field-container mb-4">
        <label for="phone" class="d-block mb-2 mt-3"> شماره تماس :</label>
        <input
          v-model="phone"
          type="number"
          name="phone"
          class="input-field aaa"
          placeholder="شماره تماس را وارد کنید"
          required
        />
        <v-icon class="inputs-icon">{{ iconPathes.phone }}</v-icon>
      </div>
      <div class="input-field-container mb-4">
        <label for="password" class="d-block mb-2 mt-3"> گذر واژه :</label>
        <input
          v-model="password"
          type="password"
          name="password"
          class="input-field"
          placeholder="گذر واژه را وارد کنید"
          required
        />
        <v-icon class="inputs-icon">{{ iconPathes.password }}</v-icon>
      </div>

      <v-btn color="primary" class="add-new-user-btn my-4"> ایجاد کاربر </v-btn>
    </v-form>
  </div>
</template>
<script>
import { pathes } from '@/plugins/mdiIcons';

export default {
  name: 'LegalUserRegistration',
  data: () => ({
    valid: true,
    companyName: '',
    companyType: '',
    nationalID: '',
    phone: '',
    password: '',
    email: '',
    iconPathes: pathes,
  }),
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

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
