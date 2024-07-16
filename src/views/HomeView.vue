<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NIcon, NSwitch } from 'naive-ui'
import { ArrowBackOutline, ArrowForwardOutline } from '@vicons/ionicons5'
import { useTestStore } from '../store/modules/test'
import { useSystemStore } from '../store/modules/system'
const testStore = useTestStore()
const systemStore = useSystemStore()
let active = ref(false)
const handleChange = (e: MouseEvent) => {
  systemStore.toggleDark(active.value, e)
}
</script>

<template>
  <h1>This is an home page</h1>

  <h3>{{ testStore.count }}</h3>
  <n-button type="primary" @click="testStore.increment()">Primary</n-button>

  <n-switch v-model:value="active" size="large" @click="handleChange">
    <template #checked-icon>
      <n-icon :component="ArrowForwardOutline" />
    </template>
    <template #unchecked-icon>
      <n-icon :component="ArrowBackOutline" />
    </template>
  </n-switch>
</template>

<style lang="scss" scoped></style>
