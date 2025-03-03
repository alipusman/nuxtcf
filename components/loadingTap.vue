<!-- <template>
  <v-dialog v-model="isLoading" max-width="300" persistent>
    <v-card rounded="xl" elevation="0" height="300" class="loading-card">
      <v-row align="center" justify="center" class="pa-3">
        <v-col class="text-center">
          <v-img src="/images/logo/TAP.png" class="logo-animation" max-height="90" />

          <div class="loader-container my-7">
            <div class="loader-circle"></div>
            <div class="loader-circle"></div>
            <div class="loader-circle"></div>
          </div>

          <p class="text-center text-body-1 roboto" style="color: #393939">
            Loading...
          </p>

          <p class="text-center text-caption text-grey roboto mt-1">
            Harap tunggu sebentar
          </p>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>

</template>

<script setup>
import { useloadingStore } from "~/stores/loadingStore";

const loadingstore = useloadingStore();
const isLoading = computed(() => loadingstore.getLoading);

// const data = reactive({
//   dialog: false,
// });

// const opendialog = () => {
//   data.dialog = true;
//   setTimeout(() => {
//     data.dialog = false;
//   }, 4000);
// };
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

.roboto {
  font-family: "Roboto", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

.loading-card {
  background: radial-gradient(circle, #ffffff, #f5f5f5);
}

/* .logo-animation {
  animation: float 1s infinite ease-in-out;
} */

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.loader-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.loader-circle {
  width: 10px;
  height: 10px;
  background-color: #c5c5c5;
  border-radius: 50%;
  animation: bounce 1.5s infinite ease-in-out;
}

.loader-circle:nth-child(2) {
  animation-delay: 0.2s;
}

.loader-circle:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
}
</style> -->

<template>
  <v-dialog v-model="isLoading" persistent fullscreen>
   <v-card class="d-flex justify-center align-center fill-height">
    <main>
      <svg height="128" width="128" viewBox="0 0 128 128" class="pl1">
        <g class="pl1__g">
          <g transform="translate(20,20) rotate(0,44,44)">
            <g class="pl1__rect-g">
              <rect class="pl1__rect red"></rect>
              <rect class="pl1__rect blue" transform="translate(0,48)"></rect>
            </g>
            <g transform="rotate(180,44,44)" class="pl1__rect-g">
              <rect class="pl1__rect white"></rect>
              <rect class="pl1__rect red" transform="translate(0,48)"></rect>
            </g>
          </g>
        </g>
      </svg>
    </main>
   </v-card>
  </v-dialog>
</template>

<script setup>
import { computed } from "vue";
import { useloadingStore } from "~/stores/loadingStore";

const loadingstore = useloadingStore();
const isLoading = computed(() => loadingstore.getLoading);
</script>

<style scoped>
.pl1 {
  display: block;
  width: 8em;
  height: 8em;
}

.pl1__g,
.pl1__rect {
  animation: pl1-a 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

.pl1__g {
  transform-origin: 64px 64px;
}

.pl1__rect {
  width: 40px;
  height: 40px;
  ry: 8;
  rx: 8;
}

.pl1__rect:first-child {
  animation-name: pl1-b;
}

.pl1__rect:nth-child(2) {
  animation-name: pl1-c;
}

.red {
  fill: red;
}
.blue {
  fill: blue;
}
.white {
  fill: #F5F5F5;
}

@keyframes pl1-a {
  from {
    transform: rotate(0);
  }
  80%,
  to {
    transform: rotate(90deg);
  }
}

@keyframes pl1-b {
  from {
    width: 40px;
    height: 40px;
  }
  20% {
    width: 40px;
    height: 0;
  }
  60% {
    width: 0;
    height: 40px;
  }
  80%,
  to {
    width: 40px;
    height: 40px;
  }
}

@keyframes pl1-c {
  from {
    width: 40px;
    height: 40px;
    transform: translate(0, 48px);
  }
  20% {
    width: 40px;
    height: 88px;
    transform: translate(0, 0);
  }
  40% {
    width: 40px;
    height: 40px;
    transform: translate(0, 0);
  }
  60% {
    width: 88px;
    height: 40px;
    transform: translate(0, 0);
  }
  80%,
  to {
    width: 40px;
    height: 40px;
    transform: translate(48px, 0);
  }
}
</style>
