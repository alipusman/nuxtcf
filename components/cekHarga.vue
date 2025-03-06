<template>
  <loading-tap />
  <v-container>
    <!-- <v-dialog v-model="showDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title>Batas Klik Tercapai</v-card-title>
        <v-card-text>
          Anda hanya bisa mengecek harga sebanyak 3 kali. Silakan hubungi
          marketing kami untuk informasi lebih lanjut.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="tutupdialog">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->

    <v-dialog
      v-model="data.dialogresult"
      scrollable
      :overlay="false"
      max-width="400px"
      transition="dialog-transition"
    >
      <v-card class="" style="border-radius: 10px">
        <div class="corner-triangle"></div>

        <v-card-text style="border-bottom: 3px solid #ff3a3a">
          <h1 class="barlow">ESTIMASI HARGA</h1>

          <span
            :class="
              $vuetify.display.mdAndUp
                ? 'barlow2 text-body-1 '
                : 'barlow2 text-body-2'
            "
            >Hasil harga di bawah ini adalah estimasi yang dihitung oleh AI
            berdasarkan perhitungan otomatis.
          </span>
          <!-- <v-divider
            thickness="4"
            style="width: 100%"
            color="#FF3A3A"
            class="opacity-100 mt-2 mx-auto"
          /> -->
        </v-card-text>

        <v-card-text v-html="result" v-if="data.aistatus"> </v-card-text>
        <v-card-text v-if="!data.aistatus">
          <v-row>
            <v-col cols="12" sm="11">
              <v-row>
                <v-col>
                  <p class="barlow2 mt-2">Level Rak :</p>
                </v-col>

                <v-col>
                  <v-card variant="outlined" density="compact">
                    <v-card-text class="pa-2">
                      <p class="barlow text-body-1 text-red">
                        {{ result.LevelRak }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <p class="barlow2 mt-2">Jumlah Rak :</p>
                </v-col>
                <v-col>
                  <v-card variant="outlined" density="compact">
                    <v-card-text class="pa-2">
                      <p class="barlow text-body-1 text-red">
                        {{ result.JumlahRak }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="barlow2 mt-2">Jumlah Pallet :</p>
                </v-col>
                <v-col>
                  <v-card variant="outlined" density="compact">
                    <v-card-text class="pa-2">
                      <p class="barlow text-body-1 text-red">
                        {{ result.JumlahPallet }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <!-- <v-row>
                <v-col>
                  <p class="barlow2">Rak Setengah Gangway :</p>
                </v-col>
                <v-col>
                  <v-card variant="outlined" density="compact">
                    <v-card-text class="pa-2">
                      <p class="barlow text-body-1 text-red">
                        {{ result.RakSetengahGangway }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col>
                  <p class="barlow2 mt-2">Lebar Rak :</p>
                </v-col>
                <v-col>
                  <v-card variant="outlined" density="compact">
                    <v-card-text class="pa-2">
                      <p class="barlow text-body-1 text-red">
                        {{ result.LebarRak }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row> -->
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card elevation="4">
                <div class="corner-triangle2"></div>
                <v-card-text class="barlow2">
                  <v-row style="margin-bottom: -5%">
                    <v-col cols="6" sm="7">
                      <p>Total</p>
                    </v-col>
                    <v-col>
                      <p>: {{ result.TotalBiaya }}</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" sm="7">
                      <p>Biaya PPN</p>
                    </v-col>
                    <v-col>
                      <p>: {{ result.BiayaPPN }}</p>
                    </v-col>
                  </v-row>
                  <v-divider class="mt-3 mb-1"></v-divider>
                  <v-row>
                    <v-col class="mt-2" cols="5" sm="5">
                      <p>Harga Final</p>
                    </v-col>
                    <v-col>
                      <p
                        :class="
                          $vuetify.display.mdAndUp
                            ? 'font-weight-bold barlow text-h6 text-red'
                            : 'font-weight-bold barlow text-body-1 mt-1 text-red'
                        "
                      >
                        : {{ result.HargaFinal }}
                      </p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <tombol
            block
            class="d-flex justify-center mt-4"
            :operandata="{
              teks: 'Close',
              variant: 'flat',
            }"
            @click="data.dialogresult = false"
          />
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-row>
      <v-col cols="12" sm="6" class="mb-4">
        <v-img
          cover
          src="https://cdn.aresa-digital.com/images/pallet-TAP_1.webp"
          lazy-src="https://cdn.aresa-digital.com/images/pallet-TAP_2.webp"
          alt="Pallet Dimensi TAP"
        />
      </v-col>

      <v-col cols="12" sm="6">
        <v-card
          elevation="6"
          rounded="xl"
          :width="$vuetify.display.mdAndUp ? '' : '343'"
        >
          <div class="corner-triangle" />

          <v-card-title>
            <v-container>
              <h2
                :class="$vuetify.display.mdAndUp ? 'barlow' : 'barlow text-h5'"
              >
                CEK ESTIMASI HARGA
              </h2>

              <p
                :class="
                  $vuetify.display.mdAndUp
                    ? 'barlow2 text-h6 mb-1 '
                    : 'barlow2 text-body-2 mb-1 '
                "
              >
                Berdasarkan Ukuran Pallet dan Luas Gudang!
              </p>

              <v-divider
                :style="{
                  width: $vuetify.display.smAndUp ? '390px' : '150px',
                }"
                thickness="4"
                style="border-radius: 15px"
                color="#FF3A3A"
                class="opacity-100"
              />
            </v-container>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="8">
                  <p
                    :class="
                      $vuetify.display.mdAndUp
                        ? 'barlow text-6'
                        : 'barlow text-body-1 text-red'
                    "
                  >
                    Panjang lebar palet
                  </p>

                  <v-btn-toggle v-model="toggle_exclusive">
                    <v-btn
                      @click="setukuranpalet(1000, 1200)"
                      variant="outlined"
                      style="height: 35px"
                      color="red"
                      size="small"
                      :class="
                        $vuetify.display.mdAndUp
                          ? 'mt-3 ml-2 text-caption'
                          : 'mt-3 text-caption'
                      "
                    >
                      1000 x 1200
                    </v-btn>

                    <v-btn
                      variant="outlined"
                      style="height: 35px"
                      color="red"
                      size="small"
                      density="comfortable"
                      class="mt-3 text-caption"
                      @click="setukuranpalet(1100, 1100)"
                    >
                      1100 x 1100
                    </v-btn>

                    <v-btn
                      @click="setukuranpalet(1200, 1200)"
                      variant="outlined"
                      style="height: 35px"
                      color="red"
                      size="small"
                      density="comfortable"
                      :class="
                        $vuetify.display.mdAndUp
                          ? 'mt-3 ml-2 text-caption'
                          : 'mt-3 text-caption'
                      "
                    >
                      1200 x 1200
                    </v-btn>
                  </v-btn-toggle>

                  <!-- <v-btn
                      variant="outlined"
                      style="height: 35px"
                      color="red"
                      size="small"
                      :class="$vuetify.display.mdAndUp ? 'mt-3 ml-2 text-caption' : 'mt-3 text-caption'"
                      >1100 x 1100
                    </v-btn>
                    <v-btn
                      variant="outlined"
                      style="height: 35px"
                      color="red"
                      size="small"
                      :class="$vuetify.display.mdAndUp ? 'mt-3 ml-2 text-caption' : 'mt-3 text-caption'"
                      >1200 x 1200
                    </v-btn> -->
                </v-col>

                <v-col cols="12" sm="4">
                  <p
                    :class="
                      $vuetify.display.mdAndUp
                        ? 'barlow text-6'
                        : 'barlow text-body-1 text-red'
                    "
                  >
                    Tinggi Pallet mm
                  </p>

                  <v-text-field
                    disabled
                    v-model.number="data.tinggipallet"
                    clearable
                    placeholder="0"
                    suffix="H (mm)"
                    class="barlow2"
                    persistent-hint
                    persistent-suffix
                    variant="underlined"
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3
                    :class="
                      $vuetify.display.mdAndUp
                        ? 'barlow text-6'
                        : 'barlow text-body-1 text-red'
                    "
                    style="margin-bottom: -13%"
                  >
                    Ukuran Gudang
                  </h3>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="data.panjang"
                    hint="Panjang Gudang"
                    placeholder="0"
                    suffix="mm"
                    class="barlow2"
                    persistent-hint
                    variant="underlined"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="data.lebar"
                    hint="Lebar Gudang"
                    placeholder="0"
                    suffix="mm"
                    class="barlow2"
                    persistent-hint
                    variant="underlined"
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="data.tinggi"
                    hint="Tinggi Gudang"
                    placeholder="0"
                    suffix="mm"
                    class="barlow2"
                    persistent-hint
                    variant="underlined"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row class="text-center mt-5">
                <v-col>
                  <v-card rounded="xl" elevation="4">
                    <v-card-title>
                      <h2 class="barlow mt-2">Biodata</h2>
                      <v-divider
                        width="100"
                        thickness="4"
                        style="border-radius: 15px"
                        color="#FF3A3A"
                        class="opacity-100 mx-auto mb-6"
                      />
                    </v-card-title>

                    <v-card-text>
                      <v-form v-model="data.valid" ref="myform">
                        <v-row>
                          <v-col cols="12" sm="4" md="4">
                            <v-text-field
                              :style="{
                                marginBottom: $vuetify.display.mdAndUp
                                  ? ''
                                  : '-6%',
                              }"
                              :rules="data.rulesbiodata"
                              v-model="data.nama_customer"
                              class="barlow2"
                              label="Nama"
                              density="compact"
                              variant="outlined"
                            >
                            </v-text-field>
                          </v-col>

                          <v-col cols="12" sm="4" md="4">
                            <v-text-field
                              :style="{
                                marginBottom: $vuetify.display.mdAndUp
                                  ? ''
                                  : '',
                              }"
                              v-model="data.nama_perusahaan"
                              class="barlow2"
                              label="Nama PT"
                              density="compact"
                              :rules="data.rulesbiodata"
                              append-inner-icon="mdi-domain"
                              variant="outlined"
                            >
                            </v-text-field>
                          </v-col>

                          <v-col cols="12" sm="4" md="4">
                            <v-text-field
                              :style="{
                                marginTop: $vuetify.display.mdAndUp
                                  ? ''
                                  : '-6%',
                              }"
                              placeholder="+62"
                              v-model="data.wa_customer"
                              class="barlow2"
                              label="Nomor Whatsapp"
                              density="compact"
                              :rules="data.rulesbiodatano"
                              append-inner-icon="mdi-phone-outline"
                              variant="outlined"
                            >
                            </v-text-field>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn
                    block
                    aria-label="cek Harga"
                    color="#FF3A3A"
                    class="barlow"
                    :disabled="isButtonDisabled"
                    @click="handleClick"
                    >CEK HARGA</v-btn
                  >

                  <div v-if="clickCount >= 3">
                    <p class="barlow mt-2 text-red">
                      *Anda hanya bisa mengecek harga sebanyak 3 kali. Silakan
                      hubungi marketing kami untuk informasi lebih lanjut.
                    </p>
                  </div>
                </v-col>
                <!-- <v-col>
                  <v-btn block color="#FF3A3A" class="barlow" @click="validateai()"
                    >CEK HARGA AI</v-btn
                  >
                </v-col> -->
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import _ from "lodash";
import MarkdownIt from "markdown-it";
import { cekpenawaran } from "~/composables/utils";
const cekhargastore = usecekhargaStore();

