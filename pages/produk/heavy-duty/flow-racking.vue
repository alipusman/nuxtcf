<template>
  <top-detail :operandata="banner" />
  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="9">
        <h1
          class="barlow"
          :style="{ fontSize: $vuetify.display.mdAndUp ? '40px' : '26px' }"
        >
          Gravity Roller Racking | Flow Racking
        </h1>

        <v-divider
          width="70%"
          thickness="5"
          color="#FF3A3A"
          class="opacity-100"
        />

        <br />

        <v-img
          src="https://cdn.perkasaracking.co.id/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_3.webp"
          lazy-src="https://cdn.perkasaracking.co.id/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_4.webp"
          alt="Rak Gravity Roller"
          width="100%"
          height="350"
          class="rounded-lg"
          cover
        />

        <h2
          class="barlow mt-7 text-red"
          :style="{ fontSize: $vuetify.display.mdAndUp ? '35px' : '20px' }"
        >
          Apa Itu Gravity Roller Racking | Flow Racking?
        </h2>

        <p class="text-body-1 barlow2 mt-3 text-justify">
          <span class="font-weight-bold"
            >Gravity Roller Racking | Flow Racking</span
          >
          adalah sistem rak penyimpanan yang menggunakan gravitasi untuk
          memindahkan barang dari satu sisi ke sisi lainnya melalui roller.
          Sistem ini dirancang untuk meningkatkan efisiensi dalam pergudangan,
          terutama dalam aliran stok dengan metode First In, First Out (FIFO)
          atau First In, Last Out (FILO).
        </p>

        <v-row align="center" class="my-5">
          <v-col cols="12" sm="6">
            <h2 class="barlow">Bagaimana Cara Kerjanya?</h2>

            <p class="text-body-1 barlow2 text-justify mt-2">
              Gravity Roller Racking | Flow Racking memanfaatkan jalur miring
              yang dilengkapi dengan roller atau roda kecil sehingga barang
              dapat bergerak dengan sendirinya karena gaya gravitasi. Barang
              yang dimuat di sisi atas rak akan bergerak turun ke sisi
              pengambilan tanpa perlu tenaga tambahan, mengurangi kebutuhan akan
              forklift atau alat angkut lainnya.
            </p>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              src="https://cdn.perkasaracking.co.id/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_5.webp"
              lazy-src="https://cdn.perkasaracking.co.id/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_6.webp"
              alt="Gravity Roller Racking | Flow Racking"
              width="100%"
              height="100%"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <h2 class="barlow mt-4">
              Keunggulan Gravity Roller Racking | Flow Racking
            </h2>

            <ul class="ml-4 text-body-1 barlow2">
              <li>Efisiensi Waktu & Tenaga</li>
              <li>Mengoptimalkan Ruang Gudang</li>
              <li>Penerapan Sistem FIFO/FILO</li>
              <li>Keamanan & Pengurangan Kerusakan Barang</li>
            </ul>
          </v-col>

          <v-col cols="12" sm="6">
            <h2 class="barlow mt-4">
              Gravity Roller Racking | Flow Racking banyak digunakan di berbagai
              industri, seperti:
            </h2>

            <ul class="ml-4 text-body-1 barlow2">
              <li>Industri makanan & minuman</li>
              <li>Industri farmasi</li>
              <li>E-commerce & logistik</li>
            </ul>
          </v-col>
        </v-row>

        <h2 class="barlow mt-7">Karakteristik</h2>

        <ul class="barlow2 ml-4">
          <li class="mt-1">
            Memiliki tingkat kepadatan penyimpanan yang tinggi, ideal untuk SKU
            yang terbatas, dengan volume pallet yang sangat besar.
          </li>
          <li class="mt-1">
            Menggunakan sistem FIFO, sehingga sesuai untuk penyimpanan dan
            distribusi barang yang memerlukan kontrol ketat terhadap masa simpan
            atau umur produk.
          </li>
          <li class="mt-1">
            Lebih aman dalam operasional karena forklift tidak perlu masuk ke
            dalam area rak, mengurangi risiko kecelakaan.
          </li>
          <li class="mt-1">
            Menjamin kestabilan beban dan aliran yang konsisten, sehingga
            memerlukan pallet berkualitas tinggi sebagai syarat utama.
          </li>
        </ul>

        <h2 class="barlow mt-6">Kesimpulan</h2>

        <p class="barlow2 mt-3">
          Gravity Roller Racking | Flow Racking adalah solusi penyimpanan yang
          efisien dan hemat energi, ideal untuk industri yang membutuhkan sistem
          pergudangan cepat dan tertata. Dengan penerapan yang tepat, sistem ini
          dapat mengurangi biaya operasional, meningkatkan produktivitas, dan
          mengoptimalkan kapasitas gudang.
        </p>

        <article-closing-text />
        <article-review />
      </v-col>

      <v-col cols="12" md="3">
        <article-sidebar />
      </v-col>
    </v-row>
  </v-container>
  <chat-ai />
</template>

<script setup>
const banner = {
  judul: "DETAIL PRODUK",
  alttext: "Rak Gudang - Gravity Roller Racking - Flow Racking - TAP",
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
    "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_og.webp",
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
