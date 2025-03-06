<template>
  <v-container>
    <v-menu transition="slide-x-transition" :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn
          flat
          color="#f4f4f4"
          v-bind="props"
          class="float2 pulse-button2 text-caption barlow2"
          @click="klikwa"
        >
          Butuh Bantuan?
          <span class="barlow ml-1">Hubungi Kami Sekarang</span>
          <v-icon class="mt-2 float pulse-button">mdi-whatsapp</v-icon>
        </v-btn>
      </template>

      <v-card
        class="custom-card"
        :width="$vuetify.display.smAndUp ? '450' : '350'"
      >
        <v-card-title class="pa-3">
          <v-row>
            <v-col cols="2" sm="2">
              <div class="info-banner">
                <v-avatar size="large" color="#25d366" class="mr-5">
                  <v-icon size="35" color="white" icon="mdi-whatsapp" />
                </v-avatar>
              </div>
            </v-col>
            <v-col cols="7" sm="10">
              <p class="text-red text-body-1 ml-10 barlow">
                Hubungi Marketing Kami Untuk
              </p>
              <p class="ml-10 text-body-2">Mendapatkan Layanan Terbaik</p>
            </v-col>
          </v-row>
        </v-card-title>

        <v-form ref="myform">
          <v-card-text v-if="isAreaSelected" class="text-center pa-5">
            <p class="barlow2 text-body-1">Harap Isi Nama & Nomor WA</p>
            <v-text-field
              class="barlow2 mt-2"
              label="Nama"
              variant="solo"
              v-model="customerData.nama_customer"
            />
            <v-text-field
              class="barlow2"
              label="Nomor Telephone"
              variant="solo"
              v-model="customerData.no_telfon"
            />
            <v-btn color="#ff3a3a" class="text-body-1 barlow" @click="saveChat">
              Mulai Percakapan
            </v-btn>
          </v-card-text>
        </v-form>

        <v-carousel
          v-if="!isAreaSelected"
          :class="
            $vuetify.display.smAndUp
              ? 'custom-carousel'
              : 'custom-carousel-mobile'
          "
          cycle
          hide-delimiter-background
          :interval="3000"
          :show-arrows="false"
        >
          <v-card-text>
            <!-- <v-carousel-item v-for="sales in data.safelist" :key="sales.nama"> -->
            <v-card @click="selectSales(data.safelist[0])">
              <v-card-text>
                <v-row align="center">
                  <v-col cols="2">
                    <v-avatar size="large">
                      <v-img :src="data.safelist[1].img" />
                    </v-avatar>
                  </v-col>
                  <v-col cols="6" class="ml-3">
                    <p class="barlow text-black">Marketing</p>
                    <p class="barlow2 text-caption">perkasaracking</p>
                  </v-col>
                  <v-col cols="3">
                    <p class="barlow text-caption text-green mt-1">
                      <span class="zoom-text">🟢</span> Online
                    </p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <!-- </v-carousel-item> -->
          </v-card-text>
        </v-carousel>
      </v-card>
    </v-menu>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import moment from "moment";
import { cekwa } from "~/composables/utils";
import _ from "lodash";

interface salesM {
  nama: string;
  jabatan: string;
  img: string;
  phone: string;
}
// State
const isAreaSelected = ref(false);
const selectedSales = ref<salesM>();

const customerData = reactive({
  created_at: 0,
  nama_customer: "",
  no_telfon: "",
});

// Daftar Sales
const data = reactive({
  safelist: [
    {
      nama: "Aria Wardana",
      jabatan: "Sales 2",
      img: "https://cdn.aresa-digital.com/images/live-chat/2.png",
      phone: "6287775434777",
    },
    {
      nama: "Ahmad Fathoni",
      jabatan: "Sales 3",
      img: "https://cdn.aresa-digital.com/images/live-chat/3.png",
      phone: "628999967932",
    },
    {
      nama: "Dwi Purnanto Jati",
      jabatan: "Sales 4",
      img: "https://cdn.aresa-digital.com/images/live-chat/4.png",
      phone: "628561510011",
    },
    {
      nama: "Sigit Djuhartono",
      jabatan: "Sales 5",
      img: "https://cdn.aresa-digital.com/images/live-chat/5.png",
      phone: "6281295966673",
    },
    {
      nama: "Anggoro Widyatmoko",
      jabatan: "Sales 6",
      img: "https://cdn.aresa-digital.com/images/live-chat/6.png",
      phone: "6281932226292",
    },
    {
      nama: "Sutarti",
      jabatan: "Sales 7",
      img: "https://cdn.aresa-digital.com/images/live-chat/7.png",
      phone: "6285892600347",
    },
  ],
});

function getRandomNumber() {
  return Math.floor(Math.random() * 7);
}
// Fungsi memilih sales
const selectSales = async (sales: salesM) => {
  selectedSales.value = sales;
  try {
    await cekwa();
    customerData.created_at = moment().unix();

    const chatUrl = `https://api.whatsapp.com/send?phone=${
      data.safelist[getRandomNumber()].phone
    }&text=Hallo saya mau tanya seputar Rackgudang, boleh dibantu informasinya dari perkasaracking.co.id?`;
    window.open(chatUrl, "_blank");

    customerData.nama_customer = "";
    customerData.no_telfon = "";
  } catch (error) {
    console.error("Gagal memulai chat:", error);
  }
  // isAreaSelected.value = true;
};

// Reset menu
const klikwa = () => {
  console.log("klik wa");
  data.safelist = _.shuffle(data.safelist);
  isAreaSelected.value = false;
  selectedSales.value = null;
};

// Simpan chat ke WhatsApp
async function saveChat() {
  if (
    !selectedSales.value ||
    !customerData.nama_customer ||
    !customerData.no_telfon
  ) {
    alert("Harap isi semua kolom!");
    return;
  }

  try {
    await cekwa();
    customerData.created_at = moment().unix();

    const chatUrl = `https://api.whatsapp.com/send?phone=${selectedSales.value.phone}&text=Hallo saya ${customerData.nama_customer}, mau tanya seputar Rackgudang, boleh dibantu informasinya dari perkasaracking.co.id?`;
    window.open(chatUrl, "_blank");

    customerData.nama_customer = "";
    customerData.no_telfon = "";
  } catch (error) {
    console.error("Gagal memulai chat:", error);
  }
}
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

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}

.pulse-button {
  position: fixed;
}

.float2 {
  position: fixed;
  bottom: 33px;
  right: 90px;
  z-index: 100;
}

.my-float2 {
  margin-top: 16px;
}

.pulse-button2 {
  position: fixed;
}

.zoom-text {
  display: inline-block;
  font-size: 10px;
  animation: zoomInOut 2s infinite;
}

@keyframes zoomInOut {
  0%,
  100% {
    transform: scale(0.7);
  }

  50% {
    transform: scale(1);
  }
}

.custom-card {
  border-right: 30px solid #ff3a3a;
}

.img-hover {
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.img-hover:hover {
  transform: scale(1.1);
}

.v-slide-group__prev,
.v-slide-group__next {
  color: #2062ca;
  font-size: 36px;
}

.custom-carousel {
  width: 450px !important;
  height: 120px !important;
}

.custom-carousel-mobile {
  width: 340px !important;
  height: 150px !important;
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animated-text {
  animation: slideInFromTop 1s ease-out forwards;
}

.animated-text-left {
  animation: slideInLeft 1s ease-out forwards;
}

@keyframes slideInLeft {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.info-banner {
  position: absolute;
  background: #ff3a3a;
  top: 0;
  left: 0;
  width: 25%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%);
}
</style>