const myform = ref();
// const aistatus = ref(false);
// const panjangpalet = ref(1200);
// const lebarpalet = ref(1000);
// const tinggipallet = ref(1250);
// const lebar = ref(24000);
// const panjang = ref(96000);
// const tinggi = ref(8000);
// const nama_customer = ref("");
// const nama_perusahaan = ref("");
// const wa_customer = ref("");
// const dialogresult = ref(false);
const result = ref();

const data = reactive({
  rulesbiodata: [(value: any) => !!value || "Item is required"],
  rulesbiodatano: [
    (value: any) => !!value || "Item is required",
    (value: string) => /^[0-9]+$/.test(value) || "Hanya boleh angka",
    (value: string | any[]) =>
      (value.length >= 10 && value.length <= 15) ||
      "Nomor telepon harus 10-15 digit",
  ],
  valid: false,
  aistatus: false,
  panjangpalet: 1200,
  lebarpalet: 1000,
  tinggipallet: 1250,
  lebar: 12000,
  panjang: 24000,
  tinggi: 6000,
  nama_customer: "",
  nama_perusahaan: "",
  wa_customer: "",
  dialogresult: false,
  safelist: [
    // {
    //   nama: "Amanda Khoirunnisa",
    //   jabatan: "Sales 1",
    //   img: "https://cdn.aresa-digital.com/images/live-chat/1.webp",
    //   phone: "6281511769507",
    // },
    {
      nama: "Aria Wardana",
      jabatan: "Sales 2",
      img: "https://cdn.aresa-digital.com/images/live-chat/2.webp",
      phone: "6287775434777",
    },
    {
      nama: "Ahmad Fathoni",
      jabatan: "Sales 3",
      img: "https://cdn.aresa-digital.com/images/live-chat/3.webp",
      phone: "628999967932",
    },
    {
      nama: "Dwi Purnanto Jati",
      jabatan: "Sales 4",
      img: "https://cdn.aresa-digital.com/images/live-chat/4.webp",
      phone: "628561510011",
    },
    {
      nama: "Sigit Djuhartono",
      jabatan: "Sales 5",
      img: "https://cdn.aresa-digital.com/images/live-chat/5.webp",
      phone: "6281295966673",
    },
    {
      nama: "Anggoro Widyatmoko",
      jabatan: "Sales 6",
      img: "https://cdn.aresa-digital.com/images/live-chat/6.webp",
      phone: "6281932226292",
    },
    {
      nama: "Sutarti",
      jabatan: "Sales 7",
      img: "https://cdn.aresa-digital.com/images/live-chat/7.webp",
      phone: "6285892600347",
    },
  ],
});

