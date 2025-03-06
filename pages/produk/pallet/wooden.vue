<template>
  <top-detail :operandata="banner" />
  <Suspense>
    <template #default>
      <LazyComponentpalletwooden/>
    </template>
    <template #fallback>
      <v-progress-circular indeterminate></v-progress-circular>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const LazyComponentpalletwooden = defineAsyncComponent(() => import('@/components/ourProduct/pallet/wooden.vue'));
const banner = {
  judul: "DETAIL PRODUK",
};

useSeoMeta({
  title: "Pallet Kayu",
  ogTitle: "Pallet Kayu",
  description:
    "Pallet Kayu adalah solusi penyimpanan dan transportasi yang kuat, ekonomis, dan ramah lingkungan. Ideal untuk industri logistik, pergudangan, dan distribusi.",
  ogDescription:
    "Temukan keunggulan Pallet Kayu sebagai solusi penyimpanan yang kokoh, hemat biaya, dan dapat didaur ulang untuk kebutuhan industri dan logistik.",
  keywords:
    "pallet kayu, pallet gudang, penyimpanan kayu, transportasi logistik, pallet industri, pallet murah",
  ogImage:
    "/images/produk/pallet/kayu/pallet-kayu_og.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogurl: "https://www.aresa-digital.com/produk/pallet/wooden",
  robots: "index, follow",
  canonical: "https://www.aresa-digital.com/produk/pallet/wooden",
});
</script>




<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 700;
  font-style: normal;
}

.barlow2 {
  font-family: "Barlow Semi Condensed", serif;
  font-style: normal;
}
</style>
