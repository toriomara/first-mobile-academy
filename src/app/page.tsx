import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Hello</h1>
      <Button className="mt-6">Submit</Button>
      <Link href="/lesson">
        <Button className="mt-6">Lesson</Button>
      </Link>
    </div>
  );
}