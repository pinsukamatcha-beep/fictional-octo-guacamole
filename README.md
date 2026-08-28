# Merdeka.id — Portofolio HUT RI ke-81

Situs portofolio sekolah interaktif bertema Dirgahayu Republik Indonesia,
dominan warna **crimson** dengan gaya futuristik.

## Struktur file
Semua file sengaja diletakkan rata di root (tidak ada subfolder), supaya
gampang di-upload ke GitHub:
```
hutri-portfolio/
├── index.html       -> halaman utama (semua section ada di sini)
├── style.css         -> seluruh styling & animasi
├── data.js            -> semua data teks (peta, galeri, sejarah, kuis) — edit di sini
├── main.js             -> logika interaktif (countdown, kuis, dll)
├── generate_qr.py       -> (bagian Python) generator QR code menuju situsmu
├── tanah-airku.mp3        -> (opsional) taruh file musik latar di sini, nama harus persis ini
└── README.md
```
Kalau mau menambah foto milikmu sendiri, taruh saja file gambarnya di
folder yang sama (root) ini juga, lalu arahkan `img:` di `data.js` ke
nama filenya, misalnya `img: "borobudur-sendiri.jpg"`.

## ⚠️ PENTING — dua hal yang perlu kamu lengkapi sendiri

Saya tidak bisa menyertakan file lagu berhak cipta ("Iqro" – Raim Laode,
atau rekaman "Tanah Airku" versi cello/piano tertentu) maupun foto-foto
dari situs berbayar/berlisensi pribadi, karena itu melanggar hak cipta
pemiliknya. Situs ini sudah saya siapkan supaya kamu tinggal drop file:

### 1. Musik latar — sudah terpasang ✅
Lagu **"Iqro'" — Raim Laode** sudah otomatis diputar lewat widget
**player resmi Spotify** (bukan file bajakan), muncul di pojok kiri
bawah situs begitu kamu klik "Masuk ke Portal". Tidak perlu setup apa-apa lagi.

Kalau suatu saat mau ganti lagu lain, buka `data.js`, cari
`KONFIG_MUSIK`, dan ganti `spotifyTrackId` dengan kode track Spotify
lagu barumu (ambil dari URL `open.spotify.com/track/KODE_INI`).

> Catatan: widget Spotify punya tombol play sendiri (kebijakan privasi
> Spotify tidak mengizinkan autoplay penuh dari embed pihak ketiga),
> jadi pengunjung situs perlu menekan tombol play kecil di widget itu
> untuk mulai mendengarkan.

### 2. Menambahkan foto destinasi
Dua foto (Candi Borobudur & Candi Prambanan) sudah otomatis tampil dari
Wikimedia Commons — foto asli, lisensi CC BY-SA, aman dipakai untuk
tugas sekolah. Tujuh destinasi lain (Raja Ampat, Danau Toba, Komodo,
Bromo, Toraja, Monas, Kawah Ijen) belum saya isi otomatis, karena saya
mau memastikan setiap URL foto benar-benar ada dan sesuai sebelum
dipasang — daripada asal tebak dan link-nya rusak/salah gambar. Untuk
sekarang kartunya tampil sebagai ikon gradasi merah yang tetap rapi.

Cara mengisi foto asli (5 menit per foto):
1. Buka [commons.wikimedia.org](https://commons.wikimedia.org), cari nama
   tempatnya (mis. "Raja Ampat", "Danau Toba", "Kawah Ijen").
2. Buka salah satu foto, salin nama filenya persis dari judul halaman,
   contoh: `File:Piaynemo Raja Ampat.jpg` -> nama filenya
   `Piaynemo Raja Ampat.jpg`.
3. Buka `data.js`, cari destinasi yang sesuai di `DATA_GALERI`, isi:
   ```js
   img: "https://commons.wikimedia.org/wiki/Special:FilePath/Piaynemo%20Raja%20Ampat.jpg?width=900",
   ```
   (spasi di nama file diganti `%20`).
4. Simpan — foto langsung tampil di galeri & modal detail.

Alternatif: taruh foto milikmu sendiri di `nama.jpg (folder yang sama dengan index.html)`,
lalu isi `img: "nama.jpg (folder yang sama dengan index.html)"`.

## Menjalankan di lokal
Cukup buka `index.html` langsung di browser, atau jalankan server
statis ringan (disarankan, supaya audio/gambar lokal tidak diblokir
kebijakan file:// browser):
```
python -m http.server 8000
```
lalu buka `http://localhost:8000`.

## Upload ke GitHub / GitHub Pages
1. Buat repository baru di GitHub.
2. Push seluruh isi folder ini (jangan masukkan folder di dalam folder —
   `index.html` harus ada di root repo).
3. Aktifkan **Settings → Pages → Deploy from branch → main / root**.
4. Situsmu online di `https://username.github.io/nama-repo/`.
5. (Opsional) jalankan `generate_qr.py` dengan URL itu untuk membuat
   QR code banner.

## Fitur yang sudah jadi
- Animasi entrance portal futuristik saat pertama buka situs
- Countdown real-time menuju HUT RI ke-82 (17 Agustus 2027)
- Peta interaktif 7 wilayah Nusantara dengan keunikan masing-masing
- Galeri 9 destinasi/monumen ikonik + modal detail
- Kuis sejarah 12 soal acak dengan timer & skor
- Lini masa sejarah Indonesia 1908–2045
- Musik latar (tinggal isi file, lihat di atas)
- Responsif penuh dari desktop sampai HP, hormat `prefers-reduced-motion`

Selamat mengerjakan tugasnya — Merdeka! 🇮🇩
