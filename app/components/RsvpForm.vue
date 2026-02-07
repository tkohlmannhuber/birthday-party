<script setup lang="ts">
const form = reactive({
  name: '',
  attending: '',
  plusOne: false,
  song: '',
  message: ''
})

const submitted = ref(false)
const submitting = ref(false)
const error = ref('')

async function submitRsvp() {
  if (!form.name || !form.attending) {
    error.value = '⚠️ Yo, fill in your name and if you\'re coming!'
    return
  }

  submitting.value = true
  error.value = ''

  try {
    await $fetch('/api/rsvp', {
      method: 'POST',
      body: { ...form }
    })
    submitted.value = true
  } catch (e) {
    error.value = '💥 Something went wrong... try again!'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="win95-box max-w-lg mx-auto">
    <div class="bg-gradient-to-r from-[#000080] to-[#1084d0] px-3 py-1 flex items-center gap-2">
      <span class="text-white font-bold font-[var(--font-comic)] text-sm">📧 R.S.V.P. - Party Response Form</span>
      <div class="ml-auto flex gap-1">
        <button class="win95-button !p-0 w-5 h-5 text-xs leading-none">_</button>
        <button class="win95-button !p-0 w-5 h-5 text-xs leading-none">□</button>
        <button class="win95-button !p-0 w-5 h-5 text-xs leading-none">✕</button>
      </div>
    </div>
    <div class="win95-box-inner">
      <!-- Success state -->
      <div v-if="submitted" class="text-center py-8">
        <p class="text-5xl mb-4 animate-bounce-in">🎉</p>
        <p class="text-2xl font-bold text-fuchsia-600 font-[var(--font-bungee)]">RADICAL!</p>
        <p class="mt-2 text-lg">
          {{ form.attending === 'yes' ? "You're on the guest list! See ya there! 🤙" : "Bummer! You'll be missed! 😢" }}
        </p>
        <img src="https://media.giphy.com/media/l0MYt5jPR6QX5APm0/giphy.gif" alt="party" class="mx-auto mt-4 w-48 rounded" />
      </div>

      <!-- Form -->
      <form v-else class="space-y-4" @submit.prevent="submitRsvp">
        <div>
          <label class="block font-bold mb-1 text-sm">👤 Your Name (AKA):</label>
          <input
            v-model="form.name"
            type="text"
            class="win95-input w-full"
            placeholder="e.g. DJ Partysaurus"
          />
        </div>

        <div>
          <label class="block font-bold mb-1 text-sm">🤔 Can you make it?</label>
          <div class="space-y-1">
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="form.attending" type="radio" value="yes" />
              <span>✅ HECK YEAH, I'll be there!</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="form.attending" type="radio" value="maybe" />
              <span>🤷 Maybe... let me check my Tamagotchi's schedule</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input v-model="form.attending" type="radio" value="no" />
              <span>😭 Can't make it (sending vibes tho)</span>
            </label>
          </div>
        </div>

        <div>
          <label class="flex items-center gap-2 cursor-pointer">
            <input v-model="form.plusOne" type="checkbox" />
            <span class="font-bold text-sm">👯 Bringing a +1?</span>
          </label>
        </div>

        <div>
          <label class="block font-bold mb-1 text-sm">🎵 Song Request (for the playlist):</label>
          <input
            v-model="form.song"
            type="text"
            class="win95-input w-full"
            placeholder="e.g. Backstreet Boys - Everybody"
          />
        </div>

        <div>
          <label class="block font-bold mb-1 text-sm">💌 Leave a message:</label>
          <textarea
            v-model="form.message"
            class="win95-input w-full h-20 resize-none"
            placeholder="Birthday wishes, dad jokes, anything goes..."
          />
        </div>

        <p v-if="error" class="text-red-600 font-bold text-sm animate-wiggle">{{ error }}</p>

        <div class="text-center pt-2">
          <button
            type="submit"
            class="win95-button text-lg px-8 py-2 animate-pulse-glow"
            :disabled="submitting"
          >
            {{ submitting ? '⏳ Sending...' : '🚀 SEND IT!' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
