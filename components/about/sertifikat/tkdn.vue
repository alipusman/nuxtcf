<template>
  <v-container>
    <v-dialog v-model="data.dialogfoto" max-width="40%">
      <div class="text-end">
        <v-btn size="30" color="red" @click="data.dialogfoto = false">
          <v-icon>mdi-close-thick</v-icon>
        </v-btn>
      </div>

      <div class="carousel-wrapper" style="position: relative">
        <div class="carousel-caption">
          <h3>{{ titles[data.currentIndex] }}</h3>
        </div>

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

        <!-- Tombol Next -->
        <v-btn @click="nextSlide" class="nav-button right">
          <v-icon icon="mdi-chevron-right" />
        </v-btn>
      </div>
    </v-dialog>

    <v-row justify="center">
      <v-col cols="12" md="9">
        <v-row align="center">
          <v-col cols="12" sm="6" md="6" class="px-7 image-wrapper">
            <h2 class="barlow">Sertifikat TKDN</h2>
            <h3 class="barlow">
              (Medium Duty, Gravity Roller Racking, dan Heavy Duty)
            </h3>

            <v-divider
              width="50"
              thickness="3"
              color="#FF3A3A"
              class="my-3 opacity-100"
            />

            <p class="barlow2 text-body-1 text-justify">
              TAP Tangguh Adi Perkasa telah mendapatkan sertifikasi TKDN untuk
              tiga varian:
              <span class="font-weight-bold"
                >Medium Duty, Gravity Roller Racking, dan Heavy Duty</span
              >. Ini menunjukkan komitmen kami dalam menyediakan solusi rak
              gudang yang efisien dengan komponen lokal berkualitas.
            </p>
          </v-col>

          <v-col cols="12" sm="6" md="6" class="px-7 image-wrapper">
            <v-card class="custom-card" flat>
              <v-card-text class="card-border">
                <v-img
                  :src="data.images[0]"
                  alt="Sertifikat TKDN"
                  lazy-src="https://cdn.aresa-digital.com/images/produk/heavy-duty/sertifikat-tkdn-heavy-duty-racking-TAP_2.webp"
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
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <br />
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
  dialogfoto: false,
  currentIndex: 0,
  images: [
    "https://cdn.aresa-digital.com/images/produk/medium-duty/sertifikat-tkdn-medium-duty-racking-TAP_1.webp",
    "https://cdn.aresa-digital.com/images/produk/heavy-duty/gravity-roller-racking/sertifikat-tkdn-gravity-roller-racking-TAP_1.webp",
    "https://cdn.aresa-digital.com/images/produk/heavy-duty/sertifikat-tkdn-heavy-duty-racking-TAP_1.webp",
  ],
});

const titles = ["MEDIUM DUTY", "GRAVITY ROLLER RACKING", "HEAVY DUTY"];

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
