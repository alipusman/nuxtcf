<template>
  <top-detail :operandata="banner" />

  <v-container class="py-4">
    <v-row>
      <v-col>
        <v-card v-if="article">
          <!-- Judul dan tanggal -->
          <v-card-title class="d-flex flex-column">
            <h1>{{ article?.title }}</h1>
            <small class="text-grey-darken-1">{{ article?.published_at }}</small>
          </v-card-title>

          <!-- Deskripsi artikel -->
          <v-card-subtitle class="pb-2">
            {{ article?.description }}
          </v-card-subtitle>

          <!-- Konten artikel -->
          <v-card-text>
            <div v-for="(block, index) in article?.content" :key="index" class="my-4">
              <template v-if="block.type === 'h2'">
                <h2 class="text-h4">{{ block.text }}</h2>
              </template>

              <template v-else-if="block.type === 'h3'">
                <h3 class="text-h5">{{ block.text }}</h3>
              </template>

              <template v-else-if="block.type === 'p'">
                <p class="text-body-1">{{ block.text }}</p>
              </template>

              <template v-else-if="block.type === 'ul'">
                <v-list density="compact">
                  <v-list-item v-for="(item, i) in block.items" :key="i">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </template>

              <template v-else-if="block.type === 'img'">
                <v-img :src="block.url" :alt="block.alt" max-width="100%" class="my-4 rounded-lg" eager />
              </template>

              <template v-else-if="block.type === 'blockquote'">
                <blockquote class="text-body-1 font-italic bg-grey-lighten-3 pa-3 rounded">
                  <p>{{ block.text }}</p>
                </blockquote>
              </template>

              <template v-else-if="block.type === 'table'">
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th v-for="(col, colIndex) in block.columns" :key="colIndex">
                        {{ col }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, rowIndex) in block.rows" :key="rowIndex">
                      <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                        {{ cell }}
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </template>
            </div>
          </v-card-text>

          <!-- Informasi Author -->
          <v-divider></v-divider>
          <v-card-actions class="d-flex align-center">
            <v-avatar size="40" class="mr-2">
              <v-img :src="article?.author?.profile_url" alt="Author" />
            </v-avatar>
            <span>{{ article?.author?.name }}</span>
          </v-card-actions>
        </v-card>

        <!-- Skeleton Loader ketika data sedang dimuat -->
        <v-skeleton-loader v-else type="article"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useAsyncData } from "#app";

const route = useRoute();
const slug = computed(() => route.params.slug as string);
const banner = { judul: "DETAIL PRODUK" };
const article = ref(null);

watchEffect(async () => {
  if (!slug.value) return;
  console.log("Slug tersedia, fetching data:", slug.value);

  const { data, error } = await useAsyncData(`article-${slug.value}`, () =>
    $fetch(`https://api-aresa.alipusman.workers.dev/data?key=${slug.value}`)
  );

  if (data.value) {
    console.log("Data berhasil diambil:", data.value);
    article.value = data.value.data;
  } else if (error.value) {
    console.error("Terjadi error saat fetch:", error.value);
  }
});
</script>
