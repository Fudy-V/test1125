"use server";

import { prisma } from "@/lib/prismaClient";
import { redirect } from "next/navigation";

export const handleAdd = async (params: FormData) => {
  try {
    const title = params.get("title");

    if (!title || typeof title !== "string" || title.trim() === "") {
      throw new Error("Title is required and must be a non-empty string");
    }

    await prisma.todo.create({
      data: { title: title },
    });
  } catch (error) {
    console.error(error);

    redirect("/create");
  }
};
