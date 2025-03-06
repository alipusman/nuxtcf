<template>
  <v-container>
    <v-row>
      <v-col v-for="(product, index) in products" :key="index" cols="12" sm="4">
        <v-card
          rounded="lg"
          class="border pa-7 ma-2 card-hover"
          :to="product.to"
        >
          <div class="corner-triangle" />
          <v-img
            :src="product.image"
            :alt="product.alttext"
            width="100%"
            height="100%"
            cover
          />

          <v-card-text>
            <h2 class="barlow">
              {{ product.title }}
            </h2>
          </v-card-text>

          <div class="corner-triangle2" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const products = [
  {
    title: "Selective Pallet Rack",
    to: "/produk/heavy-duty/selective-pallet-rack",
    alttext: "Rak Selective",
    image:
      "/images/produk/heavy-duty/selective/selective-pallet-rack-TAP_1.webp",
    lazySrc:
      "/images/produk/heavy-duty/selective/selective-pallet-rack-TAP_2.webp",
  },

  {
    title: "Double Deep Pallet Racking",
    to: "/produk/heavy-duty/double-deep",
    alttext: "Rak Double Deep",
    image:
      "/images/produk/heavy-duty/double-deep/double-deep-pallet-racking-TAP_1.webp",
    lazySrc:
      "/images/produk/heavy-duty/double-deep/double-deep-pallet-racking-TAP_2.webp",
  },

  {
    title: "Drive in Racking",
    to: "/produk/heavy-duty/drive-in",
    alttext: "Rak Drive in",
    image:
      "/images/produk/heavy-duty/drive-in/drive-in-racking-TAP_1.webp",
    lazySrc:
      "/images/produk/heavy-duty/drive-in/drive-in-racking-TAP_1.webp",
  },

  {
    title: "VNA Racking System",
    to: "/produk/heavy-duty/verry-narrow-aisle",
    alttext: "Rak VNA",
    image:
      "/images/produk/heavy-duty/vna/vna-racking-system-TAP_1.webp",
    lazySrc:
      "/images/produk/heavy-duty/vna/vna-racking-system-TAP_2.webp",
  },

  {
    title: "Pushback Racking System",
    to: "/produk/heavy-duty/pushback",
    alttext: "Rak Pushback",
    image:
      "/images/produk/heavy-duty/pushback/pushback-racking-system-TAP_1.webp",
    lazySrc:
      "/images/produk/heavy-duty/pushback/pushback-racking-system-TAP_2.webp",
  },

  {
    title: "Gravity Roller Racking",
    to: "/produk/heavy-duty/flow-racking",
    alttext: "Rak Gravity Roller",
    image:
      "/images/produk/heavy-duty/gravity-roller-racking/gravity-roller-racking-TAP_1.webp",
    lazySrc:
      "/images/produk/heavy-duty/gravity-roller-racking/gravity-roller-racking-TAP_1.webp",
  },

  {
    title: "Pallet Runner",
    to: "/produk/heavy-duty/pallet-runner",
    alttext: "Pallet Runner",
    image:
      "/images/produk/heavy-duty/pallet-runner/pallet-runner-TAP_1.webp",
    lazySrc:
      "/images/produk/heavy-duty/pallet-runner/pallet-runner-TAP_2.webp",
  },

  {
    title: "ASRS Racking System",
    to: "/produk/heavy-duty/as-rs",
    alttext: "ASRS Racking System",
    image:
      "/images/produk/heavy-duty/asrs/asrs-racking-system-TAP_1.webp",
    lazySrc:
      "/images/produk/heavy-duty/asrs/asrs-racking-system-TAP_2.webp",
  },
];
</script>

<style scoped>
.barlow {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 700;
  font-style: normal;
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.red-line {
  position: absolute;
  width: 60%;
  height: 4px;
  background-color: red;
  left: 50%;
  transform: translateX(-50%);
}

.red-line.top {
  top: 0;
}

.red-line.bottom {
  bottom: 0;
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.corner-triangle {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 11px;
  border-left: 120px solid transparent;
  border-top: 30px solid #ff3a3a;
}

.corner-triangle2 {
  position: absolute;
  top: 92%;
  right: 60%;
  width: 0;
  height: 0;
  border-right: 120px solid transparent;
  border-bottom: 30px solid #ff3a3a;
}
</style>
