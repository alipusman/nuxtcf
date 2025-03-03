<template>
  <banner-header />
  <our-product />
  <customer-tap />
  <chat-ai />
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
          rel: 'preload',
          href: 'https://cdn.perkasaracking.co.id/images/banner.webp',
          as: 'image',
          type: 'image/webp',
        },
      ],
})
useSeoMeta({
  title:
    "PT. Tangguh Adi Perkasa perusahann bergerak dibidang pembuatan Rack gudang",
  ogTitle:
    "PT. Tangguh Adi Perkasa perusahann bergerak dibidang pembuatan Rack gudang",
  description:
    "TAP Tangguh Adi Perkasa adalah distributor dan supplier tersertifikasi ISO 9001:2015, BPPT, dan TKDN untuk sistem racking warehouse, menyediakan berbagai jenis rak dari light duty, medium duty, hingga heavy duty. Kami menawarkan solusi seperti AS/RS, Cantilever, Drive-In, Pallet Selective, dan sistem racking lainnya untuk kebutuhan gudang dan arsip kantor.",
  ogDescription:
    "TAP Tangguh Adi Perkasa adalah distributor dan supplier tersertifikasi ISO 9001:2015, BPPT, dan TKDN untuk sistem racking warehouse, menyediakan berbagai jenis rak dari light duty, medium duty, hingga heavy duty. Kami menawarkan solusi seperti AS/RS, Cantilever, Drive-In, Pallet Selective, dan sistem racking lainnya untuk kebutuhan gudang dan arsip kantor.",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_og.webp",
  twitterCard: "summary_large_image",
  keywords: "Rack Gudang, Rak Gudang, Heavy Duty, Medium Duty, Light Duty",
  ogUrl: "https://www.perkasaracking.co.id/",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/",
});
</script>
