<template>
  <v-footer class="footer" padless>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <p class="text-h4 barlow">GET IN TOUCH</p>
          <br />

          <p class="text-white barlow2">
            Summarecon Bekasi. Ruby Commercial TB10 • Sinpasa. Jl. Bulevar
            Selatan, RT.003/RW.005, Marga Mulya, Kec. Bekasi Utara, Kota Bekasi,
            Jawa Barat 17142.
          </p>
          <br />

          <v-icon color="white">mdi-email-outline</v-icon>
          <span class="barlow2 text-white ml-3">
            marketing@perkasaracking.co.id
          </span>
          <br />

          <div class="d-flex mt-5">
            <v-tooltip text="Kunjungi TAP di Facebook" location="top">
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  flat
                  size="45"
                  rounded="sm"
                  color="#3B5998"
                  href="https://www.facebook.com/rakgudang4pallet/"
                  target="_blank"
                  aria-label="Kunjungi halaman Facebook TAP"
                >
                  <v-icon color="white" size="25">mdi-facebook</v-icon>
                </v-btn>
              </template>
            </v-tooltip>

            <v-tooltip text="Kunjungi TAP di Instagram" location="top">
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  flat
                  size="45"
                  rounded="sm"
                  color="#E4405F"
                  href="https://www.instagram.com/rakgudang_id?igsh=Z3FlYWhlOWRwNnRw"
                  target="_blank"
                  aria-label="Kunjungi halaman Instagram TAP"
                >
                  <v-icon color="white" size="25">mdi-instagram</v-icon>
                </v-btn>
              </template>
            </v-tooltip> 
          </div>
        </v-col>

        <v-col cols="12" md="9">
          <v-row :style="{ marginLeft: $vuetify.display.mdAndUp ? '15%' : '' }">
            <v-col cols="6" sm="3">
              <p class="font-weight-bold text-h6 barlow">PRODUK</p>

              <ul class="footer-links mt-2">
                <li>
                  <a
                    href="/produk/heavy-duty"
                    class="text-body-1 text-white barlow2"
                  >
                    Heavy Duty
                  </a>
                </li>

                <li>
                  <a
                    href="/produk/medium-duty"
                    class="text-body-1 text-white barlow2"
                  >
                    Medium Duty
                  </a>
                </li>

                <li>
                  <a
                    href="/produk/light-duty"
                    class="text-body-1 text-white barlow2"
                  >
                    Light Duty
                  </a>
                </li>

                <li>
                  <a
                    href="/produk/mezzanine"
                    class="text-body-1 text-white barlow2"
                  >
                    Mezzanine
                  </a>
                </li>
              </ul>
            </v-col>

            <v-col cols="6" sm="4">
              <p class="font-weight-bold text-h6 barlow">TENTANG KAMI</p>

              <ul class="footer-links mt-2">
                <li>
                  <a href="/aboutus" class="text-body-1 text-white barlow2">
                    Tentang Kami
                  </a>
                </li>

                <li>
                  <a href="/project" class="text-body-1 text-white barlow2">
                    Projek
                  </a>
                </li>

                <li>
                  <a href="/article" class="text-body-1 text-white barlow2">
                    Artikel
                  </a>
                </li>
              </ul>
            </v-col>

            <v-col cols="12" sm="5">
              <v-img
                width="100"
                src="https://cdn.aresa-digital.com/images/logo/TAP3.webp"
                />
              
              <p class="text-h3 barlow mt-9">
                Spesialis Racking <br />
                di <span style="color: #ff3a3a">Indo</span>nesia
              </p>
              <br />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="my-10" />

      <v-row>
        <v-col cols="12" md="7">
          <span class="barlow text-body-2">
            Copyright ©️ 2025 TAP, All rights reserved. Powered by Aresa
            Digital.
          </span>
        </v-col>

        <v-col cols="12" md="5" class="text-md-end barlow text-body-2">
          <a href="#" class="footer-bottom-link text-white">Terms of use</a>
          <a href="#" class="footer-bottom-link mx-5 text-white"
            >Privacy Policy</a
          >
          <a href="#" class="footer-bottom-link text-white">Cookie Policy</a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
// export default {
//   name: "Footer",
// };
</script>

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

.footer {
  background-color: black;
  color: white;
  padding: 3%;
}

.footer-links {
  list-style: none;
  font-size: 17px;
  font-weight: bold;
  padding: 0;
  color: black;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: black;
  text-decoration: none;
}

.footer-links a:hover {
  color: #f5b342;
}

.footer-bottom-link {
  color: black;
  text-decoration: none;
}

.footer-bottom-link:hover {
  color: #f5b342;
}
</style>
