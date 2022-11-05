<template>
  <v-container class="login-page">
    <PageLoginPageForm />
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "login",
});

function transitionPage(projectId: number) {
  navigateTo({
    path: `/project/${projectId}`,
  });
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
