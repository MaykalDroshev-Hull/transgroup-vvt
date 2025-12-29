'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Fleet from '@/components/Fleet'
import About from '@/components/About'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import CookieBanner from '@/components/CookieBanner'
import { Language } from '@/lib/translations'

export default function Home() {
  const [lang, setLang] = useState<Language>('bg')

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} setLang={setLang} />
        <Services lang={lang} />
        <Fleet lang={lang} />
        <About lang={lang} />
        <Certifications lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer />
      <FloatingButtons />
      <CookieBanner lang={lang} />
    </>
  )
}
