<markdown>
# Basic
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const showRail = ref(true)
const showBackground = ref(true)
</script>

<template>
  <n-space style="margin-bottom: 12px">
    <n-switch v-model:value="showRail" /> Show Rail
    <n-switch v-model:value="showBackground" /> Show Background
  </n-space>
  <n-anchor :show-rail="showRail" :show-background="showBackground">
    <n-anchor-link title="Demos" href="#Demos">
      <n-anchor-link title="Basic" href="#basic.vue" />
      <n-anchor-link title="Ignore-Gap" href="#ignore-gap.vue" />
      <n-anchor-link title="Affix" href="#affix.vue" />
      <n-anchor-link title="Scroll To" href="#scrollto.vue" />
    </n-anchor-link>
    <n-anchor-link title="API" href="#API" />
  </n-anchor>
</template>
