"use client";

import { useRouter } from "next/navigation";

export default function CreateNewButton() {
  const router = useRouter();

  return (
    <button
      className="px-4 py-2 bg-secondary text-white text-[13px] font-semibold rounded-full hover:bg-secondaryLight"
      onClick={() => router.push("/fleet/new")}
    >
      Create new
    </button>
  );
}
