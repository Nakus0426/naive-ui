<markdown>
# 过渡效果

如果你想要自定义过渡效果，可以使用 `transition-props`，并把 `effect` 设置为 `custom`。
</markdown>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const effectRef = ref<'slide' | 'fade' | 'card'>('slide')
const isCardRef = computed(() => effectRef.value === 'card')
const isCard = isCardRef
const myEffect = effectRef
const effects = ['slide', 'fade', 'card']
</script>

<template>
  <n-radio-group v-model:value="myEffect" style="margin-bottom: 10px">
    <n-radio-button v-for="effect in effects" :key="effect" :value="effect">
      {{ effect }}
    </n-radio-button>
  </n-radio-group>
  <n-carousel
    :key="myEffect"
    :effect="myEffect"
    :centered-slides="isCard"
    :slides-per-view="isCard ? 'auto' : 1"
    draggable
    style="height: 240px"
  >
    <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel-item>
  </n-carousel>
</template>

<style>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
