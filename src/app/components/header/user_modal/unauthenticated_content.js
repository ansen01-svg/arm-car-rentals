import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UnauthenticatedContent({ handleClose }) {
  const router = useRouter();

  const handleClick = (link) => {
    router.push(link);
    handleClose();
  };

  return (
    <div className="w-[300px] px-5 py-7 flex flex-col items-center justify-center gap-4">
      <button
        className="w-full h-8 bg-secondary rounded text-white text-[15px] font-semibold hover:bg-hover"
        onClick={() => handleClick("/signin")}
      >
        Sign in
      </button>
      <button
        className="w-full text-[15px] text-primary font-semibold"
        onClick={() => handleClick("/signup")}
      >
        Create a new account
      </button>
    </div>
  );
}
