<template>
  <top-detail :operandata="banner" />

  <v-container fluid style="overflow: hidden;">
    <!-- Skeleton Loader untuk Mencegah CLS -->
    <v-container v-if="loading" fluid>
      <v-skeleton-loader  type="heading" class="mb-4"></v-skeleton-loader>
      <v-skeleton-loader type="text"></v-skeleton-loader>
      <v-skeleton-loader type="image" height="300px"></v-skeleton-loader>
      <v-skeleton-loader type="text"></v-skeleton-loader>
      <v-skeleton-loader type="text"></v-skeleton-loader>
    </v-container>

    <!-- Artikel -->
    <v-container v-else-if="article" style="min-height: 600px;">
      <v-row v-for="(block, index) in article.content" :key="index">
        <v-col :cols="block.cols || 12">
          <h2 v-if="block.type === 'h2'" class="text-h5">{{ block.text }}</h2>
          <h3 v-else-if="block.type === 'h3'" class="text-h6">{{ block.text }}</h3>
          <p v-else-if="block.type === 'p'" class="text-body-1">{{ block.text }}</p>

          <v-list v-else-if="block.type === 'ul'">
            <v-list-item v-for="(item, i) in block.items" :key="i">
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>

          <!-- Gambar dengan Nuxt Image -->
          <NuxtImg
            v-else-if="block.type === 'img'"
            src="https://cdn.aresa-digital.com/images/produk/heavy-duty/double-deep/double-deep-pallet-racking-TAP_3.webp"
            :alt="block.alt"
            preset="large"
            loading="lazy"
            sizes="xs:100vw sm:600px md:800px"
            format="webp"
            style="aspect-ratio: 16 / 9; object-fit: cover;"
          />

          <v-alert v-else-if="block.type === 'blockquote'" type="info" class="my-4">
            {{ block.text }}
          </v-alert>
        </v-col>
      </v-row>

      <v-card class="mt-6">
        <v-card-text>
          <p>
            <strong>Penulis:</strong>
            <a :href="article.author.profile_url">{{ article.author.name }}</a>
          </p>
        </v-card-text>
      </v-card>
    </v-container>

    <!-- Jika Error -->
    <v-container v-else-if="error" style="min-height: 400px;">
      <v-alert type="error">{{ error }}</v-alert>
    </v-container>

    <!-- Jika Artikel Tidak Ditemukan -->
    <v-container v-else style="min-height: 400px;">
      <v-alert type="error">Artikel tidak ditemukan</v-alert>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import type { ArticleM } from "~/types/artikelM";

const loading = ref(true);
const error = ref<string | null>(null);
const article = ref<ArticleM | null>(null);
const route = useRoute();
const slug = computed(() => route.params.slug as string);
const banner = { judul: "DETAIL PRODUK" };

useHead({
  link: [
    {
      rel: "preload",
      href: "https://cdn.aresa-digital.com/images/produk/heavy-duty/double-deep/double-deep-pallet-racking-TAP_3.webp",
      as: "image",
      type: "image/webp",
    },
  ],
});

// Fetch data dengan watchEffect agar bisa update jika slug berubah
watchEffect(async () => {
  if (!slug.value) return;
  loading.value = true;
  error.value = null;
  try {
    const response = await $fetch<ArticleM>(`/api/artikels/?slug=${slug.value}`);
    article.value = response;
  } catch (err) {
    error.value = "Gagal mengambil artikel.";
  } finally {
    loading.value = false;
  }
});
</script>
