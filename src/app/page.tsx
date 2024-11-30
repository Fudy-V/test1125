import Link from "next/link";
import { getTodo } from "./api/Todo/getTodo";
import DeleteButton from "@/component/ui/DeleteButton";

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
        <div key={todo.id} className="flex-row flex items-center justify-between w-3/4 ">
          <h1 className="my-3 font-bold  text-2xl w-1/2 overflow-scroll whitespace-nowrap">
            {todo.title}
          </h1>

          <DeleteButton />
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
