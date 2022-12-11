<template>
  <v-expansion-panels v-model="panels" multiple>
    <v-expansion-panel
      v-for="(section, index) in sections"
      :key="index"
      class="sections"
    >
      <v-expansion-panel-title class="section__title">
        <PageProjectPageSectionName
          :section-name="section.name"
          :index="index"
          @update-section-title="updateSectionTitle"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <PageProjectPageSectionTargetPage
          :section-target="section.targetPage"
          :index="index"
          @update-section-target-page-url="updateSectionTargetPageUrl"
          @update-section-target-page-conditions="
            updateSectionTargetPageConditions
          "
        />
        <PageProjectPageSectionTestScenaio
          :section-scenario="section.scenario"
          :index="index"
          @update-section-page-url="updateSectionTargetPageUrl"
        />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
interface Props {
  sections: Array<Section>
}
const props = defineProps<Props>()

const panels = ref([])
const sections = ref(props.sections)

function updateSectionTitle(title: string, index: number) {
  const section = sections.value[index]
  section.name = title
}

function updateSectionTargetPageUrl(pageUrl: string, index: number) {
  const section = sections.value[index]
  section.targetPage.url = pageUrl
}

function updateSectionTargetPageConditions(conditions: [], index: number) {
  const section = sections.value[index]
  section.targetPage.conditions = conditions
}
</script>

<style lang="scss" scoped>
.section__title {
  padding: 12px 24px;
  & > .v-expansion-panel-title__overlay {
    border-radius: 8px;
  }
}
</style>
