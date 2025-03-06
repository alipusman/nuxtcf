<template>
  <top-detail :operandata="banner" />

  <v-container class="mt-5">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6" class="px-4">
        <v-img
          src="https://cdn.aresa-digital.com/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_1.webp"
          lazy-src="https://cdn.aresa-digital.com/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_2.webp"
          alt="TAP-Project-PT SGS - Cikarang"
          class="rounded-lg"
          height="550px"
          width="100%"
          cover
        />
      </v-col>

      <v-col cols="12" md="6" class="px-4">
        <h1 class="barlow mt-2">PT SGS Cikarang</h1>

        <v-divider
          width="90"
          thickness="3"
          color="#FF3A3A"
          class="my-2 opacity-100"
        />

        <p class="mb-1 text-body-1 barlow2">
          Kami dengan sukses telah menyelesaikan proyek pemasangan sistem Dies
          Racking di PT. SGS, Cikarang. Rack ini dirancang dengan kapasitas
          5.000 kg/pallet dan terdiri dari 5 level, memberikan daya tampung
          hingga 25.000 kg per rack. Dengan desain yang kokoh dan efisien,
          solusi penyimpanan ini membantu meningkatkan efektivitas dan keamanan
          dalam penyimpanan komponen industri.
        </p>

        <v-row class="mt-3">
          <v-col cols="12" sm="6">
            <p class="text-body-2 barlow2">Jenis Rak :</p>
            <h4 class="barlow">Dies Racking</h4>
            <br />

            <p class="text-body-2 barlow2">Level Rak :</p>
            <h4 class="barlow">5 level</h4>
          </v-col>

          <v-col cols="12" sm="6">
            <p class="text-body-2 barlow2">Kapasitas Pallet:</p>
            <h4 class="barlow">5.000 kg/pallet</h4>
            <br />

            <p class="text-body-2 barlow2">Kapasitas Rak:</p>
            <h4 class="barlow">25.000 kg/rack</h4>
          </v-col>

          <v-col cols="12" sm="12">
            <p class="text-body-2 barlow2">Keunggulan:</p>
            <h4 class="barlow">
              Sistem rak ini dirancang untuk memudahkan pengambilan dan
              penempatan barang, sehingga meningkatkan efisiensi operasional dan
              produktivitas di gudang.
            </h4>
          </v-col>
        </v-row>

        <v-divider class="mt-10" />

        <tombol
          class="mt-5"
          to="/contact"
          :operandata="{ teks: 'Hubungi Kami Sekarang' }"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const banner = {
  judul: "DETAIL PROJECT",
};

useSeoMeta({
  title:
    "Rak gudang heavy duty PT SGS, Cikarang | Solusi Racking & Logistik Terpercaya",
  ogTitle:
    "Projek PT SGS, Cikarang - Inovasi dalam Sistem Penyimpanan dan Racking",
  description:
    "Temukan bagaimana PT SGS di Cikarang menerapkan sistem racking canggih untuk meningkatkan efisiensi logistik dan penyimpanan barang secara maksimal.",
  ogDescription:
    "Projek PT SGS di Cikarang mengadopsi solusi racking modern yang memaksimalkan ruang penyimpanan dan meningkatkan efisiensi distribusi barang.",
  keywords:
    "projek PT SGS, Cikarang, solusi racking, sistem penyimpanan, pallet rack, logistik, distribusi barang",
  ogImage:
    "https://cdn.aresa-digital.com/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_og.webp",
  twitterCard: "summary_large_image",
  ogUrl: "https://www.perkasaracking.co.id/project/pt-sgs-cikarang",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/project/pt-sgs-cikarang",
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
