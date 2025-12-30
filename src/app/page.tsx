'use client'

import { useEffect } from 'react'
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
import { useLanguage } from '@/hooks/useLanguage'

export default function Home() {
  const { lang, setLang } = useLanguage()

  useEffect(() => {
    // Handle hash navigation from other pages
    const handleHashNavigation = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const hash = window.location.hash.substring(1) // Remove the #
        const element = document.getElementById(hash)
        if (element) {
          // Wait a bit for the page to render, then scroll with offset
          setTimeout(() => {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }, 100)
        }
      }
    }

    // Run on mount and when hash changes
    handleHashNavigation()
    window.addEventListener('hashchange', handleHashNavigation)

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation)
    }
  }, [])

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <Fleet lang={lang} />
        <About lang={lang} />
        <Certifications lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingButtons />
      <CookieBanner lang={lang} />
    </>
  )
}
