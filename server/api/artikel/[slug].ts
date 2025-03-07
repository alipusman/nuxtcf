import _ from "lodash"

export default defineEventHandler((event) => {
    const query = getQuery(event);
    const { slug } = query;
    console.log({slug})
    const data = [
        {
            "id": "artikel-1",
            "title": "Panduan Memilih Rak Heavy Duty untuk Gudang",
            "slug": "panduan-memilih-rak-heavy-duty",
            "description": "Cari rak heavy duty yang cocok untuk gudang? Simak panduan lengkap berikut agar tidak salah pilih!",
            "content": [
                { "type": "h2", "text": "Apa Itu Rak Heavy Duty?", "cols": 12 },
                { "type": "p", "text": "Rak Heavy Duty adalah sistem penyimpanan yang mampu menahan beban berat...", "cols": 8 },
                { "type": "img", "url": "https://cdn.aresa-digital.com/images/produk/heavy-duty/double-deep/double-deep-pallet-racking-TAP_3.webp", "alt": "Rak Heavy Duty Berkualitas", "cols": 4 },
                { "type": "h3", "text": "Keunggulan Rak Heavy Duty", "cols": 12 },
                { "type": "ul", "items": ["Kapasitas beban tinggi", "Struktur baja yang kuat", "Dapat disesuaikan dengan kebutuhan"], "cols": 6 },
                { "type": "blockquote", "text": "Rak gudang yang baik akan meningkatkan efisiensi penyimpanan dan keamanan kerja.", "cols": 6 },
                
            ],
            "author": { "name": "udin Perkasa Racking", "profile_url": "https://perkasaracking.co.id/author/admin" },
            "published_at": "2025-03-07T10:00:00Z"
        },
        {
            "id": "double-deep-001",
            "title": "DOUBLE DEEP RACKING",
            "slug": "double-deep-racking",
            "description": "Double Deep Racking adalah sistem penyimpanan palet yang dirancang untuk meningkatkan kapasitas gudang dengan menyusun palet dua tingkat ke dalam lorong.",
            "content": [
                { "type": "h2", "text": "Apa Itu Double Deep Racking?" },
                { "type": "p", "text": "Double Deep Racking adalah sistem penyimpanan yang memungkinkan dua palet disusun berjajar dalam satu lorong (aisle)..." },
                { "type": "img", "url": "https://cdn.aresa-digital.com/images/produk/heavy-duty/double-deep/double-deep-pallet-racking-TAP_3.webp", "alt": "Rak Double Deep" }
            ],
            "published_at": "2025-03-07T10:00:00.000Z",
            "author": {
                "name": "Tim Perkasa Racking",
                "profile_url": "https://cdn.perkasaracking.co.id/author.jpg"
            }
        }
    ]

    const c = _.find(data, function (f) { return f.slug == slug })
    return c
})