<template>
  <top :operandata="banner" />
  <about />
  <about-profil-singkat />
  <about-visi-misi />
  <about-sertifikat-bppt-2011 />
  <about-sertifikat-ISO-9001-2015-260126 />
  <about-sertifikat-bppt-2018 />
  <about-sertifikat-tkdn />
  <banner-parallax />
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const banner = {
  judul: "TENTANG KAMI",
};

useSeoMeta({
  title: "Tentang Kami - Aresa Digital",
  description:
    "Aresa Digital adalah perusahaan yang bergerak di bidang pembuatan rack gudang berkualitas tinggi untuk kebutuhan industri dan pergudangan.",
  ogTitle: "Tentang Kami - Aresa Digital",
  ogDescription:
    "Pelajari lebih lanjut tentang Aresa Digital, spesialis pembuatan rack gudang yang kuat dan efisien.",
  ogImage:
    "/images/tentang-kami/profile_singkat-TAP_og.webp",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Tentang Kami - Aresa Digital",
  twitterDescription:
    "Solusi terbaik untuk penyimpanan dengan rack gudang berkualitas tinggi dari Aresa Digital.",
  twitterImage:
    "/images/tentang-kami/profile_singkat-TAP_og.webp",
  robots: "index, follow",
  keywords:
    "rack gudang, rak besi, penyimpanan gudang, perusahaan Racking, sistem rak industri, rak heavy duty, Aresa Digital, rak warehouse, shelving system, rak baja",
  canonical: "https://www.aresa-digital.com/aboutus",
  ogurl: "https://www.aresa-digital.com/aboutus",
});
</script>
