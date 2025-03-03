import { defineStore } from "pinia";
import { type livechatM } from "~/types/customer-live-chatModel";
import _ from "lodash"
import { useloadingStore } from "./loadingStore";
import { addDoc } from "firebase/firestore";

export const uselivechatStore = defineStore('livechatstore',{
    state: () => {
        return {
            datalivechat: [] as livechatM[]
        }
    },
    getters: {
        getdaftarlivechat(state){
            return state.datalivechat
        }
    },

    actions: {
        async updatemlivechat(lemparlivechat: livechatM) {
            try {
                // console.loglemparlivechat)
                useloadingStore().setLoading(true);
                // console.log'tes')
                // console.loglemparlivechat.id)
                await updatedatabase('customer_web', lemparlivechat.id!, lemparlivechat)
                useNuxtApp().$toast.success("Data Berhasil Diperbarui ");
                // console.log'27')
                this.tarikdatalivechat()
                useloadingStore().setLoading(false);

            } catch (error) {
                // console.logerror)
                useNuxtApp().$toast.error("Data Error ");
            }
        },
        
        async tambahlivechatact(lemparlivechat: livechatM) {
            try {
                // console.loglemparlivechat)
                // await add('customer_web', lemparlivechat) // nambah database tapi id random
                useloadingStore().setLoading(true);
                await tambahdatabase('customer_web',lemparlivechat) // set database id nya ditentukan
                this.tarikdatalivechat()
                useNuxtApp().$toast.success("Data Berhasil Disimpan ");
                useloadingStore().setLoading(false);
            } catch (error) {
                // console.logerror)
                useNuxtApp().$toast.error("Data Error ");
                useloadingStore().setLoading(false);

            }

        },
        
        async hapuslivechat(id: string) {
            
            try {
                useloadingStore().setLoading(true);
                await hapusdatabase('customer_web', id)
                this.tarikdatalivechat()
                useNuxtApp().$toast.error("Data Telah Dihapus");
                useloadingStore().setLoading(false);
            } catch (error) {
                useNuxtApp().$toast.error("Data Error ");

            }
        },

        async tarikdatalivechat() {
            const datatarik = await taridatadatabase('customer_web')
            this.datalivechat = datatarik as unknown as livechatM[]
        }
    }
})