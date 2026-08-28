/* ==========================================================================
   DATA.JS — seluruh konten teks/data situs (Bahasa Indonesia)
   Pisahkan dari main.js supaya gampang diedit tanpa nyentuh logika.
   ========================================================================== */

// ---------- 1. PETA NUSANTARA ----------
// posisi x/y dalam persen (%) relatif ke kontainer peta (lihat #peta-stage)
const DATA_PETA = [
  {
    id: "sumatra",
    nama: "Sumatra",
    x: 16, y: 38,
    ikon: "🌋",
    keunikan: "Rumah bagi Danau Toba, danau vulkanik terbesar di dunia, serta rumah adat Bolon dari suku Batak.",
    fakta: [
      "Rumah adat: Rumah Bolon (Batak) & Rumah Gadang (Minangkabau)",
      "Ikon alam: Danau Toba, Bukit Barisan, Way Kambas",
      "Kuliner khas: Rendang & Mie Aceh",
      "Bahasa daerah terbanyak di antara pulau besar Indonesia"
    ]
  },
  {
    id: "jawa",
    nama: "Jawa",
    x: 30, y: 60,
    ikon: "🏛️",
    keunikan: "Pusat kerajaan-kerajaan besar Nusantara, tempat berdirinya Candi Borobudur & Prambanan.",
    fakta: [
      "Candi terbesar di dunia: Borobudur (Magelang)",
      "Pulau terpadat di Indonesia sekaligus pusat pemerintahan",
      "Warisan budaya: Batik, Wayang Kulit, Gamelan",
      "Bahasa daerah: Jawa, Sunda, Madura, Betawi"
    ]
  },
  {
    id: "kalimantan",
    nama: "Kalimantan",
    x: 40, y: 42,
    ikon: "🌳",
    keunikan: "Pulau terbesar ketiga di dunia, paru-paru dunia dengan hutan hujan tropis purba.",
    fakta: [
      "Rumah bagi Taman Nasional Tanjung Puting & orangutan liar",
      "Rumah adat: Rumah Betang milik suku Dayak",
      "Calon lokasi Ibu Kota Nusantara (IKN) di Kalimantan Timur",
      "Sungai Kapuas, sungai terpanjang di Indonesia"
    ]
  },
  {
    id: "sulawesi",
    nama: "Sulawesi",
    x: 51, y: 45,
    ikon: "⛵",
    keunikan: "Bentuk pulau unik menyerupai huruf K, terkenal dengan tradisi pemakaman Toraja.",
    fakta: [
      "Suku Bugis dikenal sebagai pelaut ulung dunia (perahu Pinisi)",
      "Tana Toraja: upacara adat Rambu Solo yang mendunia",
      "Taman Nasional Bunaken, surga bawah laut",
      "Rumah adat: Tongkonan"
    ]
  },
  {
    id: "bali-nusra",
    nama: "Bali & Nusa Tenggara",
    x: 50, y: 62,
    ikon: "🐉",
    keunikan: "Pulau Dewata dengan seni-budaya Hindu yang kental, serta rumah bagi Komodo, kadal purba terbesar di dunia.",
    fakta: [
      "Pura Besakih, pura terbesar & tersuci di Bali",
      "Taman Nasional Komodo, situs Warisan Dunia UNESCO",
      "Bukit Kelimutu di Flores dengan 3 danau warna-warni",
      "Tari Kecak & upacara Ngaben yang khas"
    ]
  },
  {
    id: "maluku",
    nama: "Maluku",
    x: 66, y: 48,
    ikon: "🌰",
    keunikan: "Dijuluki 'Kepulauan Rempah' — pala & cengkeh dari sini pernah jadi rebutan bangsa Eropa.",
    fakta: [
      "Julukan sejarah: The Spice Islands",
      "Benteng peninggalan kolonial tersebar di Ternate & Ambon",
      "Tarian perang Cakalele khas Maluku",
      "Laut Banda, salah satu titik penyelaman terbaik dunia"
    ]
  },
  {
    id: "papua",
    nama: "Papua",
    x: 82, y: 46,
    ikon: "🦋",
    keunikan: "Rumah bagi Raja Ampat, surga terumbu karang dengan biodiversitas laut tertinggi di dunia.",
    fakta: [
      "Raja Ampat menyimpan lebih dari 75% spesies karang dunia",
      "Puncak Jaya (Cartensz Pyramid), atap tertinggi Indonesia",
      "Rumah adat: Honai",
      "Burung Cendrawasih, si 'burung surga' endemik Papua"
    ]
  }
];

