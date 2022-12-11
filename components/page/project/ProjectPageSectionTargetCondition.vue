<template>
  <div>
    {{ targetCondition }}
  </div>
</template>

<script setup lang="ts">
import condition from '@/assets/const'

interface Props {
  condition: Condition
  index: number
}
const props = defineProps<Props>()
const emit = defineEmits(['update-target-condition'])

onMounted(() => {
  console.log('mounted')
  console.log(condition)
})

const targetCondition = ref(props.condition)

function updateTargetCondition() {
  emit('update-target-condition', {
    condition: targetCondition,
    index: props.index,
  })
}
</script>

<style lang="scss" scoped></style>
