<template>
  <div>
    <v-switch v-model="userType" :label="userType ? 'حقوقی' : 'حقیقی'"></v-switch>
    <legal-user-registration v-if="legalUserShow" />
    <real-user-registration v-else />
  </div>
</template>
<script>
import LegalUserRegistration from '@/components/Registeration/LegalUserRegistration.vue';
import RealUserRegistration from '@/components/Registeration/RealUserRegistration.vue';

export default {
  name: 'Register',
  components: { LegalUserRegistration, RealUserRegistration },
  watch: {
    userType(value) {
      this.legalUserShow = value;
    },
  },
  data: () => ({
    userType: false,
    legalUserShow: false,
  }),
};
</script>
<style lang="scss"></style>
