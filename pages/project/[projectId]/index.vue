<template>
  <h1>Project {{ route.params.projectId }}</h1>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "project",
});

const route = useRoute();
</script>
