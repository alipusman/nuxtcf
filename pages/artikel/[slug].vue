<template>
  <top-detail :operandata="banner" />
  
  <v-container v-if="loading">
    <v-progress-circular indeterminate></v-progress-circular>
  </v-container>

  <v-container v-else-if="article">
    <v-card class="mb-6">
      <v-card-title class="text-h4">{{ article.title }}</v-card-title>
      <v-card-subtitle>
        Dipublikasikan pada
        {{ new Date(article.published_at).toLocaleDateString() }}
      </v-card-subtitle>
      <v-card-text>{{ article.description }}</v-card-text>
    </v-card>

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

        <v-img
          v-else-if="block.type === 'img'"
          :src="block.url"
          :alt="block.alt"
          class="rounded-lg"
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

  <v-container v-else>
    <v-alert type="error">Artikel tidak ditemukan</v-alert>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import type { ArticleM } from "~/types/artikelM";

const route = useRoute();
const slug = computed(() => route.params.slug as string);
const banner = { judul: "DETAIL PRODUK" };

// Menggunakan useAsyncData untuk fetching dengan SSR support
const { data: article, pending: loading, error } = useAsyncData(
  `article-${slug.value}`, 
  () => $fetch(`/api/artikels/?slug=${slug.value}`)
);

if (error.value) console.error("Error fetching article:", error.value);
</script>

