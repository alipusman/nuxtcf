<template>
  <v-img
    src="https://cdn.aresa-digital.com/images/banner-detail-top.webp"
    alt="Banner Top Rak Gudang TAP"
    height="350"
    width="100%"
    cover
  >
    <v-row class="text-center gradient-overlay" align="center" justify="center">
      <v-col cols="12" sm="7">
        <v-card color="transparent" flat class="mt-8">
          <h1 class="barlow text-white title-text">
            {{ operandata.judul }}
          </h1>
        </v-card>
      </v-col>
    </v-row>
  </v-img>
</template>

<script setup lang="ts">
interface topM {
  judul: string;
}

defineProps<{ operandata: topM }>();
</script>

<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 700;
  font-style: normal;
}

.gradient-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 5), rgba(0, 0, 0, 0));
  height: 104%;
}

.title-text {
  font-size: v-bind("$vuetify.display.smAndUp ? '50px' : '35px'");
}
</style>
