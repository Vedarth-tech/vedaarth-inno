import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Chat from '../components/Chat'

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="fixed top-0 w-full z-50">
        <Header />
      </header>
      {/* chatBot */}
      <Chat />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>

  )
}

export default MainLayout
