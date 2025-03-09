// import { visualizer } from 'rollup-plugin-visualizer'
import { defineLocalBusiness } from 'nuxt-schema-org/schema'
// import WindiCSS from 'vite-plugin-windicss'
// import Components from 'unplugin-vue-components/vite'
// import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import compression from 'vite-plugin-compression'
// import lightningcss from 'vite-plugin-lightningcss'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// import Inspect from 'vite-plugin-inspect'
import { fileURLToPath, URL } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2025-02-21',

  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/seo',
    '@zadigetvoltaire/nuxt-gtm',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-schema-org',
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
    '@nuxt/image',
    'nuxt-vitalizer'
  ],


  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          customTheme: {
            dark: false,
            colors: {
              // Daftar warna yang digunakan saja
              primary: '#1976D2',    // Warna utama
              secondary: '#424242',  // Warna sekunder
              accent: '#82B1FF',     // Warna aksen
              error: '#FF5252',      // Warna error
              info: '#2196F3',       // Warna informasi
              success: '#4CAF50',    // Warna sukses
              warning: '#FFC107',    // Warna peringatan
            },
          },
        }
      },
      components: [
        "VLayout",
        "VApp",
        "VAppBar",
        "VMain",
        "VContainer",
        "VRow",
        "VCol",
        "VSpacer",
        "VFooter",
        "VSheet",
        "VNavigationDrawer",
        "VList",
        "VListItem",
        "VTabs",
        "VTab",
        "VToolbar",
        "VBreadcrumbs",
        "VBottomNavigation",
        "VBottomSheet",
        "VMenu",
        "VAlert",
        "VAvatar",
        "VBadge",
        "VBanner",
        "VCard",
        "VCarousel",
        "VChip",
        "VExpansionPanel",
        "VExpansionPanels",
        "VImg",
        "VTimeline",
        "VTimelineItem",
        "VForm",
        "VTextField",
        "VTextarea",
        "VSelect",
        "VAutocomplete",
        "VCombobox",
        "VCheckbox",
        "VRadio",
        "VSwitch",
        "VSlider",
        "VFileInput",
        // "VDatePicker",
        // "VColorPicker",
        "VInput",
        "VProgressCircular",
        "VProgressLinear",
        "VSnackbar",
        "VDialog",
        "VTooltip",
        "VRating",
        "VHover",
        "VDivider",
        "VSpeedDial",
        "VStepper",
        "VVirtualScroll",
        "VSystemBar",]
    },
    moduleOptions: {
      disableModernSassCompiler: true,
      // disableVuetifyStyles: true
      disableVuetifyStyles: true,
      styles: {
        configFile: './assets/css/components.scss'
      },
      ignoreDirectives: ['Touch', 'Mutate', 'Intersect'],
      ssrClientHints: {
        prefersReducedMotion: true,
        // prefersColorScheme: true,
        // prefersColorSchemeOptions:{
        //   useBrowserThemeOnly: true
        // }
      }
    }
  },
  css: ['@/assets/css/globals.scss'],
  
  vitalizer: {
    // Remove the render-blocking entry CSS
    // disablePrefetchLinks: true,
    disableStylesheets: 'entry',
    // delayHydration: {
    //   hydrateOnEvents: ['mousemove', 'scroll', 'keydown', 'click', 'touchstart', 'wheel'],
    //   idleCallbackTimeout: 8000,
    //   postIdleTimeout: 4000
    // }
  },
  googleFonts: {
    prefetch: true,
    preload: true,
    display: 'swap',
    preconnect: true,
    families: {
      'Barlow Semi Condensed': [300, 400, 500, 700, 900]
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: "id" },
      link: [
        { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'preconnect', href: '//www.googletagmanager.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: '//www.google-analytics.com', crossorigin: 'anonymous' },
        { rel: 'dns-prefetch', href: '//cdn.perkasaracking.co.id' },
        { rel: 'preconnect', href: '//cdn.perkasaracking.co.id', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'fetch', href: '/_payload.json', type: 'application/json', crossorigin: 'anonymous' }
      ]
    }
  },

  schemaOrg: {
    identity: defineLocalBusiness({
      name: 'Perkasa Racking | TAP',
      url: 'https://www.perkasaracking.co.id',
      logo: 'https://cdn.perkasaracking.co.id/images/logo/TAP2.webp',
      telephone: '+62 822-1020-3909',
      description: 'Perkasa Racking adalah penyedia rak heavy duty, medium duty, light duty, dan solusi penyimpanan industri berkualitas.',
      address: {
        streetAddress: 'Summarecon Bekasi. Ruby Commercial TB10 • Sinpasa...',
        addressLocality: 'Bekasi',
        postalCode: '17142',
        addressCountry: 'ID',
      },
      currenciesAccepted: 'IDR',
      priceRange: 'IDR 1.000.000 - IDR 500.000.000',
      image: ['https://cdn.perkasaracking.co.id/images/produk/heavy-duty/selective/selective-pallet-rack-TAP_3.webp'],
      openingHoursSpecification: [
        { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
        { dayOfWeek: ['Saturday'], opens: '08:00', closes: '12:00' }
      ],
      sameAs: [
        'https://www.facebook.com/rakgudang4pallet/',
        'https://www.instagram.com/rakgudang_id/'
      ]
    })
  },

  site: {
    url: "https://www.perkasaracking.co.id",
    indexable: true,
    robots: {
      blockNonSeoBots: true,
      sitemap: ["/sitemap.xml"],
      disallow: ["/secret", "/admin"],
      enabled: true
    }
  },

  seo: {},

  sitemap: {
    autoLastmod: true,
    enabled: true,
    discoverImages: true,
    // sources:['/api/artikel']

  },

  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      // routes: [
      //   '/produk/heavy-duty/double-deep',
      //   '/produk/pallet/wooden',
      //   '/produk/heavy-duty',
      //   '/produk/medium-duty',
      //   '/produk/light-duty'
      // ],
      autoSubfolderIndex: true,
      failOnError: true
    },

    routeRules: {
      '/sw.js': { headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' } },
      '/workbook-*.js': { headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' } },
      '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=864000, s-maxage=31536000, immutable' } },
      '/_payload.json': { headers: { 'Cache-Control': 'public, max-age=864000, s-maxage=31536000, immutable' } },
      '/**': { headers: { 'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=300' } }
    },

    compressPublicAssets: true
  },

  experimental: { payloadExtraction: true },

  build: {
    transpile: ['vuetify']
  },
  features: { inlineStyles: false },

  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt', 'images/logo/*.png'],
    manifest: {
      name: 'Perkasa Racking | TAP',
      short_name: 'Perkasa Racking',
      description: 'Penyedia rak heavy duty, light duty, dan solusi penyimpanan industri terbaik.',
      theme_color: '#004080',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        { src: '/images/logo/tap-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/images/logo/tap-512x512.png', sizes: '512x512', type: 'image/png' }
      ]
    },
    workbox: {
      // swDest: 'public/sw.js',
      cleanupOutdatedCaches: true,
      clientsClaim: true, // Pastikan SW langsung aktif
      skipWaiting: true,
      globPatterns: ['*/.{js,css,html,png,jpg,webp,svg}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/cdn\.aresa-digital\.com\/images\/.*$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'cdn-images',
            expiration: {
              maxEntries: 100, // Simpan max 100 gambar
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 hari
            },
          },
        },
        {
          urlPattern: /^https:\/\/aresa-digital\.com\/.*\.(js|css|html|json)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'site-content',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 7, // 7 hari
            },
          },
        },
        {
          urlPattern: '/api/.*',
          handler: 'NetworkFirst',
          method: 'GET',
          options: {
            cacheName: 'site-content',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 7, // 7 hari
            },
          },
        }
      ]
    }
  },

  vite: {
    
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./', import.meta.url))
      }
    },

    plugins: [
      compression({ algorithm: 'gzip' }),
      compression({ algorithm: 'brotliCompress' }),
    ],
    build: {
      
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: { drop_console: true, drop_debugger: true },
        format: { comments: false }
      },
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        treeshake: true,
        output: { manualChunks: { vuetify: ['vuetify'] } }
      }
    }
  },
  gtm: {
    id: "GTM-WRC7F9WV",
    enabled: true,
    loadScript: true,
    defer: true
  },

  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId
      },
      gtm: {
        id: "GTM-WRC7F9WV",
        enabled: true,
        loadScript: true
      },

    }
  }
})
