import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='border-t border-grey py-6 mt-8 xWrapper'>
      <div className='grid sm:flex justify-between max-w-screen-xl mx-auto'>
        <div>© {new Date().getFullYear()} <Link href='/'>The First Mobile Academy</Link></div>
        <div>© {new Date().getFullYear()} <Link href='/'>The First Mobile Academy</Link></div>
      </div>
    </footer>
  )
}
