<markdown>
# Checkbox Placement
</markdown>

<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

function createLabel(level: number): string {
  if (level === 4)
    return 'Out of Tao, One is born'
  if (level === 3)
    return 'Out of One, Two'
  if (level === 2)
    return 'Out of Two, Three'
  if (level === 1)
    return 'Out of Three, the created universe'
  return ''
}

const data = createData()
const defaultExpandedKeys = ref(['40', '4030', '403020'])
const defaultCheckedKeys = ref(['40302010'])

function updateCheckedKeys(v: string[]) {
  console.log('updateCheckedKeys', v)
}
</script>

<template>
  <n-tree
    checkable
    block-line
    checkbox-placement="right"
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :default-checked-keys="defaultCheckedKeys"
    @update:checked-keys="updateCheckedKeys"
  />
</template>
