<template>
  <v-app class="top-layout">
    <LayoutCommonLayoutHeader class="top-layout__header" />
    <div class="top-layout__contents">
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
.top-layout {
  height: 100%;
  &__contents {
    height: 100%;
    background-color: #ececec;
  }
}
</style>
