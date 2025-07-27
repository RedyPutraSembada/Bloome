import { CourseType } from '@/app/types/course'
import { FooterLinkType } from '@/app/types/footerlink'
import { MentorType } from '@/app/types/mentor'
import { HeaderType } from '@/app/types/menu'
import { TestimonialType } from '@/app/types/testimonial'
import { NextResponse } from 'next/server'

const HeaderData: HeaderType[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Program', href: '/#program' },
  { label: 'Testimoni', href: '/#testimoni' },
  { label: 'Kontak', href: '/#kontak' },
  { label: 'Daftar', href: '/#daftar' },
]

const ProgramData: CourseType[] = [
  {
    heading: 'LBEE Excellent Program (Full Facilities)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/LBEE Excellent Program_/LBEE Excellent Program - Privat (Materi & Fasilitas).jpg',
    students: 100,
    classes: 20,
    price: 4500000,
    rating: 4.9,
    description: 'Program privat eksklusif untuk persiapan masuk PTN Top di jurusan Hukum, Bisnis, Ekonomi, dan Teknik jalur Reguler maupun Internasional, dilengkapi dengan fasilitas lengkap.',
    facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar dan Latihan Soal, Tryout, Dibimbing Tutor Berpengalaman, Pembekalan ujian SAT dan IELTS-TOEFL, Free Formulir SNBT-UTBK dan beberapa Mandiri PTN, Free 1x Test Toefl/IELTS, Free 1x Test SAT, Mentorship Universitas Luar Negeri, Konsultasi Pemilihan Jurusan dengan Psikolog Professional, Campus tour ke kampus UI dan ITB'
  },
  {
    heading: 'Program 2 Tahun SMA (Full Facilities)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program 2 Tahun SMA/Program 2 Tahun SMA - Privat (Materi dan Fasilitas).jpg',
    students: 120,
    classes: 24,
    price: 5000000,
    rating: 4.8,
    description: 'Program privat eksklusif 2 tahun mulai dari kelas 10 SMA. Tahun pertama fokus kuasai materi sekolah, tahun kedua siap tempur seleksi PTN favorit dengan strategi jitu, latihan soal, dan bimbingan intensif.',
    facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar dan Latihan Soal, Tryout, Dibimbing Tutor Berpengalaman, Pembekalan Tes MMPI dan SJT, Free Formulir SNBT-UTBK dan beberapa Mandiri PTN, Free 1x Test Toefl/IELTS, Mentorship Universitas Luar Negeri, Konsultasi Pemilihan Jurusan dengan Psikolog Professional, Campus tour ke UI'
  },
  {
    heading: 'Program 2 Tahun SMA',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program 2 Tahun SMA/Program 2 Tahun SMA - Privat_.jpg',
    students: 120,
    classes: 24,
    price: 5000000,
    rating: 4.8,
    description: 'Program privat eksklusif 2 tahun mulai dari kelas 10 SMA. Tahun pertama fokus kuasai materi sekolah, tahun kedua siap tempur seleksi PTN favorit dengan strategi jitu, latihan soal, dan bimbingan intensif.',
    facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar dan Latihan Soal, Tryout, Dibimbing Tutor Berpengalaman, Pembekalan Tes MMPI dan SJT, Free Formulir SNBT-UTBK dan beberapa Mandiri PTN, Free 1x Test Toefl/IELTS, Mentorship Universitas Luar Negeri, Konsultasi Pemilihan Jurusan dengan Psikolog Professional, Campus tour ke UI'
  },
  {
    heading: 'Program 2 Tahun SMP',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program 2 Tahun SMP/Program 2 Tahun SMP.jpg',
    students: 150,
    classes: 20,
    price: 3500000,
    rating: 4.7,
    description: 'Program privat eksklusif 2 tahun mulai dari kelas 8 SMP. Tahun pertama fokus kuasai materi sekolah, tahun kedua siap tempur seleksi SMA favorit dengan strategi jitu, latihan soal, dan bimbingan intensif.',
    facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar dan Latihan Soal, Tryout, Dibimbing Tutor Berpengalaman, Pembekalan Tes MMPI dan SJT, Free Formulir SNBT-UTBK dan beberapa Mandiri PTN, Free 1x Test Toefl/IELTS, Mentorship Universitas Luar Negeri, Konsultasi Pemilihan Jurusan dengan Psikolog Professional, Campus tour ke UI'
  },
  {
    heading: 'Program Khusus IUP (Group Online & Offline)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program IUP_/Program Khusus IUP - Group Online dan Offline (Materi dan Fasilitas).jpg',
    students: 60,
    classes: 16,
    price: 45000000,
    rating: 4.9,
    description: 'Program Group class eksklusif untuk siswa yang menargetkan kelas internasional (IUP) di UI, UGM, ITB, UNDIP, dan kampus bergengsi lainnya.',
    facilities: 'Learning Assessment Report, Modul Belajar, Latihan Soal & Tryout, Dibimbing Tutor Berpengalaman, Free Mock Test Interview dan FGD, Tips & strategi dari alumni IUP berbagai universitas, Konsultasi Pemilihan Jurusan dengan Psikolog Professional'
  },
  {
    heading: 'Program Khusus IUP (Group)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program IUP_/Program Khusus IUP - Group Online dan Offline.jpg',
    students: 60,
    classes: 16,
    price: 45000000,
    rating: 4.9,
    description: 'Program Group class eksklusif untuk siswa yang menargetkan kelas internasional (IUP) di UI, UGM, ITB, UNDIP, dan kampus bergengsi lainnya.',
    facilities: 'Learning Assessment Report, Modul Belajar, Latihan Soal & Tryout, Dibimbing Tutor Berpengalaman, Free Mock Test Interview dan FGD, Tips & strategi dari alumni IUP berbagai universitas, Konsultasi Pemilihan Jurusan dengan Psikolog Professional'
  },
  {
    heading: 'Program Khusus IUP (Privat Full)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program IUP_/Program Khusus IUP - Privat (Materi dan Fasilitas).jpg',
    students: 40,
    classes: 20,
    price: 85000000,
    rating: 5.0,
    description: 'Program privat eksklusif untuk siswa yang menargetkan kelas internasional (IUP) di UI, UGM, ITB, UNDIP, dan kampus bergengsi lainnya.',
    facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar, Latihan Soal & Tryout, Bimbingan Penulisan Motivation Letter, Dibimbing Tutor Berpengalaman, Free Mock Test Interview dan FGD, Free 1x Formulir Pendaftaran IUP, Persiapan Test Toefl/IELTS, IUP Camp akomodasi 1 bulan, Tips & strategi dari alumni IUP berbagai universitas, Konsultasi Pemilihan Jurusan dengan Psikolog Professional'
  },
  {
    heading: 'Program Khusus IUP (Privat)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program IUP_/Program Khusus IUP - Privat_.jpg',
    students: 40,
    classes: 20,
    price: 85000000,
    rating: 5.0,
    description: 'Program privat eksklusif untuk siswa yang menargetkan kelas internasional (IUP) di UI, UGM, ITB, UNDIP, dan kampus bergengsi lainnya.',
    facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar, Latihan Soal & Tryout, Bimbingan Penulisan Motivation Letter, Dibimbing Tutor Berpengalaman, Free Mock Test Interview dan FGD, Free 1x Formulir Pendaftaran IUP, Persiapan Test Toefl/IELTS, IUP Camp akomodasi 1 bulan, Tips & strategi dari alumni IUP berbagai universitas, Konsultasi Pemilihan Jurusan dengan Psikolog Professional'
  },
  {
    heading: 'Program Sukses SNBT (Kelas 12)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program SNBT SMA/Program Sukses SNBT (Kelas 12) - Group Online.jpg',
    students: 200,
    classes: 18,
    price: 9900000,
    rating: 4.8,
    description: 'Program intensif untuk siswa kelas 12 yang ingin menembus jalur SNBT (Seleksi Nasional Berdasarkan Tes). Dibekali dengan strategi belajar terarah, latihan soal berkualitas, serta simulasi berkala.',
    facilities: 'Free Placement Test, Learning Assessment Report, Modul Pembelajaran Lengkap Detail Sistematis dan Terupdate, Dibimbing Guru Ahli SNBT Profesional, Tryout SNBT, Free Formulir SNBT'
  },
  {
    heading: 'Program Exclusive TKA SMA (12)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program TKA SMA/Program Exclusive TKA SMA (12) - Privat.jpg',
    students: 80,
    classes: 16,
    price: 18000000,
    rating: 4.9,
    description: 'Program ini bantu kamu mengerti materi, bukan cuma hafal. Fokus ke pemahaman, strategi belajar efektif, analisis soal, dan penguatan konsep penting untuk mendapat nilai optimal di TKA.',
    facilities: 'FREE PLACEMENT TEST, LEARNING ASSESSMENT REPORT, MODUL BELAJAR, LATIHAN SOAL-SOAL TKA, TRYOUT, DIBIMBING GURU AHLI TKA PROFESSIONAL, PERSONAL COACHING, STRATEGI BELAJAR DAN UJIAN EFEKTIF'
  },
  {
    heading: 'Program Khusus TKA (Group Online)',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Program TKA SMA/Program Khusus TKA - Group Online.jpg',
    students: 150,
    classes: 12,
    price: 9000000,
    rating: 4.7,
    description: 'Program untuk siswa kelas 6, 9, dan 12 agar bisa menghadapi TKA dengan strategi belajar yang efektif, latihan rutin, dan bimbingan yang suportif.',
    facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar dan Latihan Soal, Tryout, Dibimbing Tutor Berpengalaman, Pembekalan Tes MMPI dan SJT, Free Formulir SNBT-UTBK dan beberapa Mandiri PTN, Free 1x Test Toefl/IELTS, Mentorship Universitas Luar Negeri, Konsultasi Pemilihan Jurusan dengan Psikolog Professional'
  },
  {
    heading: 'Medicine Mastery Program',
    name: 'Bloome Education',
    imgSrc: '/images/programs/Medicine Mastery Program_/MPP - Privat (Materi & Fasilitas).jpg',
    students: 80,
    classes: 18,
    price: 5500000,
    rating: 4.9,
    description: 'Program persiapan privat eksklusif yang dirancang untuk membantu siswa mewujudkan impian masuk ke fakultas kedokteran terbaik, baik jalur Reguler maupun Internasional.',
    facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar dan Latihan Soal, Tryout, Dibimbing Tutor Berpengalaman, Pembekalan Tes MMPI dan SJT, Free Formulir SNBT-UTBK dan beberapa Mandiri PTN, Free 1x Test Toefl/IELTS, Mentorship Universitas Luar Negeri, Konsultasi Pemilihan Jurusan dengan Psikolog Professional, Campus tour ke UI'
  },
  {
    heading: 'LBEE Excellent Program',
    name: 'Bloome Education',
    imgSrc: '/images/programs/LBEE Excellent Program_/LBEE Excellent Program - Privat.jpg',
    students: 100,
    classes: 20,
    price: 4500000,
    rating: 4.9,
    description: 'Program privat eksklusif untuk persiapan masuk PTN Top di jurusan Hukum, Bisnis, Ekonomi, dan Teknik jalur Reguler maupun Internasional.',
    facilities: 'Free Placement Test, Learning Assessment Report, Modul Belajar dan Latihan Soal, Tryout, Dibimbing Tutor Berpengalaman, Pembekalan Tes MMPI dan SJT, Free Formulir SNBT-UTBK dan beberapa Mandiri PTN, Free 1x Test Toefl/IELTS, Mentorship Universitas Luar Negeri, Konsultasi Pemilihan Jurusan dengan Psikolog Professional, Campus tour ke UI'
  },
]

