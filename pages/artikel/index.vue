<template>
    <top-detail :operandata="banner" />
  
    <v-container>
      <v-row>
        <v-col v-if="loading">Memuat data...</v-col>
        <v-col v-else-if="error">Gagal memuat data.</v-col>
        <v-col v-else v-for="item in article.data" :key="item.id" cols="12" md="4">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>
              <v-btn color="success" :to="`/artikel/${item.slug}`">Baca Selengkapnya</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useAsyncData } from "#imports";
  
  const banner = { judul: "DETAIL PRODUK" };
  
  const { data: article } = await useAsyncData(
  `article`,
  () => $fetch(`https://api-aresa.alipusman.workers.dev/data/?key=artikel`)
);
  </script>
  