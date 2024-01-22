"use client";

import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "The title must contain at least 2 characters",
  }),
  text: z.string().min(10, {
    message: "Description must contain at least 10 characters",
  }),
});

type TaskProps = {
  title: string;
  text: string;
};

interface ITaskForm {
  title: string;
  text: string;
}

export const FormNewTask = () => {
  const {
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<ITaskForm>();

  console.log(formState.isSubmitSuccessful);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      text: "",
    },
  });

  const onSubmit = async (task: TaskProps) => {
    try {
      const res = await fetch("/api/lesson", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
      reset(task)
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        title: "",
        text: "",
      });
    }
  }, [formState, form, reset]);

  return (
    <div className="flex flex-col place-items-end">
      <Form {...form}>
        <form
          className="flex flex-col gap-4 w-full md:w-1/2 space-y-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Input title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Text</FormLabel>
                <FormControl>
                  <Textarea placeholder="Input text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="flex w-fit place-self-end mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
