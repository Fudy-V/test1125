"use client";

import React, { useState } from "react";
import { handleAdd } from "./serverActions";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      await handleAdd(formData);
      setText("");
      router.push("/");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div>
      <form onSubmit={sendData} className="flex flex-col items-center ">
        <input
          name="title"
          className="w-1/2 border border-sky-400 m-20"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="テキストを入力してください"
        />
        <button
          type="submit"
          className="w-1/4 h-24 border border-sky-400 text-3xl font-bold rounded-md bg-sky-200 hover:bg-sky-300"
        >
          追加
        </button>
      </form>
      <Link
        href="/"
        className="absolute top-0 m-3 border-black border-2 w-20 h-20 items-center justify-center flex bold rounded-md"
      >
        Home
      </Link>
    </div>
  );
};

export default Page;