// ---------- 2. GALERI DESTINASI & MONUMEN ----------
const DATA_GALERI = [
  {
    id: "borobudur",
    nama: "Candi Borobudur",
    lokasi: "Magelang, Jawa Tengah",
    ikon: "🛕",
    // Foto asli — Wikimedia Commons (CC BY-SA), "Borobudur-Nothwest-view.jpg" oleh Gunawan Kartapranata
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Borobudur-Nothwest-view.jpg?width=900",
    deskripsi: "Candi Buddha terbesar di dunia, dibangun abad ke-9 oleh Dinasti Syailendra. Terdiri dari 2.672 panel relief dan 504 arca Buddha, serta diakui UNESCO sebagai Situs Warisan Dunia sejak 1991."
  },
  {
    id: "prambanan",
    nama: "Candi Prambanan",
    lokasi: "Sleman, Yogyakarta",
    ikon: "⛩️",
    // Foto asli — Wikimedia Commons (CC BY-SA), "Prambanan Trimurti.jpg" oleh Gunkarta Gunawan Kartapranata
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Prambanan%20Trimurti.jpg?width=900",
    deskripsi: "Kompleks candi Hindu terbesar di Indonesia, persembahan untuk Trimurti: Brahma, Wisnu, dan Siwa. Menaranya menjulang hingga 47 meter, menjadikannya salah satu candi tertinggi di Asia Tenggara."
  },
  {
    id: "rajaampat",
    nama: "Raja Ampat",
    lokasi: "Papua Barat Daya",
    ikon: "🐠",
    // Foto asli — Wikimedia Commons (CC BY-SA 4.0), "Pulau Piaynemo, Raja Ampat.jpg", dipakai di artikel Wikipedia "Kepulauan Raja Ampat"
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Pulau%20Piaynemo%2C%20Raja%20Ampat.jpg?width=900",
    deskripsi: "Gugusan lebih dari 1.500 pulau kecil dengan keanekaragaman hayati laut tertinggi di bumi — surganya penyelam dan fotografer bawah laut dari seluruh dunia."
  },
  {
    id: "danautoba",
    nama: "Danau Toba",
    lokasi: "Sumatra Utara",
    ikon: "🏞️",
    // Foto asli — Wikimedia Commons (CC BY-SA 4.0), "Danau Toba dari Samosir.jpg"
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Danau%20Toba%20dari%20Samosir.jpg?width=900",
    deskripsi: "Danau vulkanik terbesar di dunia, terbentuk dari letusan supervulkan purba sekitar 74.000 tahun lalu. Di tengahnya berdiri Pulau Samosir, tanah leluhur suku Batak."
  },
  {
    id: "komodo",
    nama: "Taman Nasional Komodo",
    lokasi: "Nusa Tenggara Timur",
    ikon: "🦎",
    // Foto asli — Wikimedia Commons (CC BY 2.0), "Komodo dragon at Komodo National Park.jpg", dipakai di artikel Wikipedia "Indonesia"
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Komodo%20dragon%20at%20Komodo%20National%20Park.jpg?width=900",
    deskripsi: "Habitat asli Komodo, kadal terbesar di dunia yang telah hidup sejak zaman purba. Kawasan ini juga menyimpan Pantai Pink yang langka."
  },
  {
    id: "bromo",
    nama: "Gunung Bromo",
    lokasi: "Jawa Timur",
    ikon: "🌋",
    // Foto asli — Wikimedia Commons, "Mount Bromo at sunrise, showing its volcanoes and Mount Semeru (background).jpg", pernah jadi Gambar Pilihan Wikipedia Indonesia
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Bromo%20at%20sunrise%2C%20showing%20its%20volcanoes%20and%20Mount%20Semeru%20%28background%29.jpg?width=900",
    deskripsi: "Gunung berapi aktif dengan lautan pasir seluas 10 km² di kalderanya. Momen matahari terbit di Bromo dikenal sebagai salah satu yang terindah di Asia."
  },
  {
    id: "toraja",
    nama: "Tana Toraja",
    lokasi: "Sulawesi Selatan",
    ikon: "🏘️",
    // Foto asli — Wikimedia Commons (CC BY-SA 4.0), "Tongkonan Pallawa Toraja Utara.jpg", dipakai di artikel Wikipedia "North Toraja Regency"
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tongkonan%20Pallawa%20Toraja%20Utara.jpg?width=900",
    deskripsi: "Kampung adat dengan rumah Tongkonan beratap melengkung khas, terkenal dengan ritual pemakaman megah Rambu Solo yang mengundang perhatian dunia."
  },
  {
    id: "monas",
    nama: "Monumen Nasional",
    lokasi: "Jakarta Pusat",
    ikon: "🗼",
    // Foto asli — Wikimedia Commons (CC BY 4.0), "Around Monas Jakarta (2025) (cropped).jpg", dipakai di beberapa artikel Wikipedia tentang Monumen Nasional
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Around%20Monas%20Jakarta%20%282025%29%20%28cropped%29.jpg?width=900",
    deskripsi: "Menjulang 132 meter, Monas dibangun untuk mengenang perjuangan kemerdekaan Indonesia. Puncaknya berlapis emas seberat sekitar 32 kilogram."
  },
  {
    id: "ijen",
    nama: "Kawah Ijen",
    lokasi: "Jawa Timur",
    ikon: "🔥",
    // Foto asli — Wikimedia Commons (CC BY-SA 4.0), "The blue fire of Kawah Ijen 1.jpg"
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20blue%20fire%20of%20Kawah%20Ijen%201.jpg?width=900",
    deskripsi: "Terkenal dengan fenomena 'api biru' (blue fire) langka yang hanya ada di dua tempat di dunia, serta danau kawah asam terbesar di planet ini."
  }
];
/* Catatan foto: untuk mengganti kartu ber-ikon di atas dengan foto asli,
   isi properti "img" dengan nama file lokal (nama.jpg, taruh di folder yang sama dengan index.html) ATAU URL
   Special:FilePath dari Wikimedia Commons, contoh:
   "https://commons.wikimedia.org/wiki/Special:FilePath/NAMA_FILE.jpg?width=900"
   Cari nama filenya lewat commons.wikimedia.org, lalu tempel di sini. */

