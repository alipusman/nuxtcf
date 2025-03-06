<template>
  <top :operandata="banner" />

  <v-row class="text-center mt-5 mb-3" align="center" justify="center">
    <v-col cols="7">
      <h1 class="barlow">PUSAT INFORMASI</h1>
      <p class="barlow2 text-body-1 mt-3">
        Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut
        mengenai rak gudang PT TAP, jangan ragu untuk menghubungi kami. Tim kami
        siap membantu Anda dengan solusi terbaik.
      </p>
    </v-col>
  </v-row>

  <chat-ai />

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.265954121988!2d106.99857597579901!3d-6.228625443759483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698db6076df4b3%3A0x3c34b5680df8c1df!2sRuby%20commercial!5e0!3m2!1sen!2sid!4v1738211817491!5m2!1sen!2sid"
    width="100%"
    height="500"
    style="border: 0; margin-bottom: -4%"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  />
</template>

<script setup>
const banner = {
  judul: "PUSAT INFORMASI",
};

useSeoMeta({
  title: "Kontak Aresa Digital - Pembuatan Rack Gudang",
  description:
    "Hubungi Aresa Digital untuk informasi lebih lanjut tentang pembuatan dan penjualan rak gudang berkualitas tinggi untuk kebutuhan industri Anda.",
  keywords:
    "kontak Aresa Digital, hubungi kami, informasi rak gudang, pembuatan rak gudang, supplier rak besi, jual rak gudang, rak penyimpanan industri, harga rak gudang",
  ogTitle: "Kontak Aresa Digital - Pembuatan Rack Gudang",
  ogDescription:
    "Dapatkan informasi dan konsultasi mengenai pembuatan rak gudang terbaik dari Aresa Digital. Hubungi kami untuk solusi penyimpanan industri.",
  ogImage:
    "/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_og.webp",
  ogType: "website",
  twitterTitle: "Kontak Aresa Digital - Pembuatan Rack Gudang",
  twitterDescription:
    "Hubungi Aresa Digital untuk mendapatkan rak gudang berkualitas tinggi sesuai kebutuhan industri Anda.",
  twitterImage:
    "/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_og.webp",
  twitterCard: "summary_large_image",
  robots: "index, follow",
  canonical: "https://www.aresa-digital.com/contact",
  ogUrl: "https://www.aresa-digital.com/contact",
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
