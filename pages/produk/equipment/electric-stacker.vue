<template>
  <top-detail :operandata="banner" />

  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6" class="px-4">
        <v-img
          src="/images/produk/equipment/electric-stracker/electric-stacker_1.webp"
          lazy-src="/images/produk/equipment/electric-stracker/electric-stacker_2.webp"
          alt="Electric Stacker - Solusi Efisien untuk Penumpukan Barang di Gudang"
          height="100%"
          width="100%"
          cover
          style="aspect-ratio: 650 / 600;"
        />
      </v-col>

      <v-col cols="12" md="6" class="px-4">
        <h1 class="barlow">ELECTRIC STACKER</h1>

        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />
        <p class="text-body-1 barlow2 text-justify">
          <span class="barlow">Electric Stacker</span>
          adalah solusi modern untuk penumpukan barang di
          gudang dengan tenaga listrik. Alat ini mampu mengangkat hingga 2.000
          kg dan mencapai ketinggian 6 meter, membuatnya ideal untuk pergudangan
          dan distribusi. Ditenagai oleh baterai lithium berkapasitas tinggi,
          Electric Stacker menawarkan pengoperasian yang efisien dan minim
          perawatan. Dilengkapi dengan fitur keamanan seperti pengereman
          regeneratif dan sensor otomatis, alat ini meningkatkan produktivitas
          sekaligus menjaga keselamatan operator.
        </p>
        <br />

        <h2 class="barlow2">Aplikasi di Industri</h2>

        <ol class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow">Gudang dan Logistik:</span>
            Electric Stacker banyak digunakan di gudang untuk memindahkan palet,
            menata barang, dan mengoptimalkan ruang penyimpanan.
          </li>

          <li>
            <span class="barlow">Industri Manufaktur:</span>
            Alat ini digunakan untuk memindahkan bahan baku, komponen, atau
            produk jadi di lantai produksi.
          </li>

          <li>
            <span class="barlow">Ritel dan Distribusi: </span>
            Electric Stacker membantu dalam penataan dan pemindahan barang di
            pusat distribusi atau toko ritel besar.
          </li>

          <li>
            <span class="barlow">Industri Makanan dan Minuman:</span>
            Karena tidak menghasilkan emisi, Electric Stacker cocok digunakan di
            lingkungan yang memerlukan kebersihan tinggi, seperti industri
            makanan dan minuman.
          </li>

          <li class="mt-3">
            <span class="barlow">Rumah Sakit dan Fasilitas Kesehatan:</span>
            Alat ini digunakan untuk memindahkan peralatan medis atau pasokan
            tanpa menimbulkan kebisingan atau polusi udara.
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" class="px-4">
        <h2 class="barlow2">Keuntungan Electric Stacker</h2>

        <ol class="ml-6">
          <li class="mt-3 barlow2">
            <span class="barlow">Ramah Lingkungan:</span>
            Karena menggunakan tenaga listrik, Electric Stacker tidak
            menghasilkan emisi gas buang, sehingga lebih ramah lingkungan
            dibandingkan dengan alat bertenaga diesel atau LPG.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Biaya Operasional Rendah: </span>
            Listrik umumnya lebih murah daripada bahan bakar fosil, sehingga
            biaya operasionalnya lebih rendah dalam jangka panjang.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Pengoperasian yang Mudah: </span>
            Electric Stacker dirancang untuk mudah dioperasikan, bahkan oleh
            operator yang kurang berpengalaman.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Kebisingan Rendah: </span>
            Alat ini menghasilkan kebisingan yang lebih rendah dibandingkan
            dengan alat bertenaga diesel, sehingga cocok untuk digunakan di
            lingkungan dalam ruangan.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Presisi Tinggi: </span>
            Electric Stacker memiliki kontrol yang halus dan presisi,
            memungkinkan penanganan beban dengan akurasi tinggi.
          </li>

          <li class="mt-3 barlow2">
            <span class="barlow">Tidak Membutuhkan Area Ventilasi: </span>
            Karena tidak menghasilkan emisi, Electric Stacker dapat digunakan di
            area tertutup tanpa memerlukan sistem ventilasi khusus.
          </li>
        </ol>
      </v-col>

      <v-col cols="12" sm="6" class="px-4">
        <h2 class="barlow2">Tantangan Electric Stacker</h2>

        <ol class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow">Biaya Awal Tinggi: </span>
            Harga pembelian Electric Stacker umumnya lebih tinggi dibandingkan
            dengan alat bertenaga diesel atau manual.
          </li>

          <li class="my-3">
            <span class="barlow">Ketergantungan pada Baterai:</span>
            Alat ini memerlukan pengisian baterai secara berkala, yang dapat
            memakan waktu dan mengurangi produktivitas jika baterai habis di
            tengah operasi.
          </li>

          <li>
            <span class="barlow"
              >Kapasitas dan Ketinggian Angkat Terbatas:
            </span>
            Beberapa model Electric Stacker memiliki kapasitas angkat dan
            ketinggian yang terbatas dibandingkan dengan forklift konvensional.
          </li>

          <li class="mt-3">
            <span class="barlow">Perawatan Baterai: </span>
            Baterai memerlukan perawatan rutin dan memiliki masa pakai tertentu,
            yang dapat menambah biaya operasional.
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="px-4">
        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />
        <h1 class="barlow">Kesimpulan</h1>

        <p class="barlow2 text-h6 mt-3 text-justify">
          <span class="barlow">Electric Stacker </span>
          adalah solusi efisien dan ramah lingkungan untuk material handling di
          berbagai industri. Meskipun memiliki beberapa kekurangan seperti biaya
          awal yang tinggi dan ketergantungan pada baterai, keuntungannya dalam
          hal efisiensi, kebisingan rendah, dan ramah lingkungan membuatnya
          menjadi pilihan populer di banyak sektor industri.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <chat-ai />
</template>

<script setup>
const banner = {
  judul: "DETAIL PRODUK",
  alttext: "Rak Gudang - Equimpent - Electric Stacker - TAP",
};

useSeoMeta({
  title: "Electric Stacker",
  ogTitle: "Electric Stacker",
  description:
    "Electric Stacker untuk rak gudang, solusi efisien untuk mengangkat dan memindahkan pallet dengan mudah dan aman.",
  ogDescription:
    "Electric Stacker untuk rak gudang, solusi efisien untuk mengangkat dan memindahkan pallet dengan mudah dan aman.",
  keywords:
    "rak gudang, electric stacker, alat angkut pallet, material handling, peralatan gudang, forklift, solusi gudang",
  ogImage: "/images/produk/equipment/electric-stracker/electric-stacker_og.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl:
    "https://www.aresa-digital.com/produk/equipment/electric-stacker",
  robots: "index, follow",
  canonical:
    "https://www.aresa-digital.com/produk/equipment/electric-stacker",
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
