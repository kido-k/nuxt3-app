<template>
  <div v-for="(scenario, sIndex) in sectionScenario" :key="sIndex">
    {{ scenario }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  sectionScenario: []
  index: number
}
const props = defineProps<Props>()
// const emit = defineEmits(['update-section-page-url'])
</script>

<style lang="scss" scoped></style>
