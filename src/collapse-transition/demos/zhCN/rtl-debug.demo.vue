<markdown>
# Rtl Debug
</markdown>

<script lang="ts" setup>
import { unstableCollapseTransitionRtl } from 'naive-ui'
import { ref } from 'vue'

const rtlEnabled = ref(false)
const rtlStyles = [unstableCollapseTransitionRtl]
const show = ref(true)
</script>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />Rtl</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-space vertical>
        <n-switch v-model:value="show">
          <template #checked>
            Show
          </template>
          <template #unchecked>
            Hide
          </template>
        </n-switch>
        <n-collapse-transition :show="show">
          感知度，方法论，组合拳，引爆点，点线面，精细化，差异化，平台化，结构化，影响力，耦合性，便捷性，一致性，端到端，短平快，护城河，体验感，颗粒度
        </n-collapse-transition>
      </n-space>
    </n-config-provider>
  </n-space>
</template>
