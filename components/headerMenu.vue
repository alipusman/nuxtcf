<template>
  <v-navigation-drawer
    v-model="data.drawer"
    role="navigation"
    aria-label="Mobile Navigation"
    temporary
  >
    <div class="d-flex justify-space-between align-center my-3">
      <v-img
        max-height="30"
        aspect-ratio="16/9"
        src="https://cdn.perkasaracking.co.id/images/logo/TAP2.webp"
        alt="Logo TAP"
      />

      <v-img
        max-height="40"
        aspect-ratio="16/9"
        src="https://cdn.perkasaracking.co.id/images/logo/iso.webp"
        alt="Sertifikat-ISO-TAP"
      />

      <v-img
        max-height="40"
        aspect-ratio="16/9"
        src="https://cdn.perkasaracking.co.id/images/logo/bppt.webp"
        alt="Sertifikat-BPPT-TAP"
      />
    </div>

    <v-divider color="blue" />

    <v-list nav density="compact" role="menu">
      <v-list-item
        class="text-body-1 barlow"
        v-for="(item, index) in data.listmenu"
        color="primary"
        :to="item.to"
        :key="index"
        role="menuitem"
      >
        {{ item.title }}
      </v-list-item>

      <v-btn
        block
        class="my-2 barlow"
        density="comfortable"
        color="#ff3a3a"
        @click="data.drawer = false"
        aria-label="Close navigation menu"
      >
        Tutup
      </v-btn>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar
    height="110"
    :class="{ 'scrolled-app-bar': isScrolled }"
    elevate-on-scroll
    color="transparent"
    app
    flat
    style="position: fixed"
    role="navigation"
    aria-label="Main Navigation"
  >
    <template v-slot:prepend>
      <v-container
        class="d-flex d-sm-none d-none d-sm-flex d-md-none d-none d-md-flex d-lg-none"
      >
        <v-img
          width="100"
          aspect-ratio="16/9"
          :src="
            isScrolled
              ? 'https://cdn.perkasaracking.co.id/images/logo/TAP2.webp'
              : 'https://cdn.perkasaracking.co.id/images/logo/TAP.webp'
          "
          alt="TAP-LOGO"
        />

        <v-img
          src="https://cdn.perkasaracking.co.id/images/logo/iso.webp"
          alt="Sertifikat-ISO-TAP"
          class="mx-3"
          width="30"
        />

        <v-img
          src="https://cdn.perkasaracking.co.id/images/logo/bppt.webp"
          alt="Sertifikat-BPPT-TAP"
          width="40"
        />
      </v-container>
    </template>

    <template v-slot:append>
      <v-container
        class="d-flex d-sm-none d-none d-sm-flex d-md-none d-none d-md-flex d-lg-none"
      >
        <div>
          <v-app-bar-nav-icon
            :class="{ 'text-black': isScrolled, 'text-white': !isScrolled }"
            @click.stop="data.drawer = !data.drawer"
            aria-label="Toggle navigation menu"
          />
        </div>
      </v-container>
    </template>

    <v-row
      class="d-none d-lg-flex d-xl-none d-none d-lg-flex d-xl-none d-none d-xl-flex d-xxl-none"
    >
      <v-col cols="5" class="d-flex align-center">
        <v-img
          :src="
            isScrolled
              ? 'https://cdn.perkasaracking.co.id/images/logo/TAP2.webp '
              : '/images/logo/TAP2.png'
          "
          alt="TAP-LOGO"
          height="50"
        />

        <v-img
          src="https://cdn.perkasaracking.co.id/images/logo/iso.webp"
          alt="Sertifikat-ISO-TAP"
          height="50"
          style="margin-left: -25%"
        />

        <v-img
          src="https://cdn.perkasaracking.co.id/images/logo/bppt.webp"
          alt="Sertifikat-BPPT-TAP"
          height="40"
          style="margin-left: -35%"
        />
      </v-col>

      <v-col cols="7">
        <v-row class="d-flex justify-end mb-2" style="margin-top: -3%">
          <div class="background-app-bar">
            <v-col class="mt-1 ml-7" style="color: #636262">
              <v-btn
                class="text-body-2 barlow ml-auto"
                to="/aboutus"
                aria-label="Tentang Kami"
              >
                TENTANG KAMI
              </v-btn>

              <v-btn
                class="ml-6 text-body-2 barlow"
                to="/contact"
                aria-label="Kontak"
              >
                KONTAK
              </v-btn>

              <v-btn
                to="/article"
                class="ml-6 text-body-2 barlow"
                aria-label="Artikel"
              >
                ARTIKEL
              </v-btn>

              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="text-body-2 barlow mr-8"
                    style="color: #ff3a3a"
                    v-bind="props"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    EN
                  </v-btn>
                </template>

                <v-list role="menu">
                  <v-list-item
                    v-for="language in sortedLanguages"
                    :key="language.code"
                    @click="changeLanguage(language.code)"
                    :class="{
                      'bg-light-blue': selectedLanguage === language.code,
                    }"
                    role="menuitem"
                  >
                    <v-list-item-title>
                      {{ language.name }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
          </div>
        </v-row>

        <v-row class="justify-end mr-10">
          <v-btn
            size="small"
            to="/"
            variant="text"
            style="font-size: 17px"
            :class="{
              'text-black barlow': isScrolled,
              'text-white barlow': !isScrolled,
            }"
            role="menuitem"
            aria-label="Beranda"
          >
            BERANDA
          </v-btn>

          <v-menu transition="slide-y-transition" v-model="data.menuOpen">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                to="/produk"
                size="small"
                variant="text"
                style="font-size: 17px"
                :class="{
                  'text-black barlow': isScrolled,
                  'text-white barlow': !isScrolled,
                }"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PRODUK
              </v-btn>
            </template>

            <v-list class="mt-3" rounded="0" role="menu">
              <v-list-item>
                <v-row no-gutters>
                  <v-col cols="6">
                    <h3 class="ml-4 barlow" style="color: #ff3a3a">PRODUK</h3>

                    <v-list-item to="/produk/heavy-duty" role="menuitem">
                      <h4 class="barlow" style="color: #8e8e8e">HEAVY DUTY</h4>
                    </v-list-item>

                    <v-list-item to="/produk/medium-duty" role="menuitem">
                      <h4 class="barlow" style="color: #8e8e8e">MEDIUM DUTY</h4>
                    </v-list-item>

                    <v-list-item to="/produk/light-duty" role="menuitem">
                      <h4 class="barlow" style="color: #8e8e8e">LIGHT DUTY</h4>
                    </v-list-item>

                    <v-list-item to="/produk/mezzanine" role="menuitem">
                      <h4 class="barlow" style="color: #8e8e8e">MEZANINE</h4>
                    </v-list-item>
                  </v-col>

                  <v-divider
                    vertical
                    color="#FF3A3A"
                    class="my-8"
                    opacity="100"
                    thickness="5"
                  />

                  <v-col cols="5" class="ml-7">
                    <v-img
                      rounded="small"
                      width="270"
                      src="https://cdn.perkasaracking.co.id/images/layanan-dukungan/support-gudang/support-gudang-TAP_1.webp"
                      alt="Dukungan Racking Gudang TAP"
                    />

                    <h3 class="mt-5 barlow">Rangkaian Lengkap TAP®Rack Asli</h3>

                    <tombol
                      class="mt-3"
                      :operandata="{ teks: 'Produk', to: '/produk' }"
                    />
                  </v-col>
                </v-row>

                <!-- Tombol Close -->
                <v-btn
                  color="red"
                  variant="outlined"
                  block
                  class="mt-3"
                 
                >
                  TUTUP MENU
                </v-btn>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            size="small"
            variant="text"
            to="/services-support"
            style="font-size: 17px"
            :class="{
              'text-black barlow': isScrolled,
              'text-white barlow': !isScrolled,
            }"
            role="menuitem"
            aria-label="Layanan dan Dukungan"
          >
            LAYANAN & DUKUNGAN
          </v-btn>

          <v-btn
            size="small"
            to="/project"
            variant="text"
            style="font-size: 17px"
            :class="{
              'text-black barlow': isScrolled,
              'text-white barlow': !isScrolled,
            }"
            role="menuitem"
            aria-label="Projek"
          >
            PROJEK
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>

  <v-app-bar
    :class="{ 'scrolled-app-bar-line': isScrolled }"
    elevate-on-scroll
    color="transparent"
    app
    flat
    style="position: fixed"
    height="10"
    role="navigation"
    aria-label="Main Navigation"
  />
