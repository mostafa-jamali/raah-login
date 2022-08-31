<template>
  <div class="user-sign-in">
    <v-form ref="form" lazy-validation class="w-100">
      <div class="input-field-container mb-4">
        <label for="phone" class="d-block mb-2 mt-3"> شماره تماس :</label>
        <input
          v-model="phone"
          type="number"
          name="phone"
          class="input-field"
          placeholder="شماره تماس خود را وارد کنید"
          required
        />
        <v-icon class="inputs-icon">{{ iconPathes.phone }}</v-icon>
      </div>

      <v-btn color="primary" class="add-new-user-btn my-4">ارسال کد تأیید </v-btn>
    </v-form>
  </div>
</template>
<script>
import { pathes } from '@/plugins/mdiIcons';

export default {
  name: 'UserSignIn',
  data: () => ({
    phone: '',
    iconPathes: pathes,
  }),
};
</script>
<style lang="scss" scoped>
.user-sign-in {
  width: 100%;

  .input-field-container {
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
  }
}
</style>
