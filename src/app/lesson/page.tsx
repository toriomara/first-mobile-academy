import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { auth, currentUser } from '@clerk/nextjs'
import { CodeEditor } from '../components/CodeEditor'

export default async function LessonPage() {

  // const { userId } = auth();
  // console.log(userId);

  const user = await currentUser();
  // if (!user) return <div>Not logged in</div>;

  return (
    <section className='flex flex-col items-center max-w-screen-xl'>
      <Link className='flex content-center' href='/'>
        <Button variant='outline'>
          Back
        </Button>
      </Link>
      <div>Hello {user?.firstName}</div>
      <h1 className='text-3xl font-bold my-4'>This is your lesson</h1>
      <CodeEditor />
      <Button type='submit' className='flex w-fit place-self-end mt-4'>Submit</Button>
    </section>
  )
}





