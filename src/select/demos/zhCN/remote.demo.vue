<markdown>
# 异步加载（单选）

异步单选的例子。
</markdown>

<script lang="ts" setup>
import type { SelectOption } from 'naive-ui'
import { ref } from 'vue'

const options = [
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]

const value = ref(null)
const loadingRef = ref(false)
const optionsRef = ref<SelectOption[]>([])

function handleSearch(query: string) {
  if (!query.length) {
    optionsRef.value = []
    return
  }
  loadingRef.value = true
  window.setTimeout(() => {
    optionsRef.value = options.filter(item => ~item.label.indexOf(query))
    loadingRef.value = false
  }, 1000)
}
</script>

<template>
  <n-select
    v-model:value="value"
    filterable
    placeholder="搜索歌曲"
    :options="optionsRef"
    :loading="loadingRef"
    clearable
    remote
    @search="handleSearch"
  />
</template>
