<template>
  <v-container class="mt-4">
    <v-row justify="center">
      <v-col cols="12" md="9">
        <v-row align="center">
          <v-col>
            <h1
              class="barlow"
              :style="{
                fontSize: $vuetify.display.smAndUp ? '50px' : '30px',
              }"
            >
              Ahli dalam <span class="text-red">Rak Gudang</span> Berkualitas
              untuk Solusi Penyimpanan Terbaik.
            </h1>

            <v-divider
              width="50"
              thickness="3"
              color="#FF3A3A"
              class="my-3 opacity-100"
            />

            <p class="text-h6 barlow2">
              Selamat datang di Perkasa Racking – mitra terpercaya Anda dalam
              penyediaan sistem rak gudang terdepan. Kami mengintegrasikan
              inovasi terkini dengan keahlian industri mendalam untuk
              menghadirkan solusi penyimpanan yang dirancang khusus guna
              memenuhi tuntutan pasar modern.
            </p>

            <p class="text-body-1 barlow2 mt-3">
              Dengan pengalaman lebih dari
              <span class="font-weight-bold">17 tahun</span>, kami berkomitmen
              menyediakan sistem
              <span class="font-weight-bold">rak gudang</span> yang tidak hanya
              mengutamakan efisiensi dan keamanan, tetapi juga menawarkan
              fleksibilitas serta skalabilitas tinggi. Setiap solusi yang kami
              rancang bertujuan meningkatkan produktivitas dan mendukung
              pertumbuhan bisnis Anda, dengan jaminan penyimpanan barang yang
              optimal dan terintegrasi secara profesional.
            </p>
          </v-col>
        </v-row>

        <v-divider class="my-6" />
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
