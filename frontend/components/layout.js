import Header from './header'
import Footer from './footer'
import { useState } from 'react'

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false)

  const toggleDarkMode = () => {
    setDark(!dark)
  }

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'dark' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} />

      <div className="container mx-auto p-4 flex-grow">{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
