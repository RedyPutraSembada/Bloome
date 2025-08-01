import { CourseType } from '@/app/types/course'
import { FooterLinkType } from '@/app/types/footerlink'
import { MentorType } from '@/app/types/mentor'
import { HeaderType } from '@/app/types/menu'
import { TestimonialType } from '@/app/types/testimonial'
import { chunkArray } from '@/utils/validateEmail'
import { NextResponse } from 'next/server'

const HeaderData: HeaderType[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Program', href: '/#program' },
  { label: 'Testimoni', href: '/#testimoni' },
  { label: 'Daftar', href: '/#daftar' },
  { label: 'Contact Us', href: '/#kontak' },
]

const ProgramData: CourseType[] = [
  {
    heading: 'Medicine Mastery Program',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Medicine Mastery Program_/MPP - Privat (Materi & Fasilitas).jpg',
    students: 80,
    classes: 18,
    price: 5500000,
    rating: 4.9,
    terfavorit: true,
    description: 'Program persiapan privat eksklusif yang dirancang untuk membantu siswa mewujudkan impian masuk ke fakultas kedokteran terbaik, baik jalur reguler maupun internasional.',
    facilities: 'Free placement test, learning assessment report, modul belajar dan latihan soal, tryout, dibimbing tutor berpengalaman, pembekalan tes MMPI dan SJT, free formulir SNBT-UTBK dan beberapa mandiri PTN, free 1x test TOEFL/IELTS, mentorship universitas luar negeri, konsultasi pemilihan jurusan dengan psikolog profesional, campus tour ke UI',
    images: [
      '/images/programs/Medicine Mastery Program_/Medicine Mastery Program .jpg',
      '/images/programs/Medicine Mastery Program_/Medicine Mastery Program 2.jpg'
    ]
  },
  {
    heading: 'LBEE Excellent Program',
    name: 'Bloome Education',
    imgSrc: '/images/programs/LBEE Excellent Program_/LBEE Excellent Program - Privat (Materi & Fasilitas).jpg',
    students: 100,
    classes: 20,
    price: 4500000,
    rating: 4.9,
    terfavorit: true,
    description: 'Program privat eksklusif untuk persiapan masuk PTN top di jurusan hukum, bisnis, ekonomi, dan teknik jalur reguler maupun internasional, dilengkapi dengan fasilitas lengkap.',
    facilities: 'Free placement test, learning assessment report, modul belajar dan latihan soal, tryout, dibimbing tutor berpengalaman, pembekalan ujian SAT dan IELTS-TOEFL, free formulir SNBT-UTBK dan beberapa mandiri PTN, free 1x test TOEFL/IELTS, free 1x test SAT, mentorship universitas luar negeri, konsultasi pemilihan jurusan dengan psikolog profesional, campus tour ke kampus UI dan ITB',
    images: [
      '/images/programs/LBEE Excellent Program_/LBEE Excellent Program - Privat.jpg',
      '/images/programs/LBEE Excellent Program_/LBEE Excellent Program - Privat (Materi & Fasilitas).jpg'
    ]
  },
  {
    heading: 'Program 2 Tahun SMA',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program 2 Tahun SMA/Program 2 Tahun SMA - Privat (Materi dan Fasilitas).jpg',
    students: 120,
    classes: 24,
    price: 5000000,
    rating: 4.8,
    terfavorit: false,
    description: 'Program privat eksklusif 2 tahun mulai dari kelas 10 SMA. Tahun pertama fokus kuasai materi sekolah, tahun kedua siap tempur seleksi PTN favorit dengan strategi jitu, latihan soal, dan bimbingan intensif.',
    facilities: 'Free placement test, learning assessment report, modul belajar dan latihan soal, tryout, dibimbing tutor berpengalaman, pembekalan tes MMPI dan SJT, free formulir SNBT-UTBK dan beberapa mandiri PTN, free 1x test TOEFL/IELTS, mentorship universitas luar negeri, konsultasi pemilihan jurusan dengan psikolog profesional, campus tour ke UI',
    images: [
      '/images/programs/Program 2 Tahun SMA/Program 2 Tahun SMA - Privat_.jpg',
      '/images/programs/Program 2 Tahun SMA/Program 2 Tahun SMA - Privat (Materi dan Fasilitas).jpg'
    ]
  },
  // {
  //   heading: 'Program 2 Tahun SMA',
  //   name: 'Bloome Education',
  //   imgSrc: '/images/programs/Program 2 Tahun SMA/Program 2 Tahun SMA - Privat_.jpg',
  //   students: 120,
  //   classes: 24,
  //   price: 5000000,
  //   rating: 4.8,
  //   description: 'Program privat eksklusif 2 tahun mulai dari kelas 10 SMA. Tahun pertama fokus kuasai materi sekolah, tahun kedua siap tempur seleksi PTN favorit dengan strategi jitu, latihan soal, dan bimbingan intensif.',
  //   facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar dan Latihan Soal, Tryout, Dibimbing Tutor Berpengalaman, Pembekalan Tes MMPI dan SJT, Free Formulir SNBT-UTBK dan beberapa Mandiri PTN, Free 1x Test Toefl/IELTS, Mentorship Universitas Luar Negeri, Konsultasi Pemilihan Jurusan dengan Psikolog Professional, Campus tour ke UI'
  // },
  {
    heading: 'Program 2 Tahun SMP',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program 2 Tahun SMP/Program 2 Tahun SMP.jpg',
    students: 150,
    classes: 20,
    price: 3500000,
    rating: 4.7,
    terfavorit: false,
    description: 'Program privat eksklusif 2 tahun mulai dari kelas 8 SMP. Tahun pertama fokus kuasai materi sekolah, tahun kedua siap tempur seleksi SMA favorit dengan strategi jitu, latihan soal, dan bimbingan intensif.',
    facilities: 'Learning assessment report, dibimbing tutor berpengalaman, menggunakan metode master, bimbingan konseling, konsultasi akademik, persiapan PTS PAS PAT, persiapan ANBK (Asesmen Nasional Berbasis Komputer), persiapan ujian TKA (Tes Kemampuan Akademik)',
    images: [
      '/images/programs/Program 2 Tahun SMP/Program 2 Tahun SMP.jpg',
      '/images/programs/Program 2 Tahun SMP/Fasilitas Program 2 Tahun SMP.jpg'
    ]
  },
  {
    heading: 'Program Khusus IUP (Group)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program IUP_/Program Khusus IUP - Group Online dan Offline (Materi dan Fasilitas).jpg',
    students: 60,
    classes: 16,
    price: 45000000,
    rating: 4.9,
    terfavorit: false,
    description: 'Program group class eksklusif untuk siswa yang menargetkan kelas internasional (IUP) di UI, UGM, ITB, UNDIP, dan kampus bergengsi lainnya.',
    facilities: 'Learning assessment report, modul belajar, latihan soal & tryout, dibimbing tutor berpengalaman, free mock test interview dan FGD, tips & strategi dari alumni IUP berbagai universitas, konsultasi pemilihan jurusan dengan psikolog profesional',
    images: [
      '/images/programs/Program IUP_/Program Khusus IUP - Group Online dan Offline.jpg',
      '/images/programs/Program IUP_/Program Khusus IUP - Group Online dan Offline (Materi dan Fasilitas).jpg'
    ]
  },
  // {
  //   heading: 'Program Khusus IUP (Group)',
  //   name: 'Bloome Education',
  //   imgSrc: '/images/programs/Program IUP_/Program Khusus IUP - Group Online dan Offline.jpg',
  //   students: 60,
  //   classes: 16,
  //   price: 45000000,
  //   rating: 4.9,
  //   description: 'Program Group class eksklusif untuk siswa yang menargetkan kelas internasional (IUP) di UI, UGM, ITB, UNDIP, dan kampus bergengsi lainnya.',
  //   facilities: 'Learning Assessment Report, Modul Belajar, Latihan Soal & Tryout, Dibimbing Tutor Berpengalaman, Free Mock Test Interview dan FGD, Tips & strategi dari alumni IUP berbagai universitas, Konsultasi Pemilihan Jurusan dengan Psikolog Professional'
  // },
  {
    heading: 'Program Khusus IUP (Privat)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program IUP_/Program Khusus IUP - Privat_.jpg',
    students: 40,
    classes: 20,
    price: 85000000,
    rating: 5.0,
    terfavorit: false,
    description: 'Program privat eksklusif untuk siswa yang menargetkan kelas internasional (IUP) di UI, UGM, ITB, UNDIP, dan kampus bergengsi lainnya.',
    facilities: 'Free placement test, learning assessment report, modul belajar, latihan soal & tryout, bimbingan penulisan motivation letter, dibimbing tutor berpengalaman, free mock test interview dan FGD, free 1x formulir pendaftaran IUP, persiapan test TOEFL/IELTS, IUP camp akomodasi 1 bulan, tips & strategi dari alumni IUP berbagai universitas, konsultasi pemilihan jurusan dengan psikolog profesional',
    images: [
      '/images/programs/Program IUP_/Program Khusus IUP - Privat_.jpg',
      '/images/programs/Program IUP_/Program Khusus IUP - Privat (Materi dan Fasilitas).jpg'
    ]
  },
  {
    heading: 'Program Sukses SNBT',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program SNBT SMA/Program Sukses SNBT (Kelas 12) - Group Online.jpg',
    students: 200,
    classes: 18,
    price: 9900000,
    rating: 4.8,
    terfavorit: false,
    description: 'Program intensif untuk siswa kelas 12 yang ingin menembus jalur SNBT (Seleksi Nasional Berdasarkan Tes). Dibekali dengan strategi belajar terarah, latihan soal berkualitas, serta simulasi berkala.',
    facilities: 'Free placement test, learning assessment report, modul pembelajaran lengkap detail sistematis dan terupdate, dibimbing guru ahli SNBT profesional, tryout SNBT, free formulir SNBT'
  },
  {
    heading: 'Program Exclusive TKA SMA',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program TKA SMA/Program Exclusive TKA SMA (12) - Privat.jpg',
    students: 80,
    classes: 16,
    price: 18000000,
    rating: 4.9,
    terfavorit: false,
    description: 'Program ini bantu kamu mengerti materi, bukan cuma hafal. Fokus ke pemahaman, strategi belajar efektif, analisis soal, dan penguatan konsep penting untuk mendapat nilai optimal di TKA.',
    facilities: 'Free placement test, learning assessment report, modul belajar, latihan soal-soal TKA, tryout, dibimbing guru ahli TKA profesional, personal coaching, strategi belajar dan ujian efektif'
  },
  {
    heading: 'Program Sukses TKA',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program TKA SMA/Program Khusus TKA - Group Online.jpg',
    students: 150,
    classes: 12,
    price: 9000000,
    rating: 4.7,
    terfavorit: false,
    description: 'Program untuk siswa kelas 6, 9, dan 12 agar bisa menghadapi TKA dengan strategi belajar yang efektif, latihan rutin, dan bimbingan yang suportif.',
    facilities: 'Free placement test, learning assessment report, modul belajar dan latihan soal, tryout, dibimbing tutor berpengalaman, pembekalan tes MMPI dan SJT, free formulir SNBT-UTBK dan beberapa mandiri PTN, free 1x test TOEFL/IELTS, mentorship universitas luar negeri, konsultasi pemilihan jurusan dengan psikolog profesional'
  },
  // {
  //   heading: 'LBEE Excellent Program',
  //   name: 'Bloome Education',
  //   imgSrc: '/images/programs/LBEE Excellent Program_/LBEE Excellent Program - Privat.jpg',
  //   students: 100,
  //   classes: 20,
  //   price: 4500000,
  //   rating: 4.9,
  //   description: 'Program privat eksklusif untuk persiapan masuk PTN Top di jurusan Hukum, Bisnis, Ekonomi, dan Teknik jalur Reguler maupun Internasional.',
  //   facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar dan Latihan Soal, Tryout, Dibimbing Tutor Berpengalaman, Pembekalan Tes MMPI dan SJT, Free Formulir SNBT-UTBK dan beberapa Mandiri PTN, Free 1x Test Toefl/IELTS, Mentorship Universitas Luar Negeri, Konsultasi Pemilihan Jurusan dengan Psikolog Professional, Campus tour ke UI'
  // },
]

