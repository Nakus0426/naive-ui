<markdown>
# 自定义颜色
</markdown>

<script lang="ts" setup>
import type { CSSProperties } from 'vue'

function railStyle({
  focused,
  checked
}: {
  focused: boolean
  checked: boolean
}) {
  const style: CSSProperties = {}
  if (checked) {
    style.background = '#d03050'
    if (focused) {
      style.boxShadow = '0 0 0 2px #d0305040'
    }
  }
  else {
    style.background = '#2080f0'
    if (focused) {
      style.boxShadow = '0 0 0 2px #2080f040'
    }
  }
  return style
}
</script>

<template>
  <n-switch :rail-style="railStyle">
    <template #checked>
      傍晚六点下班
    </template>
    <template #unchecked>
      午夜零点下班
    </template>
  </n-switch>
</template>
