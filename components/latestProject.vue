<template>
  <div class="container">
    <v-container class="py-16">
      <v-row class="text-center justify-center align-center">
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

          <h1 class="barlow mb-5 animated-text">PROJEK</h1>

          <p
            :style="{ fontSize: $vuetify.display.smAndUp ? '24px' : '19px' }"
            class="barlow2 text-grey-darken-1"
          >
            Beragam proyek terbaru yang kami kelola dengan profesionalisme dan
            solusi terbaik untuk setiap kebutuhan.
          </p>
        </v-col>
      </v-row>

      <v-row class="mt-10 text-center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(project, index) in lastprojects"
          :key="index"
        >
          <v-img
            :lazy-src="project.lazy_img"
            :src="project.image"
            :alt="project.alttext"
            height="300"
            cover
          />
          <h2 class="barlow mt-7 mb-2">{{ project.title }}</h2>

          <p class="text-gray barlow2" style="font-size: 20px">
            {{ project.description }}
          </p>
          <br />

          <tombol
          aria-label="Projek Kami"
            :operandata="{
              teks: 'Lihat Selengkapnya',
              variant: 'flat',
              to: project.to,
            }"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const lastprojects = [
  {
    title: "PT HWASEUNG, JEPARA",
    description: "Mezzanine Racking Steel Shelving",
    image:
      "https://cdn.perkasaracking.co.id/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-Project-TAP.webp",
    lazy_img:
      "https://cdn.perkasaracking.co.id/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-project-TAP_2.webp",
    to: "/project/pt-hwaseung-Jepara",
    alttext: "TAP-Project-PT.HWASEUNG,JEPARA",
  },

  {
    title: "PT.ASKI, Citeureup",
    description: "Dies Racking",
    image:
      "https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-aski-citeureup/PT-ASKI-Citeureup-project-TAP_1.webp",
    lazy_img:
      "https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-aski-citeureup/PT-ASKI-Citeureup-project-TAP_2.webp",
    alttext: "TAP-Project-PT.ASKI–Citeureup",
    to: "/project/pt-ask-citeureup",
  },

  {
    title: "PT SGS, Cikarang",
    description: "Dies Racking",
    image:
      "https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_1.webp",
    lazy_img:
      "https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_2.webp",
      alttext: "TAP-Project-PT. SGS, Cikarang",
      to: "/project/pt-sgs-cikarang",
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

.container {
  background-color: #f6f6f6;
}
</style>
