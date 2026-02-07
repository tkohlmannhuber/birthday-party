import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  future: {
    compatibilityVersion: 4
  },

  modules: ['@vite-pwa/nuxt'],

  nitro: {
    preset: 'netlify'
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  app: {
    head: {
      title: "You're Invited! - Birthday Bash 🎉",
      meta: [
        { name: 'description', content: 'The most radical birthday party of the century! April 21st!' },
        { name: 'theme-color', content: '#ff00ff' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Bungee+Shade&display=swap' }
      ]
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Birthday Party Invite',
      short_name: 'BDay Bash',
      description: 'The most radical birthday party of the century!',
      theme_color: '#ff00ff',
      background_color: '#000080',
      display: 'standalone',
      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  }
})
