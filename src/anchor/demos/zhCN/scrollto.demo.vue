<markdown>
# 滚动到
</markdown>

<script lang="ts" setup>
import type { AnchorInst } from 'naive-ui'
import { ref } from 'vue'

const anchorRef = ref<AnchorInst | null>(null)
function scrollTo(href: string) {
  anchorRef.value?.scrollTo(href)
}
</script>

<template>
  <div style="height: 200px; padding-left: 200px">
    <n-anchor
      ref="anchorRef"
      affix
      :trigger-top="24"
      :top="88"
      :bound="24"
      style="z-index: 1"
    >
      <n-anchor-link title="演示" href="#演示">
        <n-anchor-link title="基础用法" href="#basic.vue" />
        <n-anchor-link title="忽略间隔" href="#ignore-gap.vue" />
        <n-anchor-link title="固定" href="#affix.vue" />
        <n-anchor-link title="滚动到" href="#scrollto.vue" />
      </n-anchor-link>
      <n-anchor-link title="API" href="#API" />
    </n-anchor>
  </div>
  <n-space style="padding-left: 400px">
    <n-button @click="scrollTo('#basic.vue')">
      基础用法
    </n-button>
    <n-button @click="scrollTo('#affix.vue')">
      固定
    </n-button>
  </n-space>
</template>
