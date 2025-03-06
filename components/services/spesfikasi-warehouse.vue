<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="9">
        <v-row align="center">
          <v-col cols="12" sm="6" md="6" class="px-7">
            <v-img
              src="https://cdn.aresa-digital.com/images/layanan-dukungan/gudang/gudang_1.webp"
              lazy-src="https://cdn.aresa-digital.com/images/layanan-dukungan/gudang/gudang_1.webp"
              alt="Spesifikasi Rack Gudang - TAP"
              class="rounded-lg"
              height="280"
              cover
            />
          </v-col>

          <v-col cols="12" sm="6" md="6" class="px-7">
            <h2 class="barlow">Spesifikasi Gudang</h2>

            <v-divider
              width="50"
              thickness="3"
              color="#FF3A3A"
              class="my-3 opacity-100"
            />

            <ul class="text-body-1 barlow2 ml-4">
              <li>
                <v-row>
                  <v-col cols="12" sm="3"> Roof Frame</v-col>

                  <v-col cols="12" sm="5"> : Lightweight Steel </v-col>
                </v-row>
              </li>

              <li>
                <v-row>
                  <v-col cols="12" sm="3"> Floor </v-col>

                  <v-col cols="12" sm="9">
                    : Reinforced Concrete ±30cm (K.250)
                  </v-col>
                </v-row>
              </li>

              <li>
                <v-row>
                  <v-col cols="12" sm="3"> Roof </v-col>

                  <v-col cols="12" sm="9"> : Metalsheet Zincalume </v-col>
                </v-row>
              </li>

              <li>
                <v-row>
                  <v-col cols="12" sm="3"> Door </v-col>

                  <v-col cols="12" sm="9">
                    : Sliding Door + Metalsheet Zincalume
                  </v-col>
                </v-row>
              </li>

              <li>
                <v-row>
                  <v-col cols="12" sm="3"> Wall </v-col>

                  <v-col cols="12" sm="9">
                    : Hebel 1 meter + Metalsheet Zincalume
                  </v-col>
                </v-row>
              </li>

              <li>
                <v-row>
                  <v-col cols="12" sm="3"> Structure </v-col>

                  <v-col cols="12" sm="9">: Heavy Duty Racking </v-col>
                </v-row>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <br />
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
