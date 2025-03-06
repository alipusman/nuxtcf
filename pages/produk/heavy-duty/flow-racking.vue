<template>
  <top-detail :operandata="banner" />

  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          src="https://cdn.aresa-digital.com/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_3.webp"
          lazy-src="https://cdn.aresa-digital.com/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_4.webp"
          alt="Rak Gravity Roller"
          class="rounded-lg"
          cover
          width="100%"
          height="100%"
        />
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="barlow">GRAVITY ROLLER RACKING | FLOW RACKING</h1>

        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />

        <p class="text-body-1 barlow2 text-justify">
          <span class="barlow">Gravity Roller Racking | Flow Racking</span>
          adalah sistem rak penyimpanan yang menggunakan gravitasi untuk
          memindahkan barang dari satu sisi ke sisi lainnya melalui roller.
          Sistem ini dirancang untuk meningkatkan efisiensi dalam pergudangan,
          terutama dalam aliran stok dengan metode First In, First Out (FIFO)
          atau First In, Last Out (FILO).
        </p>
        <br />

        <h2 class="barlow">Karakteristik</h2>

        <ol class="barlow2 ml-6">
          <li class="my-3">
            Memiliki tingkat kepadatan penyimpanan yang tinggi, ideal untuk SKU
            yang terbatas, dengan volume pallet yang sangat besar.
          </li>

          <li>
            Menggunakan sistem FIFO, sehingga sesuai untuk penyimpanan dan
            distribusi barang yang memerlukan kontrol ketat terhadap masa simpan
            atau umur produk.
          </li>

          <li class="my-3">
            Lebih aman dalam operasional karena forklift tidak perlu masuk ke
            dalam area rak, mengurangi risiko kecelakaan.
          </li>

          <li>
            Menjamin kestabilan beban dan aliran yang konsisten, sehingga
            memerlukan pallet berkualitas tinggi sebagai syarat utama.
          </li>
        </ol>
        <br />

        <h2 class="barlow">Keunggulan Gravity Roller Racking | Flow Racking</h2>

        <ol class="ml-6 text-body-1 barlow2">
          <li>Efisiensi Waktu & Tenaga</li>
          <li>Mengoptimalkan Ruang Gudang</li>
          <li>Penerapan Sistem FIFO/FILO</li>
          <li>Keamanan & Pengurangan Kerusakan Barang</li>
        </ol>
      </v-col>
    </v-row>
    <br />

    <h2 class="barlow">
      Gravity Roller Racking | Flow Racking banyak digunakan di berbagai
      industri, seperti:
    </h2>

    <ul class="ml-6 text-body-1 barlow2">
      <li>Industri makanan & minuman</li>
      <li>Industri farmasi</li>
      <li>E-commerce & logistik</li>
    </ul>

    <v-row align="center">
      <v-col cols="12" sm="6">
        <h2 class="barlow">Bagaimana Cara Kerjanya?</h2>

        <p class="text-body-1 barlow2 text-justify mt-2">
          Gravity Roller Racking | Flow Racking memanfaatkan jalur miring yang
          dilengkapi dengan roller atau roda kecil sehingga barang dapat
          bergerak dengan sendirinya karena gaya gravitasi. Barang yang dimuat
          di sisi atas rak akan bergerak turun ke sisi pengambilan tanpa perlu
          tenaga tambahan, mengurangi kebutuhan akan forklift atau alat angkut
          lainnya.
        </p>
      </v-col>

      <v-col cols="12" sm="6">
        <v-img
          src="https://cdn.aresa-digital.com/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_5.webp"
          lazy-src="https://cdn.aresa-digital.com/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_6.webp"
          alt="Gravity Roller Racking | Flow Racking"
          width="100%"
          height="100%"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col class="px-4">
        <h1 class="barlow">Kesimpulan</h1>

        <p class="barlow2 text-h6 mt-3 text-justify">
          <span class="barlow">Gravity Roller Racking | Flow Racking </span>
          adalah solusi penyimpanan yang efisien dan hemat energi, ideal untuk
          industri yang membutuhkan sistem pergudangan cepat dan tertata. Dengan
          penerapan yang tepat, sistem ini dapat mengurangi biaya operasional,
          meningkatkan produktivitas, dan mengoptimalkan kapasitas gudang.
        </p>
      </v-col>
    </v-row>
    <article-closing-text />
    <article-review />
  </v-container>
  <chat-ai />
</template>

<script setup>
const banner = {
  judul: "DETAIL PRODUK",
};

useSeoMeta({
  title: "Rak Flow Racking",
  ogTitle: "Rak Flow Racking",
  description:
    "Rak Gudang Gravity Roller Racking dengan sistem Flow Racking, solusi penyimpanan efisien yang memudahkan aliran barang secara otomatis dengan gravitasi.",
  ogDescription:
    "Rak Gudang Gravity Roller Racking dengan sistem Flow Racking, solusi penyimpanan efisien yang memudahkan aliran barang secara otomatis dengan gravitasi.",
  keywords:
    "rak gudang, gravity roller racking, flow racking, rak penyimpanan, rak industri, warehouse shelving, storage rack, pallet rack",
  ogImage:
    "https://cdn.aresa-digital.com/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_og.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl: "https://www.perkasaracking.co.id/produk/heavy-duty/flow-racking",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/produk/heavy-duty/flow-racking",
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

.custom-img {
  max-height: 500px; /* Sesuaikan sesuai kebutuhan */
  height: auto;
}
</style>
