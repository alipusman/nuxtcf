<template>
  <top-detail :operandata="banner" />

  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="9" class="px-4">
        <h1
          class="barlow"
          :style="{ fontSize: $vuetify.display.mdAndUp ? '50px' : '30px' }"
          itemprop="name"
        >
          Rak Gudang Cantilever
        </h1>

        <v-divider
          :width="$vuetify.display.smAndUp ? '400' : '300'"
          thickness="6"
          style="margin-top: -1%"
          color="#FF3A3A"
          class="opacity-100"
        />

        <h2
          class="barlow"
          :style="{ fontSize: $vuetify.display.mdAndUp ? '45px' : '30px' }"
          itemprop="name"
        >
          Kemudahan Akses dan Penataan Lebih Rapi
        </h2>

        <p class="barlow2 text-body-1 mt-2 text-justify">
          Cantilever Rack adalah sistem rak penyimpanan yang dirancang khusus
          untuk menyimpan barang yang panjang, besar, atau berbentuk tidak
          beraturan, seperti pipa, kayu, baja, lembaran logam, dan gulungan
          kabel. Rak ini memiliki struktur dengan lengan yang menjorok keluar
          dari kolom utama, memungkinkan akses mudah tanpa penghalang di bagian
          depan. Cantilever rack banyak digunakan dalam industri yang menangani
          material panjang dan berat yang sulit disimpan dalam rak konvensional.
        </p>

        <br />

        <h2 class="barlow">Keunggulan Rak Gudang Cantilever :</h2>

        <ul class="ml-6 barlow2">
          <li class="my-3">
            <span class="barlow">Fleksibilitas Penyimpanan:</span>
            Cocok untuk menyimpan barang panjang, besar, atau berbentuk
          </li>

          <li>
            <span class="barlow">Akses Mudah dan Efisien:</span>
            Tanpa penghalang di bagian depan, memungkinkan forklift atau pekerja
            mengambil barang dengan lebih mudah.
          </li>

          <li class="my-3">
            <span class="barlow">Struktur Kokoh dan Tahan Lama:</span>
            Terbuat dari baja berkualitas tinggi yang mampu menahan beban berat.
          </li>

          <li>
            <span class="barlow"> Memaksimalkan Ruang Penyimpanan: </span>
            Dengan desain terbuka dan bertingkat, memungkinkan penyimpanan lebih
            banyak dalam ruang yang terbatas.
          </li>
        </ul>
        <br />

        <h2 class="barlow">Jenis Jenis Rak Gudang Cantilever :</h2>

        <ul class="ml-6 barlow2">
          <li class="my-3">
            <span class="barlow">Single-Sided Cantilever Racking:</span>
            Memiliki lengan hanya di satu sisi dan biasanya ditempatkan di
            sepanjang dinding.
          </li>

          <li>
            <span class="barlow">Double-Sided Cantilever Racking :</span>
            Memiliki lengan di kedua sisi, sehingga dapat menampung lebih banyak
            barang dan lebih hemat ruang.
          </li>

          <li class="my-3">
            <span class="barlow">Heavy-Duty Cantilever Racking :</span>
            Dirancang untuk menyimpan barang dengan bobot sangat berat, seperti
            balok baja atau beton pracetak.
          </li>

          <li>
            <span class="barlow">Medium-Duty Cantilever Racking :</span>
            Cocok untuk beban sedang seperti kayu, tabung plastik, atau
            peralatan industri lainnya.
          </li>
        </ul>
        <br />

        <v-row>
          <v-col cols="12" sm="7">
            <h2 class="barlow">Aplikasi di Industri:</h2>
            <v-divider
              width="200"
              thickness="3"
              color="#FF3A3A"
              class="opacity-100"
            />

            <ul class="ml-6 barlow">
              <li class="my-3">
                <span class="barlow">Industri Konstruksi :</span>
                Digunakan untuk menyimpan besi, baja, kayu, dan pipa PVC.
              </li>

              <li>
                <span class="barlow">Industri Kayu dan Perabot:</span>
                Cocok untuk penyimpanan balok kayu, papan MDF, dan lembaran
                plywood.
              </li>

              <li class="my-3">
                <span class="barlow">Industri Manufaktur:</span>
                Mempermudah penyimpanan bahan mentah yang panjang dan berat
                seperti batang aluminium atau lembaran baja
              </li>

              <li>
                <span class="barlow">Industri Otomotif:</span>
                Digunakan untuk menyimpan knalpot, as roda, atau bodi kendaraan
                yang panjang.
              </li>

              <li class="mt-3">
                <span class="barlow">Industri Logistik & Gudang:</span>
                Membantu penyimpanan material panjang yang sulit ditempatkan di
                rak biasa.
              </li>
            </ul>
          </v-col>

          <v-col cols="12" sm="5" class="mt-7">
            <v-img
              src="https://cdn.perkasaracking.co.id/images/produk/cantilever/rak-gudang-cantilever-TAP_1.webp"
              alt="Rak Gudang Cantilever"
              width="100%"
              height="100%"
              class="rounded-lg"
              cover
            />
          </v-col>
        </v-row>
        <br />

        <h1 class="barlow">Kesimpulan</h1>

        <v-divider
          width="12%"
          thickness="3"
          color="#FF3A3A"
          class="opacity-100"
        />

        <p class="barlow2 text-h6 mt-3 text-justify">
          <span class="barlow">Cantilever Rack</span> adalah solusi ideal untuk
          industri yang membutuhkan penyimpanan barang-barang berat dan besar.
          Meskipun memerlukan investasi awal yang signifikan, keuntungan dalam
          hal kapasitas, daya tahan, dan efisiensi ruang membuatnya menjadi
          pilihan yang layak untuk banyak aplikasi industri. Namun, penting
          untuk mempertimbangkan kebutuhan spesifik dan biaya perawatan sebelum
          memutuskan untuk mengadopsi sistem ini.
        </p>

        <chat-ai />
      </v-col>

      <v-col cols="12" md="3">
        <article-sidebar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const banner = {
  judul: "CANTILEVER",
  alttext: "Rak Gudang Cantilever",
};

useSeoMeta({
  title: "Cantilever Racking",
  ogTitle: "Cantilever Racking",
  description:
    "✓ Rak Gudang Cantilever untuk Barang Panjang & Berat ✓ Material Baja Kokoh ✓ Kapasitas Besar ✓ Cocok untuk Pipa, Kayu, Besi ✓ Garansi ✓ Harga Terbaik",
  ogDescription:
    "✓ Rak Gudang Cantilever untuk Barang Panjang & Berat ✓ Material Baja Kokoh ✓ Kapasitas Besar ✓ Cocok untuk Pipa, Kayu, Besi ✓ Garansi ✓ Harga Terbaik",
  keywords:
    "rak gudang cantilever, jual rak cantilever, harga rak cantilever, rak besi heavy duty, rak untuk barang panjang, rak gudang industri, rak beban berat, rak besi modular, sistem racking warehouse, rak untuk pipa dan kayu, rak besi tahan beban berat",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/produk/cantilever/rak-gudang-cantilever-TAP_og.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl:
    "https://www.perkasaracking.co.id/produk/type-rack/heavy-duty/cantilever",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  canonical:
    "https://www.perkasaracking.co.id/produk/type-rack/heavy-duty/cantilever",
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
