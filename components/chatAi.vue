<template>
  <v-container class="my-5">
    <v-card elevation="3">
      <div class="corner-triangle"></div>
      <v-card-title class="barlow">
        <p class="custom-text barlow2">
          <span style="color: #ff3a3a">Si CS PINTAR</span> | Intelligent
          Customer Service <br />
        </p>

        <p class="custom-text barlow2">
          <span style="color: #ff3a3a">Intelligenter Kundenservice </span>|
          지능형 고객 서비스 <br />
          智能客服 | Этот CS УМНЫЙ
        </p>
      </v-card-title>

      <v-card-text class="barlow2">
        <v-divider />

        <div v-for="(msg, index) in data.chat" :key="index">
          <v-card class="mt-2">
            <v-card-title primary-title>
              <v-chip :color="msg.user === 'bot' ? 'blue' : 'green'">
                {{ msg.user == "user" ? "user" : "Customer Services" }}
              </v-chip>
            </v-card-title>

            <v-card-text v-html="msg.text"> </v-card-text>
          </v-card>
          <!-- <v-chip :color="msg.user === 'bot' ? 'blue' : 'green'" style="max-height: 100px; height: auto" class="mt-1">
          </v-chip> -->
        </div>
      </v-card-text>

      <v-card-actions>
        <v-text-field
          v-model="message"
          label="Ketik pertanyaan... | 输入问题... | Type the question... | 질문을 입력하세요..."
          @keyup.enter="sendMessage"
          clearable
          class="barlow2"
          persistent-hint
          persistent-suffix
          variant="solo-inverted"
        />
        <!-- <v-btn color="#FF3A3A" class="barlow mb-6" @click="sendMessage">KIRIM</v-btn> -->
        <tombol
          class="mb-5"
          aria-label="Ai Chat"
          :operandata="{
            teks: 'KIRIM',
            variant: 'flat',
          }"
          @click="sendMessage"
        />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useFetch } from "#app";
import { tambahdatabase } from "~/composables/useFirestore";
import _ from "lodash";
import { useFirestore } from "vuefire";
import { doc, onSnapshot } from "firebase/firestore";

import MarkdownIt from "markdown-it";
import { cekaichat } from "~/composables/utils";

const message = ref("");
const messages = ref([]);
const data = reactive({
  chat: [],
});

const sendMessage = async () => {
  if (!message.value) return;
  cekaichat()
  data.chat.push({ text: message.value, user: "user" });

  const b = await tambahdatabase("generate", { prompt: message.value });

  message.value = "";

  const db = useFirestore();
  const documentRef = doc(db, "generate", b);
  const md = new MarkdownIt();
  onSnapshot(documentRef, (docSnap) => {
    if (docSnap.exists()) {
      const c = docSnap.data();
      const response = c["response"];
      if (!_.isUndefined(response)) {
        console.log({ response });
        const parsedText = md.render(response);
        data.chat.push({ text: parsedText, user: "bot" });
      }
    }
  });

  // // Ambil respons chatbot dari Firestore
  // setTimeout(async () => {
  //   const botResponse = await fetchChatbotResponse(b);
  //   if (botResponse) {
  //     data.chat.push({ text: botResponse['response'], user: 'bot' });
  //   }
  // }, 10000);
};

// Ambil respons chatbot dari Firestore
const fetchChatbotResponse = async (b: string) => {
  const res = await tarikdetaildatabase2("generate", b);
  console.log({ res });
  return res;
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

.custom-text {
  font-size: 15px; /* Default untuk mobile */
}

@media (min-width: 960px) {
  /* Tambahkan aturan untuk layar besar */
  .custom-text {
    font-size: 30px; /* Perbesar font pada layar lebih besar */
  }
}
</style>
