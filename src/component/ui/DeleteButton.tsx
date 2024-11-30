"use client";
// import { prisma } from "@/lib/prismaClient";
// import { revalidatePath } from "next/cache";
import React from "react";

const handleDelete = async ({ id }: { id: string }) => {
  //   const res = prisma.todo.delete({
  //     where: { id },
  //   });
  //   res.catch((e) => console.error("削除に失敗", e));
  //   revalidatePath("/");
  await console.log(id);
};

const DeleteButton = () => {
  return (
    <button
      name="id"
      onClick={(e) => handleDelete(e.currentTarget)}
      className=" block w-20 h-10 bg-black  text-white rounded-md"
    >
      削除
    </button>
  );
};

export default DeleteButton;
