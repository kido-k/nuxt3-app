<template>
  <template v-if="editMode">
    <v-text-field
      v-model="sectionName"
      variant="outlined"
      hide-details="auto"
      class="section-name"
      @click.stop=""
    />
    <v-btn
      icon
      size="small"
      flat
      class="ml-4"
      @click.stop="updateSettingName()"
    >
      <v-icon>mdi-check</v-icon>
    </v-btn>
    <v-btn
      icon
      size="small"
      flat
      class="ml-4"
      @click.stop="changeEditMode(false)"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </template>
  <template v-else>
    {{ sectionName }}
    <v-btn
      icon
      size="small"
      flat
      class="ml-2"
      @click.stop="changeEditMode(true)"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </template>
</template>

<script setup lang="ts">
interface Props {
  sectionName: string
  index: number
}
const props = defineProps<Props>()
const emit = defineEmits(['update-section-name'])

let editMode = ref(false)
let sectionName = ref('')

onMounted(() => {
  sectionName.value = props.sectionName
})

function updateSettingName() {
  emit('update-section-name', {
    title: sectionName.value,
    index: props.index,
  })
  changeEditMode(false)
}

function changeEditMode(mode: boolean) {
  editMode.value = mode
}
</script>

<style lang="scss" scoped>
.section-name {
  max-width: 400px;
}
</style>
