<template>
  <top :operandata="banner" />

  <v-container class="mt-5">
    <v-row>
      <v-col
        v-for="(article, index) in articles"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card rounded="small" class="custom-card hover-card">
          <v-img
            height="200px"
            width="100%"
            :src="article.image"
            :lazy-src="article.lazy_image"
            cover
          />

          <v-card-text>
            <h1 class="barlow">{{ article.title }}</h1>
            <div class="d-flex my-4 text-grey">
              <h6 class="barlow" style="font-size: 14px">{{ article.date }}</h6>
              <p class="barlow ml-4" style="font-size: 14px">
                <span style="text-decoration: underline" class="mr-1">
                  {{ article.views }}
                </span>
                Dilihat
              </p>
            </div>

            <p class="barlow2" style="font-size: 17px">
              {{ article.description }}
            </p>
            <br />

            <tombol
              :operandata="{
                teks: 'Lihat Selengkapnya',
                variant: 'flat',
                to: article.link,
              }"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <banner-parallax />
</template>

<script setup>
const banner = {
  judul: "ARTIKEL",
  alttext: "Artikel Rak Gudang TAP",
};

const articles = [
  {
    title: "Rak Gudang Jakarta Termurah & Terjamin",
    date: "20 / 08 / 2024",
    views: 176,
    description:
      "Jakarta sebagai pusat bisnis dan industri membutuhkan sistem penyimpanan yang...",
    image:
      "https://cdn.aresa-digital.com/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-Project-TAP.webp",
    lazy_image:
      "https://cdn.aresa-digital.com/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-project-TAP_2.webp",
    link: "/article/rak-gudang-jakarta",
  },

  {
    title: "Rak Gudang Murah Berkualitas",
    date: "09 / 12 / 2024",
    views: 390,
    description:
      "Pengelolaan gudang yang efisien menjadi kunci sukses dalam menjalankan bisnis distribusi...",
    image:
      "https://cdn.aresa-digital.com/images/artikel/rak-gudang-murah/rak-gudang-murah-berkualitas-TAP_1.webp",
    lazy_image:
      "https://cdn.aresa-digital.com/images/artikel/rak-gudang-murah/rak-gudang-murah-berkualitas-TAP_2.webp",
    link: "/article/rak-gudang-murah-berkualitas",
  },

  {
    title: "Keunggulan Sistem Rak Gudang",
    date: "22 / 01 / 2025",
    views: 450,
    description:
      "Pengelolaan gudang yang efisien menjadi kunci sukses dalam menjalankan bisnis distribusi...",
    image:
      "https://cdn.aresa-digital.com/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_1.webp",
    lazy_image:
      "https://cdn.aresa-digital.com/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_2.webp",
    link: "/article/keunggulan-sistem-rak-gudang",
  },

  {
    title: "6 Tips Merawat Rak Besi Agar Lebih Awet",
    date: "20 / 02 / 2025",
    views: 180,
    description:
      "Merawat rak besi dengan baik adalah langkah krusial untuk memastikan ketahanannya...",
    image:
      "https://cdn.aresa-digital.com/images/artikel/tips-merawat-besi/Artikel-6-Tips-Merawat-Rak-Besi-Agar-Lebih-Awet_1.webp",
    lazy_image:
      "https://cdn.aresa-digital.com/images/artikel/tips-merawat-besi/Artikel-6-Tips-Merawat-Rak-Besi-Agar-Lebih-Awet_2.webp",
    link: "/article/6-Tips-Merawat-Rak-Besi",
  },

  {
    title: "Mengenal Komponen Utama Rak Gudang Berkualitas",
    date: "20 / 03 / 2025",
    views: 356,
    description:
      "Rak gudang merupakan elemen penting dalam sistem penyimpanan yang efisien, terutama...",
    image:
      "https://cdn.aresa-digital.com/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_1.webp",
    lazy_image:
      "https://cdn.aresa-digital.com/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_2.webp",
    link: "/article/Mengenal-Komponen-Utama-Rak-Gudang-Berkualitas",
  },

  {
    title: "Rak Gudang",
    date: "01 / 03 / 2025",
    views: 500,
    description:
      "Dalam dunia logistik dan pergudangan, rak gudang merupakan salah satu komponen penting yang tidak bisa diabaikan...",
    image:
      "https://cdn.aresa-digital.com/images/artikel/rak-gudang/rak-gudang.webp",
    lazy_image:
      "https://cdn.aresa-digital.com/images/artikel/rak-gudang/rak-gudang-lz.webp",
    link: "/article/rak-gudang",
  },
];

useSeoMeta({
  title: "Rak Gudang Berkualitas - Solusi Penyimpanan Terbaik",
  ogTitle: "Rak Gudang Berkualitas - Solusi Penyimpanan Terbaik",
  description:
    "Temukan berbagai jenis rak gudang berkualitas untuk kebutuhan industri dan penyimpanan dengan harga terbaik.",
  ogDescription:
    "Temukan berbagai jenis rak gudang berkualitas untuk kebutuhan industri dan penyimpanan dengan harga terbaik.",
  ogImage:
    "https://cdn.aresa-digital.com/images/projek/mezzanine-racking-steel-shelving/PT-HWASEUNG-JEPARA-Project-TAP-og.webp",
  twitterCard: "summary_large_image",
  robots: "index, follow",
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
  padding-left: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
}

.gradient-overlay {
  background: linear-gradient(to top, black, rgba(250, 250, 250, 0));
  height: 100%;
}
</style>
