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
    heading: 'Program Regular UTBK',
    name: 'Bloome Education',
    imgSrc: '/images/courses/program1.jpg',
    students: 500,
    classes: 24,
    price: 2500000,
    rating: 4.8,
    description: 'Program persiapan UTBK lengkap dengan materi TPS, TKA Saintek, dan TKA Soshum. Dilengkapi dengan tryout berkala dan pembahasan soal.',
    facilities: 'Modul lengkap, Tryout 20x, Video pembelajaran, Grup WhatsApp, Konsultasi mentor, Garansi uang kembali'
  },
  {
    heading: 'Smartcamp FK',
    name: 'Bloome Education',
    imgSrc: '/images/courses/program1.jpg',
    students: 150,
    classes: 12,
    price: 3500000,
    rating: 4.9,
    description: 'Program khusus persiapan masuk Fakultas Kedokteran dengan fokus pada TKA Saintek dan strategi khusus FK.',
    facilities: 'Modul FK khusus, Tryout FK 15x, Video pembelajaran, Grup WhatsApp FK, Konsultasi alumni FK, Garansi uang kembali'
  },
  {
    heading: 'Smartcamp Hukum',
    name: 'Bloome Education',
    imgSrc: '/images/courses/program1.jpg',
    students: 120,
    classes: 12,
    price: 3200000,
    rating: 4.7,
    description: 'Program khusus persiapan masuk Fakultas Hukum dengan fokus pada TKA Soshum dan kemampuan analisis hukum.',
    facilities: 'Modul Hukum khusus, Tryout Hukum 12x, Video pembelajaran, Grup WhatsApp Hukum, Konsultasi alumni Hukum, Garansi uang kembali'
  },
  {
    heading: 'Masterclass IUP',
    name: 'Bloome Education',
    imgSrc: '/images/courses/program1.jpg',
    students: 80,
    classes: 8,
    price: 4500000,
    rating: 4.9,
    description: 'Program premium untuk International Undergraduate Program (IUP) dengan persiapan bahasa Inggris dan tes internasional.',
    facilities: 'Modul IUP lengkap, TOEFL/IELTS preparation, Tryout IUP 10x, Video pembelajaran, Grup WhatsApp IUP, Konsultasi mentor IUP, Garansi uang kembali'
  },
  {
    heading: 'Program Private',
    name: 'Bloome Education',
    imgSrc: '/images/courses/program1.jpg',
    students: 50,
    classes: 16,
    price: 5000000,
    rating: 5.0,
    description: 'Program private 1-on-1 dengan mentor berpengalaman untuk target kampus dan jurusan spesifik.',
    facilities: 'Kelas private 1-on-1, Modul custom, Tryout unlimited, Video pembelajaran, Konsultasi intensif, Garansi uang kembali'
  },
]

const TestimonialData: TestimonialType[] = [
  {
    name: 'Ahmad Rizki',
    profession: 'Mahasiswa FK UI',
    comment:
      'Berhasil masuk FK UI berkat program Smartcamp FK Bloome! Mentornya sangat berpengalaman dan materinya lengkap.',
    imgSrc: '/images/testimonial/education.jpg',
    rating: 4,
  },
  {
    name: 'Siti Nurhaliza',
    profession: 'Mahasiswa Hukum UGM',
    comment:
      'Program Smartcamp Hukum Bloome sangat membantu persiapan ujian. Sukses diterima di UGM!',
    imgSrc: '/images/testimonial/education.jpg',
    rating: 5,
    videoUrl: '/videos/edu.mp4'
  },
  {
    name: 'Budi Santoso',
    profession: 'Mahasiswa ITB',
    comment:
      'Masterclass IUP Bloome memberikan strategi jitu untuk lolos ke ITB. Recommended banget!',
    imgSrc: '/images/testimonial/education.jpg',
    rating: 5,
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
      { label: 'UTBK', href: '/#program' },
      { label: 'Smartcamp FK', href: '/#program' },
      { label: 'Smartcamp Hukum', href: '/#program' },
      { label: 'Masterclass IUP', href: '/#program' },
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
