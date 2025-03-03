import { getVertexAI, getGenerativeModel } from "firebase/vertexai";
import _ from "lodash";

// export const hitunggudang = async (panjangpalet : number, lebarpalet:number, tinggipalet: number, lebar: number, panjang: number, tinggi: number) => {
//     const vertexAI = getVertexAI();
//     const model = getGenerativeModel(vertexAI, { model: "gemini-2.0-flash-001" });

//     const b = roundDownToMultiple(lebar)
//     console.log(panjangpalet, lebarpalet, tinggipalet, lebar, panjang, tinggi)
//     // Provide a prompt that contains text

//     // To generate text output, call generateContent with the text input
//     const result = await model.generateContent({

//         contents: [{
//             role: 'user',
//             parts: [
//                 {
//                     text: `Pallet ukuran (mm) = W.${panjangpalet} x D.${lebarpalet} x HP.${tinggipalet} mm

// Ukuran Gudang (mm) = L. ${lebar} x P. ${panjang} x HG. ${tinggi} mm

// Jumlah Pallet = 2 (JP) Level = HG/(HP+250 mm) (LV)

// Harga per pallet (HPP) =  Rp. 600.000

// Ukuran Lebar Rak (WR) =  W. x2 + 300 + 100 mm

// Ukuran = Depth Rak + Setengah Gangway (DR) D + 1600 mm

// Maka ukuran rak + Setengah Gangway?

// Jumlah Rak Total = (JR) Jumlah Arah L : L /DR Jumlah Arah P : P/WR

// Jumlah Pallet (JPL) =  JR x JP x LV

// Harga = Total + PPN 11% JPL x HPP

//                 `  },

//             ]
//         }],

//     });

//     const respons2 = result.response;
//     const text = respons2.text()
//     // console.log(text)
//     return text
// }

export const hitungGudang = async (
  panjangPalet: number, 
  lebarPalet: number, 
  tinggiPalet: number, 
  lebar: number, 
  panjang: number, 
  tinggi: number
) => {
  const vertexAI = getVertexAI();
  const model = getGenerativeModel(vertexAI, { model: "gemini-2.0-flash-001" });

  // Perhitungan manual sebelum dikirim ke AI
  const jp = 2;
  const lv = Math.floor(tinggi / (tinggiPalet + 250)); // Level rak
  const hpp = 600000; // Harga per pallet

  const wr = panjangPalet * 2 + 300 + 100;
  const dr = lebarPalet + 1600;

  const jrL = Math.floor(lebar / dr);  // Jumlah rak arah lebar
  const jrP = Math.floor(panjang / wr); // Jumlah rak arah panjang
  const jr = jrL * jrP;

  const jpl = jr * jp * lv; // Total pallet
  const harga = jpl * hpp * 1.11; // Harga total + PPN 11%

  console.log("Jumlah Level (LV):", lv);
  console.log("Jumlah Rak (JR):", jr);
  console.log("Jumlah Pallet (JPL):", jpl);
  console.log("Total Harga:", harga);

  // Kirim ke AI untuk mendapatkan konfirmasi & penjelasan tambahan
  const result = await model.generateContent({
      contents: [{
          role: 'user',
          parts: [{
              text: `Perhitungan penyimpanan pallet di gudang:

Pallet ukuran: ${panjangPalet} x ${lebarPalet} x ${tinggiPalet} mm
Ukuran Gudang: ${lebar} x ${panjang} x ${tinggi} mm

Jumlah Level: ${lv}
Jumlah Rak Total: ${jr}
Jumlah Pallet yang bisa disimpan: ${jpl}

Total Harga Penyimpanan: Rp ${harga.toLocaleString('id-ID')}
`
          }]
      }],
  });

  const text = result.response.candidates?.[0]?.content?.parts?.[0]?.text || "";

  // Format JSON hasil perhitungan
  const hasilJSON = {
      pallet: {
          panjang: panjangPalet,
          lebar: lebarPalet,
          tinggi: tinggiPalet
      },
      gudang: {
          lebar,
          panjang,
          tinggi
      },
      perhitungan: {
          jumlah_level: lv,
          jumlah_rak_total: jr,
          jumlah_pallet_total: jpl,
          total_harga: harga.toLocaleString('id-ID').replace(/,/g, '.')
      },
      penjelasan_ai: text
  };

  return hasilJSON;
};

// export const chatinganai = async (texting : string) => {
//     const vertexAI = getVertexAI();
//     const model = getGenerativeModel(vertexAI, { model: "gemini-2.0-flash-001" });
//     const systemInstruction = `
//       PT. Tangguh Adi Perkasa TAP,
//       mitra terpercaya dalam solusi penyimpanan gudang yang canggih dan berkualitas.
//       Dengan pengalaman lebih dari 17 tahun, kami berkomitmen untuk menghadirkan 
//       sistem rak gudang yang optimal bagi berbagai industri...
//     `;

//     const contents = [
//       { role: "user", parts: [{ text: "selamat siang" }] },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Selamat siang! Ada yang bisa saya bantu? Apakah Anda ingin mengetahui lebih lanjut tentang PT. Tangguh Adi Perkasa (TAP) atau solusi penyimpanan gudang yang kami tawarkan?",
//           },
//         ],
//       },
//       { role: "user", parts: [{ text: "contoh rack heavy duty" }] },
//       {
//         role: "model",
//         parts: [
//           {
//             text: `Baik, berikut beberapa contoh rak heavy duty yang umum digunakan:
//             - **Selective Pallet Racking**: Memungkinkan akses langsung ke setiap palet.
//             - **Drive-In/Drive-Thru Racking**: Memaksimalkan ruang dengan mengurangi lorong.
//             - **Push-Back Pallet Racking**: Menyimpan palet lebih dalam dengan sistem dorong.`,
//           },
//         ],
//       },
//       { role: "user", parts: [{ text: "berapa luas yang dibutuhkan" }] },
//     ];

