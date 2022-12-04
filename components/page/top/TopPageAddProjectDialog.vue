<template>
  <v-card class="new-project">
    <v-card-title> add new project </v-card-title>
    <v-text-field v-model="projectName" label="project name" class="mt-2" />
    <v-btn color="primary" @click="addNewProject()">save</v-btn>
  </v-card>
</template>

<script setup lang="ts">
const emit = defineEmits(['update-projects', 'close-dialog'])
const projectName = ref<string>('')

const { addFieldData } = useFirestore()

async function addNewProject() {
  await addFieldData('project', {
    name: projectName.value,
    timestamp: new Date(),
  })
  emit('update-projects')
  emit('close-dialog')
}
</script>

<style lang="scss" scoped>
.new-project {
  width: 100%;
  height: 100%;
  padding: 40px 20px;
}
</style>
