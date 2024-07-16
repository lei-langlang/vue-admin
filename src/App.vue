<script setup lang="ts">
import { darkTheme, NConfigProvider, NGlobalStyle } from 'naive-ui'
import { useSystemStore } from './store/modules/system'
const systemStore = useSystemStore()
</script>

<template>
  <router-link to="/">Home</router-link>
  |
  <router-link to="/about">About</router-link>

  <n-config-provider :theme="systemStore.isDark ? darkTheme : undefined">
    <router-view></router-view>
    <n-global-style />
  </n-config-provider>
</template>

<style scoped></style>
