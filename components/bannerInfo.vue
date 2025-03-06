<template>
  <v-card variant="outlined" class="border my-16">
    <v-row>
      <v-col cols="12" sm="6">
        <v-img
          src="https://cdn.aresa-digital.com/images/manajemen-rak-TAP_1.webp"
          alt="Banner Info TAP Rack"
          lazy-src="https://cdn.aresa-digital.com/images/manajemen-rak-TAP_2.webp"
          height="500"
          cover
        >
          <div
            style="
              background: linear-gradient(
                to left,
                rgba(250, 250, 250, 9),
                rgba(250, 250, 250, 0)
              );
              height: 100%;
            "
          />
        </v-img>
      </v-col>

      <v-col cols="12" sm="6" class="d-flex align-center">
        <v-container class="pa-5">
          <h1 class="barlow-italic">
            Manajemen Penyimpanan Lebih Efektif dengan Rak Gudang
          </h1>

          <p
            :class="
              $vuetify.display.mdAndUp
                ? 'my-5 barlow2 text-body-1 text-justify'
                : 'my-5 barlow2 text-body-2 text-justify'
            "
          >
            Selamat datang di Perkasa Racking | PT. Tangguh Adi Perkasa (TAP),
            mitra terpercaya Anda dalam solusi penyimpanan industri. Dengan
            pengalaman lebih dari 16 tahun sejak 2007, kami berkomitmen
            menyediakan rak gudang berkualitas tinggi yang dirancang untuk
            mengoptimalkan efisiensi dan kapasitas penyimpanan. Kami memahami
            pentingnya tata kelola ruang yang efektif dalam menunjang
            produktivitas bisnis Anda. Oleh karena itu, produk kami dirancang
            untuk memberikan solusi penyimpanan yang kokoh, fleksibel, dan
            efisien guna mendukung berbagai kebutuhan industri.
          </p>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.barlow-italic {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 800;
  font-style: italic;
}

.barlow2 {
  font-family: "Barlow Semi Condensed", serif;
  font-style: normal;
}
</style>
