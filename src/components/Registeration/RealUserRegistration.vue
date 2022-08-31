<template>
  <div class="real-user-registration">
    <v-form ref="form" v-model="valid" lazy-validation class="w-100">
      <div class="mb-4">
        <label for="name" class="d-block mb-2 mt-3">نام :</label>
        <input v-model="name" type="text" name="name" class="input-field" placeholder="نام را وارد کنید" required />
      </div>
      <div class="mb-4">
        <label for="lastName" class="d-block mb-2 mt-3"> نام خانوادگی :</label>
        <input
          v-model="lastName"
          type="text"
          name="lastName"
          class="input-field"
          placeholder="نام خانوادگی را وارد کنید"
          required
        />
      </div>
      <div class="mb-4">
        <label for="nationalCode" class="d-block mb-2 mt-3">کد ملی :</label>
        <input
          v-model="nationalCode"
          type="number"
          name="nationalCode"
          class="input-field"
          placeholder="کد ملی را وارد کنید"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="d-block mb-2 mt-3"> ایمیل :</label>
        <input
          v-model="email"
          type="email"
          name="email"
          class="input-field"
          placeholder="ایمیل را وارد کنید"
          required
        />
      </div>
      <div class="mb-4">
        <label for="phone" class="d-block mb-2 mt-3"> شماره تماس :</label>
        <input
          v-model="phone"
          type="number"
          name="phone"
          class="input-field"
          placeholder="شماره تماس را وارد کنید"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="d-block mb-2 mt-3"> گذر واژه :</label>
        <input
          v-model="password"
          type="password"
          name="password"
          class="input-field"
          placeholder="گذر واژه را وارد کنید"
          required
        />
      </div>

      <v-btn color="primary" class="user-registration-btn my-4"> ایجاد کاربر </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  name: 'RealUserRegistration',
  data: () => ({
    valid: true,
    name: '',
    lastName: '',
    nationalCode: '',
    phone: '',
    password: '',
    email: '',
  }),
};
</script>
<style lang="scss" scoped>
.real-user-registration {
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

  .user-registration-btn {
    width: 100%;
    height: 50px !important;
    border-radius: 30px;
    background-image: -webkit-linear-gradient(0deg, #109792 1%, #47e33f 100%);
  }
}
</style>
