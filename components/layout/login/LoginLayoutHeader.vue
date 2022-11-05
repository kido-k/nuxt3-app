<template>
  <v-layout class="login-layout-header">
    <p class="login-layout-header__logo">Auto Test</p>
  </v-layout>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.login-layout-header {
  width: 100%;
  padding: 8px 16px;
  background-color: #6200ff;
  justify-content: space-between;
  align-items: center;
  &__logo {
    font-weight: bold;
    color: #fff;
  }
}
</style>
