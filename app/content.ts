// ============================================================
//  ISI DATA DIRI ANDA DI SINI
//  Cukup ubah teks di bawah — website akan otomatis mengikuti.
//  Setiap teks punya versi Indonesia (id) dan Inggris (en).
//  (Data PROYEK diambil dari Sanity Studio di /studio, bukan di sini.)
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
  },

  name: "Ananda Gracia Angeli",

  hero: {
    greeting: "Halo, saya",
    subtitle: "Built with ♥ & Code",
    description: "Membangun solusi digital yang efisien dan user-friendly adalah hal yang selalu membuat saya antusias. Harapan saya ke depannya sederhana: bisa terus berkembang sebagai developer dan berkontribusi dalam tim yang satu visi untuk merancang teknologi yang berdampak positif.",
    photo: "/foto-ananda.jpeg",
    ctaCv: "Unduh CV",
    ctaProjects: "Lihat Proyek",
    badge: "Fresh Graduate",
    fileLabel: "ananda.tsx",
    status: "Lulusan Baru",
    statusNote: "Siap untuk peluang baru",
    scrollDown: "Scroll",
  },

  about: {
    eyebrow: "Tentang & Pendidikan",
    heading1: "Sedikit tentang",
    headingAccent: "saya",
    intro:
      "Seorang lulusan IT yang memiliki antusiasme tinggi terhadap pengembangan inovasi di bidang Web dan Software Development. Saya berdedikasi untuk selalu menciptakan solusi digital yang fungsional dan berpusat pada pengguna. Sebagai individu yang adaptif dan komunikatif, saya selalu antusias menyambut teknologi baru dan tantangan kolaboratif. Saya berkomitmen untuk terus belajar, bertumbuh, dan menjadi bagian dari tim yang menciptakan perubahan positif.",
    eyebrowEdu: "Pendidikan",
    thesisLabel: "Skripsi / Riset",
  },

  education: {
    institution: "Universitas Saintek Muhammadiyah",
    degree: "S1 Teknik Informatika",
    note: "Penelitian Skripsi: Aplikasi Pembelajaran Bahasa Inggris berbasis NLP",
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
      items: ["HTML & CSS", "JavaScript", "React", "React Native (Expo)"],
    },
    {
      title: "Backend & Database",
      icon: "⬢",
      items: ["Node.js", "Express", "PHP", "Python", "Django", "MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & Lainnya",
      icon: "◈",
      items: ["Figma", "Canva", "Phaser.js (2D Game Dev)", "NLP"],
    },
  ],

  experience: {
    eyebrow: "Pengalaman",
    heading1: "Magang &",
    headingAccent: "Kerja",
  },

  experiences: [
    {
      role: "Hospital IT Support Unit Implementer",
      company: "PT.Jejaring Tiga Artha",
      period: "2024",
      desc: "Bertanggung jawab atas implementasi dan pemeliharaan sistem informasi rumah sakit (SIMRS).",
      points: [
        "Memastikan ketersediaan infrastruktur IT dan jaringan untuk mendukung operasional unit medis secara 24/7.",
        "Melakukan instalasi, konfigurasi, dan pembaruan perangkat keras maupun perangkat lunak rumah sakit.",
        "Memberikan pelatihan dan dukungan teknis (troubleshooting) kepada staf medis dan administrasi pengguna sistem."
      ]
    },
    {
      role: "Admin Operasional Online Shop",
      company: "E-Commerce",
      period: "2021",
      desc: "Mengelola seluruh aktivitas operasional harian toko digital untuk memastikan kepuasan pelanggan dan akurasi data.",
      points: [
        "Meningkatkan efisiensi pengelolaan inventaris dengan sistem pencatatan stok yang terstruktur.",
        "Melakukan manajemen data produk (katalog, harga, deskripsi) dan memproses pesanan pelanggan setiap hari.",
        "Menangani keluhan dan pertanyaan pelanggan untuk menjaga reputasi dan rating toko tetap tinggi."
      ]
    },
    {
      role: "Staff Produksi & Customer Service",
      company: "Industri Kreatif",
      period: "2026",
      desc: "Berperan ganda dalam mendukung proses produksi konten dan menangani komunikasi garis depan dengan klien.",
      points: [
        "Menangani kebutuhan pelanggan dengan komunikasi yang efektif dan penyelesaian masalah yang cepat.",
        "Berkolaborasi dengan tim produksi untuk memastikan hasil akhir sesuai dengan spesifikasi klien.",
        "Menjaga standar kualitas layanan sebelum produk akhir diserahkan kepada konsumen."
      ]
    },
  ],

  organization: {
    eyebrow: "Organisasi",
    heading1: "Kegiatan",
    headingAccent: "Mahasiswa",
  },

  organizations: [
    {
      name: "BEM (Badan Eksekutif Mahasiswa)",
      role: "Sekretaris Kementerian Luar Negeri",
      period: "2024–2025",
      desc: "Mengelola administrasi dan koordinasi kegiatan kementerian, serta membangun relasi antar kampus dan lembaga eksternal.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&auto=format",
    },
    {
      name: "SIMAPALA",
      role: "Sekretaris Umum & Bendahara",
      period: "2025–2026",
      desc: "Bertanggung jawab atas administrasi organisasi pecinta alam dan pengelolaan keuangan untuk kegiatan ekspedisi dan kepecintaalaman.",
      img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&h=400&fit=crop&auto=format",
    },
  ],

  projects: {
    eyebrow: "Proyek",
    heading1: "Karya yang",
    headingAccent: "pernah dibuat",
    empty: "Belum ada proyek. Tambahkan proyek pertama Anda lewat",
    filterAll: "Semua",
    viewProject: "Lihat proyek",
    imageAlt: "Gambar proyek",
  },

  projectItems: [
    {
      _id: "1",
      title: "Sistem Tutor Adaptif NLP",
      tech: "Python, Flask, NLP, React",
      description: "Aplikasi pembelajaran cerdas yang beradaptasi dengan gaya belajar siswa menggunakan analisis sentimen dan pemrosesan bahasa alami (Natural Language Processing).",
      link: "https://github.com",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop"
    },
    {
      _id: "2",
      title: "E-Commerce Dashboard",
      tech: "React, Node.js, Express, PostgreSQL",
      description: "Panel admin untuk mengelola inventaris toko, pesanan, dan analitik penjualan dengan visualisasi grafik interaktif secara real-time.",
      link: "https://github.com",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      _id: "3",
      title: "Mobile App Kasir",
      tech: "React Native (Expo), MySQL, PHP",
      description: "Aplikasi kasir (Point of Sale) berbasis mobile dengan fitur cetak struk bluetooth, manajemen stok, dan laporan keuangan harian.",
      link: "https://github.com",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop"
    },
    {
      _id: "4",
      title: "Pixel Adventure Game",
      tech: "JavaScript, Phaser.js, HTML5",
      description: "Game petualangan 2D klasik berbasis web dengan berbagai rintangan, level menantang, dan sistem skor memori lokal.",
      link: "https://github.com",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop"
    },
    {
      _id: "5",
      title: "Sistem Informasi Rekam Medis",
      tech: "Django, Python, PostgreSQL, CSS",
      description: "Sistem pencatatan medis pasien untuk fasilitas kesehatan kecil, dilengkapi dengan enkripsi data dan sistem antrian terintegrasi.",
      link: "https://github.com",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
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
      title: "Practical Office Advance",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2023",
      color: "var(--primary)",
      pdfUrl: "/ANANDA-BNSP.pdf",
      description: "Sertifikasi kompetensi keahlian tingkat lanjut dalam pengoperasian perangkat lunak administrasi dan manajemen data perkantoran secara profesional."
    },
    {
      title: "Global English Proficiency Test (GEEPT)",
      issuer: "GEEPT",
      year: "2024",
      color: "#6366f1",
      pdfUrl: "/GEEPT_Certificate.pdf",
      description: "Sertifikasi kelancaran berbahasa Inggris tingkat profesional sebagai validasi kemampuan komunikasi lisan dan tulisan di lingkungan global."
    }
  ],

  footer: {
    builtWith: "Built with",
    andCode: "& Code.",
  },

  // Tautan sosial / kontak.
  // Ubah "url" sesuai milik Anda. Kosongkan ("") untuk menyembunyikan.
  socials: [
    { label: "Email", url: "mailto:anandaangeli22@gmail.com", emoji: "✉️" },
    { label: "GitHub", url: "https://github.com/anandaangeli", emoji: "🐙" },
    { label: "LinkedIn", url: "https://linkedin.com/in/username-anda", emoji: "💼" },
    { label: "Instagram", url: "https://instagram.com/anandaangeli", emoji: "📸" },
  ],
};

export const content = { id };
export type SiteContent = typeof id;

