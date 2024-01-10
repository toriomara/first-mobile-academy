import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LessonPage() {
  return (
    <div className='flex flex-col'>
      <Link href='/'>
        <Button className='mt-6'>Back</Button>
      </Link>
      <h1 className='text-3xl font-bold'>This is your lesson</h1>
    </div>
  )
}
