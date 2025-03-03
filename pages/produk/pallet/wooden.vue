<template>
  <top-detail :operandata="banner" />

  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6" class="px-4">
        <v-img
          :src="item.image"
          :lazy-src="item.lazy_image"
          class="rounded-lg"
          alt="Pallet - Pallet Kayu"
          height="95%"
          width="100%"
          cover
          style="aspect-ratio: 650 / 600"
        />
      </v-col>

      <v-col cols="12" md="6" class="px-4">
        <h5 class="text-grey barlow">TAP - RACKING - PALLET</h5>

        <h2 class="barlow">{{item.title}}</h2>

        <v-divider
          width="50"
          thickness="3"
          color="#FF3A3A"
          class="mb-3 opacity-100"
        />

        <p class="mb-1 text-body-1 barlow2 text-justify">
          {{ item.pengertian }}
        </p>

        <v-row class="mt-3">
          <h2 class="barlow2 ml-3">Komponen Utama Pallet Kayu</h2>
          <v-col
            cols="12"
            sm="6"
            v-for="(komponen, index) in item.komponen"
            :key="index"
          >
            <p class="text-body-1 barlow2">{{ komponen.title }}</p>
            <h4 class="barlow">
              {{ komponen.description }}
            </h4>
            <br />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <h2 class="barlow2">Keuntungan Pallet Kayu</h2>
        <v-divider
          width="200"
          thickness="3"
          color="#FF3A3A"
          class="mb-3 opacity-100"
        />
        <ul class="ml-6 text-justify">
          <li
            class="mt-3 barlow2"
            v-for="(keuntungan, index) in item.keuntungan"
            :key="index"
          >
            <span class="font-weight-bold">{{ keuntungan.title }}:</span>
            {{ keuntungan.description }}
          </li>
        </ul>
      </v-col>

      <v-col>
        <h2 class="barlow2">Tantangan Pallet Kayu</h2>
        <v-divider
          width="200"
          thickness="3"
          color="#FF3A3A"
          class="mb-3 opacity-100"
        />
        <ul
          class="ml-6 text-justify"
          v-for="(tantangan, index) in item.tantangan"
          :key="index"
        >
          <li class="mt-3 barlow2">
            <span class="font-weight-bold">{{ tantangan.title }}:</span>
            {{ tantangan.description }}
          </li>
        </ul>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2 class="barlow2">Aplikasi di industri</h2>
        <v-divider
          width="200"
          thickness="3"
          color="#FF3A3A"
          class="mb-3 opacity-100"
        />
        <ul class="ml-6" v-for="(aplikasi, index) in item.aplikasi_industri" :key="index">
          <li class="mt-3 barlow2">
            <span class="font-weight-bold">{{aplikasi.title}}:</span>
            {{aplikasi.description}}
          </li>
        </ul>
      </v-col>

      <v-col cols="12">
        <h1 class="barlow2">Kesimpulan</h1>
        <v-divider
          width="200"
          thickness="3"
          color="#FF3A3A"
          class="mb-3 opacity-100"
        />
        <p class="text-justify barlow2 text-h6">
          <span class="barlow"> {{item.title}}</span> 
          {{item.kesimpulan}}
        </p>
      </v-col>
    </v-row>
  </v-container>

  <chat-ai />
</template>

<script setup>
const { data } = await useFetch("/api/pallet-kayu");
const item = data.value[0];
const banner = {
  judul: "DETAIL PRODUK",
  alttext: "Rak Gudang - Pallet - Pallet Kayu - TAP",
};

useSeoMeta({
  title: "Pallet Kayu",
  ogTitle: "Pallet Kayu",
  description:
    "Pallet Kayu adalah solusi penyimpanan dan transportasi yang kuat, ekonomis, dan ramah lingkungan. Ideal untuk industri logistik, pergudangan, dan distribusi.",
  ogDescription:
    "Temukan keunggulan Pallet Kayu sebagai solusi penyimpanan yang kokoh, hemat biaya, dan dapat didaur ulang untuk kebutuhan industri dan logistik.",
  keywords:
    "pallet kayu, pallet gudang, penyimpanan kayu, transportasi logistik, pallet industri, pallet murah",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/produk/pallet/kayu/pallet-kayu_og.webp",
  twitterCard: "summary_large_image",
  ogurl: "https://www.perkasaracking.co.id/produk/pallet/wooden",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/produk/pallet/wooden",
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
