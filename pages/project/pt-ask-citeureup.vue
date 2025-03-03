<template>
  <top-detail :operandata="banner" />

  <v-container class="mt-5">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6" class="px-4">
        <v-img
          src="https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-aski-citeureup/PT-ASKI-Citeureup-project-TAP_1.webp"
          lazy-src="https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-aski-citeureup/PT-ASKI-Citeureup-project-TAP_2.webp"
          alt="TAP-Project-PT.ASKI - Citeureup"
          class="rounded-lg"
          height="55%"
          width="100%"
          cover
        />
      </v-col>

      <v-col cols="12" md="6" class="px-4">
        <h1 class="barlow mt-2">PT ASKI – Citeureup</h1>

        <v-divider
          width="90"
          thickness="3"
          color="#FF3A3A"
          class="my-2 opacity-100"
        />

        <p class="mb-1 text-body-1 barlow2">
          Kami dengan bangga telah menyelesaikan proyek penyediaan sistem rack
          dies di PT. ASKY, Citeureup. Rack yang kami pasang memiliki kapasitas
          pallet 3.000 kg/pallet dengan 3 level rack, mampu mendukung total
          kapasitas hingga 12.000 kg per rack. Proyek ini merupakan bagian dari
          komitmen kami untuk menyediakan solusi penyimpanan yang efisien dan
          aman sesuai dengan kebutuhan industri.
        </p>

        <v-row class="mt-3">
          <v-col cols="12" sm="6">
            <p class="text-body-2 barlow2">Jenis Rak :</p>
            <h4 class="barlow">Dies Racking</h4>
            <br />

            <p class="text-body-2 barlow2">Level Rak :</p>
            <h4 class="barlow">3 level</h4>
          </v-col>

          <v-col cols="12" sm="6">
            <p class="text-body-2 barlow2">Kapasitas Pallet:</p>
            <h4 class="barlow">3.000 kg/pallet</h4>
            <br />

            <p class="text-body-2 barlow2">Kapasitas Rak:</p>
            <h4 class="barlow">12.000 kg/rack</h4>
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
  alttext: "Banner Project PT ASKI - Citeureup",
};

useSeoMeta({
  title:
    "Rak gudang heavy duty PT ASKI – Citeureup - Solusi Racking & Logistik Terkini",
  ogTitle: "Projek PT ASKI – Citeureup - Inovasi Sistem Penyimpanan & Racking",
  description:
    "Pelajari lebih lanjut projek PT ASKI di Citeureup yang menerapkan solusi racking modern canggih untuk meningkatkan efisiensi penyimpanan dan distribusi.",
  ogDescription:
    "Pelajari lebih lanjut projek PT ASKI di Citeureup yang menerapkan solusi racking modern canggih untuk meningkatkan efisiensi penyimpanan dan distribusi.",
  keywords:
    "projek PT ASKI, Citeureup, sistem racking, solusi logistik, penyimpanan gudang, pallet rack, distribusi barang",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-aski-citeureup/PT-ASKI-Citeureup-project-TAP_og.webp",
  twitterCard: "summary_large_image",
  ogUrl: "https://www.perkasaracking.co.id/project/pt-ask-citeureup",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/project/pt-ask-citeureup",
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
