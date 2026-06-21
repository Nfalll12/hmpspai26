# HMPS PAI INISNU Temanggung — Website

Website resmi HMPS PAI INISNU Temanggung. Dibangun dengan Next.js 15 (App
Router), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, dan
komponen ber-gaya shadcn/ui. Konsep visual: cute, cozy, playful, dan tetap
premium — pastel hijau-krem, sudut membulat, bayangan lembut, dan sentuhan
ala scrapbook/polaroid.

## 🚀 Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## 📁 Struktur proyek

```
app/                 → semua halaman (App Router), tiap folder = 1 route
  anggota/[slug]/    → halaman profil anggota (dynamic route)
  berita/[slug]/     → halaman detail artikel (dynamic route)
  loading.tsx        → skeleton loading global
  error.tsx          → halaman error global
  not-found.tsx      → halaman 404
  sitemap.ts         → sitemap otomatis (SEO)
  robots.ts          → robots.txt otomatis (SEO)
components/          → komponen reusable (Navbar, Hero, MemberCard, dst.)
components/ui/       → komponen dasar ala shadcn/ui (Button, Input, Sheet, dst.)
data/                → semua "database" statis dalam TypeScript array
lib/                 → helper (cn, formatDate, icon-map)
types/               → tipe data bersama (Member, Division, dst.)
```

## ✏️ Mengganti konten dengan data asli

Semua data ada di folder `data/` dalam bentuk array TypeScript biasa —
tidak perlu CMS atau database untuk mengubahnya:

| File | Isi |
|---|---|
| `data/site.ts` | nama organisasi, alamat, kontak, link sosial media |
| `data/members.ts` | daftar pengurus & anggota (foto, jabatan, bio, sosmed) |
| `data/divisions.ts` | 6 divisi dan deskripsinya |
| `data/programs.ts` | program kerja per divisi |
| `data/gallery.ts` | foto galeri (MUSWA, Seminar, Kajian, PHBI, Bakti Sosial) |
| `data/news.ts` | artikel berita |
| `data/stats.ts` | angka-angka di bagian statistik beranda |

> ⚠️ **Penting:** Nama, foto, bio, dan nomor kontak di `data/members.ts`
> serta angka di `data/stats.ts` saat ini adalah **data contoh/placeholder**
> agar layout bisa langsung di-preview. Ganti dengan data pengurus yang
> sebenarnya, dan unggah foto asli sebelum situs dipublikasikan.

### Mengganti foto

Foto profil anggota memakai `https://i.pravatar.cc/...` dan foto galeri
memakai `https://picsum.photos/...` sebagai placeholder. Untuk memakai foto
asli:

1. Letakkan file foto di folder `public/` (misalnya `public/anggota/nama.jpg`).
2. Ganti nilai `photo` / `image` / `cover` di file data terkait menjadi
   `"/anggota/nama.jpg"`.

Jika ingin tetap memakai gambar dari domain eksternal lain, tambahkan
domain tersebut ke `images.remotePatterns` di `next.config.ts`.

## 🎨 Mengubah warna & font

Semua warna brand didefinisikan sebagai CSS variable di `app/globals.css`
(mode terang di `:root`, mode gelap di `.dark`) dan dipetakan di
`tailwind.config.ts`. Font diatur lewat `next/font/google` di
`app/layout.tsx` (Poppins untuk body, Fredoka untuk heading).

## ☁️ Deploy ke Vercel

1. Push folder ini ke repository GitHub/GitLab/Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new) dan import repo tersebut.
3. Vercel akan otomatis mendeteksi proyek Next.js — tidak perlu konfigurasi
   tambahan. Klik **Deploy**.

Atau lewat CLI:

```bash
npm i -g vercel
vercel
```

## 🧩 Komponen reusable

`Navbar`, `Footer`, `Hero`, `StatsSection`, `FeatureCard`, `DivisionCard`,
`MemberCard`, `GalleryCard`, `NewsCard`, `ThemeToggle` — semua ada di
`components/`, lengkap dengan komentar singkat di tiap file. Mode gelap
didukung penuh lewat `next-themes` (tombol bulan/matahari di navbar).
