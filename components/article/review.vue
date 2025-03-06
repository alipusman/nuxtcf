<template>
  <v-container>
    <v-divider class="my-4"></v-divider>
    <v-row>
      <v-col>
        <p class="barlow2">Ulasan</p>
      </v-col>
    </v-row>

    <v-row v-for="(review, index) in props.operandata" :key="index">
      <v-col>
        <div class="d-flex align-items-center">
          <v-avatar color="grey" size="large">
            <v-img :src="review.avatar" />
          </v-avatar>
          <div class="ml-3">
            <h4 class="barlow text-red">{{ review.nama }}</h4>
            <p class="barlow2 text-body-2 text-red">{{ review.date }}</p>
            <v-rating
              v-model="review.rating"
              dense
              readonly
              color="orange"
              size="30"
              half-increments
            ></v-rating>
          </div>
        </div>
        <p class="text-body-2 mt-2">
          {{ review.comment }}
        </p>
      </v-col>
    </v-row>

    <v-card elevation="0" class="mt-5">
      <!-- <v-card-title class="barlow2">Tambahkan Ulasan</v-card-title> -->

      <!-- <v-textarea
        label="Tulis ulasan..."
        v-model="newReview.comment"
        variant="outlined"
      ></v-textarea>
      <v-row>
        <v-col>
          <v-rating
            v-model="newReview.rating"
            color="orange"
            half-increments
          ></v-rating>
        </v-col>
        <v-col cols="12" sm="3">
          <tombol
            @click="submitReview"
            :operandata="{
              teks: 'KIRIM ULASAN',
              variant: 'flat',
            }"
          />
        </v-col>
      </v-row> -->
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface review {
  nama: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
}

const props = defineProps<{
  operandata: review[];
}>();

// const reviews = ref([
//   {
//     name: "Muhammad Noval",
//     avatar:
//       "/images/artikel/review-profile.png",
//     date: "03 Januari, 2025",
//     rating: 5,
//     comment:
//       "Penjelasannya sangat informatif dan mudah dipahami! Bikin saya makin ngerti cara kerja Gravity Roller Racking. Sangat membantu!",
//   },
// ]);

const newReview = ref({
  name: "Guest",
  avatar: "/images/artikel/review-profile.png",
  rating: 0,
  comment: "",
});

const submitReview = () => {
  if (newReview.value.comment && newReview.value.rating > 0) {
    reviews.value.push({
      ...newReview.value,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    });
    newReview.value.comment = "";
    newReview.value.rating = 0;
  }
};
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
