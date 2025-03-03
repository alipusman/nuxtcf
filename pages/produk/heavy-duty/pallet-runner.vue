<template>
  <top-detail :operandata="banner" />
  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          src="https://cdn.perkasaracking.co.id/images/produk/heavy-duty/pallet-runner/pallet-runner-TAP_3.webp"
          lazy-src="https://cdn.perkasaracking.co.id/images/produk/heavy-duty/pallet-runner/pallet-runner-TAP_4.webp"
          alt="Pallet Runner"
          class="rounded-lg"
          cover
          width="100%"
          height="100%"
          style="aspect-ratio: 650 / 600"
        />
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="barlow">PALLET RUNNER RACK</h1>
        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />

        <p class="text-body-1 barlow2 text-justify">
          <span class="barlow">Pallet Runner Racking</span>
          adalah sistem penyimpanan palet yang dirancang untuk meningkatkan
          efisiensi ruang gudang dengan memanfaatkan sistem penyimpanan berbasis
          gravitasi. Sistem ini memungkinkan palet untuk bergerak di sepanjang
          rel roller atau rel miring, di mana palet ditempatkan di satu ujung
          dan diambil dari ujung lainnya. Sistem ini sering digunakan dalam
          lingkungan FIFO (First In, First Out), di mana barang yang pertama
          masuk adalah barang yang pertama keluar.
        </p>
        <br />

        <h2 class="barlow2">Aplikasi di Industri:</h2>

        <ol class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow">Industri Makanan dan Minuman:</span>
            Digunakan untuk menyimpan produk dengan tanggal kedaluwarsa, seperti
            susu, minuman, atau makanan kemasan.
          </li>

          <li>
            <span class="barlow">Industri Farmasi: </span>
            Cocok untuk menyimpan obat-obatan atau bahan kimia yang memerlukan
            rotasi stok secara teratur.
          </li>

          <li class="my-3">
            <span class="barlow">Distribusi dan Logistik: </span>
            Digunakan di pusat distribusi untuk menyimpan barang-barang yang
            perlu dikirim secara berurutan.
          </li>

          <li>
            <span class="barlow">Industri Manufaktur:</span>
            Untuk menyimpan bahan baku atau produk jadi yang memerlukan rotasi
            stok.
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" class="px-4">
        <h2 class="barlow2">Keuntungan Pallet Runner Racking</h2>

        <ol class="ml-6">
          <li class="mt-3 barlow2">
            <span class="barlow">Efisiensi Ruang:</span>
            Sistem ini memungkinkan penggunaan ruang vertikal yang optimal,
            mengurangi kebutuhan untuk lorong-lorong yang luas seperti pada
            sistem rak konvensional.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Efisiensi Operasional:</span>
            Mengurangi waktu yang dibutuhkan untuk mengambil dan menyimpan palet
            karena palet bergerak secara otomatis ke ujung pengambilan.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Sistem FIFO: </span>
            Ideal untuk menyimpan barang dengan tanggal kedaluwarsa atau barang
            yang memerlukan rotasi stok, seperti produk makanan, minuman, atau
            farmasi.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Kapasitas Penyimpanan Tinggi:</span>
            Dapat menyimpan lebih banyak palet dibandingkan sistem rak
            tradisional karena lorong yang lebih sedikit.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Pengurangan Kerusakan Barang:</span>
            Palet bergerak dengan lancar di sepanjang rel, mengurangi risiko
            kerusakan akibat benturan atau penanganan yang kasar.
          </li>
        </ol>
      </v-col>

      <v-col cols="12" sm="6" class="px-4">
        <h2 class="barlow2">Tantangan Pallet Runner Racking</h2>

        <ol class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow">Biaya Awal Tinggi: </span>
            Sistem ini memerlukan investasi awal yang lebih besar dibandingkan
            sistem rak konvensional karena kompleksitas desain dan instalasinya.
          </li>

          <li class="my-3">
            <span class="barlow">Perawatan yang Lebih Intensif: </span>
            Rel roller atau rel miring memerlukan perawatan rutin untuk
            memastikan kelancaran operasi.
          </li>

          <li>
            <span class="barlow">Fleksibilitas Terbatas: </span>
            Sistem ini kurang fleksibel untuk barang dengan ukuran atau berat
            yang bervariasi karena dirancang untuk palet dengan dimensi standar.
          </li>

          <li class="mt-3">
            <span class="barlow">Ketergantungan pada Sistem FIFO: </span>
            Tidak cocok untuk sistem LIFO (Last In, First Out), sehingga
            aplikasinya terbatas pada jenis barang tertentu.
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="px-4">
        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />
        <h1 class="barlow">Kesimpulan</h1>

        <p class="barlow2 text-h6 mt-3 text-justify">
          <span class="barlow">Pallet Runner Racking</span>
          adalah solusi penyimpanan yang efisien untuk industri yang membutuhkan
          sistem FIFO dan memiliki volume stok yang tinggi. Meskipun memerlukan
          investasi awal yang besar, sistem ini menawarkan penghematan ruang dan
          peningkatan efisiensi operasional dalam jangka panjang. Namun, sistem
          ini kurang fleksibel untuk barang dengan ukuran atau berat yang
          bervariasi dan memerlukan perawatan rutin untuk memastikan kinerja
          optimal.
        </p>
      </v-col>
    </v-row>
  </v-container>
  <chat-ai />
</template>

<script setup>
const banner = {
  judul: "DETAIL PRODUK",
  alttext: "Pallet Runner",
};

useSeoMeta({
  title: "Pallet Runner",
  ogtitle: "Pallet Runner",
  description:
    "Rak Gudang Heavy Duty dengan sistem Pallet Runner, solusi penyimpanan efisien yang memudahkan pergerakan pallet secara otomatis.",
  ogDescription:
    "Rak Gudang Heavy Duty dengan sistem Pallet Runner, solusi penyimpanan efisien yang memudahkan pergerakan pallet secara otomatis.",
  keywords:
    "rak gudang, heavy duty rack, pallet runner rack, rak penyimpanan, rak industri, warehouse shelving, storage rack, pallet rack",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/pallet-runner/pallet-runner-TAP_og.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl: "https://www.perkasaracking.co.id/produk/heavy-duty/pallet-runner",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/produk/heavy-duty/pallet-runner",
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
