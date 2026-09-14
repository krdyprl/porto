// ============================================================
//  DATA PORTOFOLIO — ganti semua placeholder di sini.
//  Teks dwibahasa ditulis sebagai { id: "...", en: "..." }.
//  Teks penekanan ditulis **tebal** (dirender oleh <RichText />).
// ============================================================

// Alamat website setelah online (untuk SEO: sitemap, Open Graph, canonical).
// Ganti kalau nanti pakai domain sendiri.
export const siteUrl = "https://prlkrdy.netlify.app";

export const profile = {
  name: "Kardynan Parulian",
  brand: "Kardynan", // nama pendek untuk logo navbar
  role: {
    id: "AI/ML & Software Developer",
    en: "AI/ML & Software Developer",
  },
  // role yang bergantian diketik di sidebar (animasi typewriter)
  roles: {
    id: ["AI/ML Developer", "Software Developer", "Informatics Student", "Teaching Assistant"],
    en: ["AI/ML Developer", "Software Developer", "Informatics Student", "Teaching Assistant"],
  },
  location: {
    id: "Malang, Jawa Timur, Indonesia",
    en: "Malang, East Java, Indonesia",
  },
  tagline: {
    id: "Mengubah masalah menjadi teknologi, dan teknologi menjadi dampak.",
    en: "Turning problems into technology, and technology into impact.",
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
      "Saya mahasiswa S1 Informatika di Universitas Negeri Malang yang senang mengubah masalah nyata menjadi teknologi yang benar-benar bisa dipakai orang.",
      "Minat saya berada di persimpangan **Artificial Intelligence, Machine Learning, dan pengembangan software**. Dari membangun aplikasi untuk pemantauan obat dan pengecekan obat palsu, sampai membuat solusi digital untuk petani dan komunitas lokal, saya melihat software bukan sekadar produk — melainkan cara membuat masalah rumit lebih mudah dipahami dan ditindaklanjuti.",
      "Selain pengembangan, saya punya pengalaman sebagai **asisten dosen untuk Intelligent Systems, Information Systems, dan Database**, bekerja langsung dengan mahasiswa dan menerjemahkan konsep teknis menjadi solusi praktis.",
      "Di luar kelas, saya aktif mengikuti kompetisi, proyek riset, pengabdian masyarakat, dan kepemimpinan organisasi. Pengalaman itu membentuk saya menjadi developer yang nyaman bergerak dari **penemuan masalah → pengembangan teknis → kolaborasi → implementasi nyata**.",
    ],
    en: [
      "I am an Informatics undergraduate at Universitas Negeri Malang who enjoys turning real-world problems into technology that people can actually use.",
      "My interests sit at the intersection of **Artificial Intelligence, Machine Learning, and software development**. From developing applications for medicine monitoring and counterfeit medicine checking, to building digital solutions for farmers and local communities, I see software not simply as a product, but as a way to make complex problems more understandable and actionable.",
      "Alongside development, I have built experience as an **Intelligent Systems, Information Systems, and Database teaching assistant**, working directly with students and translating technical concepts into practical solutions.",
      "Beyond the classroom, I actively participate in competitions, research projects, community service, and organizational leadership. These experiences have shaped me into a developer who is comfortable moving from **problem discovery → technical development → collaboration → real-world implementation**.",
    ],
  },
};

// "What I Build" — empat area kemampuan.
export const whatIBuild = [
  {
    title: { id: "Kecerdasan Artifisial", en: "Artificial Intelligence" },
    items: ["Machine Learning", "Deep Learning", "Fuzzy Logic", "Explainable AI", "Data Analysis"],
  },
  {
    title: { id: "Pengembangan Software", en: "Software Development" },
    items: ["Python", "Kotlin", "Mobile Application Development", "Software Infrastructure"],
  },
  {
    title: { id: "Data & Basis Data", en: "Data & Database" },
    items: ["pandas", "Data Visualization", "RDBMS", "SQL", "ERD"],
  },
  {
    title: { id: "Praktik Pengembangan", en: "Development Practices" },
    items: ["Agile", "Scrum", "HTCondor"],
  },
];

// Techstack — icon diisi di Techstack.js (key dipakai untuk memetakan icon).
export const techstack = [
  { key: "python", name: "Python" },
  { key: "kotlin", name: "Kotlin" },
  { key: "next", name: "Next.js" },
  { key: "react", name: "React" },
  { key: "tailwind", name: "Tailwind CSS" },
  { key: "node", name: "Node.js" },
  { key: "javascript", name: "JavaScript" },
  { key: "pandas", name: "pandas" },
  { key: "mysql", name: "MySQL" },
  { key: "postgres", name: "PostgreSQL" },
  { key: "git", name: "Git" },
  { key: "linux", name: "Linux" },
];

