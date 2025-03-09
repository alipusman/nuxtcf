<template>
  <top-detail :operandata="banner" />

  <div class="container">
    <div class="content">
      <div v-if="article" class="article-card">
        <!-- Header -->
        <div class="article-header">
          <h1 class="title">{{ article?.title }}</h1>
          <p class="date">
            {{ new Date(article?.published_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) }}
          </p>
        </div>

        <!-- Deskripsi -->
        <p class="description">{{ article?.description }}</p>

        <!-- Konten -->
        <div class="article-content">
          <div v-for="(block, index) in article?.content" :key="index" class="content-block">
            <h2 v-if="block.type === 'h2'" class="heading">{{ block.text }}</h2>
            <h3 v-else-if="block.type === 'h3'" class="subheading">{{ block.text }}</h3>
            <p v-else-if="block.type === 'p'" class="paragraph">{{ block.text }}</p>

            <!-- List -->
            <ul v-else-if="block.type === 'ul'" class="list">
              <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
            </ul>

            <!-- Gambar -->
            <div v-else-if="block.type === 'img'" class="image-wrapper">
              <img 
                :src="block.url" 
                :alt="block.alt" 
                class="image"
                loading="lazy"
              />
            </div>

            <!-- Blockquote -->
            <blockquote v-else-if="block.type === 'blockquote'" class="blockquote">
              {{ block.text }}
            </blockquote>
          </div>
        </div>

        <!-- Informasi Author -->
        <div class="author">
          <img :src="article?.author?.profile_url" alt="Author" class="avatar" />
          <span>{{ article?.author?.name }}</span>
        </div>
      </div>

      <!-- Skeleton Loader -->
      <div v-else class="skeleton-loader">
        <div class="skeleton-title"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-image"></div>
      </div>
    </div>
  </div>



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

<style scoped>
/* ===== General Container ===== */
.container {
  display: flex;
  justify-content: center;
  padding: 16px;
}
.content {
  max-width: 800px;
  width: 100%;
}

/* ===== Article Card ===== */
.article-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* ===== Header ===== */
.article-header {
  text-align: center;
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  word-break: break-word;
}
.date {
  font-size: 14px;
  color: #777;
}

/* ===== Deskripsi ===== */
.description {
  font-size: 16px;
  color: #555;
  text-align: center;
  margin-bottom: 16px;
}

/* ===== Konten ===== */
.article-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.heading {
  font-size: 20px;
  font-weight: bold;
}
.subheading {
  font-size: 18px;
  font-weight: 600;
}
.paragraph {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}
.list {
  padding-left: 20px;
}
.list li {
  margin-bottom: 6px;
}

/* ===== Gambar ===== */
.image-wrapper {
  display: flex;
  justify-content: center;
}
.image {
  max-width: 100%;
  border-radius: 6px;
  height: auto;
  object-fit: contain;
}

/* ===== Blockquote ===== */
.blockquote {
  font-style: italic;
  background: #f4f4f4;
  padding: 10px;
  border-left: 4px solid #555;
  border-radius: 4px;
}

/* ===== Author ===== */
.author {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* ===== Skeleton Loader ===== */
.skeleton-loader {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
}
.skeleton-title {
  width: 70%;
  height: 20px;
  background: #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}
.skeleton-text {
  width: 100%;
  height: 14px;
  background: #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
}
.skeleton-image {
  width: 100%;
  height: 200px;
  background: #ddd;
  border-radius: 4px;
}
</style>
