<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(section, index) in sections" :key="index">
      <v-expansion-panel-header> {{ section.name }} </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-text-field v-model="section.pageUrl" />
        <div v-for="(scenario, sIndex) in section.scenario" :key="sIndex">
          {{ scenario }}
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
interface Props {
  sections: Array<Section>
}
const props = defineProps<Props>()

const sections = computed(() => {
  return props.sections
})
</script>

<style lang="scss" scoped></style>
