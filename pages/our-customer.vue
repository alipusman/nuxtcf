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
      img: "https://cdn.aresa-digital.com/images/customer/air-asia.jpg",
      alttext: "Logo Air Asia",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/bank-bjb.png",
      alttext: "Logo bank bjb",
    },
    {
      img: "https://cdn.aresa-digital.com/images/customer/toyota.png",
      alttext: "Logo Toyota",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/panasonic.png",
      alttext: "Logo Panasonic",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/kimia-farma.png",
      alttext: "Logo Kimia Farma",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/mrdiy.png",
      alttext: "Logo MR DIY",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/mayora.png",
      alttext: "Logo Mayora",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/tokopedia.png",
      alttext: "Logo Tokopedia",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/ncs.jpg",
      alttext: "Logo Ncs",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/shopee.png",
      alttext: "Logo Shopee",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/hyundai.png",
      alttext: "Logo Hyundai",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/lotte.png",
      alttext: "Logo Lotte",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/suzuki.png",
      alttext: "Logo Suzuki",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/gojek.png",
      alttext: "Logo Gojek",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/sharp.webp",
      alttext: "Logo Sharp",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/lazada.png",
      alttext: "Logo Lazada",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/detpak.png",
      alttext: "Logo Detpak",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/LG.png",
      alttext: "Logo LG",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/krakatau-steel.jpg",
      alttext: "Logo Krakatau Steel",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/desleeclama.png",
      alttext: "Logo Desleeclama",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/kts-indonesia.png",
      alttext: "Logo KTS Indonesia",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/toa.png",
      alttext: "Logo TOA",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/logistic.png",
      alttext: "Logo Apl Logistic",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/iron-bird.png",
      alttext: "Logo Iron Bird",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/lulu.png",
      alttext: "Logo Lulu",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/nipress.jpeg",
      alttext: "Logo Nipress",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/wii.jpeg",
      alttext: "Logo Wii",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/koyorad.jpeg",
      alttext: "Logo Koyorad",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/fuji-seimitsu.png",
      alttext: "Logo Fuji Seimitsu",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/dhl-global-forwarding.png",
      alttext: "Logo DHL Global Forwarding",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/sato.jpeg",
      alttext: "Logo Sato",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/bahtera-adi-jaya.webp",
      alttext: "Logo Bahtera Adi Jaya",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/1-station.webp",
      alttext: "Logo  1 Station",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/elleair.jpeg",
      alttext: "Logo Elleair",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/takata.webp",
      alttext: "Logo Takata",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/gs-astra.png",
      alttext: "Logo GS Astra",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/fscm.jpg",
      alttext: "Logo FSCM",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/CJGLS.jpg",
      alttext: "Logo cjgls",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/tokura.jpeg",
      alttext: "Logo Tokura Corporation Nagoya, Japan",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/unicharm.webp",
      alttext: "Logo Unicharm",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/sds.jpg",
      alttext: "Logo SDS International Group",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/yamaguchi.jpg",
      alttext: "Logo Yamaguchi",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/gac.png",
      alttext: "Logo GAC Samudra Logistic",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/hitachi.jpg",
      alttext: "Logo Hitachi Chemical",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/utama-cfe.jpeg",
      alttext: "Logo UTAMA",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/pt-altar-mass.png",
      alttext: "Logo PT Altar Mass",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/aski.jpeg",
      alttext: "Logo PT ASTRA KOMPONEN INDONESIA",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/pjb.png",
      alttext: "Logo PJB (Pt Pembangkitan Jawa Bali)",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/astragraphia.png",
      alttext: "Logo astragraphia",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/act.webp",
      alttext: "Logo Aksi Cepat Tanggap",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/ckb.jpg",
      alttext: "Logo CKB",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/nissin.png",
      alttext: "Logo Nissin",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/pt-mandom-indonesia-tbk.jpg",
      alttext: "Logo PT MANDOM INDONESIA TBK",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/autoplastik.webp",
      alttext: "Logo PT AUTOPLASTIK INDONESIA",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/damco.png",
      alttext: "Logo Damco",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/hwaseung.jpeg",
      alttext: "Logo Hwaseung",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/aerofood-acs.png",
      alttext: "Logo Aerofood acs",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/isuzu.png",
      alttext: "Logo Isuzu",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/hyundai-forklift.jpg",
      alttext: "Logo Hyundai",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/makmax.png",
      alttext: "Logo Makmax",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/amc.webp",
      alttext: "Logo AMC",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/parkland.jpg",
      alttext: "Logo Parkland",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/borma.jpg",
      alttext: "Logo Borma",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/elastomix.png",
      alttext: "Logo PT Elastomix Indonesia",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/csi-chang-shin-indonesia.png",
      alttext: "Logo chang shin Indonesia",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/acset.png",
      alttext: "Logo Acset",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/hung-a.jpg",
      alttext: "Logo Hung-A Indonesia",
    },

    {
      img: "https://cdn.aresa-digital.com/images/customer/agility.png",
      alttext: "Logo Agility Indonesia",
    },
  ],
});

useSeoMeta({
  title: "Customer & Partner PT. Tangguh Adi Perkasa",
  description:
    "Jalin kemitraan dengan PT. Tangguh Adi Perkasa, spesialis pembuatan rack gudang berkualitas tinggi untuk memenuhi kebutuhan penyimpanan industri Anda.",
  keywords:
    "customer PT. Tangguh Adi Perkasa, partner bisnis, kemitraan industri, rack gudang, rak besi, rak penyimpanan, solusi pergudangan, pembuatan rak gudang, penyimpanan industri",
  ogTitle: "Customer & Partner PT. Tangguh Adi Perkasa",
  ogDescription:
    "Menjadi bagian dari jaringan mitra dan pelanggan PT. Tangguh Adi Perkasa, penyedia solusi terbaik untuk kebutuhan penyimpanan dan rak gudang industri.",
  ogImage:
    "https://cdn.aresa-digital.com/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_og.webp",
  ogType: "website",
  twitterTitle: "Customer & Partner PT. Tangguh Adi Perkasa",
  twitterDescription:
    "Bergabunglah sebagai customer atau partner PT. Tangguh Adi Perkasa, perusahaan terpercaya dalam pembuatan rack gudang industri.",
  twitterImage:
    "https://cdn.aresa-digital.com/images/produk/heavy-duty/Rak-Gudang-Heavy-Duty_TAP_og.webp",
  twitterCard: "summary_large_image",
  robots: "index, follow",
  canonical: "https://www.perkasaracking.co.id/our-customer",
  ogUrl: "https://www.perkasaracking.co.id/our-customer",
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
