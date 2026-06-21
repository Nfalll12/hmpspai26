import type { Division } from "@/types";

export const divisions: Division[] = [
  {
    slug: "keagamaan",
    name: "Keagamaan & Dakwah",
    shortDesc: "Merawat suasana religius lewat kajian, tahsin, dan dakwah kampus.",
    longDesc:
      "Divisi Keagamaan & Dakwah menjadi jantung spiritual HMPS PAI. Kami merancang kajian rutin, tahsin Al-Qur'an, dan peringatan hari besar Islam agar nilai-nilai keislaman selalu hidup di tengah kesibukan kuliah.",
    icon: "BookOpenText",
    color: "secondary",
    vision: "Menjadikan setiap anggota dekat dengan Al-Qur'an dan teladan Nabi dalam keseharian.",
    focusAreas: ["Kajian rutin pekanan", "Tahsin & tahfidz", "Peringatan Hari Besar Islam"],
  },
  {
    slug: "pendidikan",
    name: "Pendidikan & Penalaran",
    shortDesc: "Menumbuhkan budaya literasi, riset, dan diskusi akademik yang asik.",
    longDesc:
      "Divisi Pendidikan & Penalaran hadir untuk menjaga semangat belajar tetap menyenangkan: dari bedah buku, pelatihan menulis ilmiah, hingga seminar nasional yang membuka wawasan keilmuan PAI.",
    icon: "GraduationCap",
    color: "primary",
    vision: "Mahasiswa PAI yang kritis, melek literasi, dan percaya diri berbicara di forum ilmiah.",
    focusAreas: ["Seminar & kuliah umum", "Pelatihan karya tulis", "Diskusi lintas angkatan"],
  },
  {
    slug: "minat-bakat",
    name: "Minat, Bakat & Olahraga",
    shortDesc: "Wadah seru untuk olahraga, seni, dan hobi anggota tersalurkan.",
    longDesc:
      "Divisi Minat, Bakat & Olahraga percaya bahwa berorganisasi tetap harus menyenangkan. Kami mengelola kompetisi olahraga antar kelas, pentas seni, hingga klub hobi kecil-kecilan.",
    icon: "Volleyball",
    color: "accent",
    vision: "Ruang aman dan ceria bagi anggota mengembangkan bakat di luar akademik.",
    focusAreas: ["Liga olahraga internal", "Pentas seni & musik", "Lomba kreativitas mahasiswa"],
  },
  {
    slug: "humas-media",
    name: "Humas, Media & Komunikasi",
    shortDesc: "Mengelola cerita HMPS lewat media sosial, desain, dan publikasi.",
    longDesc:
      "Divisi Humas, Media & Komunikasi adalah etalase HMPS PAI ke dunia luar — mengurus Instagram, dokumentasi acara, desain publikasi, sampai menjalin relasi dengan organisasi mahasiswa lain.",
    icon: "Megaphone",
    color: "forest",
    vision: "Cerita HMPS PAI tersampaikan dengan hangat, rapi, dan mudah diikuti siapa saja.",
    focusAreas: ["Konten media sosial", "Dokumentasi kegiatan", "Relasi antar-organisasi"],
  },
  {
    slug: "sosial",
    name: "Sosial & Pengabdian Masyarakat",
    shortDesc: "Menebar manfaat lewat bakti sosial dan kepedulian lingkungan.",
    longDesc:
      "Divisi Sosial & Pengabdian Masyarakat menjadi jembatan HMPS PAI dengan masyarakat sekitar Temanggung — santunan yatim, bakti sosial, hingga aksi peduli lingkungan kampus.",
    icon: "HeartHandshake",
    color: "blush",
    vision: "Kehadiran HMPS PAI dirasakan manfaatnya, bukan hanya di kampus tapi di tengah masyarakat.",
    focusAreas: ["Bakti sosial rutin", "Santunan yatim & dhuafa", "Aksi peduli lingkungan"],
  },
  {
    slug: "kewirausahaan",
    name: "Kewirausahaan & Dana Usaha",
    shortDesc: "Melatih jiwa bisnis anggota sekaligus menopang kas organisasi.",
    longDesc:
      "Divisi Kewirausahaan & Dana Usaha mengelola unit usaha kecil HMPS PAI, dari bazar hingga merchandise, sambil membekali anggota dengan pengalaman bisnis yang nyata.",
    icon: "Sprout",
    color: "sky",
    vision: "Organisasi yang mandiri secara finansial dan anggota yang melek kewirausahaan.",
    focusAreas: ["Bazar & merchandise", "Pelatihan kewirausahaan", "Kemitraan UMKM lokal"],
  },
];

export function getDivisionBySlug(slug: string) {
  return divisions.find((d) => d.slug === slug);
}
