<template>
  <v-container
    v-intersect="onIntersect"
    class="justify-center align-center my-5"
  >
    <v-card
      elevation="4"
      class="card-hover"
      align="center"
      rounded="0"
      style="border-bottom: #0056c7 solid 10px"
    >
      <div class="corner-triangle" />
      <v-card-text>
        <v-row>
          <v-col cols="6" sm="3">
            <v-img src="/images/customer.png" />
          </v-col>

          <v-col style="margin-top: 10%">
            <div
              :class="
                $vuetify.display.mdAndUp ? 'barlow text-h2' : 'barlow text-h4'
              "
              style="color: #ff3a3a"
            >
              {{ formattedcustomer }}
              <span style="color: grey; font-size: 40px">+</span>
            </div>

            <v-divider class="mt-2" width="40%" />
            <p style="font-size: 18px" class="font-weight-bold barlow mt-2">
              CUSTOMER
            </p>
          </v-col>

          <v-col cols="6" sm="3">
            <v-img
              src="/images/warehouse.png"
            />
          </v-col>

          <v-col style="margin-top: 10%">
            <div
              :class="
                $vuetify.display.mdAndUp ? 'barlow text-h2' : 'barlow text-h4'
              "
              style="color: #ff3a3a"
            >
              {{ formattedproject }}
              <span style="color: grey; font-size: 40px">+</span>
            </div>

            <v-divider class="mt-2" width="40%" />
            <p style="font-size: 18px" class="font-weight-bold barlow mt-2">
              PROJEK
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const startcustomer = ref(0);
const customer = 819;
const durationcustomer = 4000;
const formattedcustomer = ref("0");
let hasAnimated = false;

const animateNumber = (start, end, durationcustomer) => {
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / durationcustomer, 1);
    startcustomer.value = Math.floor(progress * (end - start) + start);
    formattedcustomer.value = startcustomer.value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const startproject = ref(0);
const project = 4219;
const durationproject = 4000;
const formattedproject = ref("0");
let hasAnimatedproject = false;

const animateNumberproject = (start, end, durationproject) => {
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / durationproject, 1);
    startproject.value = Math.floor(progress * (end - start) + start);
    formattedproject.value = startproject.value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const onIntersect = (isIntersecting) => {
  if (isIntersecting && !hasAnimated) {
    animateNumber(0, customer, durationcustomer);
    animateNumberproject(0, project, durationproject);
    hasAnimated = true;
    hasAnimatedproject = true;
  }
};
</script>

<style scoped>
.corner-triangle {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 19px;
  border-left: 120px solid transparent;
  border-top: 50px solid #ff3a3a;
}

.barlow {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 700;
  font-style: normal;
}

.barlow2 {
  font-family: "Barlow Semi Condensed", serif;
  font-style: normal;
  word-wrap: break-word;
}

.text-h2 {
  color: #1976d2;
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
