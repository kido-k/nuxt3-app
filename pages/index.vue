<template>
  <v-container>
    <client-only>
      <v-row v-if="projects.length > 0" class="projects">
        <v-col
          v-for="project in projects"
          :key="project.projectId"
          cols="12"
          sm="4"
          class="projects__col"
        >
          <v-card
            class="projects__col__card"
            @click="transitionPage(project.projectId)"
          >
            <v-card-title>{{ project.setting.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </client-only>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'top',
  middleware: 'auth',
})

interface Project {
  projectId: string
  setting: {
    name: string
    timestamp: string
  }
}

let projects: Project[] = []
if (!process.server) {
  const { getFieldData } = useFirestore()
  projects = await getFieldData('project')
}

function transitionPage(projectId: string) {
  navigateTo({
    path: `/project/${projectId}`,
  })
}
</script>

<style lang="scss" scoped>
.projects {
  &__col {
    &__card {
      height: 300px;
    }
  }
}
</style>