// Pengalaman kerja & asistensi.
export const experience = [
  {
    role: {
      id: "Asisten Laboratorium Intelligent System",
      en: "Intelligent System Lab Assistant",
    },
    org: "Universitas Negeri Malang",
    period: { id: "Maret 2026 – Sekarang", en: "March 2026 – Present" },
    blurb: {
      id: "Membantu mahasiswa memahami bagaimana intelligent systems bergerak dari teori ke implementasi.",
      en: "Helping students understand how intelligent systems move from theory into implementation.",
    },
    points: {
      id: [
        "Mendampingi sekitar **100 mahasiswa** pada mata kuliah Intelligent Systems.",
        "Mendukung pembelajaran praktik **Machine Learning, Deep Learning, dan Fuzzy Logic**.",
        "Memberi arahan teknis saat sesi praktikum dan membantu mahasiswa mengatasi kendala implementasi.",
      ],
      en: [
        "Assisted approximately **100 students** in the Intelligent Systems course.",
        "Supported practical learning in **Machine Learning, Deep Learning, and Fuzzy Logic**.",
        "Provided technical guidance during practical sessions and helped students troubleshoot implementation challenges.",
      ],
    },
  },
  {
    role: {
      id: "Asisten Information System",
      en: "Information System Assistant",
    },
    org: "Universitas Negeri Malang",
    period: { id: "September 2025 – November 2025", en: "September 2025 – November 2025" },
    blurb: {
      id: "Bekerja di persimpangan teknologi, metodologi, dan pemecahan masalah.",
      en: "Worked at the intersection of technology, methodology, and problem solving.",
    },
    points: {
      id: [
        "Mendampingi **32 mahasiswa** pada mata kuliah Information Systems.",
        "Mendukung pembelajaran yang mencakup **Design Thinking, metodologi Agile, dan audit Sistem Informasi**.",
        "Membimbing mahasiswa dalam kegiatan praktik dan akademik.",
      ],
      en: [
        "Assisted **32 students** in Information Systems coursework.",
        "Supported learning activities covering **Design Thinking, Agile methodologies, and Information Systems auditing**.",
        "Guided students through practical and academic activities.",
      ],
    },
  },
  {
    role: { id: "Intern Pengembangan IT", en: "IT Development Intern" },
    org: "PUI-DLI, Universitas Negeri Malang",
    period: { id: "Mei 2025 – September 2025", en: "May 2025 – September 2025" },
    blurb: {
      id: "Berkontribusi pada inisiatif teknologi di lingkungan riset dan inovasi kampus.",
      en: "Contributed to technology-oriented initiatives within a university research and innovation environment.",
    },
    points: {
      id: [
        "Terlibat dalam kegiatan pengembangan IT yang mendukung inisiatif riset dan inovasi.",
        "Berkontribusi pada proses pengembangan dalam lingkungan teknologi yang kolaboratif.",
      ],
      en: [
        "Participated in IT development activities supporting research and innovation initiatives.",
        "Contributed to the development process within a collaborative technology environment.",
      ],
    },
  },
  {
    role: { id: "Asisten Praktikum Database", en: "Database Practicum Assistant" },
    org: "Universitas Negeri Malang",
    period: { id: "Februari 2025 – Mei 2025", en: "February 2025 – May 2025" },
    blurb: {
      id: "Membuat basis data mudah dipahami, jauh melampaui tabel dan query.",
      en: "Making databases understandable beyond tables and queries.",
    },
    points: {
      id: [
        "Mengajar **32 mahasiswa** pada materi RDBMS, SQL, ERD, dan Data Visualization.",
        "Mendampingi mahasiswa menerjemahkan konsep basis data menjadi implementasi praktis.",
      ],
      en: [
        "Instructed **32 students** in RDBMS, SQL, ERD, and Data Visualization.",
        "Assisted students in translating database concepts into practical implementations.",
      ],
    },
  },
];

