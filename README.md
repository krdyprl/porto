# Portofolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/4eb0e117-3d48-480e-969d-d2aea119c912/deploy-status)](https://app.netlify.com/projects/prlkrdy/deploys)

Website portofolio pribadi. Satu halaman, dwibahasa (ID/EN), ada dark mode.
Dibuat pakai Next.js + Tailwind CSS.

## Jalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm run lint     # cek kode
```

## Edit konten

Semua data pribadi ada di satu file: [`src/data/portfolio.js`](src/data/portfolio.js)
— profil, bio, keahlian, pengalaman kerja, proyek, kepemimpinan, prestasi,
pendidikan, pengembangan diri, bahasa, dan kontak.

Teks dwibahasa ditulis `{ id: "...", en: "..." }`. Label UI (menu, tombol) ada di
[`src/app/i18n/dictionary.js`](src/app/i18n/dictionary.js).

- **Tebal dalam paragraf**: tulis `**teks**` di data, lalu render pakai komponen
  [`RichText`](src/app/components/RichText.js).
- **File CV**: taruh PDF-nya di `public/`, lalu isi `cvUrl` di `portfolio.js`
  (mis. `"/Kardynan_Parulian_CV_Academy.pdf"`). Tombol "Unduh CV" di hero memakai nilai ini.
- **Gambar proyek**: taruh di `public/images/`, lalu isi field `image` (mis. `"/images/project1.png"`).
- **Icon techstack baru**: tambahkan di peta `ICONS` pada `src/app/components/sections/Techstack.js`.
- **URL situs**: ganti `siteUrl` di `portfolio.js` (dipakai untuk SEO).

## Deploy

Repo ini tersambung ke Netlify ([dashboard](https://app.netlify.com/projects/prlkrdy/deploys)).
Setiap push ke branch `main` akan otomatis build & deploy. Konfigurasi build ada di
[`netlify.toml`](netlify.toml).

## Struktur

```
src/
  data/portfolio.js          # SEMUA data pribadi (edit di sini)
  app/
    i18n/                    # provider bahasa + dictionary UI
    lib/                     # helper animasi
    components/
      RichText.js            # render teks **tebal**
      sections/              # Hero, About, WhatIBuild, Experience, Projects,
                             # Achievements, Education, Contact
                             # (Experience memuat peran profesional,
                             #  kepemimpinan, dan pengembangan profesional)
      Techstack.js           # marquee logo, dipakai di dalam WhatIBuild
      Navbar, Footer, ThemeToggle, LangToggle, dll
    page.js                  # rakit semua section
    layout.js                # provider + dark mode + SEO
```
