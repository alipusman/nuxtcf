<template>
  <top-detail :operandata="banner" />

  <v-container class="mt-5">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6" class="px-4">
        <v-img
          src="/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-Project-TAP.webp"
          lazy-src="/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-project-TAP_2.webp"
          alt="TAP-Project-PT.HWASEUNG JEPARA"
          class="rounded-lg"
          height="100%"
          width="100%"
          cover
        />
      </v-col>

      <v-col cols="12" md="6" class="px-4">
        <h1 class="barlow mt-2">PT.HWASEUNG, JEPARA</h1>

        <v-divider
          width="90"
          thickness="3"
          color="#FF3A3A"
          class="my-2 opacity-100"
        />

        <p class="mb-1 text-body-1 barlow2">
          Kami telah sukses mengerjakan proyek Selective Pallet Racking untuk
          PT.HWASEUNG, JEPARA. Sistem rak ini dirancang untuk mengoptimalkan
          kapasitas penyimpanan dan efisiensi logistik perusahaan, memastikan
          penanganan material yang aman dan terorganisir.
        </p>

        <v-row class="mt-3">
          <v-col cols="12" sm="6">
            <p class="text-body-2 barlow2">Jenis Rak :</p>
            <h4 class="barlow">Selective Pallet Racking</h4>
          </v-col>

          <v-col cols="12" sm="6">
            <p class="text-body-2 barlow2">Kapasitas Beban:</p>
            <h4 class="barlow">1.000 kg/pallet</h4>
          </v-col>

          <v-col cols="12" sm="12">
            <p class="text-body-2 barlow2">Keunggulan:</p>
            <h4 class="barlow">
              Aksesibilitas tinggi, fleksibel dalam penyimpanan berbagai jenis
              barang, serta kompatibel dengan forklift standar industri.
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
  title: "Rak gudang heavy duty Jepara Projek PT. HWASEUNG",
  ogTitle: "Projek PT. HWASEUNG, JEPARA - Implementasi Sistem Racking Modern",
  description:
    "Lihat bagaimana PT. HWASEUNG di Jepara mengoptimalkan sistem penyimpanan dengan solusi racking terbaru yang efisien dan tahan lama.",
  ogDescription:
    "PT. HWASEUNG di Jepara menerapkan solusi racking modern untuk meningkatkan efisiensi logistik dan penyimpanan di fasilitas mereka.",
  keywords:
    "projek PT HWASEUNG, racking Jepara, sistem penyimpanan, solusi logistik, gudang modern, pallet rack",
  ogImage:
    "/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-Project-TAP-og.webp",
  twitterCard: "summary_large_image",
  ogType: "website",
  ogUrl: "https://www.aresa-digital.com/project/pt-hwaseung-jepara",
  robots: "index, follow",
  canonical: "https://www.aresa-digital.com/project/pt-hwaseung-jepara",
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
