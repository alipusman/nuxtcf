<template>
  <div class="container py-16">
    <v-container>
      <v-row class="text-center mt-5 justify-center align-center">
        <v-col cols="8">
          <v-divider
            class="mx-auto opacity-100"
            thickness="4"
            color="#FF3A3A"
            :style="{
              width: $vuetify.display.smAndUp ? '10%' : '30%',
            }"
          />
          <br />

          <h1 class="barlow mb-5 animated-text">SPESIALIS RAK GUDANG</h1>

          <p
            :style="{ fontSize: $vuetify.display.smAndUp ? '24px' : '19px' }"
            class="barlow2 text-grey-darken-1"
          >
            Menyediakan sistem penyimpanan yang efisien dan berkualitas untuk
            mendukung kelancaran operasional dan produktivitas bisnis Anda.
          </p>
        </v-col>
      </v-row>

      <v-row class="mt-10">
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="hover-effect rounded-lg" flat>
            <v-img
              :lazy-src="item.lazy_img"
              :src="item.image"
              :alt="item.alttext"
              height="300"
              cover
            />

            <div class="corner-triangle" />

            <v-card-text>
              <v-row justify="center">
                <v-col cols="2">
                  <div class="info-banner">
                    <v-icon
                      size="40"
                      :icon="item.icon"
                      color="white"
                      class="mr-4"
                    />
                  </div>
                </v-col>

                <v-col cols="11" class="text-left ml-16 pa-10">
                  <h2 class="barlow">{{ item.title }}</h2>

                  <p class="barlow2 text-body-1 my-5">{{ item.description }}</p>

                  <tombol
                    aria-label="Service Kami"
                    :operandata="{
                      teks: 'Lihat Selengkapnya',
                      variant: 'flat',
                      to: item.to,
                    }"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const items = [
  {
    title: "KATALOG",
    description:
      "Temukan berbagai pilihan rak industri dengan spesifikasi lengkap dan sesuai kebutuhan Anda.",
    image:
      "/images/layanan-dukungan/katalog/katalog_1.webp",
    lazy_img:
      "/images/layanan-dukungan/katalog/katalog_2.webp",
    icon: "mdi-view-grid-outline",
    to: "/produk",
    alttext: "Heavy Duty TAP",
  },

  {
    title: "PENAWARAN",
    description:
      "Dapatkan estimasi harga cepat dan akurat untuk solusi penyimpanan industri yang efisien.",
    image:
      "/images/layanan-dukungan/penawaran/penawaran_1.webp",
    lazy_img:
      "/images/layanan-dukungan/penawaran/penawaran_2.webp",
    icon: "mdi-file-document-outline",
    to: "/contact",
    alttext: "Heavy Duty TAP",
  },

  {
    title: "RAK CUSTOM",
    description:
      "Pesan rak yang disesuaikan dengan kebutuhan spesifik industri untuk penyimpanan optimal.",
    image:
      "/images/layanan-dukungan/rak-custom/kustom_1.webp",
    lazy_img:
      "/images/layanan-dukungan/rak-custom/kustom_1.webp",
    icon: "mdi-pencil-ruler",
    to: "/contact",
    alttext: "Heavy Duty TAP",
  },
];
</script>

<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 700;
}

.barlow2 {
  font-family: "Barlow Semi Condensed", sans-serif;
}

.info-banner {
  position: absolute;
  background: #ff3a3a;
  left: 0;
  bottom: 37%;
  width: 25%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%);
}

.corner-triangle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-bottom: 50px solid #ff3a3a;
}

/* Animasi Hover */
.hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-effect:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.container {
  background-color: #f6f6f6;
  margin-top: -5%;
}
</style>
