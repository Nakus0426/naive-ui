<markdown>
# 滚动到
</markdown>

<script lang="ts" setup>
import type { LayoutInst, LayoutSiderInst } from 'naive-ui'
import { ref } from 'vue'

const siderRef = ref<LayoutSiderInst | null>(null)
const contentRef = ref<LayoutInst | null>(null)
</script>

<template>
  <n-space vertical size="large">
    <n-space>
      <n-button @click="siderRef?.scrollTo({ top: 120, behavior: 'smooth' })">
        边栏滚到 120px
      </n-button>
      <n-button @click="contentRef?.scrollTo({ top: 120, behavior: 'smooth' })">
        内容滚到 120px
      </n-button>
    </n-space>
    <n-layout style="height: 360px">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        颐和园路
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
        <n-layout-sider ref="siderRef" bordered content-style="padding: 24px;">
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
        </n-layout-sider>
        <n-layout-content
          ref="contentRef"
          content-style="padding: 24px;"
          :native-scrollbar="false"
        >
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
        </n-layout-content>
      </n-layout>
      <n-layout-footer
        bordered
        position="absolute"
        style="height: 64px; padding: 24px"
      >
        成府路
      </n-layout-footer>
    </n-layout>
  </n-space>
</template>
