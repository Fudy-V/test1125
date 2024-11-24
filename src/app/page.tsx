import Link from "next/link";

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

const TodoList = () => {
  return <div></div>;
};

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <TodoList></TodoList>
      </main>
    </div>
  );
}
