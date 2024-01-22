import Link from "next/link";
import { CodeEditor } from "../components/CodeEditor";

export default function LessonPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex space-x-4">
        <Link href="/">Back</Link>
        <Link href="/addtask">Add Task</Link>
      </div>
      <h1 className="flex text-3xl font-bold justify-center">
        This is your lesson
      </h1>
      <CodeEditor />
    </div>
  );
}
