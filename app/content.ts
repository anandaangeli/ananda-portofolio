// ============================================================
//  ISI DATA DIRI ANDA DI SINI
//  Cukup ubah teks di bawah — website akan otomatis mengikuti.
//  (Data PROYEK diambil dari Sanity Studio di /studio, bukan di sini.)
// ============================================================

export const content = {
  // Nama yang tampil besar di bagian atas
  name: "Ananda Gracia Angeli",

  // Kata-kata yang berganti-ganti di sebelah "Saya seorang ..."
  roles: ["Developer", "Programmer", "Problem Solver", "Web Enthusiast"],

  // Kalimat pembuka singkat di Hero
  tagline:
    "Saya membangun aplikasi web yang rapi, cepat, dan menyenangkan digunakan.",

  // Bagian "Tentang Saya"
  about: [
    "Halo, saya Ananda Gracia Angeli, Fresh Graduate Informatika yang berfokus pada pengembangan aplikasi web dan mobile. Berpengalaman mengerjakan proyek menggunakan Laravel, React, Flutter, MySQL, dan PostgreSQL.",
    "Saya memiliki semangat belajar tinggi, mampu memecahkan masalah, dan terbiasa membangun solusi digital yang fungsional serta user-friendly. Saat ini saya siap memulai karier sebagai Web Developer, Frontend Developer, atau Backend Developer.",
  ],

  // Daftar keahlian / teknologi (tambah atau hapus sesuka Anda)
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "HTML & CSS",
    "Tailwind CSS",
    "Git & GitHub",
    "Sanity CMS",
    "REST API",
    "Figma",
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
