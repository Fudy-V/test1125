"use client";

// import { revalidatePath } from "next/cache";
import React from "react";

const DeleteButton = () => {
  //   const handleDelete = async () => {
  // //     try {
  // //       const res = await fetch("/api/Todo/deleteTodo", {
  // //         method: "DELETE",
  // //         headers: {
  // //           "Content-Type": "application/json",
  // //         },
  // //         body: JSON.stringify({ id }),
  // //       });
  // //       if (!res.ok) {
  // //         throw new Error("削除に失敗しました");
  // //       }
  // //       window.location.reload();
  // //     } catch (error) {
  // //       console.error("削除に失敗しました", error);
  // //     }
  // //   };
  return (
    <button
      //   onClick={handleDelete}
      className="w-16 h-10 bg-black hover:bg-slate-500 text-slate-200 rounded-md "
    >
      削除
    </button>
  );
};

export default DeleteButton;
