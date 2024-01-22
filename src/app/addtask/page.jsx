"use client";

import { FormNewTask } from "@/app/components/FormNewTask";

const AddTaskPage = () => {
  return (
    <section className="flex flex-col w-full items-start gap-10">
      <h1 className="flex justify-center">Add New Task</h1>
      <FormNewTask />
    </section>
  );
};

export default AddTaskPage;
