import Header from './header'
import Footer from './footer'
import NotFound from './notFound'
import { useState } from 'react'

const Layout = ({ children, error }) => {
  const [dark, setDark] = useState(false)

  const toggleDarkMode = () => {
    setDark(!dark)
  }

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'dark' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      {!!error && <NotFound />}
      {!error && (
        <div className="container mx-auto p-4 flex-grow">{children}</div>
      )}

      <Footer />
    </div>
  )
}

export default Layout
