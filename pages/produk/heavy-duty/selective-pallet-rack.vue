<template>
  <loading-tap />
  <top-detail :operandata="banner" />

  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" sm="6">
        <v-img
          src="https://cdn.aresa-digital.com/images/produk/heavy-duty/selective/selective-pallet-rack-TAP_3.webp"
          lazy-src="https://cdn.aresa-digital.com/images/produk/heavy-duty/selective/selective-pallet-rack-TAP_4.webp"
          alt="Rak Gudang - TAP - Heavy Duty - Selective Pallet Rack"
          class="rounded-lg"
          cover
          width="100%"
          height="100%"
          style="aspect-ratio: 650 / 600"
        />
      </v-col>

      <v-col cols="12" sm="6">
        <h1 class="barlow mb-3">SELECTIVE PALLET RACK</h1>
        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />

        <p class="text-body-1 barlow2 text-justify">
          <span class="barlow">Selective Pallet Racking</span>
          adalah salah satu sistem penyimpanan palet yang paling umum digunakan
          di gudang dan fasilitas logistik. Sistem ini dirancang untuk
          menyediakan akses langsung ke setiap palet, sehingga sangat fleksibel
          dan efisien untuk berbagai jenis operasi pergudangan.
        </p>
        <br />

        <h2 class="barlow2">Aplikasi di Industri:</h2>

        <p class="barlow2 text-justify">
          Selective Pallet Racking banyak digunakan di berbagai industri karena
          fleksibilitas dan kemudahannya. Beberapa aplikasinya meliputi:
        </p>

        <ul class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow">Ritel dan Distribusi:</span>
            Cocok untuk gudang yang menyimpan berbagai macam produk dengan
            rotasi stok tinggi.
          </li>

          <li>
            <span class="barlow">Manufaktur: </span>
            Digunakan untuk menyimpan bahan baku dan produk jadi yang perlu
            diakses secara cepat.
          </li>

          <li class="my-3">
            <span class="barlow"> Logistik dan Pusat Distribusi: </span>
            Ideal untuk gudang yang membutuhkan akses cepat ke palet untuk
            pengiriman dan penerimaan barang.
          </li>

          <li>
            <span class="barlow">Farma dan Makanan: </span>
            Cocok untuk industri yang membutuhkan sistem penyimpanan yang
            fleksibel dan mudah diatur.
          </li>
        </ul>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" class="px-4">
        <h2 class="barlow2">Keuntungan Selective Pallet Racking:</h2>

        <ul class="ml-6 text-justify barlow2">
          <li class="my-2">
            <span class="barlow">Aksesibilitas Tinggi:</span>
            Setiap palet dapat diakses secara langsung, memudahkan pengambilan
            dan penyimpanan barang.
          </li>
          <li class="my-2">
            <span class="barlow">Fleksibilitas:</span>
            Cocok untuk berbagai jenis produk dan ukuran palet, serta dapat
            diatur ulang sesuai perubahan kebutuhan gudang.
          </li>
          <li class="my-2">
            <span class="barlow">Biaya Relatif Rendah: </span>
            Biaya investasi dan pemeliharaannya lebih terjangkau dibandingkan
            sistem penyimpanan otomatis.
          </li>
          <li class="my-2">
            <span class="barlow">Efisiensi Ruang:</span>
            Tetap efisien dalam penggunaan ruang vertikal meskipun memerlukan
            lorong untuk forklift.
          </li>
          <li class="my-2">
            <span class="barlow">Kemudahan Implementasi: </span>
            Mudah dipasang dan diintegrasikan ke dalam operasi gudang yang sudah
            ada.
          </li>
        </ul>
      </v-col>

      <v-col cols="12" sm="6" class="px-4">
        <h2 class="barlow2">Tantangan Selective Pallet Racking:</h2>
        <ul class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow"> Penggunaan Ruang yang Kurang Optimal: </span>
            Memerlukan lorong (aisle) yang cukup lebar untuk forklift, sehingga
            mengurangi kepadatan penyimpanan.
          </li>

          <li>
            <span class="barlow">Ketergantungan pada Forklift: </span>
            Operasinya sangat bergantung pada forklift, yang dapat menimbulkan
            biaya tambahan untuk perawatan dan operasional.
          </li>

          <li class="my-3">
            <span class="barlow">Risiko Kerusakan: </span>
            Forklift dapat menyebabkan kerusakan pada rak jika tidak
            dioperasikan dengan hati-hati.
          </li>

          <li>
            <span class="barlow">Tidak Cocok untuk Stok Massal:</span>
            Kurang efisien untuk penyimpanan stok dalam jumlah besar dengan
            rotasi rendah.
          </li>
        </ul>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="px-4">
        <v-divider thickness="3" color="#FF3A3A" class="opacity-100 mb-3" />
        <p style="font-size: 27px" class="barlow mb-3">Kesimpulan</p>

        <p class="barlow2 text-h6 text-justify">
          <span class="barlow">Selective Pallet Racking </span>
          adalah solusi penyimpanan yang efisien dan fleksibel untuk gudang
          dengan rotasi stok tinggi dan kebutuhan akses langsung. Meskipun
          memiliki beberapa kekurangan, sistem ini tetap populer karena
          kemudahan implementasi dan biaya yang relatif rendah. Pemilihan sistem
          ini harus disesuaikan dengan kebutuhan spesifik gudang, seperti jenis
          produk, volume stok, dan frekuensi pengambilan barang.
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
  title: "Rak Selective Pallet - Heavy Duty Storage | TAP Racking",
  ogTitle: "Rak Selective Pallet - Heavy Duty Storage | TAP Racking",
  description:
    "Selective Pallet Racking adalah sistem penyimpanan gudang fleksibel dengan akses langsung ke palet. Ideal untuk ritel, manufaktur, dan logistik.",
  ogDescription:
    "Selective Pallet Racking adalah sistem penyimpanan gudang fleksibel dengan akses langsung ke palet. Ideal untuk ritel, manufaktur, dan logistik.",
  keywords:
    "rak gudang, heavy duty rack, selective pallet rack, penyimpanan industri, gudang logistik",
  ogImage:
    "https://cdn.aresa-digital.com/images/produk/heavy-duty/selective/selective-pallet-rack-TAP_og.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl:
    "https://www.perkasaracking.co.id/produk/heavy-duty/selective-pallet-rack",
  robots: "index, follow",
  canonical:
    "https://www.perkasaracking.co.id/produk/heavy-duty/selective-pallet-rack",
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
  word-wrap: break-word;
}
</style>