// Kepemimpinan & komunitas.
export const leadership = [
  {
    name: "AMBARDAYA",
    role: { id: "Ketua Tim & Inisiator Pengabdian Masyarakat", en: "Community Service Team Lead & Initiator" },
    org: "Djarum Beasiswa Plus",
    period: { id: "2025–2026", en: "2025–2026" },
    blurb: {
      id: "Bagi saya, kepemimpinan bukan hanya mengarahkan tim, melainkan memulai sesuatu yang bisa berlanjut setelah proyeknya selesai.",
      en: "Leadership, for me, is not only about directing a team. It is about starting something that can continue after the project ends.",
    },
    points: {
      id: [
        "Menginisiasi dan memimpin program pemberdayaan masyarakat untuk **remaja putri di Singosari, Malang**.",
        "Berfokus menciptakan alternatif pernikahan dini melalui **kewirausahaan dan pengembangan komunitas**.",
        "Mengembangkan inisiatif social entrepreneurship yang memproduksi **sabun handmade dari ampas kopi**.",
        "Mengoordinasikan perencanaan program, keterlibatan komunitas, pengembangan produk, dan implementasi.",
      ],
      en: [
        "Initiated and led a community empowerment program for **young women in Singosari, Malang**.",
        "Focused on creating alternatives to early marriage through **entrepreneurship and community development**.",
        "Developed a social entrepreneurship initiative producing **handmade soap from used coffee grounds**.",
        "Coordinated program planning, community engagement, product development, and implementation.",
      ],
    },
  },
  {
    name: "Ceramic Art Dinoyo",
    role: { id: "Ketua Tim Pengabdian Masyarakat", en: "Community Service Team Lead" },
    org: "",
    period: { id: "2024", en: "2024" },
    points: {
      id: [
        "Memimpin tim pengabdian masyarakat yang mengembangkan solusi digital untuk Kampung Wisata Keramik Dinoyo.",
        "Mengoordinasikan pengembangan website yang mendukung proses booking dan layanan pengunjung.",
        "Menghubungkan kebutuhan komunitas dengan implementasi teknologi yang praktis.",
      ],
      en: [
        "Led a community service team developing a digital solution for Kampung Wisata Keramik Dinoyo.",
        "Coordinated the development of a website supporting booking and visitor services.",
        "Connected community needs with practical technology implementation.",
      ],
    },
  },
  {
    name: "HMD TEI UM",
    role: { id: "Kepala Divisi Penalaran & Keilmuan", en: "Head of Reasoning & Scientific Affairs" },
    org: "",
    period: { id: "Januari – Desember 2025", en: "January – December 2025" },
    points: {
      id: [
        "Memimpin divisi yang bertanggung jawab atas pengembangan akademik, penalaran ilmiah, dan inisiatif berbagi pengetahuan.",
        "Mengoordinasikan kegiatan yang menghubungkan pengetahuan akademik dengan pemecahan masalah praktis.",
      ],
      en: [
        "Led a division responsible for academic development, scientific reasoning, and knowledge-sharing initiatives.",
        "Coordinated activities connecting academic knowledge with practical problem solving.",
      ],
    },
  },
];

// Peran teknis tambahan (tanpa periode panjang).
export const otherRoles = [
  {
    title: { id: "Co-Staff Teknis — Workshop Artificial Intelligence", en: "Technical Co-Staff — Artificial Intelligence Workshop" },
    date: { id: "Mei 2025", en: "May 2025" },
    description: {
      id: "Mendukung implementasi teknis pada workshop Artificial Intelligence.",
      en: "Supported the technical implementation of an Artificial Intelligence workshop.",
    },
  },
  {
    title: { id: "Kepanitiaan Teknis — Workshop at School", en: "Technical Committee — Workshop at School" },
    date: { id: "Agustus 2024", en: "August 2024" },
    description: {
      id: "Mendukung kegiatan teknis pada workshop bertema IoT.",
      en: "Supported technical activities for an IoT-focused workshop.",
    },
  },
];

