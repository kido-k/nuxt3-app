<template>
  <v-app>
    <LayoutCommonLayoutHeader class="project-layout__header" />
    <v-layout class="project-layout__body">
      <LayoutProjectLayoutSideMenu />
      <slot />
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
onMounted(async () => {
  await updateProjects()
})

async function updateProjects() {
  const { setProjects } = useProjects()
  await setProjects()
}
</script>

<style lang="scss">
.project-layout {
  &__body {
    height: 100%;
  }
}
</style>