// ---------- 3. LINI MASA SEJARAH ----------
const DATA_SEJARAH = [
  { tahun: "1908", judul: "Kebangkitan Nasional", teks: "Boedi Oetomo berdiri sebagai organisasi modern pertama, menandai lahirnya kesadaran nasional Indonesia." },
  { tahun: "1928", judul: "Sumpah Pemuda", teks: "Para pemuda dari seluruh Nusantara berikrar: satu nusa, satu bangsa, satu bahasa — Indonesia." },
  { tahun: "1942–1945", judul: "Masa Pendudukan Jepang", teks: "Kekuasaan kolonial Belanda berakhir, digantikan pendudukan Jepang yang penuh kerja paksa (romusha) namun juga membuka ruang organisasi pemuda." },
  { tahun: "1945", judul: "Proklamasi Kemerdekaan", teks: "Pada 17 Agustus, Soekarno-Hatta membacakan teks proklamasi di Jl. Pegangsaan Timur 56, Jakarta, menandai lahirnya Republik Indonesia." },
  { tahun: "1945–1949", judul: "Revolusi Fisik", teks: "Perjuangan mempertahankan kemerdekaan melawan agresi militer Belanda, termasuk pertempuran besar seperti Surabaya (10 November)." },
  { tahun: "1949", judul: "Pengakuan Kedaulatan", teks: "Belanda resmi mengakui kedaulatan Indonesia melalui Konferensi Meja Bundar di Den Haag." },
  { tahun: "1955", judul: "Konferensi Asia-Afrika", teks: "Bandung menjadi tuan rumah KAA, menegaskan peran Indonesia dalam gerakan non-blok dan solidaritas negara berkembang." },
  { tahun: "1965–1966", judul: "Masa Transisi", teks: "Peristiwa G30S dan pergolakan politik membawa pergantian kepemimpinan nasional menuju era Orde Baru." },
  { tahun: "1998", judul: "Reformasi", teks: "Gerakan mahasiswa mendorong lahirnya era Reformasi, membuka jalan bagi kebebasan pers dan demokrasi multipartai." },
  { tahun: "2004", judul: "Pemilu Presiden Langsung", teks: "Untuk pertama kalinya rakyat memilih presiden secara langsung, memperkuat fondasi demokrasi Indonesia." },
  { tahun: "2045", judul: "Indonesia Emas", teks: "Visi 100 tahun kemerdekaan — cita-cita menjadikan Indonesia negara maju dan berdaya saing global." }
];

