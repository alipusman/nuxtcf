import _ from "lodash"
import { useFetch } from "nuxt/app"
import { ArticleM } from "~/types/artikelM"

export default defineEventHandler(async (event) => {
    const d = await $fetch('https://api-aresa.alipusman.workers.dev/data?key=artikel')
    const articles : ArticleM[] = d.data as unknown as ArticleM[]

    return articles
    // const c : ArticleM[] = [
    //     {    
    //         "id": "artikel-1", // id artikel ga boleh sama
    //         "title": "Panduan Memilih Rak Heavy Duty untuk Gudang",
    //         "slug": "panduan-memilih-rak-heavy-duty",
    //         "description": "Cari rak heavy duty yang cocok untuk gudang? Simak panduan lengkap berikut agar tidak salah pilih!",
    //         "content": [
    //           { "type": "h2", "text": "Apa Itu Rak Heavy Duty?", "cols": 12 },
    //           { "type": "p", "text": "Rak Heavy Duty adalah sistem penyimpanan yang mampu menahan beban berat...", "cols": 8 },
    //           { "type": "img", "url": "https://cdn.perkasaracking.co.id/images/rak-heavy-duty.jpg", "alt": "Rak Heavy Duty Berkualitas", "cols": 4 },
    //           { "type": "h3", "text": "Keunggulan Rak Heavy Duty", "cols": 12 },
    //           { "type": "ul", "items": ["Kapasitas beban tinggi", "Struktur baja yang kuat", "Dapat disesuaikan dengan kebutuhan"], "cols": 6 },
    //           { "type": "blockquote", "text": "Rak gudang yang baik akan meningkatkan efisiensi penyimpanan dan keamanan kerja.", "cols": 6 },
    //           { "type": "h2", "text": "Apa Itu Double Deep Racking?" },
    //           { "type": "p", "text": "Double Deep Racking adalah sistem penyimpanan yang memungkinkan dua palet disusun berjajar dalam satu lorong (aisle)..." },
    //           { "type": "img", "url": "https://cdn.aresa-digital.com/images/produk/heavy-duty/double-deep/double-deep-pallet-racking-TAP_3.webp", "alt": "Rak Double Deep" }
    //         ],
    //         "author": {
    //           "name": "udin Perkasa Racking",
    //           "profile_url": "https://perkasaracking.co.id/author/admin"
    //         },
    //         "published_at": "2025-03-07T10:00:00Z",
    //         "seoMeta": {
    //           "metaTitle": "Panduan Memilih Rak Heavy Duty untuk Gudang",
    //           "metaDescription": "Panduan lengkap memilih rak heavy duty untuk gudang yang aman dan efisien. Temukan tips dan keunggulan produk terbaik.",
    //           "metaKeywords": ["rak heavy duty", "gudang", "rak", "panduan"],
    //           "ogImage": "https://cdn.perkasaracking.co.id/images/rak-heavy-duty-og.jpg",
    //           "twitterCard": "summary_large_image"
    //         },
    //         "schemaArticle": {
    //           "@context": "https://schema.org",
    //           "@type": "Article",
    //           "headline": "Panduan Memilih Rak Heavy Duty untuk Gudang",
    //           "image": [
    //             "https://cdn.perkasaracking.co.id/images/rak-heavy-duty.jpg",
    //             "https://cdn.perkasaracking.co.id/images/rak-heavy-duty-og.jpg"
    //           ],
    //           "datePublished": "2025-03-07T10:00:00Z",
    //           "dateModified": "2025-03-07T12:00:00Z",
    //           "author": {
    //             "@type": "Person",
    //             "name": "udin Perkasa Racking"
    //           },
    //           "publisher": {
    //             "@type": "Organization",
    //             "name": "Perkasa Racking",
    //             "logo": {
    //               "@type": "ImageObject",
    //               "url": "https://perkasaracking.co.id/logo.png"
    //             }
    //           },
    //           "description": "Panduan lengkap memilih rak heavy duty untuk gudang yang aman dan efisien. Temukan tips dan keunggulan produk terbaik."
    //         }
    //     },
   
    // ]

    // return c
})