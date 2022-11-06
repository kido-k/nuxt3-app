<template>
  <v-container>
    <v-row class="projects">
      <v-col
        v-for="project in projects"
        :key="project.id"
        cols="12"
        sm="4"
        class="projects__col"
      >
        <v-card class="projects__col__card" @click="transitionPage(project.id)">
          <v-card-title>{{ project.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "top",
  middleware: "auth",
})

const projects: { id: number; name: string }[] = [
  {
    id: 0,
    name: "1 project",
  },
  {
    id: 1,
    name: "2 project",
  },
  {
    id: 2,
    name: "3 project",
  },
  {
    id: 3,
    name: "4 project",
  },
  {
    id: 4,
    name: "5 project",
  },
  {
    id: 5,
    name: "6 project",
  },
  {
    id: 6,
    name: "7 project",
  },
  {
    id: 7,
    name: "8 project",
  },
]

function transitionPage(projectId: number) {
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
