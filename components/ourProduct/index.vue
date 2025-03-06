<template>
  <v-container class="my-7">
    <v-row class="text-center justify-center align-center">
      <v-col cols="8">
        <h1
          class="barlow text-red animated-text"
          :style="{ fontSize: $vuetify.display.smAndUp ? '40px' : '35px' }"
        >
          RAK GUDANG BERKUALITAS
        </h1>

        <h2
          class="barlow animated-text"
          style="font-size: 33px"
          :style="{ fontSize: $vuetify.display.smAndUp ? '30px' : '16px' }"
        >
          untuk Solusi Penyimpanan Optimal.
        </h2>

        <v-divider
          class="mx-auto opacity-100 my-3"
          thickness="3"
          color="#FF3A3A"
          :style="{
            width: $vuetify.display.smAndUp ? '60%' : '30%',
          }"
        />

        <h3
          :style="{ fontSize: $vuetify.display.smAndUp ? '17px' : '15px' }"
          class="barlow2 text-grey-darken-1"
        >
          Kami adalah perusahaan berpengalaman dalam fabrikasi sistem racking
          pallet dan penyimpanan pergudangan, berkomitmen menyediakan
          <span class="barlow text-decoration-underline"> Rak Gudang </span>
          dengan
          <span class="barlow text-decoration-underline">Kualitas terbaik</span>
          untuk kebutuhan storage industri Anda.
        </h3>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col
        v-for="(image, index) in data.images"
        :key="index"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card class="card-hover" rounded="lg">
          <v-img
            :src="image.src"
            :lazy-src="image.lazysrc"
            :alt="image.alttext"
            height="300"
            class="card-image"
            cover
          />
          <v-card-text class="card-content">
            <h3 class="card-title">{{ image.judul }}</h3>
            <p class="card-desc">{{ image.desc }}</p>
            <tombol
              aria-label="Lihat Selengkapnya"
              :operandata="{
                teks: 'Lihat Selengkapnya',
                variant: 'flat',
                to: image.to,
              }"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({
  images: [
    {
      src: "/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_1.webp",
      judul: "HEAVY DUTY",
      to: "/produk/heavy-duty",
      alttext: "Rak Heavy Duty untuk beban berat",
      desc: "Rak kokoh dengan daya tahan tinggi, ideal untuk menyimpan beban berat di lingkungan industri.",
      lazysrc:
        "/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_2.webp",
    },
    {
      src: "/images/produk/medium-duty/Rak-Gudang-Medium-Duty_TAP_1.webp",
      judul: "MEDIUM DUTY",
      to: "/produk/medium-duty",
      alttext: "Rak Medium Duty untuk beban sedang",
      desc: "Rak fleksibel dengan keseimbangan daya tahan dan kapasitas penyimpanan yang optimal.",
      lazysrc:
        "/images/produk/medium-duty/Rak-Gudang-Medium-Duty_TAP_2.webp",
    },
    {
      src: "/images/produk/light-duty/Rak-Gudang-Light-Duty_TAP_1.webp",
      judul: "LIGHT DUTY",
      to: "/produk/light-duty",
      alttext: "Rak Light Duty untuk beban ringan",
      desc: "Rak ringan yang praktis dan efisien, cocok untuk penyimpanan barang kecil dan menengah.",
      lazysrc:
        "/images/produk/light-duty/Rak-Gudang-Light-Duty_TAP_2.webp",
    },
    {
      src: "/images/produk/mezzanine/rak-gudang-mezzanine_TAP_1.webp",
      judul: "MEZZANINE",
      to: "/produk/mezzanine",
      alttext: "Rak Mezzanine sebagai tambahan lantai",
      desc: "Rak Gudang Mezzanine adalah struktur tambahan dalam gudang yang menambah lantai di atas area utama.",
      lazysrc:
        "/images/produk/mezzanine/rak-gudang-mezzanine_TAP_2.webp",
    },
  ],
});
</script>

<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed";
  font-style: normal;
}

/* Typography */
.title {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.description {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 1rem;
  color: #656565;
  line-height: 1.5;
}

/* Underline */
.underline {
  text-decoration: underline;
}

/* Divider */
.my-divider {
  width: 60%;
  margin: 1rem auto;
  border-top: 3px solid #ff3a3a;
}

/* Card styles */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
}

.card-content {
  padding: 1rem;
}

.card-title {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-desc {
  font-family: "Barlow Semi Condensed", sans-serif;
  color: #656565;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

/* Animated Text */
.animated-text {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.5s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsif */
@media (max-width: 600px) {
  .title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1.25rem;
  }
  .my-divider {
    width: 30%;
  }
}
</style>
