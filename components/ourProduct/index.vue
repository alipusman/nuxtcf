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
        sm="3"
      >
        <v-card rounded="lg" class="border card-hover">
          <v-img
            :lazy-src="image.lazysrc"
            cover
            :src="image.src"
            height="300"
            width="100%"
            :alt="image.alttext"
          />

          <v-card-text class="ma-5">
            <h1 class="barlow">
              {{ image.judul }}
            </h1>

            <p class="text-body-1 mt-2 barlow2" style="color: #656565">
              {{ image.desc }}
            </p>
            <br />

            <tombol
              aria-label="Rak Gudang"
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
      src: "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_1.webp",
      judul: "HEAVY DUTY",
      to: "/produk/heavy-duty",
      alttext: "Rak Heavy Duty",
      desc: "Rak kokoh dengan daya tahan tinggi, ideal untuk menyimpan beban berat di lingkungan industri.",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_2.webp",
    },

    {
      src: "https://cdn.perkasaracking.co.id/images/produk/medium-duty/Rak-Gudang-Medium-Duty_TAP_1.webp",
      judul: "MEDIUM DUTY",
      to: "/produk/medium-duty",
      alttext: "Rak Medium Duty",
      desc: "Rak fleksibel dengan keseimbangan daya tahan dan kapasitas penyimpanan yang optimal.",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/medium-duty/Rak-Gudang-Medium-Duty_TAP_2.webp",
    },

    {
      src: "https://cdn.perkasaracking.co.id/images/produk/light-duty/Rak-Gudang-Light-Duty_TAP_1.webp",
      judul: "LIGHT DUTY",
      to: "/produk/light-duty",
      alttext: "Rak Light Duty",
      desc: "Rak ringan yang praktis dan efisien, cocok untuk penyimpanan barang kecil dan menengah.",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/light-duty/Rak-Gudang-Light-Duty_TAP_2.webp",
    },

    {
      src: "https://cdn.perkasaracking.co.id/images/produk/mezzanine/rak-gudang-mezzanine_TAP_1.webp",
      judul: "MEZZANINE",
      to: "/produk/mezzanine",
      alttext: "Rak Mezzanine",
      desc: "Rak Gudang Mezzanine adalah struktur tambahan dalam gudang yang menambah lantai di atas area utama.",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/mezzanine/rak-gudang-mezzanine_TAP_2.webp",
    },
  ],
});
</script>

<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 700;
}

.barlow2 {
  font-family: "Barlow Semi Condensed", sans-serif;
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

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
</style>
