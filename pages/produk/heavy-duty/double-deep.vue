<template>
  <loading-tap />
  <top-detail :operandata="banner" />

  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          src="https://cdn.perkasaracking.co.id/images/produk/heavy-duty/double-deep/double-deep-pallet-racking-TAP_3.webp"
          lazy-img="https://cdn.perkasaracking.co.id/images/produk/heavy-duty/double-deep/double-deep-pallet-rack-TAP_4.webp"
          alt="Rak Double Deep"
          class="rounded-lg"
          cover
          eager
          width="100%"
          height="100%"
          style="aspect-ratio: 650 / 600"
          ><template v-slot:placeholder>
            <v-skeleton-loader type="image"></v-skeleton-loader>
          </template>
        </v-img>
      </v-col>

      <v-col cols="12" md="6">
        <h1 class="barlow">DOUBLE DEEP RACKING</h1>
        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />

        <p class="text-body-1 barlow2 text-justify">
          <span class="barlow">Double Deep Racking</span>
          sistem penyimpanan palet yang dirancang untuk meningkatkan kepadatan
          penyimpanan dengan menyusun palet dua tingkat ke dalam lorong (aisle).
          Sistem ini merupakan pengembangan dari Selective Pallet Racking,
          tetapi dengan lorong yang lebih sedikit karena palet disusun secara
          berjajar dua tingkat.
        </p>
        <br />

        <h2 class="barlow2">Karakteristik Double Deep Racking:</h2>

        <ol class="ml-6">
          <li class="mt-3 barlow2">
            <span class="barlow">Struktur:</span>
            Rak terdiri dari dua tingkat palet yang disusun secara berjajar,
            sehingga memungkinkan penyimpanan dua kali lebih banyak dalam satu
            lorong.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Akses Terbatas:</span>
            Palet di barisan depan dapat diakses langsung, sementara palet di
            barisan belakang hanya dapat diakses setelah palet depan
            dipindahkan.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Penggunaan Forklift Khusus: </span>
            Memerlukan forklift dengan jangkauan garpu yang lebih panjang (reach
            truck atau double deep reach truck) untuk mengakses palet di barisan
            belakang.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Kepadatan Penyimpanan:</span>
            Meningkatkan kepadatan penyimpanan dibandingkan dengan Selective
            Pallet Racking karena mengurangi jumlah lorong.
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" class="px-4">
        <h2 class="barlow2">Keuntungan Double Deep Racking:</h2>

        <ol class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow">Kepadatan Penyimpanan Lebih Tinggi: </span>
            Dengan menyusun palet dua tingkat ke dalam lorong, sistem ini
            mengurangi jumlah lorong yang dibutuhkan, sehingga meningkatkan
            efisiensi penggunaan ruang.
          </li>

          <li>
            <span class="barlow">Biaya Ruang Lebih Rendah: </span>
            Mengurangi kebutuhan ruang lantai, yang dapat menurunkan biaya sewa
            atau konstruksi gudang.
          </li>

          <li class="my-3">
            <span class="barlow">Cocok untuk Stok dengan Rotasi Sedang: </span>
            Ideal untuk produk dengan rotasi stok yang tidak terlalu tinggi, di
            mana palet di barisan belakang tidak perlu diakses terlalu sering.
          </li>

          <li>
            <span class="barlow">Skalabilitas: </span>
            Dapat diintegrasikan dengan sistem penyimpanan lainnya, seperti
            Selective Pallet Racking atau Drive-in Racking, untuk menyesuaikan
            kebutuhan gudang.
          </li>
        </ol>
      </v-col>

      <v-col cols="12" sm="6" class="px-4">
        <h2 class="barlow2">Tantangan Double Deep Racking:</h2>

        <ol class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow">Akses Terbatas: </span>
            Palet di barisan belakang hanya dapat diakses setelah palet di
            barisan depan dipindahkan, sehingga kurang fleksibel untuk operasi
            dengan rotasi stok tinggi.
          </li>

          <li>
            <span class="barlow">Kebutuhan Forklift Khusus: </span>
            Memerlukan forklift dengan jangkauan garpu yang lebih panjang, yang
            dapat meningkatkan biaya peralatan.
          </li>

          <li class="my-3">
            <span class="barlow">Risiko Kerusakan: </span>
            Forklift dengan jangkauan garpu panjang lebih rentan menyebabkan
            kerusakan pada rak atau palet jika tidak dioperasikan dengan
            hati-hati.
          </li>

          <li>
            <span class="barlow">Tidak Cocok untuk Semua Produk:</span>
            Kurang ideal untuk produk dengan tanggal kedaluwarsa atau yang
            memerlukan rotasi stok tinggi (FIFO).
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="px-4">
        <h2 class="barlow2">Aplikasi di Industri:</h2>

        <p class="barlow2 mt-3 text-justify">
          <span class="barlow">Double Deep Racking</span>
          cocok untuk industri yang membutuhkan kepadatan penyimpanan tinggi
          dengan rotasi stok yang tidak terlalu cepat. Beberapa aplikasinya
          meliputi:
        </p>

        <ol class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow">Gudang Distribusi: </span>
            Digunakan untuk menyimpan produk dengan rotasi stok sedang, seperti
            barang-barang konsumen yang tidak memerlukan akses cepat.
          </li>

          <li>
            <span class="barlow">Manufaktur: </span>
            Cocok untuk menyimpan bahan baku atau komponen yang tidak perlu
            diakses secara terus-menerus.
          </li>

          <li class="my-3">
            <span class="barlow">Pusat Logistik: </span>
            Ideal untuk gudang dengan ruang terbatas yang perlu memaksimalkan
            kapasitas penyimpanan.
          </li>

          <li>
            <span class="barlow">Industri Makanan dan Minuman: </span>
            Dapat digunakan untuk produk dengan masa simpan panjang yang tidak
            memerlukan rotasi stok harian.
          </li>
        </ol>
      </v-col>

      <v-col cols="12" class="px-4">
        <v-divider thickness="3" color="#FF3A3A" class="opacity-100 mb-3" />
        <h1 class="barlow">Kesimpulan</h1>

        <p class="barlow2 text-h6 mt-3 text-justify">
          <span class="barlow">Double Deep Racking</span>
          solusi penyimpanan yang efisien untuk meningkatkan kepadatan
          penyimpanan dan mengoptimalkan penggunaan ruang gudang. Sistem ini
          cocok untuk produk dengan rotasi stok sedang dan gudang yang
          memprioritaskan kapasitas penyimpanan. Namun, kekurangan utamanya
          adalah akses terbatas ke palet di barisan belakang, sehingga perlu
          dipertimbangkan sesuai dengan kebutuhan operasional gudang. Pemilihan
          sistem ini harus didasarkan pada jenis produk, frekuensi pengambilan,
          dan ketersediaan peralatan forklift yang sesuai.
        </p>
      </v-col>
    </v-row>
  </v-container>
  <chat-ai />
</template>

<script setup>
const banner = {
  judul: "DETAIL PRODUK",
  alttext: "Rak Double Deep",
};

useSeoMeta({
  title: "Rak Double Deep",
  ogtitle: "Rak Double Deep",
  description:
    "Rak Gudang Heavy Duty dengan sistem Double Deep Rack, ideal untuk penyimpanan barang dalam ruang terbatas.",
  ogDescription:
    "Rak Gudang Heavy Duty dengan sistem Double Deep Rack, ideal untuk penyimpanan barang dalam ruang terbatas.",
  keywords:
    "rak gudang, heavy duty rack, double deep rack, rak penyimpanan, rak industri, warehouse shelving, storage rack, pallet rack",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/double-deep/double-deep-pallet-racking-TAP_og.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl: "https://www.perkasaracking.co.id/produk/heavy-duty/double-deep",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/produk/heavy-duty/double-deep",
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
