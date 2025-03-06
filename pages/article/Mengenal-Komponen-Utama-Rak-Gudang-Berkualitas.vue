<template>
  <top-detail :operandata="banner" />

  <v-container class="my-4">
    <breadcrumbs />
    <v-row no-gutters>
      <v-col cols="12" md="9" class="px-7">
        <h1
          class="barlow"
          :style="{ fontSize: $vuetify.display.mdAndUp ? '45px' : '35px' }"
        >
          Mengenal Lebih Jelas Komponen-Komponen Rak Gudang Berkualitas
        </h1>

        <v-divider
          width="70%"
          thickness="8"
          style="margin-top: -1%"
          color="#FF3A3A"
          class="opacity-100"
        />

        <v-img
          src="https://cdn.aresa-digital.com/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_1.webp"
          lazy_src="https://cdn.aresa-digital.com/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_2.webp"
          alt="TAP-artikel-memahami-komponen-rak-gudang"
          :height="$vuetify.display.smAndUp ? '850' : '350'"
          :class="$vuetify.display.smAndUp ? 'my-7' : 'my-5'"
        />

        <p class="barlow2 text-justify">
          Salah satu aspek penting dalam perawatan rak besi adalah menjaga
          kebersihannya dari kotoran dan debu yang dapat memicu korosi. Dengan
          menerapkan langkah-langkah perawatan yang tepat, Anda dapat
          memperpanjang umur rak besi dan menjaga tampilannya tetap prima.
          Berikut ini adalah beberapa tips yang bisa Anda lakukan untuk merawat
          rak besi dengan lebih baik.
        </p>
        <br />

        <v-row>
          <v-col cols="12" sm="3">
            <v-img
              width="180"
              lazy-src="https://cdn.aresa-digital.com/images/komponen-rak/upframe/upframe_2.webp"
              src="https://cdn.aresa-digital.com/images/komponen-rak/upframe/upframe_1.webp"
            />
          </v-col>

          <v-col cols="12" sm="9">
            <h3 class="barlow">1. Upright Frame (Tiang Penyangga)</h3>

            <v-divider
              width="200"
              thickness="3"
              color="#FF3A3A"
              class="mb-3 opacity-100"
            />

            <p class="mt-4 text-body-1 barlow2 text-justify">
              Upright frame adalah bagian vertikal dari rak yang berfungsi
              sebagai penyangga utama. Terbuat dari baja berkualitas tinggi,
              tiang penyangga harus memiliki ketahanan yang kuat terhadap beban
              berat serta kestabilan yang baik untuk mencegah risiko roboh.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="3">
            <v-img
              width="180"
              lazy-src="https://cdn.aresa-digital.com/images/komponen-rak/beam/beam_2.webp"
              src="https://cdn.aresa-digital.com/images/komponen-rak/beam/beam_1.webp"
            />
          </v-col>

          <v-col cols="12" sm="9">
            <h3 class="barlow">2. Beam (Palang Penyangga)</h3>

            <v-divider
              width="200"
              thickness="3"
              color="#FF3A3A"
              class="mb-3 opacity-100"
            />

            <p class="mt-4 text-body-1 barlow2 text-justify">
              Beam merupakan batang horizontal yang menghubungkan tiang
              penyangga dan menopang barang yang disimpan di rak. Beam yang kuat
              biasanya memiliki sistem pengunci agar tidak mudah bergeser atau
              terlepas, sehingga meningkatkan keamanan dalam penyimpanan.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="3">
            <v-img
              width="150"
              lazy-src="https://cdn.aresa-digital.com/images/komponen-rak/bracing/bracing_2.webp"
              src="https://cdn.aresa-digital.com/images/komponen-rak/bracing/bracing_1.webp"
            />
          </v-col>

          <v-col cols="12" sm="9">
            <h3 class="barlow">3. Bracing (Penyangga Diagonal)</h3>

            <v-divider
              width="200"
              thickness="3"
              color="#FF3A3A"
              class="mb-3 opacity-100"
            />

            <p class="mt-4 text-body-1 barlow2 text-justify">
              Bracing adalah komponen penting dalam heavy-duty racking yang
              berfungsi sebagai penyangga tambahan untuk meningkatkan kestabilan
              dan kekuatan rak. Bracing biasanya dipasang di antara upright
              (tiang rak) untuk mencegah rak bergoyang atau roboh akibat beban
              berat atau benturan dari forklift.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="3">
            <v-img
              width="180"
              lazy-src="https://cdn.aresa-digital.com/images/komponen-rak/baseplate/baseplate_2.webp"
              src="https://cdn.aresa-digital.com/images/komponen-rak/baseplate/baseplate_1.webp"
            />
          </v-col>

          <v-col cols="12" sm="9">
            <h3 class="barlow">4. Baseplate (Plat Dasar)</h3>

            <v-divider
              width="200"
              thickness="3"
              color="#FF3A3A"
              class="mb-3 opacity-100"
            />

            <p class="mt-4 text-body-1 barlow2 text-justify">
              Baseplate adalah plat baja yang dipasang di bagian bawah upright
              (tiang rak) untuk menyalurkan beban ke lantai dan meningkatkan
              kestabilan struktur rak. Komponen ini sangat penting untuk
              memastikan rak tetap kokoh, terutama dalam sistem heavy-duty
              racking yang menanggung beban berat.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="3">
            <v-img
              width="150"
              lazy-src="https://cdn.aresa-digital.com/images/komponen-rak/anchor-bolt/anchor-bolt_2.webp"
              src="https://cdn.aresa-digital.com/images/komponen-rak/anchor-bolt/anchor-bolt_1.webp"
            />
          </v-col>

          <v-col cols="12" sm="9">
            <h3 class="barlow">5. Anchor Bolt (Baut Angkur)</h3>

            <v-divider
              width="200"
              thickness="3"
              color="#FF3A3A"
              class="mb-3 opacity-100"
            />

            <p class="mt-4 text-body-1 barlow2 text-justify">
              Anchor Bolt (Baut Angkur) adalah komponen penting yang digunakan
              untuk mengikat baseplate (plat dasar) rak ke lantai beton,
              sehingga rak tetap stabil dan tidak bergeser akibat beban berat
              atau benturan. Dalam sistem heavy-duty racking, penggunaan anchor
              bolt sangat penting untuk memastikan keamanan dan daya tahan rak
              dalam jangka panjang.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="3">
            <v-img
              width="180"
              lazy-src="https://cdn.aresa-digital.com/images/komponen-rak/beam-2/beam-2_2.webp"
              src="https://cdn.aresa-digital.com/images/komponen-rak/beam-2/beam-2_1.webp"
            />
          </v-col>

          <v-col cols="12" sm="9">
            <h3 class="barlow">6. Beam (Palang Penyangga)</h3>

            <v-divider
              width="200"
              thickness="3"
              color="#FF3A3A"
              class="mb-3 opacity-100"
            />

            <p class="mt-4 text-body-1 barlow2 text-justify">
              Beam merupakan batang horizontal yang menghubungkan tiang
              penyangga dan menopang barang yang disimpan di rak. Beam yang kuat
              biasanya memiliki sistem pengunci agar tidak mudah bergeser atau
              terlepas, sehingga meningkatkan keamanan dalam penyimpanan.
            </p>
          </v-col>
        </v-row>

        <h2 class="barlow">Kesimpulan</h2>

        <v-divider
          width="130"
          thickness="3"
          color="#FF3A3A"
          class="opacity-100"
        />

        <p class="barlow2 mt-3 text-justify">
          Memahami komponen-komponen rak gudang yang berkualitas sangat penting
          untuk memastikan sistem penyimpanan yang aman, efisien, dan tahan
          lama. Dengan memilih material yang tepat dan menerapkan sistem
          keamanan yang baik, penggunaan rak gudang dapat dioptimalkan sesuai
          kebutuhan industri Anda. Pastikan untuk bekerja sama dengan
          TAP.Tangguh Adi Perkasa sebagai penyedia rak gudang terpercaya agar
          mendapatkan produk dengan standar terbaik.
        </p>

        <article-closing-text />
      </v-col>

      <v-col cols="12" md="3">
        <article-sidebar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const banner = {
  judul: "DETAIL ARTTIKEL",
};

