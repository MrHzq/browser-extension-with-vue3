<template>
  <div class="min-w-60 p-4 text-center">
    <h2 class="font-bold mb-2">Welcome to hzq Extension!</h2>

    <div class="flex justify-center gap-1">
      <span>当前时间:</span>
      <span>{{ now }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { App } from "vue"

import { formatTime } from "~utils/dayjs"

const now = ref(formatTime())

setInterval(() => {
  now.value = formatTime()
}, 1000)

defineOptions({
  prepare(app: App) {
    // Use any plugins here:
    // app.use
  }
})
</script>

<style>
@import "./style.css";
</style>
