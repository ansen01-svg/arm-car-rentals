import "../styles/scrollbar.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import fetchUsers from "@/app/_lib/frontend/fetchUsers";

export const metadata = {
  title: "Users | Carko.in",
  description: "Showing all the users of Carko.in.",
};

export default async function Users() {
  const users = await fetchUsers();

  return (
    <div
      id="custom-scrollbar"
      className="w-full h-[calc(100vh-56px)] flex flex-col items-center justify-start overflow-y-scroll md:h-[calc(100vh-64px)] lg:h-screen lg:py-6"
    >
      <div className="w-full lg:w-[67%]">
        <Header title="Users" />
        <Main users={users} />
      </div>
    </div>
  );
}
