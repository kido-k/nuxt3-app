<template>
  <v-layout class="common-layout-header">
    <v-layout style="align-items: center">
      <p class="common-layout-header__logo" @click="transitionTopPage()">
        Auto Test
      </p>
      <p class="common-layout-header__project-name">
        {{ currentProjects?.setting?.name }}
      </p>
    </v-layout>

    <v-btn icon size="small" variant="flat">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-layout>
</template>

<script setup lang="ts">
const route = useRoute()
const { getProjects, getCurrentProject } = useProjects()

const projects = computed(() => {
  return getProjects()
})

const currentProjects = computed(() => {
  const projectId = String(route.params.projectId) || ''
  return getCurrentProject(projectId)
})

function transitionTopPage() {
  navigateTo({
    path: '/',
  })
}
</script>

<style lang="scss">
.common-layout-header {
  width: 100%;
  padding: 8px 16px;
  background-color: #6200ff;
  justify-content: space-between;
  align-items: center;
  &__logo {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
  &__button {
    width: 40px;
    margin: 16px 0;
  }
  &__project-name {
    margin: 0 0 0 48px;
    color: #fff;
    font-weight: bold;
  }
}
</style>
