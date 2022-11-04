<template>
  <v-layout class="top-layout-header">
    <p class="top-layout-header__logo">Auto Test</p>
    <v-btn icon size="small" variant="flat">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-layout>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.top-layout-header {
  width: 100%;
  padding: 8px 16px;
  background-color: #6200ff;
  justify-content: space-between;
  align-items: center;
  &__logo {
    font-weight: bold;
    color: #fff;
  }
  &__button {
    width: 40px;
    margin: 16px 0;
  }
}
</style>
