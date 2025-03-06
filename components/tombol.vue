<template>
  <v-btn
    :to="props.operandata.to"
    :variant="props.operandata.variant"
    color="#ff3a3a"
    class="hover-black"
    :aria-label="`Tombol navigasi ke ${props.operandata.teks}`"
    :aria-current="isActive ? 'page' : undefined"
  >
    <p class="barlow">
      {{ props.operandata.teks }}
    </p>
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{ operandata: tombolM }>();
const route = useRoute();
const isActive = computed(() => route.path == props.operandata.to);

interface tombolM {
  teks: string;
  to: string;
  variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
}
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
