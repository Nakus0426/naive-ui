<markdown>
# 控制选项的显示隐藏

在某种情况下，不同的角色会看到不同的菜单，你可以使用 `show` 属性来隐藏菜单。
</markdown>

<script lang="ts" setup>
import type { Component } from 'vue'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { computed, h, ref } from 'vue'

const accordion = ref(false)

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const options = computed(() => [
  {
    label: '提升效率的法宝',
    icon: renderIcon(PersonIcon),
    key: '1',
    children: [
      {
        label: '如何提高产出',
        key: '2'
      }
    ]
  },
  {
    label: '摸鱼宝典',
    key: '3',
    icon: renderIcon(BookIcon),
    show: !accordion.value,
    children: [
      {
        label: '你摸鱼',
        key: '4'
      },
      {
        label: '我摸鱼',
        key: '5'
      },
      {
        label: '老板宝马变青桔',
        key: '6'
      }
    ]
  }
])
</script>

<template>
  <n-space vertical>
    <n-switch v-model:value="accordion">
      <template #checked>
        老板
      </template>
      <template #unchecked>
        打工人
      </template>
    </n-switch>
    <n-menu :options="options" />
  </n-space>
</template>