</template>

<script setup>
import { reactive, ref } from "vue";
import _ from "lodash";

const isScrolled = ref(false);

const data = reactive({
  drawer: false,
  menuOpen: false,
  listmenu: [
    { title: "BERANDA", status: true, to: "/" },
    { title: "PRODUK", status: false, to: "/produk" },
    { title: "TENTANG KAMI", status: false, to: "/aboutus" },
    { title: "LAYANAN", status: false, to: "/services-support" },
    { title: "PROJEK", status: false, to: "/project" },
    { title: "ARTIKEL", status: false, to: "/article" },
    { title: "KONTAK", status: false, to: "/contact" },
  ],
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.big-shoulders {
  font-family: "Source Sans 3", serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}

.barlow {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 700;
  font-style: normal;
}

.barlow-app {
  font-family: "Barlow Semi Condensed", serif;
  font-weight: 800;
  font-style: normal;
}

.v-app-bar {
  transition: all 0.5s ease-in-out;
  background-color: transparent;
  color: white;
  box-shadow: none;
  top: 0;
  width: 100%;
}

.hover-btn {
  background-color: #ff3a3a;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.hover-btn:hover {
  background-color: #000000;
}

.hover-btn:hover p {
  color: #ffffff;
}

.scrolled-app-bar {
  background-color: white !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
  color: black;
}

.scrolled-app-bar-line {
  background-color: #ff3a3a !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
  color: black;
}

.v-img,
.v-btn,
.v-icon {
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
}

.v-img.scrolled,
.v-btn.scrolled,
.v-icon.scrolled {
  opacity: 1;
  transform: scale(1.1);
}

.text-black {
  color: #636262 !important;
  font-weight: bold;
}

.text-white {
  color: white !important;
}

.background-app-bar {
  background-color: #f5f5f5;
  height: 70px;
  position: relative;
  clip-path: polygon(-1% 0, 100% 0, 100% 100%, 10% 100%);
}

.content-wrapper {
  height: 130%;
  display: flex;
  align-items: center;
  padding-left: 50px;
  margin-left: 50%;
}

.v-app-bar {
  transform: translateY(0) !important;
  transition: none !important;
}
</style>
