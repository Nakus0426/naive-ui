<markdown>
# Basic

You can use CSS variables from it. If you need to use those variables in JS, please see [useThemeVars](../docs/theme#use-theme-vars).
</markdown>

<script lang="ts" setup>
import { darkTheme } from 'naive-ui'
import { ref } from 'vue'

const theme = ref<typeof darkTheme | null>(null)
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-button @click="theme = darkTheme">
        Dark
      </n-button>
      <n-button @click="theme = null">
        Light
      </n-button>
    </n-space>
    <n-config-provider :theme="theme">
      <n-card>
        <n-el
          tag="span"
          style="
            color: var(--primary-color);
            transition: 0.3s var(--cubic-bezier-ease-in-out);
          "
        >
          I am a Span.
        </n-el>
      </n-card>
    </n-config-provider>
  </n-space>
</template>
