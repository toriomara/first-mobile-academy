// url: http://localhost:3000/api/lesson

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { z } from "zod";

const taskSchema = z.object({
  title: z.string().min(2).max(100),
  text: z.string().min(10).max(5000),
});

// interface InewTask {
//   title: string;
//   text: any;
// }

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const validation = taskSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 });

    const newTask = await prisma.task.create({
      data: {
        title: body.title,
        text: body.text,
      },
    });

    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка создания задачи", error },
      { status: 500 }
    );
  }
};
