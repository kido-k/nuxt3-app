<template>
  <v-text-field
    v-model="value"
    label="Password"
    placeholder="Enter your password"
    type="password"
    variant="outlined"
    clearable
    hide-details="auto"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
}

interface Emits {
  (e: "update:modelValue", newValue: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const value = computed({
  get(): string {
    return props.modelValue
  },
  set(value: string) {
    emit("update:modelValue", value)
  },
})
</script>

<style lang="scss"></style>
