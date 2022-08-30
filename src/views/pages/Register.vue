<template>
  <v-container>
    <v-row justify="center">
      <v-col outlined cols="12" sm="4">
        <v-card class="pa-3">
          <v-switch v-model="showMessages" :label="showMessages ? 'حقیقی' : 'حقوقی'"></v-switch>
          <legal-register />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LegalRegister from '../../components/LegalRegister.vue';

export default {
  name: 'Register',
  components: { LegalRegister },
  data: () => ({
    showMessages: false,
  }),
};
</script>
<style lang=""></style>
