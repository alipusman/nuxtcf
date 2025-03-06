<template>
  <v-container>
    <v-dialog v-model="data.dialogfoto" width="35%">
      <v-card>
        <v-img
          src="https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/iso/sertifikat-pt-tangguh-adi-perkasa-iso-9001-2015_260126_page-1.webp"
          alt="Sertifikat ISO 9001:2015"
          cover
        />
      </v-card>
    </v-dialog>

    <v-row justify="center">
      <v-col cols="12" md="9">
        <v-row align="center">
          <v-col cols="12" sm="6" md="6" class="px-7">
            <h2 class="barlow">Sertifikat ISO 9001:2015 <br /></h2>

            <v-divider
              width="50"
              thickness="3"
              color="#FF3A3A"
              class="my-3 opacity-100"
            />

            <p class="my-5 text-body-1 barlow2 text-justify">
              TAP Tangguh Adi Perkasa telah tersertifikasi
              <span class="font-weight-bold">ISO 9001:2015</span>, menjamin
              standar manajemen mutu yang tinggi. Kami berkomitmen untuk
              memberikan produk dan layanan terbaik dengan proses yang efisien
              dan berorientasi pada kepuasan pelanggan.
            </p>
          </v-col>

          <v-col cols="12" sm="6" md="6" class="px-7">
            <v-card class="custom-card" flat>
              <div class="card-border">
                <v-img
                  src="https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/iso/sertifikat-pt-tangguh-adi-perkasa-iso-9001-2015_260126_page-1.webp"
                  lazy-src="https://cdn.aresa-digital.com/images/tentang-kami/sertifikat/iso/sertifikat-pt-tangguh-adi-perkasa-iso-9001-2015_260126_page-2.webp"
                  alt="Sertifikat ISO 9001:2015"
                  class="rounded-lg styled-image"
                  height="350"
                >
                  <div class="overlay">
                    <v-btn
                      @click="data.dialogfoto = true"
                      color="#ff3a3a"
                      class="text-overlay"
                      rounded="lg"
                      icon="mdi-arrow-expand-all"
                    />
                  </div>
                </v-img>
              </div>
            </v-card>
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
</style>
