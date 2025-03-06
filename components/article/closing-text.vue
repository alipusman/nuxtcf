<template>
  <v-row>
    <v-col>
      <v-divider class="my-7" thickness="2" />

      <p class="barlow2 text-justify">
        <span style="color: #ff3a3a; font-weight: bold">
          Aresa Digital
        </span>
        menyediakan berbagai jenis rak dengan spesifikasi yang bisa disesuaikan
        menurut kebutuhan Anda, baik untuk pabrik, gudang, maupun toko. PT.
        Tangguh Adi Perkasa merupakan spesialisasi rak gudang yang memproduksi
        sendiri rak gudang heavy duty racking, medium duty racking, dan light
        duty racking.
      </p>

      <p class="barlow2 text-justify mt-4">
        Kami telah beroperasi sejak tahun 2007 dan terus berkembang dalam
        memenuhi berbagai kebutuhan sektor retail. Dari proyek skala kecil
        hingga tender besar untuk pembangunan dan renovasi, serta kebutuhan
        industri dan pergudangan, kami selalu berkomitmen memberikan solusi
        terbaik bagi pelanggan kami.
      </p>

      <h1 class="barlow mt-7">Menagapa Harus Memilih kami?</h1>

      <ul class="barlow2 text-h6 mt-2 ml-7">
        <li>Kualitas Terjamin dan Tersertifikasi.</li>
        <li>harga terjangkau.</li>
        <li>Ketahanan dan Kekuatan.</li>
        <li>Fleksibilitas.</li>
        <li>Pengiriman ke seluruh kota & kabupaten di Indonesia.</li>
      </ul>

      <v-row class="my-1 mb-7">
        <v-col>
          <h1 class="barlow2 my-4 font-italic">
            Dipercaya oleh lebih dari
            <span style="color: #ff3a3a; font-size: 45px; text-decoration: underline">819</span>
            pelanggan dan mitra.
          </h1>

          <p class="barlow2">
            Kami membangun kerja sama yang kuat dan berkelanjutan. <br />
            <a href="/our-customer" class="barlow" style="color: black"
              >Lihat
            </a>
            siapa saja yang telah bergabung bersama kami.
          </p>
        </v-col>
      </v-row>

      <h2 class="barlow2 my-4 font-italic">
        <a href="/contact" style="color: #ff3a3a">Segera hubungi kami</a>
        untuk mendapatkan informasi lebih lanjut dan temukan solusi terbaik
        sesuai kebutuhan Anda!
      </h2>

      <v-row class="barlow2">
        <v-col cols="3" sm="2">
          <p>Email</p>
          <p>Alamat</p>
        </v-col>

        <v-col cols="9" sm="10">
          <p>: marketing@aresa-digital.com</p>
          <p>
            : Summarecon Bekasi. Ruby Commercial TB10 • Sinpasa. <br />Jl.
            Bulevar Selatan, RT.003/RW.005, Marga Mulya, <br />Kec. Bekasi
            Utara, Kota Bekasi,<br />
            Jawa Barat 17142.
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 700;
}

.barlow2 {
  font-family: "Barlow Semi Condensed", serif;
}

.custom-slider {
  background: linear-gradient(90deg, white);
  padding: 50px 0;
  position: relative;
}

.slider-wrapper {
  display: flex;
  flex-wrap: nowrap;
  position: relative;
}

.slider {
  display: flex;
  flex-wrap: nowrap;
  animation: slide 200s linear infinite;
}

.slider-item {
  flex-shrink: 0;
  width: 150px;
  margin: 0 10px;
}

.custom-title {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  text-transform: uppercase;
  color: #0b0f14; /* Warna teks utama */
  font-weight: bold;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  margin: 20px 0;
  animation: fadeIn 1s ease-in-out;
}

.custom-title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 50%;
  height: 3px;
  background: #f31212; /* Warna dekorasi tambahan */
  border-radius: 2px;
  animation: slideIn 1s ease-in-out;
}

.custom-title:hover {
  color: #f31212; /* Efek hover */
  cursor: pointer;
}

.custom-title:hover::before {
  background: #070a0d; /* Ubah warna dekorasi saat hover */
  width: 100%;
}

.logo-img {
  border-radius: 20px;
  width: 100%;
  height: 120px;
  object-fit: cover;
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

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
