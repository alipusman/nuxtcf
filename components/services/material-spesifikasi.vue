<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="9">
        <v-row align="center">
          <v-col cols="12" md="6" class="px-7">
            <h2 class="barlow">Spesifikasi Material</h2>

            <v-divider
              width="50"
              thickness="3"
              color="#FF3A3A"
              class="my-3 opacity-100"
            />

            <h4 class="mb-1 barlow">
              Upframe Omega HD.95x70 mm & HD.92x50 mm <br />
              (fixed into the ground by expansion bolts) :
            </h4>

            <ul class="text-body-2 barlow2 ml-4">
              <li>Steel Plate OMEGA</li>
              <li>Base Plate</li>
            </ul>

            <h4 class="mb-1 mt-3 barlow">
              Beam (adjustable in steps 50/100 mm) :
            </h4>

            <ul class="text-body-2 barlow2 ml-4">
              <li>Beam Box H.100, H.110, H.120</li>
              <li>Beam Box H.100N, H.110N,120N</li>
              <li>Steel Plate CNP Box, 75d, 100d, 125d, 150d.</li>
            </ul>

            <h4 class="mb-1 mt-3 barlow">
              Bracing, Row Spacer, Wall Spacer Adjustable :
            </h4>

            <p class="text-body-1 barlow2">Hollow 30x30</p>

            <h4 class="mb-1 mt-3 barlow">Coloumn Barrier :</h4>

            <p class="text-body-1 barlow2">
              Profil H.100 Size. H.550 x L.1000 mm
            </p>
          </v-col>

          <v-col cols="12" md="6" class="px-7">
            <v-img
              src="https://cdn.perkasaracking.co.id/images/layanan-dukungan/material/material_1.webp"
              lazy-src="https://cdn.perkasaracking.co.id/images/layanan-dukungan/material/material_1.webp"
              alt="Material Spesifikasi Rak Gudang TAP"
              class="rounded-lg"
              cover
            />
          </v-col>
        </v-row>

        <v-divider class="my-10" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

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
