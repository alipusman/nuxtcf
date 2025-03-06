<template>
  <top :operandata="banner" />
  <services />
  <services-text />
  <services-material-spesifikasi />
  <services-spesfikasi-warehouse />
  <banner-parallax />
</template>

<script setup>
const banner = {
  judul: "LAYANAN & DUKUNGAN",
};

useSeoMeta({
  title: "Layanan & Dukungan  Aresa Digital",
  description:
    "Temukan layanan dan dukungan terbaik dari Aresa Digital, spesialis dalam pembuatan rack gudang berkualitas tinggi untuk kebutuhan industri Anda.",
  keywords:
    "layanan rack gudang, dukungan pelanggan, jasa pembuatan rack, Aresa Digital, solusi penyimpanan industri, rak besi, rak gudang industri, rak penyimpanan",
  ogTitle: "Layanan & Dukungan  Aresa Digital",
  ogDescription:
    "Dapatkan solusi layanan dan dukungan dari Aresa Digital, perusahaan terpercaya dalam pembuatan rack gudang untuk berbagai industri.",
  ogImage:
    "/images/layanan-dukungan/support-gudang/support-gudang-TAP_og.webp",
  ogType: "website",
  twitterTitle: "Layanan & Dukungan  Aresa Digital",
  twitterDescription:
    "Temukan solusi terbaik untuk layanan dan dukungan dari Aresa Digital, spesialis dalam pembuatan rack gudang industri.",
  twitterImage:
    "/images/layanan-dukungan/support-gudang/support-gudang-TAP_og.webp",
  twitterCard: "summary_large_image",
  robots: "index, follow",
  ogUrl: "https://www.aresa-digital.com/services-support",
  canonical: "https://www.aresa-digital.com/services-support",
});
</script>
