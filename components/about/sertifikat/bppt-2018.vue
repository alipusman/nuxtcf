<template>
  <v-container>
    <v-dialog v-model="data.dialogfoto" max-width="40%">
      <div class="text-end">
        <v-btn size="30" color="red" @click="data.dialogfoto = false">
          <v-icon>mdi-close-thick</v-icon>
        </v-btn>
      </div>

      <div style="position: relative">
        <v-btn @click="prevSlide" class="nav-button left">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-carousel
          :key="data.currentIndex"
          v-model="data.currentIndex"
          hide-delimiters
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(img, index) in data.images"
            :key="index"
            :src="img"
            contain
          />
        </v-carousel>

        <v-btn @click="nextSlide" class="nav-button right">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-dialog>

    <v-row justify="center">
      <v-col cols="12" md="9">
        <v-row align="center">
          <v-col cols="12" sm="6" md="6" class="px-7">
            <v-card class="custom-card" flat>
              <v-card-text class="card-border">
                <v-img
                  :src="data.images[0]"
                  alt="Sertifikat BPPT/2018"
                  lazy-src="https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-1_10x10.webp"
                  class="rounded-lg image"
                  height="350"
                >
                  <div class="overlay">
                    <v-btn
                      @click="data.dialogfoto = true"
                      color="#ff3a3a"
                      class="text-overlay"
                      rounded="0"
                      icon="mdi-arrow-expand-all"
                    />
                  </div>
                </v-img>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="6" class="px-7">
            <h2 class="barlow">Setifikat BPPT/2018</h2>
            <h3 class="barlow">(Badan Pengkajian dan Penerapan Teknologi)</h3>

            <v-divider
              width="50"
              thickness="3"
              color="#FF3A3A"
              class="my-3 opacity-100"
            />

            <p class="barlow2 text-body-1 text-justify">
              Sebagai wujud komitmen terhadap standar kualitas dan inovasi, TAP
              Tangguh Adi Perkasa berhasil meraih Sertifikasi BPPT tahun 2018
              dalam industri rak gudang. Pengakuan ini memperkuat dedikasi kami
              dalam menyediakan solusi yang andal, efisien, dan berbasis
              teknologi terkini.
            </p>
          </v-col>
        </v-row>

        <v-divider class="my-10" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
  dialogfoto: false,
  currentIndex: 0,
  images: [
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-1.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-2.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-3.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-4.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-5.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-6.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-7.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-8.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-9.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-10.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-11.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-12.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-13.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-14.webp",
    "https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/bppt-2018/Report-Racking-Testing-BPPT-2018_page-15.webp",
  ],
});

const prevSlide = () => {
  data.currentIndex =
    data.currentIndex === 0 ? data.images.length - 1 : data.currentIndex - 1;
};

const nextSlide = () => {
  data.currentIndex = (data.currentIndex + 1) % data.images.length;
};
</script>

<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 700;
}

.barlow2 {
  font-family: "Barlow Semi Condensed", serif;
}

.custom-card {
  background-color: #f7f7f7;
  position: relative;
  overflow: hidden;
}

.card-border {
  padding: 10px;
  border: 3px solid rgba(255, 58, 58, 0.8);
  transition: all 0.3s ease;
}

.custom-card:hover .card-border {
  border-color: rgba(255, 58, 58, 1);
  transform: scale(1.02);
}

.styled-image {
  transition: transform 0.3s ease;
}

.custom-card:hover .styled-image {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.custom-card:hover .overlay {
  opacity: 1;
}

.text-overlay {
  color: white;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: white;
  font-size: 24px;
  z-index: 100;
  cursor: pointer;
}

.nav-button.left {
  left: 10px;
}

.nav-button.right {
  right: 10px;
}

.nav-button:hover {
  background: rgba(255, 58, 58, 0.8);
}

.carousel-caption {
  position: absolute;
  top: -50px;
  width: 100%;
  text-align: center;
  z-index: 150;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}
</style>
