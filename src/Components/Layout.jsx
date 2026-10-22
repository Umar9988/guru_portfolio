import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import BackToTop from './UI/BackToTop'
import WhatsAppFloat from './UI/WhatsAppFloat'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="page-enter">
        <Outlet />
        <WhatsAppFloat />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default Layout