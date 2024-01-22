import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <section className='flex items-center mx-auto'>
      <SignIn/>
    </section>
  )
}

export default SignInPage;