//     const generationConfig = {
//       temperature: 1,
//       topP: 0.95,
//       maxOutputTokens: 8192,
//     };

//     const safetySettings = [
//       { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
//       { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
//       { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
//       { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
//     ];

//     const result = await model.generateContent({
//       contents,
//       generationConfig,
//       safetySettings,
//       systemInstruction: [{ text: systemInstruction }],
//     });

//     console.log(result.response.text());
// }

export const calculateStorage = (panjangpalet : number, lebarpalet:number, tinggipalet: number, lebar: number, panjang: number, tinggi: number) => {

    console.log({panjangpalet,lebarpalet})
    const HP = tinggipalet; // Tinggi Pallet (mm)
    const tambahanVertikal = 250; // Tambahan ruang vertikal (mm)
    const HG = tinggi; // Tinggi Gudang (mm)
    const W = lebarpalet; // Lebar Pallet (mm)
    const D = panjangpalet; // Kedalaman Pallet (mm)
    const L = lebar; // Lebar Gudang (mm)
    const P = panjang; // Panjang Gudang (mm)
    const hargaPerPallet = 600000; // Harga per pallet (Rp)
    const PPN = 0.11; // Pajak PPN (11%)
    console.log({HP,lebarpalet})
    // 1. Level Rak (LV)
    let LV = Math.floor(HG / (HP + tambahanVertikal));
    
    // 2. Ukuran Lebar Rak (WR)
    let WR = (W * 2) + 300 + 100;
    
    // 3. Ukuran Rak + Setengah Gangway (DR)
    let DR = D + 1600;
    
    // 4. Jumlah Rak Total (JR)
    let jumlahRakArahL = Math.floor(L / DR);
    let jumlahRakArahP = Math.floor(P / WR);
    let JR = jumlahRakArahL * jumlahRakArahP;
    
    // 5. Jumlah Pallet (JPL)
    let JP = 2; // Pallet per rak
    let JPL = JR * JP * LV;
    
    // 6. Total Biaya
    let totalBiaya = JPL * hargaPerPallet;
    let totalPPN = totalBiaya * PPN;
    let hargaFinal = totalBiaya + totalPPN;
    
    // Output hasil
    return {

        UkuranPallet : panjangpalet +' x ' +lebarpalet,
        UkuranGudang : lebar + ' x ' +panjang,
        LevelRak: LV,
        // LebarRak: WR + " mm",
        // RakSetengahGangway: DR + " mm",
        JumlahRak: JR,
        JumlahPallet: JPL,
        TotalBiaya: "Rp. " + totalBiaya.toLocaleString(),
        BiayaPPN: "Rp. " + totalPPN.toLocaleString(),
        HargaFinal: "Rp. " + hargaFinal.toLocaleString()
    };
}

export const hitungPalletDanHarga = async (lebarPallet : number, panjangPallet : number, tinggiPallet :number, lebarRuangan : number, panjangRuangan : number, tinggiRuangan: number) =>{
    // Konversi ukuran ruangan dari meter ke milimeter
    // lebarRuangan *= 1000;
    // panjangRuangan *= 1000;
    // tinggiRuangan *= 1000;
    console.log({lebarPallet, panjangPallet,tinggiPallet, lebarRuangan, panjangRuangan, tinggiRuangan})
    // Hitung jumlah pallet dalam setiap arah
    const arahLebar = lebarRuangan / (1650 + lebarPallet);
    const arahPanjang = panjangRuangan / (1650 + panjangPallet);
    const levelPallet = Math.floor(tinggiRuangan / (tinggiPallet + 250)); // Harus integer

    // Total jumlah pallet
    const totalPallet = Math.ceil(arahLebar) * Math.floor(arahPanjang) * levelPallet * 2;

    // Harga per pallet berdasarkan ukuran
    const hargaPallet = {
        1000: 600000, // Rp600.000 untuk ukuran pallet 1000 mm
        1100: 700000, // Rp700.000 untuk ukuran pallet 1100 mm
        1200: 800000  // Rp800.000 untuk ukuran pallet 1200 mm
    };

    // Ambil harga sesuai ukuran pallet yang digunakan
    const hargaPerPallet = hargaPallet[lebarPallet] || 0;
    console.log(hargaPallet)
    // Hitung estimasi harga
    const estimasiHarga = totalPallet * hargaPerPallet;
    const ppn = estimasiHarga * 0.11; // Pajak 11%
    const hargaTotal = estimasiHarga + ppn;

    return {
        ukuranPallet : lebarPallet + " x " + panjangPallet + " x H " + tinggiPallet,
        ukuranGudang : panjangRuangan + " x " + lebarRuangan + " x H " + tinggiRuangan,
        levelPallet,
        totalPallet,
        estimasiHarga: `Rp${estimasiHarga.toLocaleString()}`,
        ppn: `Rp${ppn.toLocaleString()}`,
        hargaTotal: `Rp${hargaTotal.toLocaleString()}`
    };
}