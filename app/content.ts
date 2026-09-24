// ============================================================
//  ISI DATA DIRI ANDA DI SINI
//  Cukup ubah teks di bawah — website akan otomatis mengikuti.
//  (Data PROYEK diambil dari Sanity Studio di /studio, bukan di sini.)
// ============================================================

export const content = {
  // Nama yang tampil besar di bagian atas
  name: "Ananda Gracia Angeli",

  heroSubtitle: "Informatics Engineering Student & Developer",
  heroDescription:
    "Mahasiswa Teknik Informatika yang antusias dalam pengembangan aplikasi web/mobile dan implementasi teknologi seperti Natural Language Processing (NLP).",
  heroPhoto: "/foto-ananda.jpeg",

  aboutIntro:
    "Saya adalah mahasiswa Teknik Informatika yang bersemangat dalam membangun solusi digital bermakna. Minat saya mencakup pengembangan aplikasi full-stack, mobile development, dan riset di bidang kecerdasan buatan — khususnya Natural Language Processing.",

  education: {
    institution: "Universitas Saintek Muhammadiyah",
    degree: "S1 Teknik Informatika",
    note: "Penelitian Skripsi: Sistem Tutor Adaptif berbasis NLP",
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

  experiences: [
    {
      role: "Hospital IT Support Unit Implementer",
      company: "Rumah Sakit",
      period: "2024",
      desc: "Implementasi dan pemeliharaan sistem informasi rumah sakit. Memastikan ketersediaan infrastruktur IT untuk mendukung operasional unit medis dan administrasi.",
    },
    {
      role: "Administrator Online Shop",
      company: "E-Commerce",
      period: "2023",
      desc: "Manajemen data produk, pengelolaan pesanan, dan operasional toko digital. Meningkatkan efisiensi pengelolaan inventaris dengan sistem pencatatan yang terstruktur.",
    },
    {
      role: "Staff Produksi & Customer Service",
      company: "Industri Kreatif",
      period: "2022",
      desc: "Mendukung proses produksi konten dan menangani kebutuhan pelanggan dengan komunikasi yang efektif dan penyelesaian masalah yang cepat.",
    },
  ],

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

  certificates: [
    {
      title: "Practical Office Advance",
      issuer: "Balai Latihan Kerja (BLK) Kabupaten Bogor",
      year: "2023",
      color: "#a78bfa",
    },
    {
      title: "Sertifikat Lainnya",
      issuer: "Platform / Lembaga",
      year: "—",
      color: "#6366f1",
      placeholder: true,
    },
    {
      title: "Sertifikat Lainnya",
      issuer: "Platform / Lembaga",
      year: "—",
      color: "#f59e0b",
      placeholder: true,
    },
  ],

  // Tautan sosial / kontak.
  // Ubah "url" sesuai milik Anda. Kosongkan ("") untuk menyembunyikan.
  socials: [
    { label: "Email", url: "mailto:anandaangeli22@gmail.com", emoji: "✉️" },
    { label: "GitHub", url: "https://github.com/anandaangeli", emoji: "🐙" },
    { label: "LinkedIn", url: "https://linkedin.com/in/username-anda", emoji: "💼" },
    { label: "Instagram", url: "https://instagram.com/anandaangeli", emoji: "📸" },
  ],
};

export type SiteContent = typeof content;
