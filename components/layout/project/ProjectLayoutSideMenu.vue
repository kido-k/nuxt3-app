<template>
  <div model-value class="layouts-side-menu">
    <template v-for="(item, index) in layoutSideMenuItems" :key="index">
      <v-btn class="layouts-side-menu__button" @click="transitionPage(item)">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </template>
  </div>
</template>

<script setup lang="ts">
const layoutSideMenuItems: { name: string; icon: string }[] = [
  { name: "one", icon: "mdi-square" },
  { name: "two", icon: "mdi-circle" },
  { name: "three", icon: "mdi-triangle" },
]

function transitionPage(tab: { name: string; icon: string }) {
  navigateTo({
    path: `${tab.name}`,
  })
}
</script>

<style lang="scss">
.layouts-side-menu {
  width: 120px;
  height: 100%;
  padding: 16px;
  text-align: center;
  background-color: #f2f2f2;
  &__button {
    width: 40px;
    margin: 16px 0;
  }
}
</style>
