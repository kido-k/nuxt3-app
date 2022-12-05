<template>
  <div model-value class="layouts-side-menu">
    <template v-for="(item, index) in layoutSideMenuItems" :key="index">
      <v-btn
        class="layouts-side-menu__button"
        flat
        icon
        @click="transitionPage(item)"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </template>
  </div>
</template>

<script setup lang="ts">
const layoutSideMenuItems: { name: string; icon: string }[] = [
  { name: 'dashboard', icon: 'mdi-collage' },
  { name: 'scenario', icon: 'mdi-code-string ' },
  { name: 'history', icon: 'mdi-history' },
  { name: 'setting', icon: 'mdi-cog-outline ' },
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
  background-color: #6200ff;
  &__button {
    width: 40px;
    margin: 16px 0;
  }
}
</style>
