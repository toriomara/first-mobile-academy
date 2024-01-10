import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>Hello</h1>
      <Button className='mt-6'>Submit</Button>
    </div>
  )
}
