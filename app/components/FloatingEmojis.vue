<script setup lang="ts">
const emojis = ref<{ id: number; emoji: string; left: number; duration: number; delay: number }[]>([])
const allEmojis = ['🎈', '🎉', '🎊', '🥳', '🎂', '🍰', '🎁', '🎵', '💃', '🕺', '🪩', '🎸']

let nextId = 0

onMounted(() => {
  // Create initial batch
  for (let i = 0; i < 15; i++) {
    addEmoji(i * 0.5)
  }
  // Keep spawning
  setInterval(() => addEmoji(0), 2000)
})

function addEmoji(delay: number) {
  const id = nextId++
  emojis.value.push({
    id,
    emoji: allEmojis[Math.floor(Math.random() * allEmojis.length)],
    left: Math.random() * 100,
    duration: 6 + Math.random() * 8,
    delay
  })
  setTimeout(() => {
    emojis.value = emojis.value.filter(e => e.id !== id)
  }, (delay + 15) * 1000)
}
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <span
      v-for="e in emojis"
      :key="e.id"
      class="absolute text-3xl"
      :style="{
        left: e.left + '%',
        animation: `float-up ${e.duration}s linear ${e.delay}s both`
      }"
    >
      {{ e.emoji }}
    </span>
  </div>
</template>
