<markdown>
# 月份

可以使用 `month-format` 属性指定面板中月份的显示方式。
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref(1183135260000)
</script>

<template>
  <n-space vertical>
    <n-date-picker v-model:value="timestamp" type="month" clearable />
    <n-date-picker
      v-model:value="timestamp"
      type="month"
      format="y年 M月"
      year-format="y年"
      month-format="M月"
      clearable
    />
    <pre>{{ JSON.stringify(timestamp) }}</pre>
  </n-space>
</template>
