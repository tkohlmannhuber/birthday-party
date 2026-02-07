<script setup lang="ts">
const targetDate = new Date('2026-04-21T00:00:00')

const now = ref(new Date())
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onUnmounted(() => clearInterval(interval))

const timeLeft = computed(() => {
  const diff = targetDate.getTime() - now.value.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    passed: false
  }
})
</script>

<template>
  <div class="win95-box inline-block">
    <div class="bg-gradient-to-r from-[#000080] to-[#1084d0] px-3 py-1">
      <span class="text-white font-bold font-[var(--font-comic)] text-sm">⏰ Countdown.exe</span>
    </div>
    <div class="win95-box-inner text-center">
      <div v-if="timeLeft.passed" class="text-2xl font-bold animate-blink text-red-600">
        🎉 IT'S PARTY TIME!!! 🎉
      </div>
      <div v-else class="flex gap-4 justify-center text-center">
        <div v-for="(value, label) in { DAYS: timeLeft.days, HRS: timeLeft.hours, MIN: timeLeft.minutes, SEC: timeLeft.seconds }" :key="label">
          <div class="visitor-counter text-3xl font-bold px-3 py-1 min-w-[60px]">
            {{ String(value).padStart(2, '0') }}
          </div>
          <div class="text-xs font-bold mt-1 text-gray-700">{{ label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
