<markdown>
# Default file list
</markdown>

<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'

const defaultFileList: UploadFileInfo[] = [
  {
    id: 'the',
    name: 'The',
    status: 'finished'
  },
  {
    id: 'razars',
    name: 'Razars\'s',
    status: 'finished'
  },
  {
    id: 'edge',
    name: 'Blade',
    status: 'finished'
  }
]
</script>

<template>
  <n-upload
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="defaultFileList"
  >
    <n-button>Upload File</n-button>
  </n-upload>
</template>
