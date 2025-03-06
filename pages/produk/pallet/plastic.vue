<template>
  <top-detail :operandata="banner" />

  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6" class="px-4">
        <v-img
          src="https://cdn.aresa-digital.com/images/produk/pallet/plastik/pallet-plastik_1.webp"
          alt="Pallet Plastic"
          lazy-src="https://cdn.aresa-digital.com/images/produk/pallet/plastik/pallet-plastik_2.webp"
          class="rounded-lg"
          height="65%"
          width="100%"
          cover
        />
      </v-col>

      <v-col cols="12" md="6" class="px-4">
        <h1 class="barlow">PALLET PLASTIK</h1>
        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />

        <p class="text-body-1 barlow2 text-justify">
          Pallet Plastic adalah solusi penyimpanan dan transportasi yang kuat,
          ringan, dan tahan lama, dirancang untuk meningkatkan efisiensi
          logistik dan manajemen gudang. Dibuat dari material plastik
          berkualitas tinggi, pallet ini tahan terhadap kelembaban, korosi, dan
          bahan kimia, menjadikannya pilihan ideal untuk berbagai industri.
          Dengan desain yang ergonomis dan daya tahan tinggi, Pallet Plastic
          dapat digunakan untuk menyimpan dan mengangkut berbagai jenis barang,
          mulai dari produk makanan hingga bahan industri. Selain itu,
          penggunaannya lebih higienis dibandingkan pallet kayu, karena mudah
          dibersihkan dan bebas dari serangan hama. Cocok untuk lingkungan
          gudang, manufaktur, dan distribusi yang membutuhkan solusi penyimpanan
          yang praktis dan berkelanjutan.
        </p>
        <br />

        <h2 class="barlow2">Aplikasi di industri</h2>

        <ol class="ml-6 text-justify barlow2">
          <li class="my-3">
            <span class="barlow">Pergudangan & Logistik:</span>
            Digunakan untuk penyimpanan dan distribusi barang dengan efisiensi
            tinggi.
          </li>

          <li>
            <span class="barlow">Manufaktur:</span>
            Memudahkan pemindahan bahan baku dan produk jadi di area produksi.
          </li>

          <li class="my-3">
            <span class="barlow">Industri Makanan & Minuman :</span>
            Karena higienis dan mudah dibersihkan, pallet plastik cocok untuk
            produk makanan dan minuman.
          </li>

          <li>
            <span class="barlow">Farmasi & Medis :</span>
            Banyak digunakan untuk menyimpan obat dan peralatan medis karena
            tidak menyerap kotoran atau bakteri.
          </li>

          <li class="mt-3">
            <span class="barlow">Ekspor & Transportasi Internasional :</span>
            Tidak memerlukan fumigasi seperti pallet kayu, sehingga lebih
            efisien dalam pengiriman ke luar negeri.
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <h2 class="barlow2">Keuntungan Pallet plastic</h2>

        <ol class="ml-6 barlow2 text-justify">
          <li class="my-3">
            <span class="barlow">Tahan Lama & Tidak Mudah Rusak:</span>
            Lebih awet dibandingkan pallet kayu karena tidak mudah lapuk atau
            pecah.
          </li>

          <li>
            <span class="barlow">Tahan Air & Anti-Kelembaban:</span>
            Tidak menyerap air sehingga tidak mudah berjamur atau membusuk.
          </li>

          <li class="my-3">
            <span class="barlow">Bebas Serangga & Hama :</span>
            Tidak perlu perlakuan khusus seperti fumigasi sebelum digunakan
            untuk ekspor.
          </li>

          <li>
            <span class="barlow">Ringan & Mudah Dipindahkan</span>
            Lebih ringan dibandingkan pallet kayu atau logam, memudahkan
            pemindahan dengan alat bantu seperti forklift.
          </li>

          <li class="mt-3">
            <span class="barlow">Ramah Lingkungan :</span>
            Dapat didaur ulang setelah masa pakai habis.
          </li>
        </ol>
      </v-col>

      <v-col>
        <h2 class="barlow2">Tantangan Pallet plastic</h2>

        <ol class="ml-6 barlow2 text-justify">
          <li class="my-3">
            <span class="barlow">Harga Lebih Mahal:</span>
            Biaya awal lebih tinggi dibandingkan pallet kayu.
          </li>

          <li>
            <span class="barlow">Tidak Mudah Diperbaiki :</span>
            Jika rusak, pallet plastik sulit diperbaiki dibandingkan pallet kayu
            yang bisa diperbaiki dengan cara sederhana.
          </li>

          <li class="my-3">
            <span class="barlow">Kurang Kuat untuk Beban Sangat Berat :</span>
            Tidak sekuat pallet logam dalam menahan beban berat secara statis
            atau dinamis.
          </li>

          <li>
            <span class="barlow">Kurang Tahan Panas Ekstrem :</span>
            Plastik bisa mengalami deformasi jika terkena suhu sangat tinggi.
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="px-4">
        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />
        <h1 class="barlow">Kesimpulan</h1>

        <p class="barlow2 text-h6 mt-3 text-justify">
          <span class="barlow"> Pallet plastic</span> adalah alternatif modern
          yang lebih higienis, tahan lama, dan ramah lingkungan dibandingkan
          pallet kayu. Dengan keunggulan seperti tahan air, bebas hama, dan
          mudah dibersihkan, pallet ini sangat cocok untuk industri makanan,
          farmasi, dan manufaktur. Meskipun memiliki harga awal yang lebih
          tinggi dan sulit diperbaiki jika rusak, daya tahannya yang lebih lama
          serta kemudahan dalam pemakaian dan daur ulang menjadikannya investasi
          yang menguntungkan dalam jangka panjang.
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
  title: "Pallet Plastik",
  ogTitle: "Pallet Plastik",
  description:
    "Pallet Plastik adalah solusi penyimpanan dan transportasi yang tahan lama, higienis, serta bebas dari korosi dan hama. Cocok untuk industri logistik, makanan, dan farmasi.",
  ogDescription:
    "Temukan keunggulan Pallet Plastik sebagai pilihan terbaik untuk penyimpanan dan distribusi yang lebih bersih, ringan, dan tahan lama.",
  keywords:
    "pallet plastik, pallet gudang, pallet tahan lama, penyimpanan plastik, transportasi logistik, pallet industri, pallet higienis",
  ogImage:
    "https://cdn.aresa-digital.com/images/produk/pallet/plastik/pallet-plastik_og.webp",
  ogType: "product",
  ogUrl: "https://www.perkasaracking.co.id/produk/pallet/plastic",
  twitterCard: "summary_large_image",
  canonical: "https://www.perkasaracking.co.id/produk/pallet/plastic",
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
