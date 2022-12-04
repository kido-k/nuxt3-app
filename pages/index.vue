<template>
  <v-container class="top-page">
    <client-only>
      <page-top-page-projects :projects="projects" />
    </client-only>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'top',
  middleware: 'auth',
})

const { getProjects } = useProjects()

const projects = computed(() => {
  return getProjects()
})
</script>

<style lang="scss" scoped>
.top-page {
  max-width: 1200px;
}
</style>
