<template>
  <div>
    <h2 class="text-center">Welcome to hzq Extension!</h2>

    <div class="container">
      {{ now }}
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
.container {
  min-width: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 47px;
}
.text-center {
  text-align: center;
}
</style>
