<template>
  <top-detail :operandata="banner" />

  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6" class="px-4">
        <v-img
          src="https://cdn.aresa-digital.com/images/produk/pallet/nesting/nesting-rack_1.webp"
          lazy-src="https://cdn.aresa-digital.com/images/produk/pallet/nesting/nesting-rak_2.webp"
          alt="Nesting Rack System"
          class="rounded-lg"
          height="100%"
          width="100%"
          cover
        />
      </v-col>

      <v-col cols="12" md="6" class="px-4">
        <h1 class="barlow">STACKING SYSTEM</h1>
        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />

        <p class="text-body-1 barlow2 text-justify">
          Nesting Rack System adalah sistem penyimpanan yang dirancang untuk
          memberikan fleksibilitas dalam pengelolaan ruang dengan rak yang dapat
          dilipat dan disusun sesuai kebutuhan. Sistem ini sangat cocok untuk
          industri yang membutuhkan solusi penyimpanan yang efisien dan dapat
          disesuaikan. Keunggulan dari Nesting Rack System meliputi kemudahan
          dalam penyimpanan saat tidak digunakan, peningkatan kapasitas gudang,
          serta kemampuannya dalam menangani berbagai jenis barang. Sistem ini
          ideal untuk sektor logistik, manufaktur, dan ritel yang membutuhkan
          penyimpanan yang fleksibel dan hemat ruang.
        </p>
        <br />

        <h2 class="barlow2">Aplikasi di industri</h2>

        <ol class="ml-6 barlow2 text-justify">
          <li class="my-3">
            <span class="barlow">Pergudangan & Logistik:</span>
            Digunakan untuk penyimpanan barang yang fleksibel dan dapat diatur
            ulang sesuai kebutuhan.
          </li>

          <li>
            <span class="barlow">Manufaktur:</span>
            Untuk menyimpan bahan baku atau produk setengah jadi sebelum masuk
            ke tahap produksi berikutnya.
          </li>

          <li class="my-3">
            <span class="barlow">Industri Retail:</span>
            Menyediakan solusi penyimpanan sementara untuk stok barang dalam
            jumlah besar.
          </li>

          <li>
            <span class="barlow">E-commerce & Distribusi:</span>
            Membantu mengatur barang yang sering berpindah tempat tanpa memakan
            banyak ruang saat kosong.
          </li>

          <li class="mt-3">
            <span class="barlow">Industri Otomotif :</span>
            Menyimpan suku cadang kendaraan dengan aman dan efisien.
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <h2 class="barlow2">Keuntungan Nesting Rack</h2>

        <ol class="ml-6 text-justify">
          <li class="my-3">
            <span class="barlow">Menghemat Ruang:</span>
            Rak dapat dilipat atau disusun saat kosong, sehingga mengurangi
            kebutuhan area penyimpanan.
          </li>

          <li>
            <span class="barlow">Fleksibel & Mudah Dipindahkan:</span>
            Dapat dengan mudah disesuaikan dengan kebutuhan operasional dan
            dipindahkan menggunakan forklift.
          </li>

          <li class="my-3">
            <span class="barlow">Meningkatkan Efisiensi Penyimpanan:</span>
            Memungkinkan penumpukan vertikal yang lebih aman dibandingkan
            stacking langsung tanpa rak.
          </li>

          <li>
            <span class="barlow">Melindungi Barang:</span>
            Mencegah barang dari kerusakan akibat tekanan berlebih saat
            ditumpuk.
          </li>

          <li class="mt-3">
            <span class="barlow">Dapat Digunakan Kembali:</span>
            Terbuat dari material tahan lama seperti baja, membuatnya lebih
            ekonomis dalam jangka panjang.
          </li>
        </ol>
      </v-col>

      <v-col>
        <h2 class="barlow2">Tantangan Nesting Rack</h2>

        <ol class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow">Harga Relatif Mahal:</span>
            Biaya awal pembelian lebih tinggi dibandingkan rak statis
            konvensional.
          </li>

          <li>
            <span class="barlow">Memerlukan Ruang Saat Digunakan:</span>
            Saat rak dalam keadaan terisi penuh, ruang yang dibutuhkan tetap
            cukup besar.
          </li>

          <li class="my-3">
            <span class="barlow">Perawatan & Perbaikan :</span>
            Memerlukan inspeksi berkala untuk memastikan engsel dan struktur
            tetap aman digunakan.
          </li>

          <li>
            <span class="barlow">Kapasitas Terbatas:</span>
            Tergantung pada desain dan materialnya, kapasitas beban yang dapat
            ditampung lebih terbatas dibandingkan rak tetap.
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="px-4">
        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />
        <h1 class="barlow">Kesimpulan</h1>

        <p class="barlow2 text-h6 mt-3 text-justify">
          <span class="barlow"> Nesting Rack</span> adalah solusi penyimpanan
          yang efisien, fleksibel, dan dapat menghemat ruang ketika tidak
          digunakan. Sistem ini banyak digunakan di berbagai industri, terutama
          yang membutuhkan penyimpanan sementara atau sering melakukan
          perpindahan stok. Meskipun memiliki harga awal yang lebih tinggi dan
          kapasitas terbatas dibandingkan rak tetap, keuntungan dalam hal
          fleksibilitas, efisiensi ruang, dan perlindungan barang membuatnya
          menjadi pilihan yang menarik bagi banyak bisnis.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <chat-ai />
</template>

<script setup>
const banner = {
  judul: "DETAIL PRODUK",
};

useSeoMeta({
  title: "Nesting Rack System",
  ogTitle: "Nesting Rack System",
  description:
    "Nesting Rack System, solusi penyimpanan efisien dengan rak yang dapat disusun dan dihemat ruang.",
  ogDescription:
    "Nesting Rack System, solusi penyimpanan efisien dengan rak yang dapat disusun dan dihemat ruang.",
  keywords:
    "nesting rack, nesting rack system, rak penyimpanan, sistem penyimpanan pallet, rak fleksibel, storage solution",
  ogImage:
    "https://cdn.aresa-digital.com/images/produk/pallet/nesting/nesting-rack_og.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl: "https://www.perkasaracking.co.id/produk/pallet/nesting-rack",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/produk/pallet/nesting-rack",
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
