<template>
  <v-parallax
    lazy-src="https://cdn.perkasaracking.co.id/images/penawaran-parallax-TAP_2.webp"
    src="https://cdn.perkasaracking.co.id/images/penawaran-parallax-TAP_1.webp"
    height="250"
    class="opacity"
    alt="Rak Heavy Duty Dengan Penawaran Terbaik"
  >
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="11">
        <v-card class="pa-4 black-overlay" elevation="0">
          <v-card-text class="d-flex align-center">
            <v-row align="center">
              <v-col cols="12" sm="10">
                <h1 class="text-white barlow">
                  Dapatkan penawaran terbaik untuk rak gudang Anda. Hubungi kami
                  sekarang!
                </h1>
              </v-col>

              <v-col cols="12" sm="2" class="d-flex align-center">
                <tombol
                  aria-label="Penawaran Kami"
                  :operandata="{
                    teks: 'HUBUNGI KAMI',
                    to: '/contact',
                    variant: 'flat',
                  }"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 700;
  font-style: normal;
}

.black-overlay {
  background-color: rgba(0, 0, 0, 0.7);
}

.opacity {
  position: relative;
  margin-bottom: -4%;
}

.opacity::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
</style>
