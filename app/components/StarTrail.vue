<script setup lang="ts">
const stars = ['✨', '⭐', '💫', '🌟', '✧', '★']

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    const star = document.createElement('span')
    star.className = 'star-particle'
    star.textContent = stars[Math.floor(Math.random() * stars.length)]
    star.style.left = e.clientX + 'px'
    star.style.top = e.clientY + 'px'
    document.body.appendChild(star)
    setTimeout(() => star.remove(), 1000)
  })
})
</script>

<template>
  <div />
</template>
