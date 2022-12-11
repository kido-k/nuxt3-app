<template>
  <section v-if="currentProjects?.projectId">
    <PageProjectPageSectionLayout
      class="project-section"
      :sections="currentProjects.setting.sections"
    />
    <v-btn large outlined class="new-scenario-button" @click="addNewScenario">
      add new section
    </v-btn>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const { getCurrentProject } = useProjects()

const currentProjects = computed(() => {
  const projectId = String(route.params.projectId) || ''
  return getCurrentProject(projectId)
})

onMounted(() => {
  console.log(currentProjects.value)
})

function addNewScenario() {
  currentProjects
  console.log('addNewScenario')
}
</script>

<style lang="scss" scoped>
.project-section {
  margin: 0 0 24px 0;
}
.new-scenario-button {
  width: 100%;
  border: thin solid #6200ff;
  color: #6200ff;
  background-color: #fff;
}
</style>
