# Baitul Ilmi - Website Les Privat Islam Banda Aceh

Website resmi **Baitul Ilmi**, bimbingan belajar privat keislaman di Banda Aceh (Al-Qur'an, Tajwid, Bahasa Arab, Kajian Kitab Kuning, dan Amaliah Ibadah).

Situs ini dibangun menggunakan **Astro** (static site generation) dengan Astro Content Collections, Markdown untuk konten artikel & halaman statis, serta JSON untuk data terstruktur.

## 🚀 Struktur Proyek

```text
/
├── public/
│   ├── assets/img/             # Gambar pengajar, ilustrasi hero, artikel, dan logo
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Search.astro        # Komponen live search interaktif tanpa ketergantungan eksternal
│   ├── content/
│   │   ├── pages/              # Halaman berbasis Markdown (about, contact, privacy-policy, terms)
│   │   └── posts/              # Artikel & kajian Islam berbasis Markdown (.md)
│   ├── content.config.ts       # Konfigurasi Astro Content Collections dengan Zod schema
│   ├── data/
│   │   ├── faqs.json           # Pertanyaan umum (FAQ)
│   │   ├── materials.json      # Materi bimbingan belajar
│   │   ├── packages.json       # Paket harga les privat
│   │   ├── sections.json       # Judul & sub-judul seksi beranda
│   │   ├── taxonomies.json     # Definisi kategori dan tag artikel
│   │   ├── teachers.json       # Profil asatidz pengajar
│   │   └── testimonials.json   # Testimoni wali murid & siswa
│   ├── layouts/
│   │   └── Base.astro          # Layout utama dengan SEO, OpenGraph, JSON-LD, navigasi, dan WhatsApp button
│   ├── pages/
│   │   ├── 404.astro           # Halaman error 404
│   │   ├── [slug].astro        # Halaman statis generik (privacy-policy, terms)
│   │   ├── about.astro         # Halaman Tentang Kami
│   │   ├── category/[slug].astro # Arsip artikel per kategori
│   │   ├── contact.astro       # Halaman Kontak & Lokasi
│   │   ├── index.astro         # Beranda utama
│   │   ├── posts/
│   │   │   ├── [slug].astro    # Halaman detail artikel
│   │   │   └── index.astro     # Halaman indeks semua artikel
│   │   └── tag/[slug].astro    # Arsip artikel per tag
│   ├── styles/
│   │   └── theme.css           # Styling terpadu & responsif
│   └── utils/
│       ├── site-config.ts      # Kontak WhatsApp & tautan medsos terpusat
│       └── site-identity.ts    # Identitas situs (nama, tagline, logo)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Perintah

| Perintah | Deskripsi |
| :--- | :--- |
| `npm install` | Menginstal dependensi proyek |
| `npm run dev` | Menjalankan server pengembangan (`http://localhost:4321`) |
| `npm run build` | Melakukan build static site ke folder `./dist/` |
| `npm run preview` | Meninjau hasil build lokal sebelum deploy |
| `npm run typecheck` | Menjalankan pengecekan TypeScript & tipe Astro |

## 📝 Mengelola Konten

### Menambah atau Mengubah Artikel
Buat atau ubah file `.md` di folder `src/content/posts/`:
```markdown
---
title: "Judul Artikel"
excerpt: "Ringkasan singkat artikel"
featured_image:
  src: "/assets/img/nama-gambar.jpg"
  alt: "Deskripsi gambar"
publishedAt: "2026-11-05T08:00:00.000Z"
category: ["al-quran"]
tag: ["les-privat", "banda-aceh"]
---

Tulis isi artikel di sini menggunakan format Markdown standar.
```

### Mengubah Data Pengajar, Materi, FAQ, dan Harga
Cukup sunting file JSON terkait di folder `src/data/`:
- `teachers.json`
- `materials.json`
- `packages.json`
- `faqs.json`
- `testimonials.json`
