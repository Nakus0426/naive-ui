<markdown>
# Multiple line
</markdown>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function info() {
  message.info(
    'I don\'t know why nobody told you how to unfold your love. Once upon a time you dressed so fine. How many roads must a man walk down. \'Cause you walked hand in hand With another man in my place. If I were you, I will realize that I love you more than any other guy.'
  )
}
</script>

<template>
  <n-button @click="info">
    Multiple Line
  </n-button>
</template>
