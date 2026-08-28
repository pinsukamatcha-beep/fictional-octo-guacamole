/* ==========================================================================
   MAIN.JS — logika interaktif Merdeka.id
   ========================================================================== */
(function(){
  "use strict";

  /* ---------------------------------------------------------------------
     0. UTIL
  --------------------------------------------------------------------- */
  const $  = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));
  const pad2 = n => String(n).padStart(2, "0");

  /* ---------------------------------------------------------------------
     1. PORTAL ENTRANCE
  --------------------------------------------------------------------- */
  const portal    = $("#portal");
  const btnMasuk  = $("#btn-masuk");
  const flash     = $("#portal-flash");
  const shock     = $("#portal-shock");
  const particles = $("#portal-particles");
  document.body.classList.add("lock");

  // Tembakkan partikel merah-emas dari tengah portal, dipakai saat ledakan exit
  function tembakPartikel(jumlah){
    const frag = document.createDocumentFragment();
    for (let i = 0; i < jumlah; i++){
      const p = document.createElement("span");
      const sudut = (360 / jumlah) * i + (Math.random() * 14 - 7);
      const jarak = 260 + Math.random() * 340;
      const ukuran = 3 + Math.random() * 5;
      const warna = Math.random() > 0.5 ? "var(--crimson-400)" : "var(--gold-300)";
      p.className = "portal-particle";
      p.style.cssText = `
        --sudut:${sudut}deg; --jarak:${jarak}px; --delay:${(Math.random()*0.12).toFixed(2)}s;
        width:${ukuran}px; height:${ukuran}px; background:${warna};
      `;
      frag.appendChild(p);
    }
    particles.appendChild(frag);
  }

  btnMasuk.addEventListener("click", () => {
    if (portal.classList.contains("portal-open")) return; // cegah klik ganda
    // coba nyalakan musik otomatis begitu user berinteraksi (kebijakan browser butuh gesture)
    tryPlayMusic();

    // Urutan ledakan dramatis: kedip layar -> gelombang kejut -> ledakan partikel -> warp keluar
    portal.classList.add("portal-shaking");
    tembakPartikel(46);

    setTimeout(() => {
      portal.classList.remove("portal-shaking");
      portal.classList.add("portal-flashing");
      shock.classList.add("portal-shock-go");
    }, 260);

    setTimeout(() => {
      portal.classList.add("portal-open");
    }, 340);

    setTimeout(() => {
      portal.classList.add("portal-hide");
      document.body.classList.remove("lock");
    }, 340 + 1200);
  });

  /* ---------------------------------------------------------------------
     2. NAVBAR: shrink saat scroll + toggle mobile
  --------------------------------------------------------------------- */
  const navbar   = $("#navbar");
  const navLinks = $("#nav-links");
  const btnMenu  = $("#btn-menu");

  window.addEventListener("scroll", () => {
    navbar.style.boxShadow = window.scrollY > 20 ? "0 8px 30px rgba(0,0,0,0.35)" : "none";
    btnTop.classList.toggle("show", window.scrollY > 700);
  }, { passive:true });

  btnMenu.addEventListener("click", () => navLinks.classList.toggle("open"));
  $$(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

  /* ---------------------------------------------------------------------
     3. COUNTDOWN MENUJU HUT RI KE-82 (17 Agustus 2027)
  --------------------------------------------------------------------- */
  const TARGET_HUT = new Date("2027-08-17T00:00:00+07:00").getTime();
  const elHari  = $("#cd-hari");
  const elJam   = $("#cd-jam");
  const elMenit = $("#cd-menit");
  const elDetik = $("#cd-detik");

  function updateCountdown(){
    const now = Date.now();
    let diff = TARGET_HUT - now;
    if (diff < 0) diff = 0;

    const hari  = Math.floor(diff / (1000*60*60*24));
    const jam   = Math.floor((diff / (1000*60*60)) % 24);
    const menit = Math.floor((diff / (1000*60)) % 60);
    const detik = Math.floor((diff / 1000) % 60);

    elHari.textContent  = pad2(hari);
    elJam.textContent   = pad2(jam);
    elMenit.textContent = pad2(menit);
    elDetik.textContent = pad2(detik);
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ---------------------------------------------------------------------
     4. PETA NUSANTARA
  --------------------------------------------------------------------- */
  const petaStage = $("#peta-stage");
  const petaPanel = $("#peta-panel");

  function renderPeta(){
    DATA_PETA.forEach(daerah => {
      const hotspot = document.createElement("button");
      hotspot.type = "button";
      hotspot.className = "peta-hotspot";
      hotspot.style.left = daerah.x + "%";
      hotspot.style.top  = daerah.y + "%";
      hotspot.setAttribute("aria-label", daerah.nama);
      hotspot.dataset.id = daerah.id;
      hotspot.innerHTML = `${daerah.ikon}<span class="peta-hotspot-label">${daerah.nama}</span>`;

      hotspot.addEventListener("click", () => selectDaerah(daerah.id));
      petaStage.appendChild(hotspot);
    });
  }

  function selectDaerah(id){
    const daerah = DATA_PETA.find(d => d.id === id);
    if(!daerah) return;

    $$(".peta-hotspot", petaStage).forEach(h => h.classList.toggle("active", h.dataset.id === id));

    petaPanel.innerHTML = `
      <div class="peta-panel-head">
        <span class="peta-panel-ikon">${daerah.ikon}</span>
        <h3>${daerah.nama}</h3>
      </div>
      <p class="peta-panel-keunikan">${daerah.keunikan}</p>
      <ul class="peta-panel-fakta">
        ${daerah.fakta.map(f => `<li>${f}</li>`).join("")}
      </ul>
    `;
  }

  renderPeta();
  // otomatis tampilkan Jawa sebagai default agar panel tidak kosong
  selectDaerah("jawa");
  $$(".peta-hotspot", petaStage).forEach(h => h.classList.remove("active"));

  /* ---------------------------------------------------------------------
     5. GALERI + MODAL
  --------------------------------------------------------------------- */
  const galeriGrid   = $("#galeri-grid");
  const modalBackdrop= $("#modal-backdrop");
  const modalMedia   = $("#modal-media");
  const modalLokasi  = $("#modal-lokasi");
  const modalTitle   = $("#modal-title");
  const modalDesc    = $("#modal-desc");
  const modalClose   = $("#modal-close");

  function mediaMarkup(item){
    if(item.img){
      return `<img src="${item.img}" alt="${item.nama}" loading="lazy"
                onerror="const f=document.createElement('div'); f.className='galeri-card-fallback'; f.style.cssText='position:static;width:100%;height:100%;'; f.textContent='${item.ikon}'; this.replaceWith(f);">`;
    }
    return "";
  }

  function renderGaleri(){
    galeriGrid.innerHTML = DATA_GALERI.map(item => `
      <article class="galeri-card" data-id="${item.id}" tabindex="0" role="button" aria-label="Lihat ${item.nama}">
        ${ item.img
            ? `<img class="galeri-card-img" src="${item.img}" alt="${item.nama}" loading="lazy"
                 onerror="const f=document.createElement('div'); f.className='galeri-card-fallback'; f.textContent='${item.ikon}'; this.replaceWith(f);">`
            : `<div class="galeri-card-fallback">${item.ikon}</div>`
        }
        <div class="galeri-card-overlay">
          <p class="galeri-card-lokasi">${item.lokasi}</p>
          <h3 class="galeri-card-nama">${item.nama}</h3>
        </div>
      </article>
    `).join("");

    $$(".galeri-card", galeriGrid).forEach(card => {
      const open = () => openModal(card.dataset.id);
      card.addEventListener("click", open);
      card.addEventListener("keydown", e => { if(e.key === "Enter") open(); });
    });
  }

  function openModal(id){
    const item = DATA_GALERI.find(g => g.id === id);
    if(!item) return;

    modalMedia.innerHTML = item.img
      ? `<img src="${item.img}" alt="${item.nama}" onerror="this.remove(); this.parentElement.textContent='${item.ikon}';">`
      : item.ikon;
    modalLokasi.textContent = item.lokasi;
    modalTitle.textContent  = item.nama;
    modalDesc.textContent   = item.deskripsi;

    modalBackdrop.classList.add("open");
    document.body.classList.add("lock");
  }

  function closeModal(){
    modalBackdrop.classList.remove("open");
    document.body.classList.remove("lock");
  }

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", e => { if(e.target === modalBackdrop) closeModal(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

  renderGaleri();

  /* ---------------------------------------------------------------------
     6. TIMELINE SEJARAH + reveal-on-scroll
  --------------------------------------------------------------------- */
  const timelineEl = $("#timeline");

  function renderTimeline(){
    timelineEl.innerHTML = DATA_SEJARAH.map(t => `
      <div class="tl-item">
        <span class="tl-tahun">${t.tahun}</span>
        <h3 class="tl-judul">${t.judul}</h3>
        <p class="tl-teks">${t.teks}</p>
      </div>
    `).join("");
  }
  renderTimeline();

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  $$(".tl-item").forEach(el => revealObserver.observe(el));

  /* ---------------------------------------------------------------------
     7. KUIS SEJARAH
  --------------------------------------------------------------------- */
  const kuisStart   = $("#kuis-start");
  const kuisMain    = $("#kuis-main");
  const kuisResult  = $("#kuis-result");
  const btnMulai    = $("#btn-mulai-kuis");
  const btnUlangi   = $("#btn-ulangi-kuis");
  const kuisSoalText= $("#kuis-soal-text");
  const kuisOpsiBox = $("#kuis-opsi");
  const kuisProgressText = $("#kuis-progress-text");
  const kuisSkorText     = $("#kuis-skor-text");
  const kuisTimerEl      = $("#kuis-timer");
  const kuisProgressFill = $("#kuis-progressbar-fill");
  const kuisResultScore  = $("#kuis-result-score");
  const kuisResultTitle  = $("#kuis-result-title");
  const kuisResultDesc   = $("#kuis-result-desc");

  $("#kuis-jumlah-soal").textContent = DATA_KUIS.length;

  const WAKTU_PER_SOAL = 15;
  let urutanSoal = [];
  let indexSoal = 0;
  let skor = 0;
  let sisaWaktu = WAKTU_PER_SOAL;
  let timerId = null;
  let sedangMenjawab = false;

  function acakSoal(){
    urutanSoal = DATA_KUIS.map((_, i) => i);
    for(let i = urutanSoal.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [urutanSoal[i], urutanSoal[j]] = [urutanSoal[j], urutanSoal[i]];
    }
  }

  function mulaiKuis(){
    acakSoal();
    indexSoal = 0;
    skor = 0;
    kuisStart.classList.add("hidden");
    kuisResult.classList.add("hidden");
    kuisMain.classList.remove("hidden");
    tampilkanSoal();
  }

  function tampilkanSoal(){
    sedangMenjawab = false;
    const soal = DATA_KUIS[urutanSoal[indexSoal]];

    kuisProgressText.textContent = `Soal ${indexSoal+1} / ${DATA_KUIS.length}`;
    kuisSkorText.textContent = `Skor: ${skor}`;
    kuisProgressFill.style.width = `${(indexSoal / DATA_KUIS.length) * 100}%`;
    kuisSoalText.textContent = soal.soal;

    kuisOpsiBox.innerHTML = soal.opsi.map((opsi, i) => `
      <button type="button" data-index="${i}">${opsi}</button>
    `).join("");

    $$("button", kuisOpsiBox).forEach(btn => {
      btn.addEventListener("click", () => jawabSoal(Number(btn.dataset.index)));
    });

    sisaWaktu = WAKTU_PER_SOAL;
    kuisTimerEl.textContent = sisaWaktu;
    kuisTimerEl.classList.remove("warn");
    clearInterval(timerId);
    timerId = setInterval(() => {
      sisaWaktu--;
      kuisTimerEl.textContent = sisaWaktu;
      if(sisaWaktu <= 5) kuisTimerEl.classList.add("warn");
      if(sisaWaktu <= 0){
        clearInterval(timerId);
        jawabSoal(-1); // waktu habis, dianggap salah
      }
    }, 1000);
  }

  function jawabSoal(indexDipilih){
    if(sedangMenjawab) return;
    sedangMenjawab = true;
    clearInterval(timerId);

    const soal = DATA_KUIS[urutanSoal[indexSoal]];
    const tombol = $$("button", kuisOpsiBox);

    tombol.forEach(btn => {
      btn.disabled = true;
      const i = Number(btn.dataset.index);
      if(i === soal.jawaban) btn.classList.add("benar");
      else if(i === indexDipilih) btn.classList.add("salah");
    });

    if(indexDipilih === soal.jawaban) skor++;

    setTimeout(() => {
      indexSoal++;
      if(indexSoal < DATA_KUIS.length){
        tampilkanSoal();
      } else {
        selesaiKuis();
      }
    }, 900);
  }

  function selesaiKuis(){
    kuisMain.classList.add("hidden");
    kuisResult.classList.remove("hidden");
    kuisProgressFill.style.width = "100%";
    kuisResultScore.textContent = `${skor} / ${DATA_KUIS.length}`;

    const persen = skor / DATA_KUIS.length;
    if(persen === 1){
      kuisResultTitle.textContent = "Sempurna! Sang Ahli Sejarah 🇮🇩";
      kuisResultDesc.textContent  = "Wawasan kebangsaanmu luar biasa. Merdeka!";
    } else if(persen >= 0.7){
      kuisResultTitle.textContent = "Kerja Bagus, Pejuang Wawasan!";
      kuisResultDesc.textContent  = "Sedikit lagi menuju skor sempurna. Coba lagi, yuk!";
    } else if(persen >= 0.4){
      kuisResultTitle.textContent = "Lumayan, Terus Belajar Sejarah!";
      kuisResultDesc.textContent  = "Yuk baca lagi lini masa sejarah di atas, lalu coba lagi.";
    } else {
      kuisResultTitle.textContent = "Ayo Gali Lagi Sejarah Bangsa!";
      kuisResultDesc.textContent  = "Jangan menyerah — pelajari lini masa di atas dan coba lagi.";
    }
  }

  btnMulai.addEventListener("click", mulaiKuis);
  btnUlangi.addEventListener("click", mulaiKuis);

  /* ---------------------------------------------------------------------
     8. MUSIK LATAR
     Prioritas: Spotify embed resmi > YouTube embed resmi > file lokal mp3
  --------------------------------------------------------------------- */
  const audio    = $("#audio-latar");
  const btnMusik = $("#btn-musik");
  const musikSlot= $("#musik-embed-slot");
  audio.volume = 0.85; // "gedein" -> volume default lebih besar

  const pakaiSpotify = !!(KONFIG_MUSIK && KONFIG_MUSIK.spotifyTrackId);
  const pakaiYoutube = !pakaiSpotify && !!(KONFIG_MUSIK && KONFIG_MUSIK.youtubeVideoId);
  let ytPlayer = null;
  let musikSedangJalan = false;
  let musikDipicuAwal = false; // true jika user sudah klik "Masuk ke Portal" sebelum player YouTube siap

  if (pakaiSpotify) {
    // Player resmi Spotify (kecil, ada tombol play sendiri) — cara paling aman & legal
    musikSlot.innerHTML = `
      <iframe src="https://open.spotify.com/embed/track/${KONFIG_MUSIK.spotifyTrackId}?utm_source=generator&theme=0"
        width="100%" height="152" style="border-radius:16px;" frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `;
    musikSlot.classList.add("show");
    btnMusik.classList.add("hidden"); // tombol navbar tidak relevan, kontrol ada di widget Spotify
  } else if (pakaiYoutube) {
    // Player YouTube resmi (video lirik penuh) disembunyikan visualnya,
    // langsung diputar begitu portal dibuka -> tanpa tombol on/off manual.
    btnMusik.classList.add("hidden");

    const ytDiv = document.createElement("div");
    ytDiv.id = "yt-audio-player";
    ytDiv.style.cssText = "position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;";
    document.body.appendChild(ytDiv);

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = function(){
      ytPlayer = new YT.Player("yt-audio-player", {
        videoId: KONFIG_MUSIK.youtubeVideoId,
        playerVars: {
          autoplay: 0, loop: 1, playlist: KONFIG_MUSIK.youtubeVideoId, controls: 0
        },
        events: {
          onReady: (e) => {
            e.target.setVolume(85);
            if (musikDipicuAwal) e.target.playVideo(); // klik "Masuk ke Portal" sudah terjadi lebih dulu
          }
        }
      });
    };
  }

  function tryPlayMusic(){
    if (pakaiSpotify) return; // widget Spotify punya kontrol play sendiri
    if (pakaiYoutube) {
      musikDipicuAwal = true;
      if (ytPlayer && ytPlayer.playVideo) {
        ytPlayer.playVideo();
        musikSedangJalan = true;
        btnMusik.classList.add("is-playing");
      }
      return;
    }
    audio.play().then(() => {
      btnMusik.classList.add("is-playing");
      musikSedangJalan = true;
    }).catch(() => {
      // autoplay diblokir browser, biarkan user menekan tombol musik manual
      btnMusik.classList.remove("is-playing");
    });
  }

  btnMusik.addEventListener("click", () => {
    if (pakaiYoutube && ytPlayer){
      if (musikSedangJalan){
        ytPlayer.pauseVideo();
        musikSedangJalan = false;
        btnMusik.classList.remove("is-playing");
      } else {
        tryPlayMusic();
      }
      return;
    }
    if(audio.paused){
      tryPlayMusic();
    } else {
      audio.pause();
      btnMusik.classList.remove("is-playing");
    }
  });

  /* ---------------------------------------------------------------------
     9. TOMBOL KEMBALI KE ATAS
  --------------------------------------------------------------------- */
  const btnTop = $("#btn-top");
  btnTop.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));

})();
