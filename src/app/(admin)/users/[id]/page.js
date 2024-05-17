import "../../styles/scrollbar.css";
import Header from "../../fleet/new/components/header/header";
import Main from "./components/main/main";
import fetchSingleUser from "@/app/_lib/global/fetch_single_user";
import capitalizeFirstLetter from "@/app/_lib/global/uppercase_converter";

export const generateMetadata = async ({ params }) => {
  const user = await fetchSingleUser(params.id);

  return {
    title: user.length
      ? `User: ${capitalizeFirstLetter(user[0].username)}`
      : "ARM: Error",
  };
};

export default async function SingleUser({ params }) {
  return (
    <div
      id="custom-scrollbar"
      className="w-full h-[calc(100vh-56px)] flex flex-col items-center justify-start overflow-y-scroll md:h-[calc(100vh-64px)] lg:h-screen lg:py-6"
    >
      <div className="w-full lg:w-[55%]">
        <Header title={params.id} link={"/users"} linkTitle={"Users"} />
        <Main id={params.id} />
      </div>
    </div>
  );
}
