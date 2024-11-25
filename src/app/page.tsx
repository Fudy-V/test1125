import Link from "next/link";
import { getTodo } from "./api/Todo/getTodo";
// import { deleteTodo } from "./api/Todo/deleteTodo";
// import { FormEvent } from "react";

const Header = () => {
  return (
    <header className=" bg-black text-white flex justify-around items-center">
      <h1 className=" text-6xl">TODO APP</h1>
      <button className="flex items-center justyfy-center bg-white text-gray-500 h-10 rounded-md p-3 font-bold">
        <Link href="/create">新規作成</Link>
      </button>
    </header>
  );
};

const TodoList = async () => {
  const todos = await getTodo();
  return (
    <div className="flex flex-col justify-center items-center">
      {todos.map((todo) => (
        <div key={todo.id} className="flex-row flex items-center justify-between w-1/4">
          <h1 className="my-3 font-bold  text-2xl">{todo.title}</h1>

          <button className="w-16 h-10 bg-black hover:bg-slate-500 text-slate-200 rounded-md">
            削除
          </button>
        </div>
      ))}
    </div>
  );
};
// const Loading = () => <h1 className="text-6xl">...loading</h1>;

export default async function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <TodoList />
      </main>
    </div>
  );
}