useSeoMeta({
  title: "Mengenal Lebih Jelas Komponen-Komponen Rak Gudang Berkualitas",
  description:
    "Pelajari lebih lanjut tentang berbagai komponen rak gudang berkualitas untuk penyimpanan yang lebih efisien dan tahan lama.",
  ogTitle: "Mengenal Lebih Jelas Komponen-Komponen Rak Gudang Berkualitas",
  ogDescription:
    "Pelajari lebih lanjut tentang berbagai komponen rak gudang berkualitas untuk penyimpanan yang lebih efisien dan tahan lama.",
  ogImage:
    "https://cdn.aresa-digital.com/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_og.webp",
  ogType: "article",
  twitterTitle: "Mengenal Lebih Jelas Komponen-Komponen Rak Gudang Berkualitas",
  twitterDescription:
    "Pelajari lebih lanjut tentang berbagai komponen rak gudang berkualitas untuk penyimpanan yang lebih efisien dan tahan lama.",
  twitterImage:
    "https://cdn.aresa-digital.com/images/projek/dies-racking/pt-sgs-cikarang/PT-SGS-Cikarang-project-TAP_og.webp",
  twitterCard: "summary_large_image",
  keywords:
    "komponen rak gudang, rak gudang berkualitas, sistem penyimpanan, rak besi, tiang penyangga, beam, bracing, baseplate, anchor bolt",
  ogUrl:
    "https://www.perkasaracking.co.id/article/mengenal-komponen-utama-rak-gudang-berkualitas",
  canonical:
    "https://www.perkasaracking.co.id/article/mengenal-komponen-utama-rak-gudang-berkualitas",
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
</style>
