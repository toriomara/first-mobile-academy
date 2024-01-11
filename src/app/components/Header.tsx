import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { EnterIcon, PersonIcon, PlusIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { auth, UserButton } from '@clerk/nextjs'

export const Header = () => {
    const {userId} = auth()
    console.log(userId);
  return (
    <header className='container border-b border-grey py-6'>
      <nav className=''>
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
          <div className='flex gap-4'>
            <ModeToggle />
            {userId ? (
              <div className='flex items-center gap-4'>
                <UserButton afterSignOutUrl='/'/>
                <Link href='/profile'>
                  <Button variant='ghost'>
                    <PersonIcon className="mr-2 h-4 w-4" /> Profile
                  </Button>
                </Link>
              </div> ) : (
              <>
                <Link href='sign-in'>
                  <Button variant='ghost'>
                    <EnterIcon className="mr-2 h-4 w-4" /> Sign In
                  </Button>
                </Link>
                <Link href='sign-up'>
                  <Button variant='ghost'>
                    <PlusIcon className="mr-2 h-4 w-4" /> Sign Up
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

