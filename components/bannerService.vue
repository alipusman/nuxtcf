<template>
  <v-card>
    <v-img
      src="https://cdn.aresa-digital.com/images/dukungan-TAP_1.webp"
      alt="Layanan & Dukungan"
      lazy-src="https://cdn.aresa-digital.com/images/dukungan-TAP_2.webp"
      height="500"
      cover
    >
      <v-container
        fluid
        style="
          background: linear-gradient(
            to right,
            rgba(250, 250, 250, 2),
            rgba(250, 250, 250, 0)
          );
          height: 100%;
        "
      >
        <v-row align="center" style="height: 100%">
          <v-container>
            <v-col cols="12" md="6">
            <h1 class="barlow">
              DUKUNGAN TERBAIK UNTUK SOLUSI PENYIMPANAN ANDA
            </h1>

            <p
              :class="
                $vuetify.display.smAndUp
                  ? 'text-body-1 my-5 barlow2'
                  : 'text-body-2 my-5 barlow2'
              "
            >
              Kami menyediakan dukungan ahli untuk membantu Anda mengoptimalkan
              efisiensi penyimpanan dan memaksimalkan pemanfaatan ruang.
              Dukungan kami mencakup panduan instalasi, bantuan pemeliharaan,
              serta konsultasi profesional guna memastikan Anda memiliki sistem
              rak terbaik sesuai kebutuhan.
            </p>

            <tombol
            aria-label="Dukungan Kami"
              :operandata="{
                teks: 'Lebih Lanjut',
                variant: 'flat',
                to: '/services-support',
              }"
            />
          </v-col>
          </v-container>
        </v-row>
      </v-container>
    </v-img>
  </v-card>
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
  font-weight: 500;
}
</style>
