import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"
import { getStorage } from 'firebase/storage'
import { getVertexAI, getGenerativeModel } from "firebase/vertexai";

export default defineNuxtPlugin(async nuxtApp => {
    const config = useRuntimeConfig()



    const { firebase } = config.public
    const app = initializeApp(firebase)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const db = getFirestore(app)
    const storage = getStorage(app)
    const vertexAI = getVertexAI(app);
    const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });
    nuxtApp.vueApp.provide('model', model)
    nuxtApp.provide('model', model)
    nuxtApp.vueApp.provide('storage', storage)
    nuxtApp.provide('storage', storage)
    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)
    nuxtApp.vueApp.provide('db', db)
    nuxtApp.provide('db', db)
    nuxtApp.vueApp.provide('analytics', analytics)
    nuxtApp.provide('analytics', analytics) 

})