const toggle_exclusive = ref(0);
function getRandomNumber() {
  return Math.floor(Math.random() * 7);
}

import { ref, onMounted } from "vue";
const clickCount = ref(0);
const isButtonDisabled = ref(false);
const showDialog = ref(false);
onMounted(() => {
  // Ambil jumlah klik dari sessionStorage saat halaman dimuat
  const savedClicks = sessionStorage.getItem("clickCount");
  if (savedClicks) {
    clickCount.value = parseInt(savedClicks, 10);
  }
  checkButtonState();
});

const handleClick = async () => {
  if (clickCount.value >= 3) {
    showDialog.value = true; // Tampilkan dialog saat klik ke-4
    return;
  }
  const isValid = await validate(); // Validasi data sebelum menambah klik
  if (isValid) {
    clickCount.value++;
    sessionStorage.setItem("clickCount", clickCount.value); // Simpan ke sessionStorage hanya jika valid
    checkButtonState();
  }
};

const checkButtonState = () => {
  if (clickCount.value >= 3) {
    isButtonDisabled.value = true;
    showDialog.value = true; // Tampilkan dialog jika sudah mencapai batas
  }
};

function tutupdialog(){
  showDialog.value = false
}
async function validate() {
  const { valid } = await myform.value.validate();

  if (valid) {
    await calculator();
    return true; // Hanya kembalikan `true` jika valid
  }
  return false; // Jangan hitung klik jika tidak valid
}