const TestimonialData: TestimonialType[] = [
  {
    name: 'Nael',
    profession: 'FH UI KKI',
    comment:
      'Berhasil masuk FH UI KKI berkat program Bloome! Mentornya sangat berpengalaman dan materinya lengkap. Program persiapan yang sangat membantu untuk lolos ke fakultas hukum terbaik.',
    imgSrc: '/images/testimonial/mhs1.jpg',
    rating: 5,
    videoUrl: null
  },
  {
    name: 'Aditya',
    profession: 'FTTM ITB PROGRAM IUP',
    comment:
      'Program IUP Bloome memberikan strategi jitu untuk lolos ke ITB. Sukses diterima di FTTM ITB melalui jalur IUP! Recommended banget untuk yang target kampus internasional.',
    imgSrc: '/images/testimonial/mhs2.jpg',
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
      { label: 'LBEE Excellent Program (Full Facilities)', href: '/#program' },
      { label: 'Program 2 Tahun SMA (Full Facilities)', href: '/#program' },
      { label: 'Program 2 Tahun SMA', href: '/#program' },
      { label: 'Program 2 Tahun SMP', href: '/#program' },
      { label: 'Program Khusus IUP (Group Online & Offline)', href: '/#program' },
      { label: 'Program Khusus IUP (Group)', href: '/#program' },
      { label: 'Program Khusus IUP (Privat Full)', href: '/#program' },
      { label: 'Program Khusus IUP (Privat)', href: '/#program' },
      { label: 'Program Sukses SNBT (Kelas 12)', href: '/#program' },
      { label: 'Program Exclusive TKA SMA (12)', href: '/#program' },
      { label: 'Program Khusus TKA (Group Online)', href: '/#program' },
      { label: 'Medicine Mastery Program', href: '/#program' },
      { label: 'LBEE Excellent Program', href: '/#program' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    ProgramData,
    TestimonialData,
    FooterLinkData,
  })
}
