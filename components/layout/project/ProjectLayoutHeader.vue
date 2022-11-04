<template>
  <v-layout class="layouts-header" justify-end align-center>
    <v-btn icon size="small" variant="flat">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-layout>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.layouts-header {
  width: 100%;
  padding: 8px 16px;
  background-color: #f2f2f2;
  justify-content: flex-end;
  align-items: center;
  &__button {
    width: 40px;
    margin: 16px 0;
  }
}
</style>