const TestimonialData: TestimonialType[] = [
  {
    name: 'Nael',
    profession: 'FH UI IUP',
    comment:
      'Belajar dengan para tutor Bloome Education sangat seru karena sangat open to discussions dan penjelasan selalu komprehensif dengan approach yang interaktif.',
    imgSrc: '/images/testimonial/1.jpg',
    rating: 5,
    videoUrl: null
  },
  {
    name: 'Aditya',
    profession: 'FTTM ITB IUP',
    comment:
      'Para pengajar Bloome Education ini sangat jago dalam menjelaskan sulit yang sulit. Penjelasan materi runtut dan mudah dipahami.',
    imgSrc: '/images/testimonial/2.jpg',
    rating: 5,
    videoUrl: null
  },
  {
    name: 'Nisa',
    profession: 'FK UI',
    comment:
      'Akhirnya mimpi saya terwujud masuk Kedokteran di UI. Terima kasih tutor Bloome Education sudah membimbing saya dalam memahami soal-soal UTBK dan Mandiri.',
    imgSrc: '/images/testimonial/3.jpg',
    rating: 5,
    videoUrl: null
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Bloome',
    links: [
      { label: 'Beranda', href: '/' },
      { label: 'Program', href: '/#program' },
      { label: 'Testimoni', href: '/#testimoni' },
      { label: 'Kontak', href: '/#kontak' },
    ],
  },
  {
    section: 'Program',
    links: [
      { label: 'Medicine Mastery Program', href: '/#program' },
      { label: 'LBEE Excellent Program', href: '/#program' },
      { label: 'Program 2 Tahun SMA', href: '/#program' },
      { label: 'Program 2 Tahun SMP', href: '/#program' },
      { label: 'Program Khusus IUP (Group)', href: '/#program' },
      { label: 'Program Khusus IUP (Privat)', href: '/#program' },
      { label: 'Program Sukses SNBT', href: '/#program' },
      { label: 'Program Exclusive TKA SMA', href: '/#program' },
      { label: 'Program Sukses TKA', href: '/#program' },
    ]
  },
]

// export const transformedFooterLinks: FooterLinkType[] = FooterLinkData.flatMap((section) => {
//   if (section.links.length <= 5) return [section];

//   const chunks = chunkArray(section.links, 5);
//   return chunks.map((chunk, index) => ({
//     section: index === 0 ? section.section : `${section.section} ${index + 1}`,
//     links: chunk,
//   }));
// });

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    ProgramData,
    TestimonialData,
    // FooterLinkData: transformedFooterLinks,
    FooterLinkData,
  })
}
