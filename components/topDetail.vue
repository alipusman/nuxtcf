<template>
  <div class="bg-grey">
    <v-row class="overlay text-center" align="center" justify="center">
      <v-col cols="12" sm="7">
        <v-card color="transparent" flat class="mt-16">
          <p
            :class="mdAndUp ? 'text-h3' : 'text-h4'"
            class="barlow text-white mb-2"
          >
            {{ operandata.judul }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

defineProps<{ operandata: { judul: string } }>();
const { mdAndUp } = useDisplay();
</script>

<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 700;
  font-style: normal;
}

.bg-grey {
  background-color: grey;
  height: 250px;
}

.overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  height: 104%;
}
</style>
