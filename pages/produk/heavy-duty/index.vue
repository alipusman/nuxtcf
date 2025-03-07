<template>
  <loading-tap />
  <top-detail :operandata="banner" />

  <v-container class="mt-5">
    <v-row>
      <v-col cols="12" md="9" class="px-4">
        <breadcrumbs />

        <h1 class="barlow text-h2">Rak Gudang Heavy Duty</h1>

        <v-divider
          :width="$vuetify.display.smAndUp ? '400' : '300'"
          thickness="6"
          color="#FF3A3A"
          class="opacity-100 mt-2 mb-4"
        />

        <p class="barlow2 text-body-1 text-justify">
          Rak Heavy Duty adalah sistem penyimpanan premium yang dirancang khusus
          untuk menahan beban berat hingga 3000kg/level. Dibuat dengan material
          baja berkualitas tinggi, rak ini menjadi solusi ideal untuk
          penyimpanan barang berat di gudang Anda. Tersedia dalam berbagai tipe
          seperti Selective Pallet Rack, Drive-In System, dan Double Deep Rack
          untuk memenuhi kebutuhan industri dan warehouse modern.
        </p>
        <br />

        <v-img
          src="https://cdn.aresa-digital.com/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_1.webp"
          lazy-src="https://cdn.aresa-digital.com/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_2.webp"
          alt="Rak Heavy Duty - Sistem Penyimpanan Industri Beban Berat"
          width="100%"
          height="500px"
          cover
          eager
        />

        <v-row class="mt-5">
          <v-col cols="12" sm="6">
            <h2 class="barlow2 mb-3">Keuntungan Rak Gudang Heavy Duty:</h2>

            <ul class="ml-6">
              <li
                v-for="(benefit, index) in benefits"
                :key="index"
                class="mt-3 barlow2"
              >
                <span class="barlow">{{ benefit.title }}:</span>
                {{ benefit.description }}
              </li>
            </ul>
          </v-col>

          <v-col cols="12" sm="6">
            <h2 class="barlow2 mb-3">Tantangan Rak Gudang Heavy Duty:</h2>

            <ul class="ml-6 barlow2">
              <li
                v-for="(challenge, index) in challenges"
                :key="index"
                class="my-3"
              >
                <span class="barlow">{{ challenge.title }}:</span>
                {{ challenge.description }}
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <v-col cols="12" sm="7">
            <h2 class="barlow mb-3">Aplikasi di Industri:</h2>
            <v-divider
              width="200"
              thickness="3"
              color="#FF3A3A"
              class="opacity-100 mb-3"
            />

            <ul class="ml-6 barlow2">
              <li
                v-for="(application, index) in applications"
                :key="index"
                class="my-3"
              >
                <span class="barlow">{{ application.industry }}:</span>
                {{ application.description }}
              </li>
            </ul>
          </v-col>
        </v-row>

        <v-row class="mt-9">
          <v-col>
            <h1 class="barlow text-center mb-5">
              Berikut adalah beberapa jenis sistem Rak Heavy Duty:
            </h1>

            <our-product-heavy-duty />
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <v-col>
            <h1 class="barlow mb-3">Kesimpulan</h1>
            <v-divider
              width="100"
              thickness="3"
              color="#FF3A3A"
              class="opacity-100 mb-3"
            />

            <p class="barlow2 text-h6 text-justify">
              <span class="barlow">Rak gudang heavy duty</span>
              adalah solusi ideal untuk industri yang membutuhkan penyimpanan
              barang-barang berat dan besar. Meskipun memerlukan investasi awal
              yang signifikan, keuntungan dalam hal kapasitas, daya tahan, dan
              efisiensi ruang membuatnya menjadi pilihan yang layak untuk banyak
              aplikasi industri. Namun, penting untuk mempertimbangkan kebutuhan
              spesifik dan biaya perawatan sebelum memutuskan untuk mengadopsi
              sistem ini.
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <chat-ai />
        </v-row>
      </v-col>

      <v-col cols="12" md="3" class="px-4">
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
});

