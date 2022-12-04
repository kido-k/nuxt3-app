<template>
  <v-container class="top-page">
    <client-only>
      <page-top-page-projects
        :projects="projects"
        @update-projects="updateProjects"
      />
    </client-only>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'top',
  middleware: 'auth',
})

let projects: Project[] = []
if (!process.server) {
  await updateProjects()
}

async function updateProjects() {
  const { getProjects, setProjects } = useProjects()
  await setProjects()
  projects = await getProjects()
}
</script>

<style lang="scss" scoped>
.top-page {
  max-width: 1200px;
}
</style>