async function validateai() {
  const { valid } = await myform.value.validate();
  console.log("valid");
  if (valid) {
    calculatorai();
  }
}

const setukuranpalet = (pp: number, lp: number) => {
  data.lebarpalet = pp;
  data.panjangpalet = lp;
};

interface replyahargaM {
  BiayaPPN: string;
  HargaFinal: string;
  JumlahPallet: number;
  JumlahRak: number;
  LebarRak: string;
  LevelRak: number;
  RakSetengahGangway: string;
  TotalBiaya: string;
}
const calculator = async () => {
  try {
    useloadingStore().setLoading(true);
    const tinggigudang = data.tinggi;
    let lebargudang = data.lebar;
    const panjanggudang = data.panjang;
    // lebargudang = roundDownToMultiple(lebargudang);
    const b = await hitungPalletDanHarga(
      data.lebarpalet,
      data.panjangpalet,
      data.tinggipallet,
      lebargudang,
      panjanggudang,
      tinggigudang
    );
    // const b = calculateStorage(
    //   data.panjangpalet,
    //   data.lebarpalet,
    //   data.tinggipallet,
    //   lebargudang,
    //   panjanggudang,
    //   tinggigudang
    // );
    useloadingStore().setLoading(false);

    // const b = await hitunggudang(data.panjangpalet, data.lebarpalet,data.tinggipallet,lebargudang,panjanggudang,tinggigudang)
    // return console.log({ b });
    result.value = b;
    const c = _.assign(
      {
        Nama: data.nama_customer,
        NamaPerusahaan: data.nama_perusahaan,
        NomorCustomer: data.wa_customer,
      },
      b
    );
    const madown = await jsonToMarkdown(c);
    console.log({ madown });
    const encodedMessage = encodeURIComponent(
      `Hallo saya, mau cek harga seputar Rack Gudang, boleh dibantu informasinya dari perkasaracking.co.id?\n\n# Estimasi Harga Rak SPR di web dengan informasi sbb : \n\n# ${madown} `
    );
    // console.log({c})
    // data.dialogresult = true;
    const chatUrl = `https://api.whatsapp.com/send?phone=${
      data.safelist[getRandomNumber()].phone
    }&text=${encodedMessage}\n\n# Marketing kami akan segera menghubungi Bapak/Ibu untuk konfirmasi data lebih lanjut \n\m#.Terima kasih.`;
    window.open(chatUrl, "_blank");

    cekpenawaran();
    cekhargastore.tambahcekhargaact(c);
  } catch (error) {
    useloadingStore().setLoading(false);
  }
};