/* ---------- 5. KONFIGURASI MUSIK LATAR ----------
   Situs ini TIDAK menyertakan file lagu berhak cipta secara langsung.
   Isi salah satu ID di bawah dengan tautan RESMI (YouTube atau Spotify)
   yang kamu temukan sendiri, supaya musik diputar lewat player resmi
   platform tsb (bukan file bajakan). Kosongkan semua untuk memakai
   file lokal tanah-airku.mp3 (taruh di folder yang sama dengan index.html) sebagai gantinya.

   Cara ambil ID:
   - YouTube: dari url youtube.com/watch?v=XXXXXXXXXXX -> ambil XXXXXXXXXXX
   - Spotify: dari url open.spotify.com/track/XXXXXXXXXXXXXXXXXXXXXX -> ambil kode track-nya
*/
const KONFIG_MUSIK = {
  // "IQRO' - Raim Laode | Lirik Lagu" (video lirik resmi di YouTube)
  // -> menampilkan lirik penuh secara visual di videonya + audio full lagu (bukan preview)
  youtubeVideoId: "46pNDkp4KQU",
  spotifyTrackId: "",
};
// jawaban = index opsi yang benar (mulai dari 0)
const DATA_KUIS = [
  {
    soal: "Teks Proklamasi Kemerdekaan Indonesia dibacakan pada tanggal?",
    opsi: ["17 Agustus 1945", "20 Mei 1908", "28 Oktober 1928", "1 Juni 1945"],
    jawaban: 0
  },
  {
    soal: "Siapa yang menjahit Bendera Pusaka Merah Putih yang dikibarkan saat Proklamasi?",
    opsi: ["Cut Nyak Dien", "Fatmawati", "R.A. Kartini", "Dewi Sartika"],
    jawaban: 1
  },
  {
    soal: "Organisasi pergerakan nasional modern pertama di Indonesia adalah?",
    opsi: ["Sarekat Islam", "Boedi Oetomo", "Indische Partij", "Muhammadiyah"],
    jawaban: 1
  },
  {
    soal: "Sumpah Pemuda dicetuskan pada tahun?",
    opsi: ["1908", "1928", "1945", "1949"],
    jawaban: 1
  },
  {
    soal: "Dua tokoh yang memproklamasikan kemerdekaan Indonesia adalah?",
    opsi: ["Soekarno & Sjahrir", "Hatta & Sudirman", "Soekarno & Hatta", "Soekarno & Supomo"],
    jawaban: 2
  },
  {
    soal: "Peristiwa 10 November diperingati sebagai Hari Pahlawan karena pertempuran besar terjadi di kota?",
    opsi: ["Bandung", "Surabaya", "Yogyakarta", "Medan"],
    jawaban: 1
  },
  {
    soal: "Konferensi Meja Bundar yang mengakhiri sengketa kedaulatan RI-Belanda diadakan di kota?",
    opsi: ["Den Haag", "Amsterdam", "Linggarjati", "Renville"],
    jawaban: 0
  },
  {
    soal: "Konferensi Asia-Afrika tahun 1955 diselenggarakan di kota?",
    opsi: ["Jakarta", "Bandung", "Yogyakarta", "Semarang"],
    jawaban: 1
  },
  {
    soal: "Danau vulkanik terbesar di dunia yang ada di Indonesia adalah?",
    opsi: ["Danau Toba", "Danau Maninjau", "Danau Kelimutu", "Danau Sentani"],
    jawaban: 0
  },
  {
    soal: "Candi Buddha terbesar di dunia yang berlokasi di Indonesia adalah?",
    opsi: ["Prambanan", "Borobudur", "Mendut", "Sewu"],
    jawaban: 1
  },
  {
    soal: "Gerakan Reformasi yang mengakhiri era Orde Baru terjadi pada tahun?",
    opsi: ["1990", "1998", "2004", "1965"],
    jawaban: 1
  },
  {
    soal: "Habitat asli komodo, kadal terbesar di dunia, berada di provinsi?",
    opsi: ["Nusa Tenggara Timur", "Bali", "Papua", "Sulawesi Tenggara"],
    jawaban: 0
  }
];
