<template>
  <top-detail :operandata="banner" />
  <v-container>
    <v-row class="text-center mt-5">
      <v-col>
        <p
          :class="
            $vuetify.display.smAndUp
              ? 'text-h3 text-left barlow-italic custom-title'
              : 'text-h4 text-left barlow-italic custom-title'
          "
        >
          PELANGGAN DAN MITRA KAMI
        </p>
      </v-col>
    </v-row>

    <v-row align="center" class="mt-16">
      <v-col cols="4" sm="2" v-for="(partner, index) in data.logo" :key="index">
        <v-img :src="partner.img" :alt="partner.alttext" width="150" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const banner = {
  judul: "CUSTOMER & PARTNERS",
  alttext: "Customer & Partners TAP Racks",
};

const data = reactive({
  logo: [
    {
      img: "/images/customer/air-asia.jpg",
      alttext: "Logo Air Asia",
    },

    {
      img: "/images/customer/bank-bjb.png",
      alttext: "Logo bank bjb",
    },
    {
      img: "/images/customer/toyota.png",
      alttext: "Logo Toyota",
    },

    {
      img: "/images/customer/panasonic.png",
      alttext: "Logo Panasonic",
    },

    {
      img: "/images/customer/kimia-farma.png",
      alttext: "Logo Kimia Farma",
    },

    {
      img: "/images/customer/mrdiy.png",
      alttext: "Logo MR DIY",
    },

    {
      img: "/images/customer/mayora.png",
      alttext: "Logo Mayora",
    },

    {
      img: "/images/customer/tokopedia.png",
      alttext: "Logo Tokopedia",
    },

    {
      img: "/images/customer/ncs.jpg",
      alttext: "Logo Ncs",
    },

    {
      img: "/images/customer/shopee.png",
      alttext: "Logo Shopee",
    },

    {
      img: "/images/customer/hyundai.png",
      alttext: "Logo Hyundai",
    },

    {
      img: "/images/customer/lotte.png",
      alttext: "Logo Lotte",
    },

    {
      img: "/images/customer/suzuki.png",
      alttext: "Logo Suzuki",
    },

    {
      img: "/images/customer/gojek.png",
      alttext: "Logo Gojek",
    },

    {
      img: "/images/customer/sharp.webp",
      alttext: "Logo Sharp",
    },

    {
      img: "/images/customer/lazada.png",
      alttext: "Logo Lazada",
    },

    {
      img: "/images/customer/detpak.png",
      alttext: "Logo Detpak",
    },

    {
      img: "/images/customer/LG.png",
      alttext: "Logo LG",
    },

    {
      img: "/images/customer/krakatau-steel.jpg",
      alttext: "Logo Krakatau Steel",
    },

    {
      img: "/images/customer/desleeclama.png",
      alttext: "Logo Desleeclama",
    },

    {
      img: "/images/customer/kts-indonesia.png",
      alttext: "Logo KTS Indonesia",
    },

    {
      img: "/images/customer/toa.png",
      alttext: "Logo TOA",
    },

    {
      img: "/images/customer/logistic.png",
      alttext: "Logo Apl Logistic",
    },

    {
      img: "/images/customer/iron-bird.png",
      alttext: "Logo Iron Bird",
    },

    {
      img: "/images/customer/lulu.png",
      alttext: "Logo Lulu",
    },

    {
      img: "/images/customer/nipress.jpeg",
      alttext: "Logo Nipress",
    },

    {
      img: "/images/customer/wii.jpeg",
      alttext: "Logo Wii",
    },

    {
      img: "/images/customer/koyorad.jpeg",
      alttext: "Logo Koyorad",
    },

    {
      img: "/images/customer/fuji-seimitsu.png",
      alttext: "Logo Fuji Seimitsu",
    },

    {
      img: "/images/customer/dhl-global-forwarding.png",
      alttext: "Logo DHL Global Forwarding",
    },

    {
      img: "/images/customer/sato.jpeg",
      alttext: "Logo Sato",
    },

    {
      img: "/images/customer/bahtera-adi-jaya.webp",
      alttext: "Logo Bahtera Adi Jaya",
    },

    {
      img: "/images/customer/1-station.webp",
      alttext: "Logo  1 Station",
    },

    {
      img: "/images/customer/elleair.jpeg",
      alttext: "Logo Elleair",
    },

    {
      img: "/images/customer/takata.webp",
      alttext: "Logo Takata",
    },

    {
      img: "/images/customer/gs-astra.png",
      alttext: "Logo GS Astra",
    },

    {
      img: "/images/customer/fscm.jpg",
      alttext: "Logo FSCM",
    },

    {
      img: "/images/customer/CJGLS.jpg",
      alttext: "Logo cjgls",
    },

    {
      img: "/images/customer/tokura.jpeg",
      alttext: "Logo Tokura Corporation Nagoya, Japan",
    },

    {
      img: "/images/customer/unicharm.webp",
      alttext: "Logo Unicharm",
    },

    {
      img: "/images/customer/sds.jpg",
      alttext: "Logo SDS International Group",
    },

    {
      img: "/images/customer/yamaguchi.jpg",
      alttext: "Logo Yamaguchi",
    },

    {
      img: "/images/customer/gac.png",
      alttext: "Logo GAC Samudra Logistic",
    },

    {
      img: "/images/customer/hitachi.jpg",
      alttext: "Logo Hitachi Chemical",
    },

    {
      img: "/images/customer/utama-cfe.jpeg",
      alttext: "Logo UTAMA",
    },

    {
      img: "/images/customer/pt-altar-mass.png",
      alttext: "Logo PT Altar Mass",
    },

    {
      img: "/images/customer/aski.jpeg",
      alttext: "Logo PT ASTRA KOMPONEN INDONESIA",
    },

    {
      img: "/images/customer/pjb.png",
      alttext: "Logo PJB (Pt Pembangkitan Jawa Bali)",
    },

    {
      img: "/images/customer/astragraphia.png",
      alttext: "Logo astragraphia",
    },

    {
      img: "/images/customer/act.webp",
      alttext: "Logo Aksi Cepat Tanggap",
    },

    {
      img: "/images/customer/ckb.jpg",
      alttext: "Logo CKB",
    },

    {
      img: "/images/customer/nissin.png",
      alttext: "Logo Nissin",
    },

    {
      img: "/images/customer/pt-mandom-indonesia-tbk.jpg",
      alttext: "Logo PT MANDOM INDONESIA TBK",
    },

    {
      img: "/images/customer/autoplastik.webp",
      alttext: "Logo PT AUTOPLASTIK INDONESIA",
    },

    {
      img: "/images/customer/damco.png",
      alttext: "Logo Damco",
    },

    {
      img: "/images/customer/hwaseung.jpeg",
      alttext: "Logo Hwaseung",
    },

    {
      img: "/images/customer/aerofood-acs.png",
      alttext: "Logo Aerofood acs",
    },

    {
      img: "/images/customer/isuzu.png",
      alttext: "Logo Isuzu",
    },

    {
      img: "/images/customer/hyundai-forklift.jpg",
      alttext: "Logo Hyundai",
    },

    {
      img: "/images/customer/makmax.png",
      alttext: "Logo Makmax",
    },

    {
      img: "/images/customer/amc.webp",
      alttext: "Logo AMC",
    },

    {
      img: "/images/customer/parkland.jpg",
      alttext: "Logo Parkland",
    },

    {
      img: "/images/customer/borma.jpg",
      alttext: "Logo Borma",
    },

    {
      img: "/images/customer/elastomix.png",
      alttext: "Logo PT Elastomix Indonesia",
    },

    {
      img: "/images/customer/csi-chang-shin-indonesia.png",
      alttext: "Logo chang shin Indonesia",
    },

    {
      img: "/images/customer/acset.png",
      alttext: "Logo Acset",
    },

    {
      img: "/images/customer/hung-a.jpg",
      alttext: "Logo Hung-A Indonesia",
    },

    {
      img: "/images/customer/agility.png",
      alttext: "Logo Agility Indonesia",
    },
  ],
});

useSeoMeta({
  title: "Customer & Partner Aresa Digital",
  description:
    "Jalin kemitraan dengan Aresa Digital, spesialis pembuatan rack gudang berkualitas tinggi untuk memenuhi kebutuhan penyimpanan industri Anda.",
  keywords:
    "customer Aresa Digital, partner bisnis, kemitraan industri, rack gudang, rak besi, rak penyimpanan, solusi pergudangan, pembuatan rak gudang, penyimpanan industri",
  ogTitle: "Customer & Partner Aresa Digital",
  ogDescription:
    "Menjadi bagian dari jaringan mitra dan pelanggan Aresa Digital, penyedia solusi terbaik untuk kebutuhan penyimpanan dan rak gudang industri.",
  ogImage:
    "/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_og.webp",
  ogType: "website",
  twitterTitle: "Customer & Partner Aresa Digital",
  twitterDescription:
    "Bergabunglah sebagai customer atau partner Aresa Digital, perusahaan terpercaya dalam pembuatan rack gudang industri.",
  twitterImage:
    "/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_og.webp",
  twitterCard: "summary_large_image",
  robots: "index, follow",
  canonical: "https://www.aresa-digital.com/our-customer",
  ogUrl: "https://www.aresa-digital.com/our-customer",
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
