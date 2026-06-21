import type { GalleryItem } from "@/types";

export const galleryCategories = [
  "MUSWA",
  "Seminar",
  "Kajian",
  "PHBI",
  "Bakti Sosial",
] as const;

/**
 * rotation & offsetY are fixed numbers (not Math.random) so the scrapbook
 * tilt is identical on the server and the client — avoids hydration
 * mismatches while still feeling hand-arranged.
 */
export const galleryItems: GalleryItem[] = [
  { id: "g01", category: "MUSWA", caption: "Pembukaan Musyawarah Warga PAI XII", date: "2025-08-10", image: "https://picsum.photos/seed/hmps-muswa-1/500/640", rotation: -4, offsetY: 6 },
  { id: "g02", category: "MUSWA", caption: "Sesi pemilihan ketua umum berlangsung seru", date: "2025-08-10", image: "https://picsum.photos/seed/hmps-muswa-2/640/500", rotation: 3, offsetY: -10 },
  { id: "g03", category: "MUSWA", caption: "Pelantikan pengurus periode 2025/2026", date: "2025-08-11", image: "https://picsum.photos/seed/hmps-muswa-3/500/640", rotation: 5, offsetY: 4 },
  { id: "g04", category: "MUSWA", caption: "Foto bersama seluruh peserta MUSWA", date: "2025-08-11", image: "https://picsum.photos/seed/hmps-muswa-4/640/500", rotation: -2, offsetY: 12 },
  { id: "g05", category: "Seminar", caption: "Seminar Nasional Moderasi Beragama", date: "2025-10-02", image: "https://picsum.photos/seed/hmps-seminar-1/500/640", rotation: -6, offsetY: -6 },
  { id: "g06", category: "Seminar", caption: "Sesi tanya jawab bersama narasumber", date: "2025-10-02", image: "https://picsum.photos/seed/hmps-seminar-2/640/500", rotation: 4, offsetY: 8 },
  { id: "g07", category: "Seminar", caption: "Peserta seminar antusias mencatat", date: "2025-10-02", image: "https://picsum.photos/seed/hmps-seminar-3/500/640", rotation: 2, offsetY: -4 },
  { id: "g08", category: "Seminar", caption: "Penyerahan plakat untuk pemateri", date: "2025-10-02", image: "https://picsum.photos/seed/hmps-seminar-4/640/520", rotation: -3, offsetY: 10 },
  { id: "g09", category: "Kajian", caption: "Kajian rutin Jumat sore di Aula Tarbiyah", date: "2025-09-12", image: "https://picsum.photos/seed/hmps-kajian-1/500/640", rotation: 6, offsetY: -8 },
  { id: "g10", category: "Kajian", caption: "Halaqah tahsin Al-Qur'an anggota baru", date: "2025-09-19", image: "https://picsum.photos/seed/hmps-kajian-2/640/500", rotation: -5, offsetY: 6 },
  { id: "g11", category: "Kajian", caption: "Diskusi kitab bersama dosen pembimbing", date: "2025-09-26", image: "https://picsum.photos/seed/hmps-kajian-3/500/640", rotation: 1, offsetY: -12 },
  { id: "g12", category: "Kajian", caption: "Suasana hangat kajian malam Ramadan", date: "2025-03-15", image: "https://picsum.photos/seed/hmps-kajian-4/640/520", rotation: -1, offsetY: 4 },
  { id: "g13", category: "PHBI", caption: "Peringatan Maulid Nabi Muhammad SAW", date: "2025-09-05", image: "https://picsum.photos/seed/hmps-phbi-1/500/640", rotation: 5, offsetY: 8 },
  { id: "g14", category: "PHBI", caption: "Lomba hadroh menyambut Maulid Nabi", date: "2025-09-05", image: "https://picsum.photos/seed/hmps-phbi-2/640/500", rotation: -4, offsetY: -6 },
  { id: "g15", category: "PHBI", caption: "Tasyakuran Isra Mi'raj bersama warga sekitar", date: "2025-02-08", image: "https://picsum.photos/seed/hmps-phbi-3/500/640", rotation: 3, offsetY: 10 },
  { id: "g16", category: "PHBI", caption: "Pawai santri memperingati Hari Santri Nasional", date: "2025-10-22", image: "https://picsum.photos/seed/hmps-phbi-4/640/520", rotation: -2, offsetY: -10 },
  { id: "g17", category: "Bakti Sosial", caption: "Kunjungan dan santunan ke Panti Asuhan Darul Hikmah", date: "2025-12-14", image: "https://picsum.photos/seed/hmps-baksos-1/500/640", rotation: 4, offsetY: 6 },
  { id: "g18", category: "Bakti Sosial", caption: "Bersih-bersih lingkungan kampus bersama mahasiswa baru", date: "2025-11-09", image: "https://picsum.photos/seed/hmps-baksos-2/640/500", rotation: -6, offsetY: -4 },
  { id: "g19", category: "Bakti Sosial", caption: "Penyaluran takjil untuk warga sekitar kampus", date: "2025-03-22", image: "https://picsum.photos/seed/hmps-baksos-3/500/640", rotation: 2, offsetY: 12 },
  { id: "g20", category: "Bakti Sosial", caption: "Penanaman pohon dalam rangka Hari Bumi", date: "2025-04-22", image: "https://picsum.photos/seed/hmps-baksos-4/640/520", rotation: -3, offsetY: -8 },
];

export function getGalleryByCategory(category: string) {
  if (category === "Semua") return galleryItems;
  return galleryItems.filter((g) => g.category === category);
}
