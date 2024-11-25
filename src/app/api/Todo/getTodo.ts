"use server";

import { prisma } from "@/lib/prismaClient";

export const getTodo = async () => {
  const todos = await prisma.todo.findMany();
  return todos;
};
