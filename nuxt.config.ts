import { defineLocalBusiness } from 'nuxt-schema-org/schema'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import compression from 'vite-plugin-compression'
import lightningcss from 'vite-plugin-lightningcss'
import Inspect from 'vite-plugin-inspect'



export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2025-02-21',
  router: {
    options: {
      strict: false
    }
  },
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
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#1976D2',
              secondary: '#424242',
              accent: '#82B1FF',
              error: '#FF5252',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FFC107',
            }
          },
          dark: {
            dark: true,
            colors: {
              primary: '#BB86FC',
              secondary: '#3700B3',
              accent: '#03DAC6',
              error: '#CF6679',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FFC107',
            },
          },
        }
      }
    },
    moduleOptions: {
      ssrClientHints: { prefersReducedMotion: true },
      styles:'sass',
      // importComposables: false
    }
  },


  vitalizer: {
    // Remove the render-blocking entry CSS
    disablePrefetchLinks: 'dynamicImports',
    disableStylesheets: 'entry',
    delayHydration: {
      hydrateOnEvents: ['mousemove', 'scroll', 'keydown', 'click', 'touchstart', 'wheel'],
      idleCallbackTimeout: 8000,
      postIdleTimeout: 4000,
    },

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
  features: { inlineStyles: false },
  app: {
    head: {
      htmlAttrs: { lang: "id" },
      link: [
        { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'preconnect', href: '//www.googletagmanager.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: '//www.google-analytics.com', crossorigin: 'anonymous' },
        // { rel: 'dns-prefetch', href: '//cdn.aresa-digital.com' },
        // { rel: 'preconnect', href: '//cdn.aresa-digital.com', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'fetch', href: '/_payload.json', type: 'application/json', crossorigin: 'anonymous' }
      ]
    }
  },

  schemaOrg: {
    identity: defineLocalBusiness({
      name: 'Perkasa Racking | TAP',
      url: 'https://www.aresa-digital.com',
      logo: '/images/logo/TAP2.webp',
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
      image: ['/images/produk/heavy-duty/selective/selective-pallet-rack-TAP_3.webp'],
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
    url: "https://www.aresa-digital.com",
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
    discoverImages: true
  },

  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      routes: [],
      autoSubfolderIndex: true,
      failOnError: true
    },

    routeRules: {
      '/sw.js': { headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' } },
      '/workbook-*.js': { headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' } },
      '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=864000, s-maxage=31536000, immutable' } },
      '/_payload.json': { headers: { 'Cache-Control': 'public, max-age=864000, s-maxage=31536000, immutable' } },

    },

    compressPublicAssets: true
  },

  experimental: { payloadExtraction: true },

  css: ['@/assets/vuetify/settings.scss'],

  build: {
    transpile: ['vuetify']
  },

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

  },

  vite: {
    // css:{
    //   preprocessorOptions:{
    //     scss:{
    //       additionalData: `@import "~@/assets/vuetify.scss";`
    //     }
    //   }
    // },
 
    plugins: [
      Inspect(),
      compression({ algorithm: 'gzip' }),
      compression({ algorithm: 'brotliCompress' }),
      Components({ resolvers: [VuetifyResolver()] }),
      lightningcss({ browserslist: ['> 1%', 'last 2 versions'], minify: true }),
      WindiCSS()
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
