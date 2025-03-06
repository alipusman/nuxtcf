<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="9">
        <v-row align="center">
          <v-col cols="12" sm="6" md="6" class="px-7">
            <h2 class="barlow">Visi & Misi</h2>

            <v-divider
              width="50"
              thickness="3"
              color="#FF3A3A"
              class="my-3 opacity-100"
            />

            <p class="barlow">VISI :</p>

            <ul class="text-justify ml-6 barlow2 text-body-1">
              <li>Menjadi Mitra setiap Pebisnis Indonesia</li>

              <li>
                Menjadi perusahaan Racking yang Inovatif dengan produk yang
                bermutu dan berkualitas.
              </li>
            </ul>
            <br />

            <p class="barlow">MISI :</p>
            <ul class="ml-6 text-body-1 barlow2 text-justify">
              <li>Memberikan lebih dari Excellent</li>

              <li>
                Menjadi sahabat dan konsultan bagi customer di setiap industri
                bisnis
              </li>

              <li>
                Memacu pertumbuhan bisnis dengan bekerja sama dalam mendesain
                komposisi gudang yang
              </li>

              <li>
                Mencapai pertumbuhan yang menguntungkan dan memperluas pasar.
              </li>
            </ul>
          </v-col>

          <v-col cols="12" sm="6" md="6" class="px-7">
            <v-img
              src="https://cdn.aresa-digital.com/images/tentang-kami/visi-misi-TAP_1.webp"
              lazy-src="https://cdn.aresa-digital.com/images/tentang-kami/visi-misi-TAP_2.webp"
              alt="Visi Dan Misi TAP"
              class="rounded-lg"
              height="100%"
              width="100%"
              cover
            />
          </v-col>
        </v-row>

        <v-divider class="my-10" />
      </v-col>
    </v-row>
  </v-container>
</template>

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
