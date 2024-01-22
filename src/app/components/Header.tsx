import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { EnterIcon, ExitIcon, PersonIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { auth, UserButton } from '@clerk/nextjs'

export const Header = () => {
  const {userId} = auth()
  console.log(userId)

  return (
    <header className='border-b border-grey py-3 xs:py-4 mb-8'>
      <nav className='container xWrapper'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Link>
          <div className='flex items-center gap-2'>
            <ModeToggle/>
            {userId ? (
              <>
                <UserButton afterSignOutUrl='/'/>
                <Link href='sign-in'>
                  <Button variant='ghost'>
                    <ExitIcon className="mr-2 h-4 w-4" /> Sign Out
                  </Button>
                </Link>
              </> ) : (
              <>
                <Link href='sign-in'>
                  <Button variant='ghost'>
                    <EnterIcon className="mr-2 h-4 w-4" /> Sign In
                  </Button>
                </Link>
                <Link href='sign-up'>
                  <Button variant='ghost'>
                    <PersonIcon className="mr-2 h-4 w-4" /> Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}