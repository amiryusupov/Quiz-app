import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Page({ children }) {
  return (
    <div className='w-full h-full flex flex-col'>
      <Header />
      <main className='flex-auto'>{children}</main>
      <Footer />
    </div>
  )
}

export default Page