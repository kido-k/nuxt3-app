<template>
  <h1>Project {{ route.params.projectId }}</h1>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'project',
})

// onMounted(async () => {
//   const { projects, updateProjects } = useProjects()

//   let currentProject: Project | null
//   currentProject = await getProject()
//   console.log({ currentProject })
//   useState('currentProject', () => currentProject)
// })

// async function getProject() {
//   const { getDocData } = useFirestore()
//   const _projects = await getDocData('project', route.params.projectId)
//   return _projects
// }
</script>
