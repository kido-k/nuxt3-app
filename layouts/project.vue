<template>
  <v-app>
    <LayoutProjectLayoutHeader class="project-layout__header" />
    <v-layout class="project-layout__body">
      <LayoutProjectLayoutSideMenu />
      <slot />
    </v-layout>
  </v-app>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.project-layout {
  &__body {
    height: 100%;
  }
}
</style>
