<template>
  <loading-tap />
  <top-detail :operandata="banner" />

  <v-container class="my-4">
    <v-row>
      <v-col cols="12" md="9" class="px-4">
        <breadcrumbs />
        <h1 class="barlow text-h2">Equipment</h1>

        <v-divider
          :width="$vuetify.display.smAndUp ? '400' : '300'"
          thickness="6"
          color="#FF3A3A"
          class="opacity-100 mt-2 mb-4"
        />

        <p class="barlow2 text-body-1 text-justify">
          Equipment adalah peralatan atau perlengkapan yang digunakan dalam
          berbagai proses industri untuk mendukung produksi, operasional, dan
          pemeliharaan. Equipment dapat mencakup mesin, perangkat elektronik,
          alat ukur, hingga sistem otomatisasi yang dirancang untuk meningkatkan
          efisiensi dan efektivitas suatu proses industri.
        </p>

        <v-row no-gutters>
          <v-col
            cols="12"
            md="4"
            v-for="(product, index) in data.equipment"
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
  equipment: [
    {
      judul: "Electric Pallet Truck",
      desc: "Electric Pallet Truck adalah kendaraan listrik yang didesain untuk memindahkan palet dengan efisiensi tinggi, mengurangi kerja manual, serta meningkatkan produktivitas operasional gudang.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-pallet-truck/electric-pallet-truck_1.webp",
      to: "/produk/equipment/electric-pallet-truck",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-pallet-truck/electric-pallet-truck_2.webp",
    },

    {
      judul: "Electric Stacker",
      desc: "Electric Stacker merupakan truk angkat listrik yang kompak, didesain untuk mengangkat palet secara mudah, serta meningkatkan efisiensi penyimpanan dan pengambilan barang gudang.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-stracker/electric-stacker_1.webp",
      to: "/produk/equipment/electric-stacker",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-stracker/electric-stacker_2.webp",
    },

    {
      judul: "Electric Tow Tractor",
      desc: "Electric Tow Tractor adalah kendaraan serbaguna yang menarik beban berat serta mengambil barang dari rak tinggi, mendukung efisiensi gudang.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-tow-tracktor/electric-tow-tractor_1.webp",
      to: "/produk/equipment/electric-tow-tractor-order-picker",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-tow-tracktor/electric-tow-tractor_2.webp",
    },

    {
      judul: "Three Wheel Electric Forklift",
      desc: "Three-Wheel Electric Forklift adalah forklift listrik tiga roda yang ringkas dan mudah bermanuver, ideal untuk operasi ruang sempit dengan kinerja yang efisien.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/three-wheel-electric-forklift/three-wheel-electric-forklift_1.webp",
      to: "/produk/equipment/three-wheel-electric-forklift",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/three-wheel-electric-forklift/three-wheel-electric-forklift_2.webp",
    },

    {
      judul: "Four-Wheel Electric Forklift",
      desc: "Four-Wheel Electric Forklift adalah forklift listrik empat roda yang stabil dan bertenaga, dirancang untuk pengangkatan berat di luar ruangan dengan kapasitas tinggi.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/four-wheel-electric-forklift/four-wheel-electric-forklift_1.webp",
      to: "/produk/equipment/four-wheel-electric-forklift",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/four-wheel-electric-forklift/four-wheel-electric-forklift_2.webp",
    },

    {
      judul: "Forklift Diesel",
      desc: "Forklift Diesel adalah forklift diesel yang dirancang untuk mengangkat beban berat di luar ruangan dengan daya tahan dan kinerja yang sangat handal.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/forklift-diesel/forklift-diesel_1.webp",
      to: "/produk/equipment/diesel-forklift",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/forklift-diesel/forklift-diesel_2.webp",
    },

    {
      judul: "Forklift LPG / Gasoline",
      desc: "Forklift LPG / Gasoline adalah forklift bensin/LPG yang dirancang untuk penggunaan dalam dan luar ruangan, dengan kemampuan angkat yang kuat serta kinerja yang konsisten.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/gasoline-lpg-forklift/gasoline-lpg-forklift_1.webp",
      to: "/produk/equipment/gasoline-lpg-forklift",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/gasoline-lpg-forklift/gasoline-lpg-forklift_2.webp",
    },
  ],
});

useSeoMeta({
  title: "Equipment Gudang Berkualitas - PT. Tangguh Adi Perkasa",
  ogTitle: "Jual Equipment Gudang Berkualitas",
  description:
    "Temukan berbagai equipment gudang berkualitas dari PT. Tangguh Adi Perkasa. Solusi penyimpanan terbaik untuk kebutuhan industri Anda dengan material berkualitas tinggi dan harga terbaik.",
  ogDescription:
    "Jual berbagai equipment gudang berkualitas untuk kebutuhan industri. Pilihan terbaik dengan material berkualitas tinggi dan harga kompetitif.",
  keywords:
    "equipment gudang, jual equipment gudang, harga equipment gudang, alat penyimpanan gudang, perlengkapan gudang, warehouse equipment, rak industri, sistem penyimpanan, material handling, solusi gudang",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/produk/equipment/equipment-gudang-TAP.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl: "https://www.perkasaracking.co.id/produk/equipment",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  canonical: "https://www.perkasaracking.co.id/produk/equipment",
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
