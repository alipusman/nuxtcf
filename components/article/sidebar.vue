<template>
  <v-card flat>
    <v-card-text>
      <v-row class="mb-3">
        <v-col cols="5">
          <span class="text-body-2 barlow2">Artikel Lainnya</span>
        </v-col>

        <v-col>
          <v-divider class="mt-2" thickness="2" />
        </v-col>
      </v-row>

      <template v-for="(article, index) in items.articles" :key="index">
        <h3 class="barlow">{{ article.title }}</h3>

        <v-row>
          <v-col cols="7">
            <p class="text-caption text-grey barlow2">{{ article.date }}</p>
          </v-col>

          <v-col>
            <a :href="article.to" class="text-caption text-red barlow">
              Selengkapnya..
            </a>
          </v-col>
        </v-row>

        <v-divider class="my-3" v-if="index != items.articles.length - 1" />
      </template>

      <tombol
        to="/article"
        block
        class="mt-4"
        size="small"
        :operandata="{
          teks: 'Lihat Artikel Lainnya',
          variant: 'flat',
          to: '/article',
        }"
      />
      <br />

      <v-row class="mt-3">
        <v-col cols="6">
          <span class="text-body-2 barlow2">Produk Unggulan</span>
        </v-col>

        <v-col cols="6">
          <v-divider class="mt-2" thickness="2" />
        </v-col>
      </v-row>

      <template v-for="(product, index) in items.products" :key="index">
        <v-row>
          <v-col cols="5">
            <v-img
              height="70"
              cover
              :src="product.image"
              :lazy-src="product.lazy_image"
              :alt="product.alttext"
            />
          </v-col>

          <v-col>
            <a
              :href="product.href"
              class="barlow text-body-1 font-weight-bold text-black"
              >{{ product.name }}</a
            >
            <p class="text-caption barlow2">{{ product.description }}</p>
          </v-col>
        </v-row>
      </template>

      <v-divider class="my-3" />

      <tombol
        to="/produk"
        block
        class="mt-4"
        size="small"
        :operandata="{
          teks: 'Lihat Produk Lainnya',
          variant: 'flat',
          to: '/produk',
        }"
      />

      <v-divider class="mt-8" />
    </v-card-text>
  </v-card>
</template>

<script setup>
const {data} = await useFetch("/api/sidebar");
const items = data.value[0];
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

.corner-triangle {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 12px;
  border-left: 120px solid transparent;
  border-top: 50px solid #ff3a3a;
}
</style>
