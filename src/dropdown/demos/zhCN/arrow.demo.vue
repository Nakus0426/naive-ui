<markdown>
# 显示箭头
</markdown>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
    disabled: true
  },
  {
    label: '布朗酒店，伦敦',
    key: 'brown\'s hotel, london'
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles'
  }
]

function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown
    trigger="click"
    :options="options"
    :show-arrow="true"
    @select="handleSelect"
  >
    <n-button>找个地方休息</n-button>
  </n-dropdown>
</template>