const benefits = ref([
  {
    title: "Kapasitas Beban Tinggi",
    description:
      "Rak ini mampu menahan beban yang sangat berat, sehingga cocok untuk menyimpan barang-barang besar dan berat seperti mesin, bahan baku industri, atau produk jadi.",
  },
  {
    title: "Daya Tahan Tinggi",
    description:
      "Dibuat dari bahan berkualitas tinggi seperti baja, rak heavy duty memiliki umur pakai yang panjang dan tahan terhadap kondisi lingkungan yang keras.",
  },
  {
    title: "Efisiensi Ruang",
    description:
      "Rak ini dirancang untuk memaksimalkan penggunaan ruang vertikal, sehingga meningkatkan kapasitas penyimpanan tanpa memerlukan perluasan area gudang.",
  },
  {
    title: "Fleksibilitas",
    description:
      "Rak heavy duty dapat disesuaikan dengan berbagai kebutuhan penyimpanan, termasuk rak palet, rak cantilever, atau rak sistem drive-in.",
  },
  {
    title: "Keamanan",
    description:
      "Desain yang kokoh dan stabil mengurangi risiko keruntuhan atau kerusakan, sehingga meningkatkan keselamatan di gudang.",
  },
]);

const challenges = ref([
  {
    title: "Biaya Awal Tinggi",
    description:
      "Investasi awal untuk rak heavy duty lebih mahal dibandingkan dengan rak konvensional karena bahan dan konstruksinya yang lebih kuat.",
  },
  {
    title: "Instalasi Kompleks",
    description:
      "Pemasangan rak heavy duty memerlukan tenaga ahli dan peralatan khusus, yang dapat menambah biaya dan waktu instalasi.",
  },
  {
    title: "Perawatan Berkala",
    description:
      "Meskipun tahan lama, rak ini tetap memerlukan perawatan rutin untuk memastikan keamanan dan kinerjanya.",
  },
  {
    title: "Tidak Fleksibel untuk Beban Ringan",
    description:
      "Rak heavy duty mungkin kurang efisien jika digunakan untuk menyimpan barang-barang ringan, karena desainnya yang lebih cocok untuk beban berat.",
  },
]);

const applications = ref([
  {
    industry: "Industri Manufaktur",
    description:
      "Rak heavy duty digunakan untuk menyimpan mesin berat, komponen besar, atau bahan baku seperti logam dan kayu.",
  },
  {
    industry: "Logistik dan Distribusi",
    description:
      "Rak ini cocok untuk gudang yang menyimpan palet berisi barang-barang berat seperti elektronik, bahan kimia, atau produk konsumen.",
  },
  {
    industry: "Pertambangan dan Konstruksi",
    description:
      "Digunakan untuk menyimpan peralatan berat, pipa, atau material konstruksi.",
  },
  {
    industry: "Otomotif",
    description:
      "Rak heavy duty sering digunakan untuk menyimpan suku cadang kendaraan, mesin, atau ban.",
  },
  {
    industry: "Industri Makanan dan Minuman",
    description:
      "Meskipun barangnya tidak selalu berat, rak heavy duty digunakan untuk menyimpan palet berisi produk dalam jumlah besar.",
  },
]);

useSeoMeta({
  title: "Rak Gudang Heavy Duty",
  ogTitle: "Rak Gudang Heavy Duty",
  description:
    "Rak gudang heavy duty adalah sistem penyimpanan kuat untuk menampung barang besar atau berat di warehouse pabrik, ideal untuk kebutuhan industri dan logistik.",
  ogDescription:
    "Rak gudang heavy duty adalah sistem penyimpanan kuat untuk menampung barang besar atau berat di warehouse pabrik, ideal untuk kebutuhan industri dan logistik.",
  keywords:
    "rak heavy duty, jual rak heavy duty, harga rak heavy duty, rak gudang heavy duty, rak pallet heavy duty, rak industri berat, sistem rak warehouse, rak beban berat, rak selective pallet, rak drive in, double deep rack, rak gudang industri, rak penyimpanan berat",
  ogImage:
    "https://cdn.aresa-digital.com/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_og.webp",
  twitterCard: "summary_large_image",
  ogType: "product",
  ogUrl: "https://www.perkasaracking.co.id/produk/heavy-duty",
  robots: "index, follow, max-image-preview:large, max-snippet:-1",
  canonical: "https://www.perkasaracking.co.id/produk/heavy-duty",
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
