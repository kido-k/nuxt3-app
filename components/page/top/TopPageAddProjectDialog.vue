<template>
  <v-card class="new-project-dialog">
    <v-card-title> add new project </v-card-title>
    <v-text-field v-model="projectName" label="project name" class="mt-2" />
    <v-btn color="primary" @click="addProject()">save</v-btn>
  </v-card>
</template>

<script setup lang="ts">
const emit = defineEmits(['close-dialog'])
const projectName = ref<string>('')

const { addNewProject } = useProjects()

async function addProject() {
  const projectId = await addNewProject(projectName.value)
  await updateProjects()
  transitionPage(projectId)
  emit('close-dialog')
}

async function updateProjects() {
  const { setProjects } = useProjects()
  await setProjects()
}

function transitionPage(projectId: string) {
  navigateTo({
    path: `/project/${projectId}`,
  })
}
</script>

<style lang="scss" scoped>
.new-project-dialog {
  width: 100%;
  height: 100%;
  padding: 40px 20px;
}
</style>
