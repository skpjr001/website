import React from 'react'

import { Navigation } from "../components/Navigation"
import { Footer } from "../components/Footer"

export const Layout = ({children}) => {
  return (
    <div>
      <Navigation/>
      <main className="max-w-4xl mx-auto mt-16 antialiased">{children}</main>
      <Footer/>
    </div>
  )
}
