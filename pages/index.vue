<template>
  <h2>beta</h2>
  <banner-header />
  <our-product />
  <!-- <customer-tap /> -->
  <chat-ai />
  <h2>sfd</h2>
  <cek-harga />
  <banner-info />
  <services />
  <banner-service />
  <latest-project />
  <customer />
  <banner-parallax />

</template>

<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  link: [
    {
      rel: "preload",
      href: "/images/banner.webp",
      as: "image",
      type: "image/webp",
    },
  ],
});

useSeoMeta({
  title:
    "Aresa Digital perusahann bergerak dibidang pembuatan Rack gudang",
  ogTitle:
    "Aresa Digital perusahann bergerak dibidang pembuatan Rack gudang",
  description:
    "TAP Tangguh Adi Perkasa adalah distributor dan supplier tersertifikasi ISO 9001:2015, BPPT, dan TKDN untuk sistem racking warehouse, menyediakan berbagai jenis rak dari light duty, medium duty, hingga heavy duty. Kami menawarkan solusi seperti AS/RS, Cantilever, Drive-In, Pallet Selective, dan sistem racking lainnya untuk kebutuhan gudang dan arsip kantor.",
  ogDescription:
    "TAP Tangguh Adi Perkasa adalah distributor dan supplier tersertifikasi ISO 9001:2015, BPPT, dan TKDN untuk sistem racking warehouse, menyediakan berbagai jenis rak dari light duty, medium duty, hingga heavy duty. Kami menawarkan solusi seperti AS/RS, Cantilever, Drive-In, Pallet Selective, dan sistem racking lainnya untuk kebutuhan gudang dan arsip kantor.",
  ogImage:
    "/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_og.webp",
  twitterCard: "summary_large_image",
  keywords: "Rack Gudang, Rak Gudang, Heavy Duty, Medium Duty, Light Duty",
  ogUrl: "https://www.aresa-digital.com/",
  robots: "index, follow",
  canonical: "https://www.aresa-digital.com/",
});
</script>
