/** @format */

import Footer from '@/components/common/footer'
import Navbar from '@/components/common/navbar'
import { LayoutComponent } from '@/models'
import React from 'react'

const Layout: LayoutComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
