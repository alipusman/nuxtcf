<template>
  <!-- :height= "$vuetify.display.smAndUp ? '850' : '600'" -->
  <v-carousel
    height="750"
    width="100%"

    hide-delimiters
    :show-arrows="false"
    aria-hidden="true"
  >
    <!-- Slide 1 -->
    <v-carousel-item>
      <div class="carousel-wrapper">
        <v-img
          src="https://cdn.perkasaracking.co.id/images/banner.webp"
          alt="Jual Rak Gudang Heavy Duty"
          class="cover-image"
          lazy-src="https://cdn.perkasaracking.co.id/images/banner-small.webp"
          cover
        />

        <v-container class="text-container">
            <v-card
              elevation="0"
              class="text-white"
              style="background-color: transparent"
            >
              <v-card-text class="text-left">
                <h1
                  class="barlow3 custom-text"
                  :style="{
                    marginTop: $vuetify.display.smAndUp ? '19%' : '',
                  }"
                >
                  SOLUSI CERDAS
                </h1>
                <h1
                  class="barlow3 custom-text"
                  :style="{
                    marginTop: $vuetify.display.smAndUp ? '-3%' : '-3%',
                  }"
                >
                  UNTUK PERGUDANGAN
                </h1>
                <h1
                  class="barlow3 custom-text"
                  :style="{
                    marginTop: $vuetify.display.smAndUp ? '-3%' : '-3%',
                  }"
                >
                  LEBIH EFISIEN!
                </h1>
                <p
                  class="barlow2"
                  :style="{
                    fontSize: $vuetify.display.smAndUp ? '20px' : '15px',
                  }"
                >
                  KAMI MENGHADIRKAN SOLUSI <br />
                  PENYIMPANAN TERBAIK DENGAN PRODUK <br />
                  BERKUALITAS TINGGI DAN LAYANAN <br />
                  PROFESIONAL UNTUK MENDUKUNG <br />
                  KELANCARAN BISNIS ANDA.
                </p>
                <v-btn
                  to="/produk"
                  aria-label="Lihat produk kami"
                  class="mt-6 md:mt-8"
                  color="#ff3a3a"
                  density="comfortable"
                >
                  <p class="font-weight-bold text-white barlow">PRODUK</p>
                </v-btn>
                <v-btn
                  to="/aboutus"
                  class="mt-6 md:mt-8 ml-3"
                  color="white"
                  variant="outlined"
                  aria-label="TENTANG KAMI"
                  density="comfortable"
                >
                  <p class="font-weight-bold text-white barlow">TENTANG KAMI</p>
                </v-btn>
              </v-card-text>
            </v-card>
        </v-container>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 10);
});

useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "https://cdn.perkasaracking.co.id/images/banner.webp"
    }
  ]
});
</script>

<style scoped>
/* Untuk mengatur margin atas carousel */
.custom-margin {
  margin-top: -5%;
}

.custom-text {
  font-size: 30px; /* Default untuk mobile */
}

@media (min-width: 960px) {
  /* Tambahkan aturan untuk layar besar */
  .custom-text {
    font-size: 65px; /* Perbesar font pada layar lebih besar */
  }
}

@media (max-width: 960px) {
  .custom-margin {
    margin-top: -22%;
  }
}

/* Wrapper agar gambar dan teks tetap full */
.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Gambar full screen tanpa distorsi */
.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Pastikan gambar penuh tanpa terpotong aneh */
}

/* Posisi teks di tengah gambar */
.text-container {
  position: absolute;
  top: 45%;
  left: 48%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}

.barlow {
  font-family: "Barlow Semi Condensed";
  font-weight: 700;
  font-style: normal;
}

.barlow2 {
  font-family: "Barlow Semi Condensed";
  font-weight: 600;
  font-style: normal;
}

.barlow3 {
  font-family: "Barlow Semi Condensed";
  font-weight: 800;
  font-style: normal;
}
</style>
