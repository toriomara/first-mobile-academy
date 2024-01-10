import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='container grid sm:flex justify-between border-t border-grey py-6'>
        <Link href='/'>The First Mobile Academy</Link>
        <div>@ {new Date().getFullYear()}</div>
    </footer>
  )
}
