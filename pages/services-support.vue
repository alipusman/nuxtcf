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
  alttext: "Service Rak TAP",
};

useSeoMeta({
  title: "Layanan & Dukungan  PT. Tangguh Adi Perkasa",
  description:
    "Temukan layanan dan dukungan terbaik dari PT. Tangguh Adi Perkasa, spesialis dalam pembuatan rack gudang berkualitas tinggi untuk kebutuhan industri Anda.",
  keywords:
    "layanan rack gudang, dukungan pelanggan, jasa pembuatan rack, PT. Tangguh Adi Perkasa, solusi penyimpanan industri, rak besi, rak gudang industri, rak penyimpanan",
  ogTitle: "Layanan & Dukungan  PT. Tangguh Adi Perkasa",
  ogDescription:
    "Dapatkan solusi layanan dan dukungan dari PT. Tangguh Adi Perkasa, perusahaan terpercaya dalam pembuatan rack gudang untuk berbagai industri.",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/layanan-dukungan/support-gudang/support-gudang-TAP_og.webp",
  ogType: "website",
  twitterTitle: "Layanan & Dukungan  PT. Tangguh Adi Perkasa",
  twitterDescription:
    "Temukan solusi terbaik untuk layanan dan dukungan dari PT. Tangguh Adi Perkasa, spesialis dalam pembuatan rack gudang industri.",
  twitterImage:
    "https://cdn.perkasaracking.co.id/images/layanan-dukungan/support-gudang/support-gudang-TAP_og.webp",
  twitterCard: "summary_large_image",
  robots: "index, follow",
  ogUrl: "https://www.perkasaracking.co.id/services-support",
  canonical: "https://www.perkasaracking.co.id/services-support",
});
</script>