// Projects — urutan tampil mengikuti urutan di array ini.
export const projects = [
  {
    no: "01",
    title: "MedCare",
    subtitle: {
      id: "Pemantauan Obat & Deteksi Obat Palsu",
      en: "Medicine Monitoring & Counterfeit Medicine Detection",
    },
    role: {
      id: "Developer · Indonesia Next 10th 2026 — Top 33",
      en: "Developer · Indonesia Next 10th 2026 — Top 33",
    },
    focus: ["Mobile Development", "Healthcare Technology"],
    description: {
      id: "Aplikasi mobile yang dibangun dari satu pertanyaan sederhana namun penting: **bagaimana teknologi bisa membantu orang memantau obat dan mengenali produk yang berpotensi palsu?**",
      en: "A mobile application built around a simple but important question: **how can technology help people monitor medicines and identify potentially counterfeit products?**",
    },
    image: "", // contoh: "/images/medcare.png" (kosong = pakai placeholder)
    url: "https://github.com/krdyprl/medcare",
  },
  {
    no: "02",
    title: "NeumoAI-D",
    subtitle: { id: "Deep Learning × Explainable AI", en: "Deep Learning × Explainable AI" },
    role: { id: "Developer · PKM-KI 2026", en: "Developer · PKM-KI 2026" },
    focus: ["Deep Learning", "Explainable AI", "Healthcare AI"],
    description: {
      id: "**NEUMOAID** mengeksplorasi penggunaan suara batuk untuk skrining pneumonia anak melalui **Deep Learning dan Explainable AI**, dengan tujuan yang lebih luas: mendukung upaya eliminasi pneumonia di Indonesia.",
      en: "**NEUMOAID** explores the use of cough sounds for pediatric pneumonia screening through **Deep Learning and Explainable AI**, with the broader goal of supporting pneumonia elimination efforts in Indonesia.",
    },
    image: "",
    url: "https://github.com/krdyprl/NeumoAI-D",
  },
  {
    no: "03",
    title: "BIOtrash",
    subtitle: {
      id: "Tempat Sampah Plastik PET Biodegradable",
      en: "Biodegradable PET Plastic Waste Bin",
    },
    role: {
      id: "Developer · PKM 2025 — Penerima Pendanaan Nasional",
      en: "Developer · PKM 2025 — National Funding Recipient",
    },
    focus: ["Mobile Development", "Environmental Technology"],
    description: {
      id: "Proyek teknologi yang menghubungkan inovasi lingkungan dengan pengembangan aplikasi mobile.",
      en: "A technology project connecting environmental innovation with mobile application development.",
    },
    image: "",
    url: "https://github.com/krdyprl/biotrash_app",
  },
  {
    no: "04",
    title: "AGRARIX",
    subtitle: { id: "Solusi Digital untuk Petani", en: "Farmer-Centered Digital Solution" },
    role: { id: "Developer · Proyek Hackathon", en: "Developer · Hackathon Project" },
    focus: ["Software Development", "Social Impact", "Agriculture"],
    description: {
      id: "AGRARIX dikembangkan sebagai solusi teknologi untuk membantu petani menghadapi tantangan distribusi pertanian dan dominasi tengkulak.",
      en: "AGRARIX was developed as a technology solution aimed at helping farmers address challenges related to agricultural distribution and intermediary dominance.",
    },
    image: "",
    url: "https://github.com/krdyprl/Agrarix",
  },
  {
    no: "05",
    title: "Ceramic Art Dinoyo",
    subtitle: {
      id: "Membawa Komunitas Tradisional ke Ranah Digital",
      en: "Bringing a Traditional Community Online",
    },
    role: {
      id: "Developer & Ketua Tim · Proyek Pengabdian Masyarakat",
      en: "Developer & Team Lead · Community Service Project",
    },
    focus: ["Web Development", "Community Technology"],
    description: {
      id: "Proyek pengabdian masyarakat yang membangun teknologi di sekitar kebutuhan komunitas lokal yang nyata.",
      en: "A community service project where technology was built around the needs of a real local community.",
    },
    image: "",
    url: "https://github.com/krdyprl/new-cad",
  },
  {
    no: "06",
    title: "Media Pembelajaran",
    subtitle: { id: "Aplikasi Media Pembelajaran", en: "Educational Media Application" },
    role: { id: "Developer", en: "Developer" },
    focus: ["Software Development", "Educational Technology"],
    description: {
      id: "Proyek pengembangan software yang berfokus pada pembuatan media pembelajaran digital.",
      en: "A software development project focused on creating digital educational media.",
    },
    image: "",
    url: "https://github.com/krdyprl/media_pembelajaran",
  },
];

