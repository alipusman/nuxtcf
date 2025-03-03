<template>
  <v-container>
    <v-row class="mt-2">
      <v-col style="background-color: #f4f4f4">
        <v-tabs
          v-model="data.tab"
          color="red barlow"
          show-arrows
          scrollable
          align-tabs="center"
          class="overflow-x-auto d-flex flex-nowrap"
          style="max-width: 95vw"
        >
          <v-tab value="heavy-duty" class="barlow">Heavy Duty</v-tab>
          <v-tab value="medium-duty" class="barlow">Medium Duty</v-tab>
          <v-tab value="mezzanine" class="barlow">Mezzanine</v-tab>
          <v-tab value="cantilever" class="barlow">Cantilever</v-tab>
          <v-tab value="pallet" class="barlow">Pallet</v-tab>
          <v-tab value="equipment" class="barlow">Equipment</v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <v-tabs-window v-model="data.tab" class="mt-10">
      <v-tabs-window-item value="heavy-duty">
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="3"
            v-for="(product, index) in data.heavy_duty_rack"
            :key="index"
          >
            <v-card
              rounded="lg"
              variant="outlined"
              class="border ma-2"
              :to="product.to"
            >
              <v-img
                :src="product.image"
                :alt="product.alttext"
                :placeholder="product.lazysrc"
                format="webp"
                height="300px"
                width="100%"
                cover
                class="zoom-image"
              />

              <v-card-text>
                <h2 class="barlow">
                  {{ product.judul }}
                </h2>

                <v-rating
                  half-increments
                  hover
                  :length="5"
                  :size="32"
                  :model-value="5"
                  active-color="#F3BC08"
                  class="my-2"
                />

                <p class="barlow2 text-body-2">
                  {{ product.desc }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-tabs-window-item>

      <v-tabs-window-item value="medium-duty">
        <v-row>
          <v-col
            cols="12"
            md="4"
            v-for="(product, index) in data.medium_duty_rack"
            :key="index"
          >
            <v-card
              rounded="lg"
              variant="outlined"
              class="border"
              :to="product.to"
            >
              <v-img
                :src="product.image"
                height="300px"
                :alt="product.alttext"
                :lazy-src="product.lazysrc"
                cover
                class="zoom-image"
              />

              <v-card-text>
                <h2 class="barlow">
                  {{ product.judul }}
                </h2>

                <v-rating
                  half-increments
                  hover
                  :length="5"
                  :size="32"
                  :model-value="5"
                  active-color="#F3BC08"
                  class="my-2"
                />

                <p class="barlow2 text-body-1">
                  {{ product.desc }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-tabs-window-item>

      <v-tabs-window-item value="mezzanine">
        <v-row>
          <v-col cols="12" md="4">
            <v-card
              rounded="lg"
              variant="outlined"
              class="border"
              to="/produk/mezzanine"
            >
              <v-img
                src="https://cdn.perkasaracking.co.id/images/produk/mezzanine/rak-gudang-mezzanine_TAP_1.webp"
                lazy-src="https://cdn.perkasaracking.co.id/images/produk/mezzanine/rak-gudang-mezzanine_TAP_2.webp"
                height="300"
                cover
                alt="Rak Gudang Mezzanine TAP"
                class="zoom-image"
              />

              <v-card-text>
                <h2 class="barlow">Mezzanine Rack</h2>

                <v-rating
                  half-increments
                  hover
                  :length="5"
                  :size="32"
                  :model-value="5"
                  active-color="#F3BC08"
                  class="my-2"
                />

                <p class="barlow2 text-body-1">
                  Rak Gudang Mezzanine adalah struktur tambahan yang dibangun di
                  dalam gudang untuk menciptakan lantai tambahan di atas area...
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-tabs-window-item>

      <v-tabs-window-item value="cantilever">
        <v-row>
          <v-col cols="12" md="4">
            <v-card
              rounded="lg"
              variant="outlined"
              class="border"
              to="/produk/cantilever"
            >
              <v-img
                src="https://cdn.perkasaracking.co.id/images/produk/cantilever/rak-gudang-cantilever-TAP_1.webp"
                lazy-src="https://cdn.perkasaracking.co.id/images/produk/cantilever/rak-gudang-cantilever-TAP_2.webp"
                height="300"
                cover
                alt="Rak Gudang Cantilever TAP"
                class="zoom-image"
              />

              <v-card-text>
                <h2 class="barlow">Cantilever Rack</h2>

                <v-rating
                  half-increments
                  hover
                  :length="5"
                  :size="32"
                  :model-value="5"
                  active-color="#F3BC08"
                  class="my-2"
                />

                <p class="barlow2 text-body-1">
                  Rak Gudang Mezzanine adalah struktur tambahan yang dibangun di
                  dalam gudang untuk menciptakan lantai tambahan di atas area...
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-tabs-window-item>

      <v-tabs-window-item value="pallet">
        <v-row>
          <v-col
            cols="12"
            sm="4"
            v-for="(product, index) in data.pallet_rack"
            :key="index"
          >
            <v-card
              rounded="lg"
              variant="outlined"
              class="border"
              :to="product.to"
            >
              <v-img
                :src="product.image"
                height="300"
                :alt="product.alttext"
                :lazy-src="product.lazysrc"
                cover
                class="zoom-image"
              />

              <v-card-text>
                <h2 class="barlow">
                  {{ product.judul }}
                </h2>

                <v-rating
                  half-increments
                  hover
                  :length="5"
                  :size="32"
                  :model-value="5"
                  active-color="#F3BC08"
                  class="my-2"
                />

                <p class="barlow2 text-body-1">
                  {{ product.desc }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-tabs-window-item>

      <v-tabs-window-item value="equipment">
        <v-row no-gutters>
          <v-col
            cols="12"
            md="4"
            v-for="(product, index) in data.equipment"
            :key="index"
          >
            <v-card
              rounded="lg"
              variant="outlined"
              :to="product.to"
              class="ma-4 pa-5 border"
            >
              <v-img
                :src="product.image"
                :lazy-src="product.lazysrc"
                height="150"
                alt="Product Image"
                class="zoom-image"
              />

              <v-card-text>
                <p class="barlow mt-2">
                  {{ product.judul }}
                </p>

                <p class="barlow2 mt-2">
                  {{ product.desc }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>

<script setup>
const data = reactive({
  tab: "heavy-duty",

  heavy_duty_rack: [
    {
      judul: "Selective Pallet Rack",
      desc: "Selective Pallet Racking adalah salah satu sistem penyimpanan palet yang paling umum digunakan di gudang dan fasilitas logistik....",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/selective/selective-pallet-rack-TAP_3.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/selective/selective-pallet-rack-TAP_4.webp",
      alttext: "TAP - Rak Gudang - Heavy Duty - Selective Pallet",
      to: "/produk/heavy-duty/selective-pallet-rack",
    },

    {
      judul: "Double Deep Pallet Racking",
      desc: "Double Deep Racking sistem penyimpanan palet yang dirancang untuk meningkatkan kepadatan penyimpanan dengan menyusun palet dua tingkat....",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/double-deep/double-deep-pallet-racking-TAP_3.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/double-deep/double-deep-pallet-rack-TAP_4.webp",
      alttext: "TAP - Rak Gudang - Heavy Duty - Double Deep",
      to: "/produk/heavy-duty/double-deep",
    },

    {
      judul: "Drive In Racking",
      desc: "Drive-In Racking adalah sistem penyimpanan palet yang dirancang untuk memaksimalkan kepadatan penyimpanan dengan menghilangkan lorong (aisle)....",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/drive-in/drive-in-racking-TAP_3.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/drive-in/drive-in-racking-TAP_4.webp",
      alttext: "TAP - Rak Gudang - Heavy Duty - Drive In",
      to: "/produk/heavy-duty/drive-in",
    },

    {
      judul: "VNA Racking System",
      desc: "Verry Narrow Aisle (VNA) Racking adalah sistem penyimpanan palet yang dirancang untuk memaksimalkan penggunaan ruang gudang dengan meminimalkan jarak....",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/vna/vna-racking-system-TAP_3.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/vna/vna-racking-system-TAP-4.webp",
      alttext: "TAP - Rak Gudang - Heavy Duty - Narrow Aisle",
      to: "/produk/heavy-duty/verry-narrow-aisle",
    },

    {
      judul: "Pushback Racking System",
      desc: "Pushback Racking adalah sistem penyimpanan palet yang dirancang untuk meningkatkan kepadatan penyimpanan dengan memanfaatkan kedalaman rak...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/pushback/pushback-racking-system-TAP_3.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/pushback/pushback-racking-system-TAP_4.webp",
      alttext: "TAP - Rak Gudang - Heavy Duty - Pushback",
      to: "/produk/heavy-duty/pushback",
    },

    {
      judul: "Gravity Roller Racking",
      desc: "Pallet Flow atau Live Storage Racking adalah sistem penyimpanan palet yang dirancang untuk memaksimalkan efisiensi ruang gudang dengan memanfaatkan...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_3.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/gravity-roller-racking/flow-racking-TAP_4.webp",
      alttext: "TAP - Rak Gudang - Heavy Duty - Pallet Flow / Live Storage",
      to: "/produk/heavy-duty/flow-racking",
    },

    {
      judul: "Pallet Runner",
      desc: "Pallet Runner Racking adalah sistem penyimpanan palet yang dirancang untuk meningkatkan efisiensi ruang gudang dengan memanfaatkan sistem...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/pallet-runner/pallet-runner-TAP_3.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/pallet-runner/pallet-runner-TAP_4.webp",
      alttext: "TAP - Rak Gudang - Heavy Duty - Pallet Runner",
      to: "/produk/heavy-duty/pallet-runner",
    },

    {
      judul: "AS/RS",
      desc: "AS/RS (Automated Storage and Retrieval System) adalah sistem penyimpanan dan pengambilan barang yang terotomatisasi, yang menggunakan peralatan...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/asrs/asrs-racking-system-TAP_3.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/heavy-duty/asrs/asrs-racking-system-TAP_4.webp",
      alttext: "TAP - Rak Gudang - Heavy Duty - AS/RS",
      to: "/produk/heavy-duty/as-rs",
    },
  ],

  medium_duty_rack: [
    {
      judul: "Steel Shelving",
      desc: "Steel shelving adalah sistem rak yang terbuat dari baja, dirancang untuk menyimpan berbagai jenis barang di industri, gudang, toko ritel, atau bahkan di rumah...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/medium-duty/steel/steel-shelving.webp",
      alttext: "Rak Gudang Medium Duty - Steel Shelving",
      to: "/produk/medium-duty/steel-shelving",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/medium-duty/steel/steel-shelving-lz.webp",
    },

    {
      judul: "Plywood Shelving",
      desc: "material yang terdiri dari beberapa lapisan kayu tipis (veneer) yang direkatkan bersama dengan pola serat yang bersilangan, sehingga menghasilkan kekuatan...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/medium-duty/plywood/plywood-shelving.webp",
      alttext: "Rak Gudang Medium Duty - Plywood Shelving",
      to: "/produk/medium-duty/plywood-shelving",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/medium-duty/plywood/plywood-shelving-lz.webp",
    },
  ],

  pallet_rack: [
    {
      judul: "Pallet Kayu",
      desc: "Pallet Kayu adalah solusi penyimpanan dan transportasi yang kokoh, ekonomis, dan ramah lingkungan, banyak digunakan dalam industri logistik dan pergudangan...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/kayu/pallet-kayu.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/kayu/pallet-kayu-lz.webp",
      alttext: "TAP - Rak Gudang - Pallet - Pallet Kayu",
      to: "/produk/pallet/wooden",
    },

    {
      judul: "Pallet Plastik",
      desc: "Pallet Plastik adalah solusi penyimpanan dan transportasi yang kuat, ringan, dan tahan lama, dirancang untuk meningkatkan efisiensi logistik dan manajemen gudang...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/plastik/pallet-plastik.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/plastik/pallet-plastik-lz.webp",
      alttext: "TAP - Rak Gudang - Pallet - Pallet Plastic",
      to: "/produk/pallet/plastic",
    },

    {
      judul: "Pallet Mesh",
      desc: "Pallet Mesh adalah sistem rak penyimpanan inovatif yang dirancang untuk menyimpan berbagai jenis barang dengan aman dan terorganisir. Menggunakan struktur palet...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/mesh/pallet-mesh.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/mesh/pallet-mesh-lz.webp",
      alttext: "TAP - Rak - Gudang - Pallet - Pallet Mesh",
      to: "/produk/pallet/mesh",
    },

    {
      judul: "Stacking System",
      desc: "Stacking System adalah sistem penyimpanan yang dirancang untuk menumpuk palet secara vertikal guna memaksimalkan kapasitas ruang penyimpanan...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/stacking/stacking-system.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/stacking/stacking-system-lz.webp",
      alttext: "TAP - Rak - Gudang - Pallet - Stacking System",
      to: "/produk/pallet/stacking-system",
    },

    {
      judul: "Nesting Rack System",
      desc: "Nesting Rack System adalah sistem penyimpanan yang dirancang untuk memberikan fleksibilitas dalam pengelolaan ruang dengan rak yang dapat dilipat...",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/nesting/nesting-rack.webp",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/pallet/nesting/nesting-rak-lz.webp",
      alttext: "TAP - Rak - Gudang - Pallet - Nesting Rak Sistem",
      to: "/produk/pallet/nesting-rack",
    },
  ],

  equipment: [
    {
      judul: "Electric Pallet Truck",
      desc: "Electric Pallet Truck adalah kendaraan listrik yang didesain untuk memindahkan palet dengan efisiensi tinggi, mengurangi kerja manual, serta meningkatkan produktivitas operasional gudang.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-pallet-truck/electric-pallet-truck.webp",
      to: "/produk/equipment/electric-pallet-truck",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-pallet-truck/electric-pallet-truck-lz.webp",
    },

    {
      judul: "Electric Stacker",
      desc: "Electric Stacker merupakan truk angkat listrik yang kompak, didesain untuk mengangkat palet secara mudah, serta meningkatkan efisiensi penyimpanan dan pengambilan barang gudang.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-stracker/electric-stacker.webp",
      to: "/produk/equipment/electric-stacker",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-stracker/electric-stacker-lz.webp",
    },

    {
      judul: "Electric Tow Tractor",
      desc: "Electric Tow Tractor adalah kendaraan serbaguna yang menarik beban berat serta mengambil barang dari rak tinggi, mendukung efisiensi gudang.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-tow-tracktor/electric-tow-tractor.webp",
      to: "/produk/equipment/electric-tow-tractor-order-picker",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/electric-tow-tracktor/electric-tow-tractor-lz.webp",
    },

    {
      judul: "Three Wheel Electric Forklift",
      desc: "Three-Wheel Electric Forklift adalah forklift listrik tiga roda yang ringkas dan mudah bermanuver, ideal untuk operasi ruang sempit dengan kinerja yang efisien.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/three-wheel-electric-forklift/three-wheel-electric-forklift.webp",
      to: "/produk/equipment/three-wheel-electric-forklift",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/three-wheel-electric-forklift/three-wheel-electric-forklift-lz.webp",
    },

    {
      judul: "Four-Wheel Electric Forklift",
      desc: "Four-Wheel Electric Forklift adalah forklift listrik empat roda yang stabil dan bertenaga, dirancang untuk pengangkatan berat di luar ruangan dengan kapasitas tinggi.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/four-wheel-electric-forklift/four-wheel-electric-forklift.webp",
      to: "/produk/equipment/four-wheel-electric-forklift",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/four-wheel-electric-forklift/four-wheel-electric-forklift-lz.webp",
    },

    {
      judul: "Forklift Diesel",
      desc: "Forklift Diesel adalah forklift diesel yang dirancang untuk mengangkat beban berat di luar ruangan dengan daya tahan dan kinerja yang sangat handal.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/forklift-diesel/forklift-diesel.webp",
      to: "/produk/equipment/diesel-forklift",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/forklift-diesel/forklift-diesel-lz.webp",
    },

    {
      judul: "Forklift LPG / Gasoline",
      desc: "Forklift LPG / Gasoline adalah forklift bensin/LPG yang dirancang untuk penggunaan dalam dan luar ruangan, dengan kemampuan angkat yang kuat serta kinerja yang konsisten.",
      image:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/gasoline-lpg-forklift/gasoline-lpg-forklift.webp",
      to: "/produk/equipment/gasoline-lpg-forklift",
      lazysrc:
        "https://cdn.perkasaracking.co.id/images/produk/equipment/gasoline-lpg-forklift/gasoline-lpg-forklift-lz.webp",
    },
  ],
});
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

.zoom-image {
  transition: transform 0.3s ease;
}

.zoom-image:hover {
  transform: scale(1.1);
}

.animated-text {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.5s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Tab lebih kecil di layar kecil */
@media (max-width: 600px) {
  .v-tab {
    font-size: 12px;
    padding: 5px;
  }
}

/* Ukuran normal di layar besar */
@media (min-width: 960px) {
  .v-tab {
    font-size: 16px;
    padding: 10px;
  }
}
</style>
