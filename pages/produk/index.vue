<template>
  <top :operandata="banner" />

  <v-container style="margin-bottom: -3%">
    <breadcrumbs />
  </v-container>

  <chat-ai />
  <our-product-tab />
  <cek-harga />
  <banner-parallax />
</template>

<script setup>
definePageMeta({
  layout: "default",
});

useSeoMeta({
  title: "Jual Rak Gudang - Heavy Duty ",
  ogTitle: "Jual Rak Gudang - Heavy Duty ",
  description:
    "Rak Gudang Heavy Duty, Solusi Rak Gudang dengan Harga Terjangkau & Kualitas Terbaik",
  ogDescription:
    "Rak Gudang Heavy Duty, Solusi Rak Gudang dengan Harga Terjangkau & Kualitas Terbaik",
  keywords:
    "jual rak gudang, rak heavy duty, rak besi kuat, rak industri, rak gudang besar, rak penyimpanan berat, jual rak warehouse",
  ogImage:
    "https://cdn.aresa-digital.com/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_og.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl: "https://www.perkasaracking.co.id/produk/heavy-duty",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/produk/heavy-duty",
});

const banner = {
  judul: "PRODUK",
};
</script>