async function jsonToMarkdown(data: any) {
  let markdown = `# Detail Harga Rak\n\n`;

  Object.entries(data).forEach(([key, value]) => {
    markdown += `- **${key}**: ${value}\n`;
  });

  return markdown;
}

const calculatorai = async () => {
  try {
    console.log("kalkulaksdf ai");
    useloadingStore().setLoading(true);
    const md = new MarkdownIt();
    useloadingStore().setLoading(true);
    const tinggigudang = data.tinggi;
    let lebargudang = data.lebar;
    const panjanggudang = data.panjang;
    // lebargudang = roundDownToMultiple(lebargudang);
    // const b =  calculateStorage(data.panjangpalet, data.lebarpalet,data.tinggipallet,lebargudang,panjanggudang,tinggigudang)
    const b = await hitungGudang(
      data.panjangpalet,
      data.lebarpalet,
      data.tinggipallet,
      lebargudang,
      panjanggudang,
      tinggigudang
    );
    console.log(b.perhitungan);
    const madown = await jsonToMarkdown(b.perhitungan);
    console.log({ madown });

    useloadingStore().setLoading(false);
    data.aistatus = true;

    const encodedMessage = encodeURIComponent(
      `Hallo saya, mau cek harga seputar Rack Gudang, boleh dibantu informasinya dari perkasaracking.co.id?\n\n${madown}`
    );
    // data.dialogresult = true;
    const chatUrl = `https://api.whatsapp.com/send?phone=${
      data.safelist[getRandomNumber()].phone
    }&text=${encodedMessage} Dengan Harga Perkiraaan`;
    window.open(chatUrl, "_blank");
    cekpenawaran();
  } catch (error) {
    useloadingStore().setLoading(false);
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

.corner-triangle {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 19px;
  border-left: 120px solid transparent;
  border-top: 50px solid #ff3a3a;
}

.corner-triangle2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 19px;
  border-left: 30px solid transparent;
  border-top: 30px solid #dadada;
}
</style>
