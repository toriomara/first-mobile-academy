import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='border-t border-grey py-3 xs:py-4 mt-8'>
      <div className='container grid sm:flex  xWrapper justify-between'>
        <Link href='/'>The First Mobile Academy</Link>
        <div>@ {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
