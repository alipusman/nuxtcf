<template>
  <loading-tap />
  <top-detail :operandata="banner" />

  <v-container class="my-4">
    <v-row>
      <v-col cols="12" md="9" class="px-4">
        <breadcrumbs />
        <h1 class="barlow text-h2">Pallet Rack</h1>

        <v-divider
          :width="$vuetify.display.smAndUp ? '400' : '300'"
          thickness="6"
          color="#FF3A3A"
          class="opacity-100 mt-2 mb-4"
        />

        <p class="barlow2 text-body-1 text-justify">
          Pallet rack adalah sistem penyimpanan yang dirancang untuk menampung
          barang dalam jumlah besar dengan menggunakan palet sebagai unit
          penyimpanan. Rak ini biasanya digunakan di gudang, pusat distribusi,
          dan fasilitas logistik untuk mengoptimalkan ruang penyimpanan secara
          vertikal. Pallet rack terdiri dari rangka baja yang kokoh dan dapat
          disesuaikan sesuai kebutuhan penyimpanan. Jenis-jenis pallet rack
          meliputi selective pallet rack, drive-in rack, push-back rack, dan
          gravity flow rack, masing-masing dengan keunggulan tersendiri dalam
          efisiensi penyimpanan dan aksesibilitas barang.
        </p>

        <v-row no-gutters>
          <v-col
            cols="12"
            md="4"
            v-for="(product, index) in data.pallet_rack"
            :key="index"
          >
            <v-card
              rounded="lg"
              variant="outlined"
              :to="product.to"
              class="ma-4 pa-5 border"
            >
              <v-img
                :src="product.image"
                :lazy-src="product.lazysrc"
                height="150"
                alt="Product Image"
                class="zoom-image"
              />

              <v-card-text>
                <p class="barlow mt-2">
                  {{ product.judul }}
                </p>

                <p class="barlow2 mt-2">
                  {{ product.desc }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <chat-ai />
        </v-row>
      </v-col>

      <v-col cols="12" md="3">
        <article-sidebar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "default",
});

const banner = ref({
  judul: "HEAVY DUTY",
  alttext: "Rak Gudang Heavy Duty",
});

const data = reactive({
  pallet_rack: [
    {
      judul: "Pallet Kayu",
      desc: "Pallet Kayu adalah solusi penyimpanan dan transportasi yang kokoh, ekonomis, dan ramah lingkungan, banyak digunakan dalam industri logistik dan pergudangan...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/kayu/pallet-kayu_1.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/kayu/pallet-kayu_2.webp",
      alttext: "TAP - Rak Gudang - Pallet - Pallet Kayu",
      to: "/produk/pallet/wooden",
    },

    {
      judul: "Pallet Plastik",
      desc: "Pallet Plastik adalah solusi penyimpanan dan transportasi yang kuat, ringan, dan tahan lama, dirancang untuk meningkatkan efisiensi logistik dan manajemen gudang...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/plastik/pallet-plastik_1.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/plastik/pallet-plastik_2.webp",
      alttext: "TAP - Rak Gudang - Pallet - Pallet Plastic",
      to: "/produk/pallet/plastic",
    },

    {
      judul: "Pallet Mesh",
      desc: "Pallet Mesh adalah sistem rak penyimpanan inovatif yang dirancang untuk menyimpan berbagai jenis barang dengan aman dan terorganisir. Menggunakan struktur palet...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/mesh/pallet-mesh_1.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/mesh/pallet-mesh_2.webp",
      alttext: "TAP - Rak - Gudang - Pallet - Pallet Mesh",
      to: "/produk/pallet/mesh",
    },

    {
      judul: "Stacking System",
      desc: "Stacking System adalah sistem penyimpanan yang dirancang untuk menumpuk palet secara vertikal guna memaksimalkan kapasitas ruang penyimpanan...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/stacking/stacking-system_1.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/stacking/stacking-system_2.webp",
      alttext: "TAP - Rak - Gudang - Pallet - Stacking System",
      to: "/produk/pallet/stacking-system",
    },

    {
      judul: "Nesting Rack System",
      desc: "Nesting Rack System adalah sistem penyimpanan yang dirancang untuk memberikan fleksibilitas dalam pengelolaan ruang dengan rak yang dapat dilipat...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/nesting/nesting-rack_1.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/nesting/nesting-rak_2.webp",
      alttext: "TAP - Rak - Gudang - Pallet - Nesting Rak Sistem",
      to: "/produk/pallet/nesting-rack",
    },
  ],
});

useSeoMeta({
  title: "Rak Pallet Heavy Duty - Solusi Penyimpanan Gudang",
  ogTitle: "Jual Rak Pallet Heavy Duty",
  description:
    "Jual Rak Pallet Heavy Duty Kapasitas 3000kg/level dengan Material Baja Premium. Sistem Selective Pallet, Drive-In, Double Deep. Garansi & Konsultasi Gratis!",
  ogDescription:
    "Jual Rak Pallet Heavy Duty dengan Kapasitas 3000kg/level. Pilihan terbaik untuk penyimpanan gudang industri dengan sistem Selective Pallet, Drive-In, dan Double Deep.",
  keywords:
    "rak pallet, rak pallet heavy duty, jual rak pallet, harga rak pallet, rak pallet gudang, rak gudang pallet, sistem rak pallet, rak penyimpanan pallet, selective pallet, drive-in rack, double deep rack, rak industri, warehouse racking",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/produk/pallet/rak-pallet-heavy-duty-TAP.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl: "https://www.perkasaracking.co.id/produk/pallet",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  canonical: "https://www.perkasaracking.co.id/produk/pallet",
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
