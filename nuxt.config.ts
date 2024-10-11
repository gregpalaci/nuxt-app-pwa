// ./nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/svg", "@vite-pwa/nuxt"],

  pwa: {
    /* PWA options */

    manifest: {
      name: "My Nuxt PWA",
      short_name: "Nuxt PWA",
      description: "My Awesome Nuxt PWA",
      theme_color: "#0AB85F",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.destination === "image",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "images-cache",
            expiration: {
              maxEntries: 10,
            },
          },
        },
      ],
      navigateFallback: "/", // Fallback to index.html
      globPatterns: [
        "**/*.{js,svg,css,html,png,jpg,jpeg,svg,woff2,woff,ttf,eot,webmanifest}",
      ],
    },
    client: {
      installPrompt: true,
    },
    registerWebManifestInRouteRules: true,
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\/$/],
    },
    // base: "/",
    registerType: "autoUpdate",
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/about"],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    shim: false,
  },

  compatibilityDate: "2024-10-11",
});