// Prestasi & Pencapaian. Hapus baris yang tak dipakai atau tambah sebanyaknya.
// `url` opsional (sertifikat/bukti) — pakai "" kalau tidak ada.
export const achievements = [
  {
    title: { id: "Top 33 — Indonesia Next 10th", en: "Top 33 — Indonesia Next 10th" },
    issuer: "Indonesia Next",
    date: "2026",
    description: {
      id: "Terpilih sebagai salah satu dari 33 peserta terbaik melalui pengembangan **MedCare**, aplikasi pemantauan obat dan pengecekan obat palsu.",
      en: "Selected among the Top 33 participants through the development of **MedCare**, a medicine monitoring and counterfeit medicine checking application.",
    },
    url: "",
  },
  {
    title: { id: "Finalis — SIP UM", en: "Finalist — SIP UM" },
    issuer: "Hackathon UM 2024",
    date: "2024",
    description: {
      id: "**Sistem Informasi Pelaporan UM** — finalis hackathon yang berfokus pada solusi pelaporan digital untuk fasilitas kampus.",
      en: "**Sistem Informasi Pelaporan UM** — finalist in a hackathon focused on developing a digital reporting solution for university facilities.",
    },
    url: "",
  },
  {
    title: { id: "Juara 2 / Silver", en: "2nd Place / Silver" },
    issuer: { id: "Lomba Karya Tulis Ilmiah · Tingkat Nasional", en: "Scientific Writing Competition · National Level" },
    date: "2025",
    description: "",
    url: "",
  },
  {
    title: { id: "Juara 2 / Silver", en: "2nd Place / Silver" },
    issuer: { id: "Lomba Capstone Project · Tingkat Nasional", en: "Capstone Project Competition · National Level" },
    date: "2025",
    description: "",
    url: "",
  },
  {
    title: { id: "Juara 3 / Bronze", en: "3rd Place / Bronze" },
    issuer: { id: "Fesmaro · Tingkat Nasional", en: "Fesmaro · National Level" },
    date: "2025",
    description: "",
    url: "",
  },
  {
    title: { id: "Juara 1 / Gold", en: "1st Place / Gold" },
    issuer: { id: "IDEA-Fest · Tingkat Nasional", en: "IDEA-Fest · National Level" },
    date: "2024",
    description: "",
    url: "",
  },
  {
    title: { id: "Penerima Djarum Beasiswa Plus", en: "Djarum Beasiswa Plus Awardee" },
    issuer: "Djarum Beasiswa Plus",
    date: "2025/2026",
    description: {
      id: "Terpilih sebagai penerima beasiswa melalui seleksi kompetitif, dengan keterlibatan lanjutan dalam pengembangan profesional, kepemimpinan, dan pemberdayaan masyarakat.",
      en: "Selected as a Djarum Beasiswa Plus awardee through a competitive scholarship selection, with further involvement in professional development, leadership, and community empowerment.",
    },
    url: "",
  },
];

// Pendidikan.
export const education = {
  school: "Universitas Negeri Malang",
  degree: { id: "S1 Informatika", en: "Bachelor of Informatics" },
  status: { id: "Sedang Berjalan", en: "In Progress" },
  gpa: "3.84 / 4.00",
  coursework: {
    id: ["Intelligent Systems", "Information Systems", "Database & Information Systems"],
    en: ["Intelligent Systems", "Information Systems", "Database & Information Systems"],
  },
};

// Kemampuan bahasa.
export const languages = [
  { name: { id: "Bahasa Indonesia", en: "Bahasa Indonesia" }, level: { id: "Native", en: "Native" } },
  { name: { id: "Bahasa Inggris", en: "English" }, level: { id: "Elementary", en: "Elementary" } },
];

// Pengembangan profesional (kursus, workshop, pelatihan).
export const development = [
  {
    title: "Agile Scrum Fundamentals",
    issuer: "Indonesia Next / MindMagine",
    year: "2026",
  },
  { title: "Kotlin Programming", issuer: "Dicoding", year: "2026" },
  { title: "Basic Mobile App Development", issuer: "Dicoding", year: "2026" },
  {
    title: "AI Skills Enhancement Program with RSA",
    issuer: "Nortis.AI by Dot Indonesia × IndigoSpace Malang",
    year: "2025",
  },
  {
    title: "Blockchain in Education Workshop",
    issuer: { id: "Peserta Terpilih", en: "Selected Participant" },
    year: "2024",
  },
  { title: "Character Building FT UM", issuer: "", year: "2023" },
];

// Kontak — key dipakai untuk memetakan icon di Contact.js.
export const contacts = [
  { key: "email", label: "prikrdy@gmail.com", url: "mailto:prikrdy@gmail.com" },
  { key: "phone", label: "089539730475", url: "tel:+6289539730475" },
  { key: "linkedin", label: "kardynan-parulian", url: "https://www.linkedin.com/in/kardynan-parulian" },
  { key: "github", label: "krdyprl", url: "https://github.com/krdyprl" },
];
