// ============================================================
//  ISI DATA DIRI ANDA DI SINI
//  Cukup ubah teks di bawah — website akan otomatis mengikuti.
// ============================================================

export type Lang = "id" | "en";

const id = {
  nav: {
    about: "Tentang",
    skills: "Keahlian",
    experience: "Pengalaman",
    projects: "Proyek",
    organization: "Organisasi",
    certificates: "Sertifikat",
    contact: "Hubungi Saya",
    openMenu: "Buka menu",
    home: "Intro",
    contactLink: "Kontak",
    pendidikan: "Pendidikan",
    sertifikat: "Sertifikat",
  },

  name: "Ananda Gracia Angeli",

  hero: {
    greeting: "Halo, saya",
    subtitle: "Dibuat dengan ♥ & kode",
    description: "Membangun solusi digital yang efisien dan user-friendly adalah hal yang selalu membuat saya antusias. Harapan saya ke depannya sederhana: bisa terus berkembang sebagai developer dan berkontribusi dalam tim yang satu visi untuk merancang teknologi yang berdampak positif.",
    photo: "/foto-ananda.jpeg",
    ctaCv: "Unduh CV",
    ctaProjects: "Lihat Proyek",
    badge: "Lulusan Baru",
    fileLabel: "ananda.tsx",
    status: "Lulusan Baru",
    statusNote: "Siap untuk peluang baru",
    scrollDown: "Scroll",
    intro: "Perkenalan",
    headline: ["Dari Desain hingga Database,", "Saya Kerjakan Sampai Tuntas."],
    role: "Pengembang Web",
    tags: ["Fullstack", "Frontend", "Backend", "Database"],
    statWeb: "Pengembangan Web",
    statAndroid: "Pengembangan Android",
    cardNote: "Terbuka untuk peluang & proyek baru",
    cardCta: "Hubungi Saya",
    stackLabel: "Tech Stack",
    stack: ["React", "Next.js", "Node.js", "Laravel", "PHP", "PostgreSQL"],
    // Foto pendukung (bukan foto diri): kiri atas berbentuk blob, kanan berbentuk lingkaran
    photoBlob: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&h=900&fit=crop&auto=format",
    photoCircle: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&h=700&fit=crop&auto=format",
  },

  about: {
    hello: "Halo, saya",
    skillsLabel: "Keahlian utama:",
    // level = persentase isi bar (0-100), silakan sesuaikan
    mainSkills: [
      { name: "HTML & CSS", level: 85, icons: ["html", "css"] },
      { name: "JavaScript", level: 75, icons: ["javascript"] },
      { name: "TypeScript", level: 65, icons: ["typescript"] },
      { name: "React", level: 70, icons: ["react"] },
      { name: "Next.js", level: 65, icons: ["nextjs"] },
      { name: "Node.js", level: 70, icons: ["nodejs"] },
      { name: "PHP", level: 70, icons: ["php"] },
      { name: "PostgreSQL", level: 65, icons: ["postgresql"] },
    ],
    roleBadge: "Pengembang Web Fullstack",
    eyebrow: "Tentang & Pendidikan",
    heading1: "Sedikit tentang",
    headingAccent: "saya",
    intro:
      "Berminat di bidang Web dan Software Development. Berpengalaman sebagai freelance web developer (website, sistem informasi, landing page, hingga aplikasi Android) dan pernah magang sebagai Unit Implementer sistem Electronic Medical Record di rumah sakit. Adaptif, cepat belajar, dan antusias mengembangkan solusi digital yang inovatif.",
    eyebrowEdu: "Pendidikan",
    thesisLabel: "Skripsi / Riset",
  },

  education: {
    institution: "Universitas Saintek Muhammadiyah",
    degree: "S1 Teknik Informatika",
    period: "2022 – 2026",
    gpaValue: "3,46",
    gpaMax: "4,00",
    // Setiap baris: label biru + nilai. Semua diambil dari CV.
    rows: [
      { label: "Bidang minat", value: "Web Development dan Software Development" },
      {
        label: "Skripsi",
        value:
          "Aplikasi Pembelajaran Bahasa Inggris berbasis NLP: merancang arsitektur chatbot dengan ekstraksi kata kunci (Natural Language Processing) dan menguji aplikasi lewat User Acceptance Testing (UAT) bersama siswa.",
      },
      {
        label: "Publikasi",
        value: "Jurnal VISUALIKA (terakreditasi Sinta 4)",
        href: "https://jurnas.saintekmu.ac.id/index.php/visualika/id/article/view/281",
      },
    ],
  },

  educationSection: {
    title: "Pendidikan",
    gpa: "IPK",
  },

  skills: {
    eyebrow: "Keahlian",
    heading1: "Tech",
    headingAccent: "Stack",
  },

  skillGroups: [
    {
      title: "Frontend",
      icon: "⬡",
      items: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "React Native (Expo)"],
    },
    {
      title: "Backend & Database",
      icon: "⬢",
      items: ["Node.js", "PHP", "Python", "MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & Lainnya",
      icon: "◈",
      items: ["Figma", "Canva"],
    },
  ],

  experience: {
    eyebrow: "Pengalaman",
    heading1: "Magang &",
    headingAccent: "Kerja",
  },

  experiences: [
    {
      role: "Pengembang Web Freelance",
      company: "Integrava Digital",
      logo: "/logos/integrava-digital-horizontal.svg",
      logoAlt: "Logo Integrava Digital",
      period: "2025 – Sekarang",
      desc: "Merancang dan mengerjakan frontend website Integrava Digital.",
      points: [
        "Merancang website Integrava Digital (brand layanan website, hosting, dan edukasi) dan mengerjakan frontend-nya yang masih berjalan, dengan Next.js, TypeScript, dan Tailwind CSS.",
        "Membangun website, landing page, dan sistem informasi untuk klien dari desain Figma, dengan database MySQL/PostgreSQL.",
        "Men-deploy dan memelihara website di Vercel, serta berkomunikasi langsung dengan klien untuk revisi.",
      ],
    },
    {
      role: "Magang Implementer (Unit IT Support)",
      company: "PT Jejaring Tiga Artha",
      logo: "/logos/zicare.svg",
      logoAlt: "Logo Zi.Care",
      link: { label: "Zi.Care · zicare.id", href: "https://www.zicare.id/" },
      period: "2023 – 2024",
      desc: "Implementasi sistem Electronic Medical Record (EMR) Zi.Care di rumah sakit.",
      points: [
        "Implementer sistem EMR Zi.Care, platform EMR terintegrasi untuk rumah sakit.",
        "Melakukan UAT, verifikasi kesiapan sistem, dan first-level troubleshooting dengan eskalasi ke tim teknis.",
        "Melatih dokter, perawat, dan admin serta menyusun dokumentasi penggunaan.",
      ],
    },
  ],

  projects: {
    eyebrow: "Proyek",
    heading1: "Karya yang",
    headingAccent: "pernah dibuat",
    empty: "Belum ada proyek. Tambahkan proyek pertama Anda lewat",
    filterAll: "Semua",
    viewProject: "Kunjungi situs",
    heading: "Proyek",
    seeAll: "Lihat Semua",
    showLess: "Ringkas",
    viewDetail: "Lihat demo & galeri",
    demoVideo: "Video demo",
    gallery: "Galeri",
    close: "Tutup",
    note: "Demo memakai data fiktif.",
    imageAlt: "Gambar proyek",
  },

  projectItems: [
    {
      _id: "1",
      title: "SIMAPALA — Sistem Informasi Organisasi Pecinta Alam",
      short: "SIMAPALA",
      category: "Website & Panel Admin",
      highlights: [
        "Pendaftaran anggota online dengan pelacakan status",
        "Kas, iuran, dan laporan keuangan (PDF dan Excel)",
        "Surat dan LPJ otomatis dengan tanda tangan digital dan barcode",
      ],
      tech: "Laravel 12, Filament, PostgreSQL, Inertia.js, React, TypeScript, Tailwind CSS",
      description: "Sistem informasi lengkap untuk organisasi pecinta alam: situs publik, kaderisasi online, keuangan, dan dokumen kegiatan bertanda tangan digital.",
      link: "",
      imageUrl: "/simapala/beranda.png",
      video: "/simapala/demo.webm",
      details: [
        "Situs publik: beranda, profil organisasi, kaderisasi (pendaftaran calon anggota online + pelacakan status), kalender kegiatan, info alam dengan cuaca BMKG, galeri, artikel, dan kontak. Tema gelap/terang dan responsif.",
        "Panel admin (Filament): keanggotaan, periode kepengurusan, dan hak akses berbasis peran (RBAC).",
        "Keuangan: kas organisasi, iuran bulanan, tagihan khusus per acara, verifikasi pembayaran, laporan PDF, ekspor Excel, dan halaman Transparansi Kas.",
        "Kegiatan & dokumen: kepanitiaan per divisi, proposal/LPJ/surat dengan template otomatis ke PDF, alur tanda tangan bertingkat dengan barcode verifikasi.",
        "Tech: Laravel 12, Filament 5, PostgreSQL, Inertia.js + React + TypeScript, Tailwind CSS, Vite, PHPUnit.",
      ],
      gallery: [
        { src: "/simapala/beranda.png", caption: "Beranda" },
        { src: "/simapala/kaderisasi.png", caption: "Kaderisasi (pendaftaran calon anggota)" },
        { src: "/simapala/kegiatan.png", caption: "Kegiatan + kalender" },
        { src: "/simapala/info-alam.png", caption: "Info alam (cuaca BMKG)" },
        { src: "/simapala/admin-dasbor.png", caption: "Admin: dasbor" },
        { src: "/simapala/admin-kegiatan.png", caption: "Admin: manajemen kegiatan" },
        { src: "/simapala/admin-keuangan.png", caption: "Admin: kas organisasi" },
        { src: "/simapala/admin-transparansi-kas.png", caption: "Admin: transparansi kas" },
      ],
    },
    {
      _id: "2",
      title: "Website Integrava Digital",
      short: "Integrava Digital",
      category: "Website Perusahaan",
      highlights: [
        "Beranda, layanan, harga, portofolio, konsultasi, dan FAQ",
        "Dua bahasa: Indonesia dan Inggris",
        "Next.js, TypeScript, dan Tailwind CSS",
      ],
      tech: "Next.js, TypeScript, Tailwind CSS, next-intl",
      status: "Sedang dikerjakan",
      description: "Website brand layanan digital Integrava Digital yang berfokus menjual jasa pembuatan website. Saya merancang desainnya dan mengerjakan frontend-nya.",
      link: "",
      imageUrl: "/projects/cover-integrava.jpg",
      video: "/projects/integrava/demo.webm",
      note: "Tangkapan dari versi pengembangan lokal. Konten masih contoh karena proyek sedang dikerjakan.",
      details: [
        "Website brand Integrava Digital dengan fokus layanan IntegraStudio (jasa pembuatan website dan desain).",
        "Halaman: beranda, layanan, harga, portofolio, konsultasi, FAQ, artikel, dan halaman legal. Tersedia dalam bahasa Indonesia dan Inggris.",
        "Dibangun dengan Next.js (App Router), TypeScript, Tailwind CSS, dan next-intl. Peran saya: merancang desain dan mengerjakan frontend (masih berjalan).",
      ],
      gallery: [
        { src: "/projects/integrava/beranda.jpg", caption: "Beranda" },
        { src: "/projects/integrava/layanan.jpg", caption: "Layanan" },
        { src: "/projects/integrava/harga.jpg", caption: "Harga" },
        { src: "/projects/integrava/portofolio.jpg", caption: "Portofolio" },
        { src: "/projects/integrava/konsultasi.jpg", caption: "Konsultasi gratis" },
        { src: "/projects/integrava/faq.jpg", caption: "Pertanyaan umum (FAQ)" },
      ]
    },
    {
      _id: "3",
      title: "Website LPH Halal Hero Ibnu Chaldun",
      short: "LPH Halal Hero",
      category: "Website Lembaga",
      highlights: [
        "Alur proses sertifikasi halal yang jelas",
        "Estimasi biaya halal dan daftar klien",
        "Artikel serta kumpulan regulasi halal",
      ],
      tech: "Website",
      description: "Situs Lembaga Pemeriksa Halal (LPH) Halal Hero Ibnu Chaldun untuk membantu pelaku usaha mengurus sertifikasi halal.",
      link: "https://lph.halalhero.id/",
      imageUrl: "/projects/cover-lph.jpg",
      video: "/projects/lph/demo.webm",
      note: "Tangkapan dari situs yang sedang berjalan.",
      details: [
        "Situs Lembaga Pemeriksa Halal (LPH) Halal Hero Ibnu Chaldun yang terdaftar di BPJPH.",
        "Halaman: beranda, profil, daftar klien, layanan sertifikasi halal, biaya halal (estimasi), artikel, kontak, dan regulasi (UU, PP, PMA, KMA, dan lainnya).",
        "Alur proses sertifikasi halal ditampilkan sebagai langkah-langkah yang mudah diikuti calon klien.",
      ],
      gallery: [
        { src: "/projects/lph/beranda.jpg", caption: "Beranda" },
        { src: "/projects/lph/layanan.jpg", caption: "Layanan sertifikasi halal" },
        { src: "/projects/lph/biaya-halal.jpg", caption: "Biaya halal" },
        { src: "/projects/lph/daftar-klien.jpg", caption: "Daftar klien" },
        { src: "/projects/lph/artikel.jpg", caption: "Artikel" },
        { src: "/projects/lph/profil.jpg", caption: "Profil" },
      ]
    },
    {
      _id: "4",
      title: "Website Halal Hero Academy",
      short: "Halal Hero Academy",
      category: "Website Lembaga Pelatihan",
      highlights: [
        "Jadwal dan kalender pelatihan",
        "Galeri kegiatan dan artikel",
        "Cek sertifikat peserta pelatihan",
      ],
      tech: "Website",
      description: "Situs lembaga pelatihan SDM halal: penyelia halal, auditor halal, juru sembelih halal, dan SDM syariah.",
      link: "https://academy.halalhero.id/",
      imageUrl: "/projects/cover-academy.jpg",
      video: "/projects/academy/demo.webm",
      note: "Tangkapan dari situs yang sedang berjalan.",
      details: [
        "Situs Halal Hero Ibnu Chaldun Academy, lembaga pelatihan kerja untuk SDM halal.",
        "Layanan pelatihan: Penyelia Halal, Auditor Halal, Juru Sembelih Halal, dan SDM Syariah.",
        "Fitur: kalender atau jadwal pelatihan, galeri, artikel, dan cek sertifikat.",
      ],
      gallery: [
        { src: "/projects/academy/beranda.jpg", caption: "Beranda" },
        { src: "/projects/academy/layanan-penyelia-halal.jpg", caption: "Pelatihan Penyelia Halal" },
        { src: "/projects/academy/jadwal-pelatihan.jpg", caption: "Jadwal pelatihan" },
        { src: "/projects/academy/galeri.jpg", caption: "Galeri" },
        { src: "/projects/academy/artikel.jpg", caption: "Artikel" },
        { src: "/projects/academy/cek-sertifikat.jpg", caption: "Cek sertifikat" },
      ]
    },
    {
      _id: "5",
      title: "Aplikasi Pembelajaran Bahasa Inggris Berbasis NLP (Tugas Akhir)",
      short: "Aplikasi Skripsi",
      category: "Aplikasi Android · Tugas Akhir",
      highlights: [
        "Materi, kartu hafalan bergambar, kuis, dan esai",
        "Chatbot berbasis NLP dengan chat suara",
        "Dasbor progres siswa dan laporan nilai guru",
      ],
      tech: "React Native (Expo), Node.js, Express, MySQL, NLP",
      description: "Aplikasi belajar bahasa Inggris untuk siswa SMP dengan tutor AI \"Mr. Robo\", lengkap dengan peran siswa, guru, dan admin.",
      link: "",
      imageUrl: "/projects/cover-english-app.jpg",
      video: "/projects/english-app/demo.webm",
      note: "Demo versi web dengan data fiktif. Aplikasi aslinya berjalan di Android.",
      portrait: true,
      details: [
        "Aplikasi Android (Expo/React Native) untuk SMP Bethesda Indonesia dengan tiga peran: Admin, Guru, dan Siswa.",
        "Siswa: materi per topik, kartu hafalan (flashcard) bergambar, kuis, esai, dasbor progres, dan AI Tutor \"Mr. Robo\".",
        "Guru: mengelola materi dan kategori, bank soal, kelas, serta laporan nilai. Admin: mengelola pengguna, kelas, dan laporan data (PDF).",
        "Chatbot memakai model bahasa (NLP) lewat Groq, dengan chat suara (speech-to-text). Backend: Node.js, Express, MySQL, dan JWT.",
      ],
      gallery: [
        { src: "/projects/english-app/login.jpg", caption: "Halaman masuk" },
        { src: "/projects/english-app/siswa-beranda.jpg", caption: "Siswa: beranda" },
        { src: "/projects/english-app/siswa-belajar.jpg", caption: "Siswa: daftar topik" },
        { src: "/projects/english-app/siswa-topik-grammar.jpg", caption: "Siswa: materi per topik" },
        { src: "/projects/english-app/siswa-kartu-hafalan.jpg", caption: "Siswa: kartu hafalan" },
        { src: "/projects/english-app/siswa-ai-tutor.jpg", caption: "Siswa: AI Tutor Mr. Robo" },
        { src: "/projects/english-app/siswa-progres.jpg", caption: "Siswa: statistik belajar" },
        { src: "/projects/english-app/guru-beranda.jpg", caption: "Guru: beranda" },
        { src: "/projects/english-app/guru-materi.jpg", caption: "Guru: manajemen materi" },
        { src: "/projects/english-app/guru-laporan.jpg", caption: "Guru: laporan nilai" },
        { src: "/projects/english-app/admin-beranda.jpg", caption: "Admin: beranda" },
        { src: "/projects/english-app/admin-user.jpg", caption: "Admin: kelola pengguna" },
      ]
    },
    {
      _id: "6",
      title: "Mathla'ul Anwar Super-App (Android)",
      short: "Mathla'ul Anwar",
      category: "Aplikasi Android",
      highlights: [
        "Pasar Umat dengan dana escrow (ditahan sampai pesanan selesai)",
        "Kartu anggota dan potongan harga anggota aktif",
        "Masuk dengan email atau nomor HP (SSO Madigital)",
      ],
      tech: "React Native (Expo), Node.js, Express, Prisma, PostgreSQL",
      description: "Aplikasi untuk anggota dan penjual organisasi Mathla'ul Anwar, dengan marketplace Pasar Umat dan kartu keanggotaan.",
      link: "",
      imageUrl: "/projects/cover-mathlaul.jpg",
      video: "/projects/mathlaul-android/demo.webm",
      note: "Demo versi web dengan data contoh. Aplikasi aslinya berjalan di Android.",
      portrait: true,
      details: [
        "Aplikasi Android (Expo/React Native) untuk anggota dan penjual Mathla'ul Anwar, terhubung ke REST API (Express, Prisma, PostgreSQL).",
        "Pasar Umat: kategori, pencarian, produk binaan, keranjang, dan transaksi. Dana pembayaran ditahan (escrow) sampai pesanan selesai.",
        "Akun anggota dengan kartu keanggotaan (KTA) dan potongan harga untuk anggota aktif. Akun penjual untuk mengelola toko.",
        "Masuk dengan email atau nomor HP, terintegrasi dengan SSO Madigital.",
      ],
      gallery: [
        { src: "/projects/mathlaul-android/masuk.jpg", caption: "Halaman masuk (email atau nomor HP)" },
        { src: "/projects/mathlaul-android/beranda.jpg", caption: "Beranda Pasar Umat" },
        { src: "/projects/mathlaul-android/beranda-bawah.jpg", caption: "Rekomendasi produk binaan" },
        { src: "/projects/mathlaul-android/pasar.jpg", caption: "Pasar: semua produk umat" },
        { src: "/projects/mathlaul-android/transaksi.jpg", caption: "Transaksi" },
        { src: "/projects/mathlaul-android/akun.jpg", caption: "Akun anggota dan kartu keanggotaan" },
        { src: "/projects/mathlaul-android/penjual-beranda.jpg", caption: "Akun penjual" },
        { src: "/projects/mathlaul-android/penjual-akun.jpg", caption: "Menu akun penjual" },
      ],
    },
    {
      _id: "7",
      title: "SPK Kelayakan Judul Skripsi (Profile Matching)",
      short: "SPK Judul Skripsi",
      category: "Sistem Pendukung Keputusan",
      highlights: [
        "Penilaian per kriteria dengan bobot dan gap",
        "Tiga peran: mahasiswa, akademik, dan admin",
        "Hasil penilaian dapat diunduh dalam PDF",
      ],
      tech: "Laravel, MySQL, Profile Matching",
      description: "Aplikasi untuk menilai kelayakan judul skripsi dengan metode Profile Matching, dari pengajuan mahasiswa sampai hasil penilaian.",
      link: "",
      imageUrl: "/projects/cover-spk.jpg",
      video: "/projects/spk-skripsi/demo.webm",
      note: "Demo lokal dengan data fiktif.",
      details: [
        "Sistem pendukung keputusan untuk menilai kelayakan judul skripsi dengan metode Profile Matching.",
        "Mahasiswa mengajukan judul. Pihak akademik menilai per kriteria (Produk, Metode, Tujuan Metode, Lokasi/Objek), lalu sistem menghitung gap, bobot, dan skor akhir.",
        "Admin mengelola pengguna dan pengaturan Profile Matching. Hasil penilaian dapat diunduh dalam bentuk PDF.",
        "Dibangun dengan Laravel dan MySQL.",
      ],
      gallery: [
        { src: "/projects/spk-skripsi/ajukan-judul.jpg", caption: "Mahasiswa: mengajukan judul" },
        { src: "/projects/spk-skripsi/mahasiswa-riwayat.jpg", caption: "Mahasiswa: riwayat pengajuan" },
        { src: "/projects/spk-skripsi/akademik-pengajuan-masuk.jpg", caption: "Akademik: pengajuan masuk" },
        { src: "/projects/spk-skripsi/akademik-penilaian.jpg", caption: "Akademik: form penilaian" },
        { src: "/projects/spk-skripsi/akademik-detail-hasil.jpg", caption: "Akademik: rincian Profile Matching" },
        { src: "/projects/spk-skripsi/mahasiswa-hasil.jpg", caption: "Mahasiswa: hasil penilaian" },
        { src: "/projects/spk-skripsi/akademik-kriteria.jpg", caption: "Kriteria dan bobot" },
        { src: "/projects/spk-skripsi/admin-dashboard.jpg", caption: "Admin: dasbor" },
        { src: "/projects/spk-skripsi/admin-pengguna.jpg", caption: "Admin: kelola pengguna" },
      ]
    }
  ],

  certificates: {
    eyebrow: "Validasi Keahlian",
    heading1: "Koleksi",
    headingAccent: "Sertifikat",
    placeholderLabel: "— segera —",
  },

  certificateItems: [
    {
      title: "Pengembang Web Pratama (Junior Web Developer)",
      issuer: "Sertifikat Kompetensi · BNSP, LSP Informatika",
      year: "2026 – 2029",
      logo: "/logos/bnsp.png",
      logoAlt: "Logo BNSP",
      pdfUrl: "/ANANDA-BNSP.pdf",
      description: "Kompeten di bidang Pemrograman dan Pengembangan Perangkat Lunak. Berlaku 3 tahun.",
    },
    {
      title: "Golden English Proficiency Test (GE-EPT)",
      issuer: "Golden English",
      year: "2026 – 2027",
      logo: "/logos/golden-english.png",
      logoAlt: "Logo Golden English",
      pdfUrl: "/GEEPT_Certificate.pdf",
      description: "Skor total 577 (Listening 61, Structure & Written Expression 59, Vocabulary & Reading 53).",
    },
  ],

  achievement: {
    experience: "Pengalaman",
    achievement: "Sertifikat",
    viewCertificate: "Lihat sertifikat",
  },

  contactSection: {
    title: "Kontak",
    availability: "Tersedia untuk magang",
    intro: "Tertarik berkolaborasi atau membuka kesempatan magang? Hubungi saya lewat salah satu kanal berikut, saya akan membalas secepatnya.",
    social: "Sosial media",
    ctaTitle: "Siap Magang & Berkontribusi Bersama Tim Anda!",
    ctaText: "Saya terbuka untuk magang di bidang pengembangan web: frontend, backend, maupun fullstack.",
    ctaEmail: "Email Saya",
    ctaCv: "Unduh CV",
  },

  footer: {
    tagline: "Pengembang web yang mengerjakan frontend, backend, dan database, dari desain sampai tuntas.",
    navTitle: "Navigasi",
    contactTitle: "Kontak",
    backToTop: "Kembali ke atas",
    builtWith: "Dibuat dengan",
    andCode: "& kode.",
  },

  // Tautan sosial / kontak.
  // Ubah "url" sesuai milik Anda. Kosongkan ("") untuk menyembunyikan.
  socials: [
    { group: "kontak", label: "Email", url: "mailto:anandaangeli22@gmail.com", display: "anandaangeli22@gmail.com", icon: "mail" },
    { group: "kontak", label: "Telepon / WhatsApp", url: "https://wa.me/6287778817621", display: "0877-7881-7621", icon: "phone" },
    { group: "kontak", label: "Alamat", url: "https://www.google.com/maps/search/?api=1&query=Jatisampurna+Kota+Bekasi", display: "Jatirangga, Jatisampurna, Kota Bekasi, Jawa Barat", icon: "pin" },
    { group: "sosial", label: "GitHub", url: "https://github.com/anandaangeli", display: "github.com/anandaangeli", icon: "github" },
    { group: "sosial", label: "Instagram", url: "https://instagram.com/anandaangeli", display: "instagram.com/anandaangeli", icon: "instagram" },
  ],
};

export const content = { id };
export type SiteContent = typeof id;

