<template>
  <top-detail :operandata="banner" />

  <v-container class="my-4">
    <breadcrumbs />
    <v-row no-gutters>
      <v-col cols="12" md="9" class="px-7">
        <h1
          class="barlow"
          :style="{ fontSize: $vuetify.display.mdAndUp ? '50px' : '30px' }"
        >
          RAK GUDANG MURAH BERKUALITAS
        </h1>

        <v-divider
          :width="$vuetify.display.smAndUp ? '400' : '200'"
          thickness="8"
          style="margin-top: -1%"
          color="#FF3A3A"
          class="opacity-100"
        />

        <h2 class="barlow2 mt-6 text-red">
          Mengapa Memilih Rak Gudang Murah Berkualitas?
        </h2>

        <p class="text-body-1 barlow2 text-justify mt-2">
          Rak gudang adalah elemen penting dalam sistem penyimpanan, baik untuk
          bisnis kecil, distributor, hingga industri besar. Memilih rak gudang
          yang murah tetapi tetap berkualitas adalah langkah cerdas untuk
          efisiensi dan optimalisasi ruang penyimpanan.
        </p>

        <h3 class="barlow2 mt-4">Keunggulan Rak Gudang Berkualitas</h3>

        <ul class="ml-4 barlow2">
          <li>
            Konstruksi Kokoh & Tahan Lama – Dibuat dari material berkualitas
            tinggi yang mampu menahan beban berat.
          </li>
          <li>
            Harga Terjangkau – Dengan biaya investasi yang lebih hemat tanpa
            mengorbankan kualitas.
          </li>
          <li>
            Mudah Dipasang & Disesuaikan – Dapat dirakit dengan cepat dan
            fleksibel sesuai kebutuhan ruang.
          </li>
          <li>
            Mendukung Efisiensi Gudang – Memaksimalkan kapasitas penyimpanan dan
            mempermudah akses barang.
          </li>
        </ul>
        <br />

        <v-img
          src="https://cdn.aresa-digital.com/images/artikel/rak-gudang-murah/rak-gudang-murah-berkualitas-TAP_1.webp"
          lazy-src="https://cdn.aresa-digital.com/images/artikel/rak-gudang-murah/rak-gudang-murah-berkualitas-TAP_2.webp"
          alt="Rak Gudang Murah Berkualitas"
          height="450"
        />

        <v-divider class="my-4" />

        <h2 class="barlow">Jenis Rak Gudang yang Populer</h2>

        <ul class="ml-4 mt-2 text-body-1 barlow2">
          <li>
            <span class="font-weight-bold">Rak Heavy Duty</span> – adalah jenis
            rak penyimpanan yang dirancang untuk menahan beban berat di atas
            1.000 kg per level, cocok untuk penyimpanan industri dan gudang
            logistik. Rak ini biasanya digunakan untuk pallet racking,
            penyimpanan barang besar, atau keperluan penyimpanan dengan
            intensitas tinggi.
          </li>
          <li class="mt-2">
            <span class="font-weight-bold">Rak Medium Duty</span> adalah jenis
            rak penyimpanan yang dirancang untuk menampung beban sedang,
            biasanya dalam kisaran 200 kg hingga 1.000 kg per level. Rak ini
            sering digunakan di gudang, toko ritel, bengkel, dan industri kecil
            hingga menengah.
          </li>
          <li class="mt-2">
            <span class="font-weight-bold">Rak Light Duty</span> – adalah jenis
            rak penyimpanan yang dirancang untuk menampung beban ringan hingga
            200 kg per level. Rak ini sering digunakan di perkantoran, toko
            ritel, gudang kecil, dan rumah tangga untuk menyimpan barang dengan
            bobot ringan hingga menengah.
          </li>
        </ul>

        <h1 class="barlow mt-6">
          Dimana Membeli Rak Gudang Murah Berkualitas?
        </h1>

        <v-divider
          width="200"
          thickness="3"
          color="#FF3A3A"
          class="opacity-100"
        />
        <article-closing-text />
      </v-col>

      <v-col cols="12" md="3">
        <article-sidebar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const banner = {
  judul: "DETAIL ARTIKEL",
};

useSeoMeta({
  title:
    "Jual rak gudang murah berkualitas, harga rak gudang, rak gudang heavy duty, jual rak gudang murah",
  ogTitle:
    "Jual rak gudang murah berkualitas, harga rak gudang, rak gudang heavy duty, jual rak gudang murah",
  description:
    "Temukan berbagai jenis rak gudang di Jakarta dengan kualitas terbaik dan harga bersaing. Cocok untuk kebutuhan industri dan komersial.",
  ogDescription:
    "Temukan berbagai jenis rak gudang di Jakarta dengan kualitas terbaik dan harga bersaing.",
  ogImage:
    "https://cdn.aresa-digital.com/images/artikel/rak-gudang-murah/rak-gudang-murah-berkualitas-TAP_og.webp",
  twitterCard: "summary_large_image",
  keywords:
    "rak gudang murah, rak gudang berkualitas, harga rak gudang, rak gudang heavy duty",
  canonical:
    "https://www.perkasaracking.co.id/article/rak-gudang-murah-berkualitas",
  ogurl:
    "https://www.perkasaracking.co.id/article/rak-gudang-murah-berkualitas",
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
