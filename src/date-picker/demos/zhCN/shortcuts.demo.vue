<markdown>
# 快捷选项

你可以自定义一些快捷按钮.
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const ts1 = ref(null)
const ts2 = ref(1183135260000)
const range1 = ref(null)
const range2 = ref(null)
const shortcuts = {
  亲爱的生日: 1631203200000,
  派对日: 1629216000000,
  昨天: () => new Date().getTime() - 24 * 60 * 60 * 1000
}
const rangeShortcuts = {
  快乐假期: [1629216000000, 1631203200000] as const,
  近2小时: () => {
    const cur = new Date().getTime()
    return [cur - 2 * 60 * 60 * 1000, cur] as const
  }
}
</script>

<template>
  <n-space vertical>
    <n-date-picker v-model:value="ts1" type="date" :shortcuts="shortcuts" />
    <n-date-picker v-model:value="ts2" type="datetime" :shortcuts="shortcuts" />
    <n-date-picker
      v-model:value="range1"
      type="daterange"
      :shortcuts="rangeShortcuts"
      :update-value-on-close="true"
    />
    <n-date-picker
      v-model:value="range2"
      type="datetimerange"
      :shortcuts="rangeShortcuts"
    />
  </n-space>
</template>
