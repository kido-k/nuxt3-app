<template>
  <v-app>
    <LayoutCommonLayoutHeader class="project-layout__header" />
    <div class="project-layout__body">
      <LayoutProjectLayoutSideMenu />
      <slot />
    </div>
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
    display: flex;
    height: 100%;
  }
}
</style>
