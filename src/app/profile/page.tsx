import { UserProfile } from "@clerk/nextjs"

const ProfilePage = () => {
  return (
    <section className='flex items-center mx-auto py-10'><UserProfile/></section>
  )
}

export default ProfilePage