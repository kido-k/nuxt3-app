<template>
  <v-row v-if="props.projects.length > 0" class="projects">
    <v-col
      v-for="project in projects"
      :key="project.projectId"
      cols="12"
      sm="4"
      class="projects__col"
    >
      <v-card
        v-if="project.projectId"
        class="projects__col__card edited-project"
        @click="transitionPage(project.projectId)"
      >
        <v-card-title class="projects__col__card__title">
          {{ project.setting.name }}
        </v-card-title>
        <p class="projects__col__card__project-id">
          {{ project.projectId }}
        </p>
      </v-card>
      <v-card
        v-else
        class="projects__col__card new-project"
        @click="dialog = true"
      >
        <v-card-title class="projects__col__card__title">
          <v-icon class="new-project__icon">mdi-plus</v-icon>
          new Project
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
  <v-dialog v-model="dialog" width="600">
    <page-top-page-add-project-dialog
      @update-projects="updateProjects"
      @close-dialog="dialog = false"
    />
  </v-dialog>
</template>

<script setup lang="ts">
interface Props {
  projects: Array<Project>
}
const props = defineProps<Props>()
const emit = defineEmits(['update-projects'])

const dialog = ref<boolean>(false)

function updateProjects() {
  emit('update-projects')
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
      max-width: 360px;
      padding: 24px;
      border-radius: 8px;
      &__title {
        font-size: 24px;
        padding: 0;
      }
      &__project-id {
        margin: 4px 0 0 0;
        color: #8b8b8b;
      }
    }
  }
}

.new-project {
  border: 3px solid #9a42ff;
  color: #9a42ff;
  &__icon {
    color: #9a42ff;
  }
}

.edited-project {
  border: 3px solid #cbcbcb;
}
</style>
