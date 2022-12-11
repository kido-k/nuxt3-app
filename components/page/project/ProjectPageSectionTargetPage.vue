<template>
  <section class="target-page">
    <p class="target-page__title">target page setting</p>
    <v-layout class="align-center">
      <p class="target-page__label">page url</p>
      <v-text-field
        v-model="targetPageUrl"
        variant="outlined"
        hide-details="auto"
        class="target-page__setting"
      />
    </v-layout>
    <v-layout class="align-start mt-4 mb-4">
      <p class="target-page__label mt-2">page condition</p>
      <div class="target-page__setting">
        <div v-for="(condition, cIndex) in targetPageConditions" :key="cIndex">
          <PageProjectPageSectionTargetCondition
            :condition="condition"
            :index="cIndex"
            @update-target-condition="updateTargetCondition"
          />
        </div>
        <v-btn
          icon
          size="small"
          flat
          class="ml-2 add-condition-button"
          @click.stop="addTargetCondition"
        >
          <v-icon color="#6200ff">mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </section>
</template>

<script setup lang="ts">
interface Props {
  sectionTarget: {
    url: string
    conditions: Condition[]
  }
  index: number
}
const props = defineProps<Props>()
const emit = defineEmits([
  'update-section-target-page-url',
  'update-section-target-page-conditions',
])

const targetPageUrl = computed({
  get(): string {
    return props.sectionTarget.url
  },
  set(value: string) {
    emit('update-section-target-page-url', {
      pageUrl: value,
      index: props.index,
    })
  },
})

const targetPageConditions = ref(props.sectionTarget.conditions)

function addTargetCondition() {
  targetPageConditions.value.push({
    type: 'id',
    value: 'example',
    action: 'exist',
  })
}

function updateTargetCondition(targetCondition: {
  condition: Condition
  cIndex: number
}) {
  targetPageConditions.value[targetCondition.cIndex] = targetCondition.condition
}
</script>

<style lang="scss" scoped>
.target-page {
  border: 2px solid #6200ff;
  border-radius: 8px;
  padding: 0 24px;
  margin: 24px 0;

  &__title {
    font-size: 24px;
    margin: 8px 0 16px 0;
  }

  &__label {
    width: 180px;
    font-size: 16px;
  }
  &__setting {
    width: 100%;
  }
}

.add-condition-button {
  border: thin solid #6200ff;
}
</style>
