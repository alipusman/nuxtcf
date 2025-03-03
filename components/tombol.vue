<template>
  <v-btn 
    :to="props.operandata.to" 
    :variant="props.operandata.variant" 
    color="#ff3a3a" 
    class="hover-black"
    :aria-label="`Tombol navigasi ke ${props.operandata.teks}`"
    :aria-current="isActive ? 'page' : undefined"
  >
    <p class="font-weight-bold barlow">
      {{ props.operandata.teks }}
    </p>
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

interface tombolM {
  teks: string;
  to: string;
  variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
}

const props = defineProps<{ operandata: tombolM }>();

// Cek apakah tombol mengarah ke halaman aktif
const route = useRoute();
const isActive = computed(() => route.path === props.operandata.to);
</script>

<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 700;
  font-style: normal;
}

.hover-black:hover {
  background-color: black !important;
  color: white !important;
}
</style>
