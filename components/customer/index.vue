<template>
  <v-container class="my-10">
    <v-row align="center">
      <v-col cols="12" sm="4">
        <p
          :class="
            $vuetify.display.smAndUp
              ? 'text-h3 text-left barlow-italic custom-title'
              : 'text-h4 text-center barlow-italic custom-title'
          "
        >
          PELANGGAN DAN <br />
          MITRA KAMI
        </p>
      </v-col>

      <v-col cols="12" sm="8">
        <v-row v-for="(row, index) in groupedLogos" :key="index">
          <v-col v-for="logo in row" :key="logo.img">
            <v-img :src="logo.img" :alt="logo.alttext" />
          </v-col>
        </v-row>

        <v-row class="text-center mt-10">
          <v-col>
            <tombol
              aria-label="Service Kami"
              to="/our-customer"
              :operandata="{ teks: 'Lihat Selengkapnya', variant: 'flat' }"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from "vue";

const logos = [
  {
    img: "https://cdn.perkasaracking.co.id/images/customer/mayora.png",
    alttext: "Logo Mayora",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/toyota.png",
    alttext: "Logo Toyota",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/suzuki.png",
    alttext: "Logo Suzuki",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/lazada.png",
    alttext: "Logo Lazada",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/LG.png",
    alttext: "Logo LG",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/shopee.png",
    alttext: "Logo Shopee",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/panasonic.png",
    alttext: "Logo Panasonic",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/air-asia.jpg",
    alttext: "Logo Air Asia",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/tokopedia.png",
    alttext: "Logo Tokopedia",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/lotte.png",
    alttext: "Logo Lotte",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/sharp.webp",
    alttext: "Logo Sharp",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/unicharm.webp",
    alttext: "Logo Unicharm",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/mrdiy.png",
    alttext: "Logo MR DIY",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/hyundai.png",
    alttext: "Logo Hyundai",
  },

  {
    img: "https://cdn.perkasaracking.co.id/images/customer/gojek.png",
    alttext: "Logo Gojek",
  },
];

const groupedLogos = computed(() => {
  const rows = [];
  for (let i = 0; i < logos.length; i += 5) {
    rows.push(logos.slice(i, i + 5));
  }
  return rows;
});

const titleClass = computed(() => {
  return (
    `$vuetify.display.smAndUp ? 'text-h3 text-left' : 'text-h4 text-center'` +
    " barlow-italic custom-title"
  );
});
</script>

<style scoped>
.barlow-italic {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 800;
  font-style: italic;
}

.v-img {
  object-fit: contain;
  max-height: 100px;
}

.custom-title {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  color: #0b0f14;
  font-weight: bold;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  animation: fadeIn 1s ease-in-out;
}

.custom-title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 50%;
  height: 3px;
  background: #f31212;
  border-radius: 2px;
  animation: slideIn 1s ease-in-out;
}

.custom-title:hover {
  color: #f31212;
  cursor: pointer;
}

.custom-title:hover::before {
  background: #070a0d;
  width: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
}
</style>
