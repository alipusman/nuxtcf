import { defineStore } from "pinia";
import { type cekhargaM } from "~/types/cekhargaModel";
import _ from "lodash"
import { useloadingStore } from "./loadingStore";
import { addDoc } from "firebase/firestore";

export const usecekhargaStore = defineStore('cekhargastore',{
    state: () => {
        return {
            datacekharga: [] as cekhargaM[]
        }
    },
    getters: {
        getdaftarcekharga(state){
            return state.datacekharga
        }
    },

    actions: {
        async updatemcekharga(lemparcekharga: cekhargaM) {
            try {
                // console.loglemparcekharga)
                useloadingStore().setLoading(true);
                // console.log'tes')
                // console.loglemparcekharga.id)
                await updatedatabase('cek_harga', lemparcekharga.id!, lemparcekharga)
                useNuxtApp().$toast.success("Data Berhasil Diperbarui ");
                // console.log'27')
                this.tarikdatacekharga()
                useloadingStore().setLoading(false);

            } catch (error) {
                // console.logerror)
                useNuxtApp().$toast.error("Data Error ");
            }
        },
        
        async tambahcekhargaact(lemparcekharga: cekhargaM) {
            try {
                // console.loglemparcekharga)
                // await add('cek_harga', lemparcekharga) // nambah database tapi id random
                useloadingStore().setLoading(true);
                await tambahdatabase('cek_harga',lemparcekharga) // set database id nya ditentukan
                this.tarikdatacekharga()
                useNuxtApp().$toast.success("Data Berhasil Disimpan ");
                useloadingStore().setLoading(false);
            } catch (error) {
                // console.logerror)
                useNuxtApp().$toast.error("Data Error ");
                useloadingStore().setLoading(false);

            }

        },
        
        async hapuscekharga(id: string) {
            
            try {
                useloadingStore().setLoading(true);
                await hapusdatabase('cek_harga', id)
                this.tarikdatacekharga()
                useNuxtApp().$toast.error("Data Telah Dihapus");
                useloadingStore().setLoading(false);
            } catch (error) {
                useNuxtApp().$toast.error("Data Error ");

            }
        },

        async tarikdatacekharga() {
            const datatarik = await taridatadatabase('cek_harga')
            this.datacekharga = datatarik as unknown as cekhargaM[]
        }
    }
})