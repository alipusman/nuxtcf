<template>
  <top :operandata="banner" />

  <v-container class="pa-16 container" fluid>
    <v-row class="text-center justify-center align-center">
      <v-col sm="8">
        <v-divider
          class="mx-auto opacity-100"
          thickness="4"
          color="#FF3A3A"
          style="width: 10%"
        />
        <br />

        <p
          :class="
            $vuetify.display.mdAndUp
              ? 'text-h3 barlow font-weight-bold mb-5 animated-text'
              : 'text-h5 barlow font-weight-bold mb-5 animated-text'
          "
        >
          MENINGKATKAN PENYIMPANAN DENGAN RAK INOVATIF
        </p>

        <p
          :class="
            $vuetify.display.mdAndUp
              ? 'barlow2 text-h6 text-grey-darken-1'
              : 'barlow2 text-body-1 text-grey-darken-1'
          "
        >
          Solusi rak canggih yang dirancang untuk memaksimalkan ruang dan
          efisiensi <br />
          di berbagai industri dan aplikasi.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col v-for="(project, index) in projects" :key="index" cols="12" md="4">
        <v-card class="image-card">
          <v-img
            :src="project.image"
            :alt="project.alttext"
            :lazy-src="project.lazy_image"
            height="300"
            class="rounded-t image with-overlay"
            cover
          >
            <!-- Text content -->
            <v-container class="text-content">
              <p class="text-h5 barlow font-weight-bold">{{ project.title }}</p>
              <p class="barlow2">{{ project.subtitle }}</p>
              <tombol
                class="mt-3"
                :to="project.to"
                :operandata="{ teks: 'DETAIL' }"
              />
            </v-container>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <banner-parallax />
</template>

<script setup>
const banner = {
  judul: "PROJEK KAMI",
  alttext: "Projek Rak Gudang - TAP",
};

const projects = [
  {
    title: "PT HWASEUNG, JEPARA",
    subtitle: "Mezzanine Racking Steel Shelving",
    image:
      "https://cdn.perkasaracking.co.id/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-Project-TAP.webp",
    lazy_image:
      "https://cdn.perkasaracking.co.id/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-project-TAP_2.webp",
    to: "/project/pt-hwaseung-jepara",
    alttext: "TAP-Project-PT.HWASEUNG,JEPARA",
  },

  {
    title: "PT.ASKI, Citeureup",
    subtitle: "Dies Racking",
    image:
      "https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-aski-citeureup/PT-ASKI-Citeureup-project-TAP_1.webp",
    lazy_image:
      "https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-aski-citeureup/PT-ASKI-Citeureup-project-TAP_2.webp",
    alttext: "TAP-Project-PT.ASKI–Citeureup",
    to: "/project/pt-ask-citeureup",
  },

  {
    title: "PT SGS, Cikarang",
    subtitle: "Dies Racking",
    lazy_image:
      "https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_2.webp",
    image:
      "https://cdn.perkasaracking.co.id/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_1.webp",
    alttext: "TAP-Project-PT. SGS, Cikarang",
    to: "/project/pt-sgs-cikarang",
  },
];

useSeoMeta({
  title: "Project Kami - PT. Tangguh Adi Perkasa",
  description:
    "Lihat berbagai proyek pembuatan rack gudang dari PT. Tangguh Adi Perkasa, solusi penyimpanan terbaik untuk industri dan pergudangan.",
  keywords:
    "rak inovatif, projek rack gudang, rak besi, sistem penyimpanan gudang, rak heavy duty, shelving system, PT. Tangguh Adi Perkasa, instalasi rak gudang, warehouse storage",
  ogTitle: "Project Kami - PT. Tangguh Adi Perkasa",
  ogDescription:
    "Jelajahi proyek-proyek rack gudang berkualitas tinggi yang telah kami selesaikan untuk berbagai industri.",
  ogImage:
    "https://cdn.perkasaracking.co.id/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-Project-TAP.webp", // Ganti dengan gambar proyek yang relevan
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Project Kami - PT. Tangguh Adi Perkasa",
  twitterDescription:
    "Dokumentasi proyek-proyek rack gudang yang telah kami kerjakan, menghadirkan solusi penyimpanan terbaik.",
  twitterImage:
    "https://cdn.perkasaracking.co.id/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-Project-TAP.webp",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/project",
  ogUrl: "https://www.perkasaracking.co.id/project",
});
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
}

.image {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.image.with-overlay::before {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.842),
    rgba(19, 18, 18, 0)
  );
  z-index: 1;
}

.image:hover {
  transform: scale(1.05);
}

.text-content {
  position: absolute;
  bottom: 6px;
  left: 6px;
  right: 20px;
  color: white;
  z-index: 2;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.container {
  background-color: #f6f6f6;
}
</style>
