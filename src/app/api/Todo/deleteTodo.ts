"use server";

import { prisma } from "@/lib/prismaClient";

const deleteTodo = async () => {
  const todo = prisma;
  return todo;
};
