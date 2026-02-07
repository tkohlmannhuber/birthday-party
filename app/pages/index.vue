<script setup lang="ts">
	useHead({
		title: "You're Invited! - Birthday Bash",
	});

	const showContent = ref(false);
	onMounted(() => {
		setTimeout(() => {
			showContent.value = true;
		}, 300);
	});
</script>

<template>
	<div class="min-h-screen bg-[var(--color-win95blue)] relative">
		<StarTrail />
		<FloatingEmojis />

		<!-- Construction tape top -->
		<div class="construction-tape" />

		<!-- Marquee banner -->
		<div class="bg-black py-2 overflow-hidden border-y-2 border-yellow-400">
			<p class="animate-marquee whitespace-nowrap text-lg font-bold">
				<span class="text-yellow-300">★彡</span>
				<span class="text-hotpink">
					YOU ARE CORDIALLY INVITED TO THE MOST EPIC BIRTHDAY BASH OF 2026
				</span>
				<span class="text-neongreen">★彡</span>
				<span class="text-neonyellow"> APRIL 21ST </span>
				<span class="text-neonblue">★彡</span>
				<span class="text-neonpurple"> BE THERE OR BE SQUARE </span>
				<span class="text-red-500">★彡</span>
				<span class="text-hotpink"> PARTY PARTY PARTY </span>
				<span class="text-yellow-300">★彡</span>
			</p>
		</div>

		<!-- Main content -->
		<main class="relative z-10 px-4 py-8 max-w-3xl mx-auto">
			<!-- Hero WordArt title -->
			<div v-if="showContent" class="text-center mb-8 animate-bounce-in">
				<p
					class="text-neongreen text-2xl mb-2 font-bold font-[var(--font-comic)]"
					>~ * ~ * ~ * ~</p
				>
				<h1 class="wordart text-5xl sm:text-7xl md:text-8xl leading-tight mb-2">
					Birthday
				</h1>
				<h1
					class="wordart-3d text-4xl sm:text-6xl md:text-7xl leading-tight mb-2">
					Party!!
				</h1>
				<p
					class="text-neonyellow text-2xl mb-2 font-bold font-[var(--font-comic)]"
					>~ * ~ * ~ * ~</p
				>
			</div>

			<!-- Spinning CD / Disco Ball -->
			<div class="text-center mb-6">
				<span class="inline-block text-7xl animate-spin-slow">🪩</span>
			</div>

			<!-- Date & Details Card -->
			<div class="win95-box mb-8">
				<div
					class="bg-gradient-to-r from-[#000080] to-[#1084d0] px-3 py-1 flex items-center gap-2">
					<span class="text-white font-bold font-[var(--font-comic)] text-sm"
						>📋 Party_Details.txt - Notepad</span
					>
					<div class="ml-auto flex gap-1">
						<button class="win95-button !p-0 w-5 h-5 text-xs leading-none"
							>_</button
						>
						<button class="win95-button !p-0 w-5 h-5 text-xs leading-none"
							>□</button
						>
						<button class="win95-button !p-0 w-5 h-5 text-xs leading-none"
							>✕</button
						>
					</div>
				</div>
				<div class="win95-box-inner space-y-4">
					<div class="text-center">
						<h2 class="wordart-wave text-3xl sm:text-4xl mb-4"
							>Save The Date!</h2
						>
					</div>

					<div class="grid sm:grid-cols-2 gap-4 text-lg">
						<div class="flex items-start gap-3">
							<span class="text-3xl">📅</span>
							<div>
								<p class="font-bold text-fuchsia-700">WHEN:</p>
								<p>April 21st, 2026</p>
								<p class="text-sm text-gray-600">(That's a Tuesday, baby!)</p>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<span class="text-3xl">🕖</span>
							<div>
								<p class="font-bold text-fuchsia-700">TIME:</p>
								<p>7:00 PM - ???</p>
								<p class="text-sm text-gray-600">(Until the last one drops)</p>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<span class="text-3xl">📍</span>
							<div>
								<p class="font-bold text-fuchsia-700">WHERE:</p>
								<p>TBA</p>
								<p class="text-sm text-gray-600">(Stay tuned, homie!)</p>
							</div>
						</div>

						<div class="flex items-start gap-3">
							<span class="text-3xl">👗</span>
							<div>
								<p class="font-bold text-fuchsia-700">DRESS CODE:</p>
								<p>90s Vibes!</p>
								<p class="text-sm text-gray-600"
									>(Think Fresh Prince meets Spice Girls)</p
								>
							</div>
						</div>
					</div>

					<div class="text-center pt-2">
						<p class="text-sm animate-blink text-red-600 font-bold">
							⚠️ WARNING: Extreme fun levels expected. Proceed at your own risk!
							⚠️
						</p>
					</div>
				</div>
			</div>

			<!-- Countdown -->
			<div class="text-center mb-8">
				<CountdownTimer />
			</div>

			<!-- What to expect -->
			<div class="win95-box mb-8">
				<div class="bg-gradient-to-r from-[#000080] to-[#1084d0] px-3 py-1">
					<span class="text-white font-bold font-[var(--font-comic)] text-sm"
						>🎮 What_To_Expect.exe</span
					>
				</div>
				<div class="win95-box-inner">
					<h3 class="wordart-wave text-2xl mb-4 text-center">Party Agenda</h3>
					<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
						<div class="p-3">
							<span class="text-4xl block mb-2">🍕</span>
							<p class="font-bold text-sm">FOOD</p>
							<p class="text-xs text-gray-600">Noms galore</p>
						</div>
						<div class="p-3">
							<span class="text-4xl block mb-2">🎵</span>
							<p class="font-bold text-sm">BANGERS</p>
							<p class="text-xs text-gray-600">Only hits</p>
						</div>
						<div class="p-3">
							<span class="text-4xl block mb-2">🎮</span>
							<p class="font-bold text-sm">GAMES</p>
							<p class="text-xs text-gray-600">N64 tournament</p>
						</div>
						<div class="p-3">
							<span class="text-4xl block mb-2">🥳</span>
							<p class="font-bold text-sm">VIBES</p>
							<p class="text-xs text-gray-600">Immaculate</p>
						</div>
					</div>
				</div>
			</div>

			<!-- RSVP Section -->
			<div class="mb-8">
				<div class="text-center mb-4">
					<h2 class="wordart text-4xl sm:text-5xl">RSVP NOW!</h2>
					<p
						class="text-neonyellow font-bold text-lg mt-2 font-[var(--font-comic)]">
						↓ Don't leave me hanging! ↓
					</p>
				</div>
				<RsvpForm />
			</div>

			<!-- GIF section -->
			<div class="text-center mb-8 space-y-2">
				<p
					class="text-neongreen font-bold text-xl font-[var(--font-comic)] animate-wiggle inline-block">
					★ See you there, party people! ★
				</p>
			</div>

			<!-- Visitor counter -->
			<div class="text-center mb-4">
				<p class="text-white text-sm mb-1 font-[var(--font-comic)]"
					>You are visitor number:</p
				>
				<div class="visitor-counter text-lg tracking-widest">
					{{ String(Math.floor(Math.random() * 9000) + 1000).padStart(6, "0") }}
				</div>
			</div>

			<!-- Footer -->
			<div class="text-center text-sm text-gray-400 space-y-2 pb-4">
				<p>
					<span class="animate-blink inline-block">🚧</span>
					Best viewed in Netscape Navigator 4.0
					<span class="animate-blink inline-block">🚧</span>
				</p>
				<p>Made with 💖 and way too much nostalgia</p>
				<div class="flex justify-center gap-4 mt-2">
					<span class="text-2xl animate-wiggle inline-block">🏗️</span>
					<span class="text-xs text-yellow-400 leading-loose"
						>UNDER CONSTRUCTION</span
					>
					<span class="text-2xl animate-wiggle inline-block">🏗️</span>
				</div>
			</div>
		</main>

		<!-- Construction tape bottom -->
		<div class="construction-tape" />
	</div>
</template>
