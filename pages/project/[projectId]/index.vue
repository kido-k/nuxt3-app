<template>
  <h1>Project {{ route.params.projectId }}</h1>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'top',
})
</script>
