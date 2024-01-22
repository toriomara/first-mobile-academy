import { UserProfile, currentUser } from "@clerk/nextjs";

export default async function ProfilePage() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;

  return (
    <section className="flex flex-col items-center mx-auto py-10">
      <div>Hello {user?.firstName}</div>
      <UserProfile />
    </section>
  );
}
