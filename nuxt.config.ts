// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineLocalBusiness } from 'nuxt-schema-org/schema'
import WindiCSS from 'vite-plugin-windicss'

import compression from 'vite-plugin-compression';
import lightningcss from 'vite-plugin-lightningcss'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      link: [
        { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'preconnect', href: '//www.googletagmanager.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: '//www.google-analytics.com', crossorigin: 'anonymous' },
        { rel: 'dns-prefetch', href: '//cdn.perkasaracking.co.id' },
        { rel: 'preconnect', href: '//cdn.perkasaracking.co.id', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'fetch', href: '/_payload.json', type: 'application/json', crossorigin: 'anonymous' }
      ]
    },
  },
  schemaOrg: {
    identity: defineLocalBusiness({
      name: 'Perkasa Racking | TAP',
      url: 'https://www.perkasaracking.co.id',
      logo: 'https://cdn.perkasaracking.co.id/images/logo/TAP2.webp', // Logo perusahaan
      telephone: '+62 822-1020-3909',
      description: 'Perkasa Racking adalah perusahaan yang bergerak di bidang penyediaan rak heavy duty, light duty , medium duty dan solusi penyimpanan industri dengan kualitas terbaik.',
      address: {
        streetAddress: 'Summarecon Bekasi. Ruby Commercial TB10 • Sinpasa. Jl. Bulevar Selatan, RT.003/RW.005, Marga Mulya, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17142',
        addressLocality: 'Bekasi',
        postalCode: '17142',
        addressCountry: 'ID',
      },
      currenciesAccepted: 'IDR',
      priceRange: 'IDR 1.000.000 - IDR 500.000.000',
      image: ['https://cdn.perkasaracking.co.id/images/produk/heavy-duty/selective/selective-pallet-rack-TAP_3.webp'],
      openingHoursSpecification: [
        {
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          opens: '08:00',
          closes: '17:00',
        },
        {
          dayOfWeek: ['Saturday'],
          opens: '08:00',
          closes: '12:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/rakgudang4pallet/',
        'https://www.instagram.com/rakgudang_id/',
      ],
    }),
  },

  googleFonts: {
    display: 'swap',
    preconnect: true,
    families: {
      'Barlow Semi Condensed': [300, 400, 500, 700, 900]
    }
  },
  nitro: {
    preset: "cloudflare-pages"
  },
  site: {
    url: "https://www.perkasaracking.co.id",
    indexable: true,
  },
  ogImage: {
    enabled: true,
  },
  sitemap: {
    autoLastmod: true,
    enabled: true,
    discoverImages: true
  },
  experimental: {
    payloadExtraction: true, // Aktifkan payload extraction
  },
  robots: {
    blockNonSeoBots: true,
    sitemap: ["/sitemap.xml"],
    // provide simple disallow rules for all robots `user-agent: *`
    disallow: ["/secret", "/admin"],
    enabled: true,
  },

  modules: [
    "nitro-cloudflare-dev",
    "vuetify-nuxt-module",
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxtjs/seo",
    '@pinia/nuxt',
    // "@vite-pwa/nuxt",

    '@nuxtjs/google-fonts', 'nuxt-schema-org', '@nuxtjs/sitemap', '@vite-pwa/nuxt'],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    public: {
      firebase: {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
      },
      gtm: {
        id: "GTM-NTHC2T3J",
        enabled: true,
        defer: true,
        enableRouterSync: true,
        loadScript: true
      },
    },
  },
})