// ============================================================
//  DATA PORTOFOLIO — ganti semua placeholder di sini.
//  Teks dwibahasa ditulis sebagai { id: "...", en: "..." }.
// ============================================================

// Alamat website setelah online (untuk SEO: sitemap, Open Graph, canonical).
// WAJIB ganti ke domain asli Anda, mis. "https://namasaya.vercel.app".
export const siteUrl = "https://kardynan.netlify.app";

export const profile = {
  name: "Kardynan Parulian",
  brand: "Kardynan", // nama pendek untuk logo navbar
  role: {
    id: "Fullstack Web Developer",
    en: "Fullstack Web Developer",
  },
  // role yang bergantian diketik di sidebar (animasi typewriter)
  roles: {
    id: ["Fullstack Developer", "Frontend Developer", "Backend Developer", "Tech Enthusiast"],
    en: ["Fullstack Developer", "Frontend Developer", "Backend Developer", "Tech Enthusiast"],
  },
  location: {
    id: "Kota Malang, Indonesia",
    en: "Malang City, Indonesia",
  },
  tagline: {
    id: "Membangun aplikasi web yang rapi, cepat, dan mudah digunakan.",
    en: "Building clean, fast, and user-friendly web applications.",
  },
  greeting: {
    id: "Halo, saya 👋",
    en: "Hello, I'm 👋",
  },
  // status ketersediaan kerja
  openToWork: true,
  availability: {
    id: "Terbuka untuk peluang baru",
    en: "Open to new opportunities",
  },
  notAvailable: {
    id: "Belum tersedia untuk direkrut",
    en: "Not available for hire",
  },
  cvUrl: "#", // ganti dengan link CV Anda
};

export const about = {
  paragraphs: {
    id: [
      "Perkenalkan, saya seorang Fullstack Web Developer. Tulis paragraf pertama tentang diri Anda di sini — bagaimana Anda mulai tertarik dengan dunia programming.",
      "Paragraf kedua: ceritakan perjalanan belajar atau pengalaman kerja Anda.",
      "Paragraf ketiga: apa yang ingin Anda tunjukkan lewat portofolio ini dan visi Anda sebagai developer.",
    ],
    en: [
      "Hi, I'm a Fullstack Web Developer. Write your first paragraph here — how you got interested in programming.",
      "Second paragraph: tell your learning journey or work experience.",
      "Third paragraph: what you want to showcase through this portfolio and your vision as a developer.",
    ],
  },
};

// Techstack — icon diisi di Techstack.js (key dipakai untuk memetakan icon).
export const techstack = [
  { key: "next", name: "Next.js" },
  { key: "react", name: "React" },
  { key: "tailwind", name: "Tailwind CSS" },
  { key: "node", name: "Node.js" },
  { key: "express", name: "Express" },
  { key: "laravel", name: "Laravel" },
  { key: "typescript", name: "TypeScript" },
  { key: "postgres", name: "PostgreSQL" },
];

// Projects — category: "team" atau "self".
export const projects = [
  {
    title: "Nama Project 1",
    category: "team",
    description: {
      id: "Deskripsi singkat project pertama yang dikerjakan bersama tim.",
      en: "Short description of your first team project.",
    },
    image: "", // contoh: "/images/project1.png" (kosong = pakai placeholder)
    url: "#",
    tags: ["Next.js", "Tailwind"],
  },
  {
    title: "Nama Project 2",
    category: "team",
    description: {
      id: "Deskripsi singkat project kedua yang dikerjakan bersama tim.",
      en: "Short description of your second team project.",
    },
    image: "",
    url: "#",
    tags: ["Laravel", "MySQL"],
  },
  {
    title: "Nama Project 3",
    category: "self",
    description: {
      id: "Deskripsi singkat project pribadi yang Anda kerjakan sendiri.",
      en: "Short description of a personal project you built yourself.",
    },
    image: "",
    url: "#",
    tags: ["Express", "PostgreSQL"],
  },
  {
    title: "Nama Project 4",
    category: "self",
    description: {
      id: "Deskripsi singkat project pribadi lainnya.",
      en: "Short description of another personal project.",
    },
    image: "",
    url: "#",
    tags: ["React", "API"],
  },
];

// Prestasi & Pencapaian. Hapus baris yang tak dipakai atau tambah sebanyaknya.
// `url` opsional (sertifikat/bukti) — pakai "" kalau tidak ada.
export const achievements = [
  {
    title: { id: "Nama Prestasi 1", en: "Achievement Name 1" },
    issuer: "Penyelenggara / Organisasi",
    date: "2024",
    description: {
      id: "Deskripsi singkat prestasi: lomba apa, peran Anda, hasilnya.",
      en: "Short description: what competition, your role, the result.",
    },
    url: "",
  },
  {
    title: { id: "Sertifikasi / Penghargaan 2", en: "Certification / Award 2" },
    issuer: "Penyelenggara / Organisasi",
    date: "2023",
    description: {
      id: "Deskripsi singkat pencapaian kedua.",
      en: "Short description of the second achievement.",
    },
    url: "",
  },
];

// Kontak — key dipakai untuk memetakan icon di Contact.js.
export const contacts = [
  { key: "github", label: "username", url: "https://github.com/username" },
  { key: "linkedin", label: "Nama Anda", url: "https://www.linkedin.com/in/username/" },
  { key: "twitter", label: "@username", url: "https://x.com/username" },
  { key: "email", label: "email@example.com", url: "mailto:email@example.com" },
];
