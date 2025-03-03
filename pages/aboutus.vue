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
  alttext: "Tentang TAP Tangguh Adi Perkasa",
};

useSeoMeta({
  title: "Tentang Kami - PT. Tangguh Adi Perkasa",
  description:
    "PT. Tangguh Adi Perkasa adalah perusahaan yang bergerak di bidang pembuatan rack gudang berkualitas tinggi untuk kebutuhan industri dan pergudangan.",
  ogTitle: "Tentang Kami - PT. Tangguh Adi Perkasa",
  ogDescription:
    "Pelajari lebih lanjut tentang PT. Tangguh Adi Perkasa, spesialis pembuatan rack gudang yang kuat dan efisien.",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/tentang-kami/profile_singkat-TAP_og.webp",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Tentang Kami - PT. Tangguh Adi Perkasa",
  twitterDescription:
    "Solusi terbaik untuk penyimpanan dengan rack gudang berkualitas tinggi dari PT. Tangguh Adi Perkasa.",
  twitterImage:
    "https://cdn.perkasaracking.co.id/images/tentang-kami/profile_singkat-TAP_og.webp",
  robots: "index, follow",
  keywords:
    "rack gudang, rak besi, penyimpanan gudang, perusahaan Racking, sistem rak industri, rak heavy duty, PT. Tangguh Adi Perkasa, rak warehouse, shelving system, rak baja",
  canonical: "https://www.perkasaracking.co.id/aboutus",
  ogurl: "https://www.perkasaracking.co.id/aboutus",
});
</script>
