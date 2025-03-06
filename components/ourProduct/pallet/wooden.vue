<template>
  <v-container class="mt-2">
    <breadcrumbs />
    <v-row>
      <v-col cols="12" md="6" class="px-4">
        <v-img
          :src="item.image"
          :lazy-src="item.lazy_image"
          class="rounded-lg"
          alt="Pallet - Pallet Kayu"
          height="95%"
          width="100%"
          cover
        />
      </v-col>

      <v-col cols="12" md="6" class="px-4">
        <h1 class="barlow">{{ item.title }}</h1>

        <p class="mb-1 text-body-1 barlow2 text-justify">
          {{ item.pengertian }}
        </p>
        <br />

        <h2 class="barlow2">Aplikasi di industri</h2>

        <ol class="ml-6 text-justify">
          <li
            v-for="(aplikasi, index) in item.aplikasi_industri"
            :key="index"
            class="mt-3 barlow2"
          >
            <span class="font-weight-bold">{{ aplikasi.title }}:</span>
            {{ aplikasi.description }}
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <h2 class="barlow2">Keuntungan Pallet Kayu</h2>

        <ol class="ml-6 text-justify">
          <li
            class="mt-3 barlow2"
            v-for="(keuntungan, index) in item.keuntungan"
            :key="index"
          >
            <span class="font-weight-bold">{{ keuntungan.title }}:</span>
            {{ keuntungan.description }}
          </li>
        </ol>
      </v-col>

      <v-col>
        <h2 class="barlow2">Tantangan Pallet Kayu</h2>

        <ol
          class="ml-6 text-justify"
          v-for="(tantangan, index) in item.tantangan"
          :key="index"
        >
          <li class="mt-3 barlow2">
            <span class="font-weight-bold">{{ tantangan.title }}:</span>
            {{ tantangan.description }}
          </li>
        </ol>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="px-4">
        <v-divider thickness="3" color="#FF3A3A" class="mb-3 opacity-100" />
        <h1 class="barlow">Kesimpulan</h1>

        <p class="barlow2 text-h6 mt-3 text-justify">
          <span class="barlow"> {{ item.title }}</span>
          {{ item.kesimpulan }}
        </p>
      </v-col>
    </v-row>
  </v-container>

  <chat-ai />
</template>

<script setup>
const { data } = await useFetch("/api/pallet-kayu");
const item = data.value[0];
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
