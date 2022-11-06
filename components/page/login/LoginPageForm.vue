<template>
  <v-card class="login-page-form">
    <v-form v-model="form">
      <PageLoginPageInputEmail v-model="loginEmail" />
      <PageLoginPageInputPassword v-model="loginPassword" class="mt-4" />
    </v-form>
    <v-btn
      block
      color="primary"
      size="large"
      type="submit"
      class="mt-10"
      @click="sendLoginForm"
    >
      Sign In
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
const form = ref(true)
const loginEmail = ref("");
const loginPassword = ref("");

const sendLoginForm = async () => {
  const { signIn, token } = useAuth();
  const result: any = await signIn(loginEmail.value, loginPassword.value)
  if (result === true) {
    const to = useRoute().redirectedFrom?.fullPath || "/"
    navigateTo(to, { redirectCode: 302 })
  } else {
    alert("firebase authorization error")
    console.error(result)
  }
};
</script>

<style lang="scss">
.login-page-form {
  width: 600px;
  padding: 48px !important;
  margin: auto;
}
</style>
