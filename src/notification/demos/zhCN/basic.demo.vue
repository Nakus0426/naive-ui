<markdown>
# 基础用法
</markdown>

<script lang="ts" setup>
import { NAvatar, NButton, useMessage, useNotification } from 'naive-ui'
import { h } from 'vue'

const message = useMessage()
const notification = useNotification()

function handleClick1() {
  notification.create({
    title: 'Wouldn\'t it be Nice',
    description: 'From the Beach Boys',
    content: `Wouldn't it be nice if we were older
Then we wouldn't have to wait so long
And wouldn't it be nice to live together
In the kind of world where we belong
You know its gonna make it that much better
When we can say goodnight and stay together
Wouldn't it be nice if we could wake up
In the morning when the day is new
And after having spent the day together
Hold each other close the whole night through`,
    meta: '2019-5-27 15:11',
    avatar: () =>
      h(NAvatar, {
        size: 'small',
        round: true,
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      }),
    onAfterLeave: () => {
      message.success('Wouldn\'t it be Nice')
    }
  })
}

function handleClick2() {
  let markAsRead = false
  const n = notification.create({
    title: 'Satisfaction',
    content: `I cant get no satisfaction
I cant get no satisfaction
Cause I try and I try and I try and I try
I cant get no, I cant get no`,
    meta: '2019-5-27 15:11',
    action: () =>
      h(
        NButton,
        {
          text: true,
          type: 'primary',
          onClick: () => {
            markAsRead = true
            n.destroy()
          }
        },
        {
          default: () => '已读'
        }
      ),
    onClose: () => {
      if (!markAsRead) {
        message.warning('请设为已读')
        return false
      }
    }
  })
}
</script>

<template>
  <n-space>
    <NButton @click="handleClick1">
      Wouldn't it be Nice
    </NButton>
    <NButton @click="handleClick2">
      Satisfaction
    </NButton>
  </n-space>
</template>
