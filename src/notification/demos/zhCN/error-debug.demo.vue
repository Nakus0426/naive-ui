<markdown>
# Error debug
</markdown>

<script lang="ts" setup>
import { useNotification } from 'naive-ui'
import { ref } from 'vue'

const notification = useNotification()
// const message = useMessage()
console.log(notification)

const urlToAnalyse = ref()

function analyzeWebsite() {
  // fetch website content from url
  // return content
  setTimeout(() => {
    // message.error('oooo')
    notification.error({
      content:
        'Website doesn\'t allow to be fetched => Blocked by CORS policy: \'No Access-Control-Allow-Origin\' header found on that website.'
    })
  }, 500)
}
</script>

<template>
  <n-card>
    <n-input
      v-model:value="urlToAnalyse"
      placeholder="URL website to analyse"
    />
    <n-button class="w-100" @click="analyzeWebsite()">
      Analyse
    </n-button>
  </n-card>
</template>
