"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="./images/404-page-not-found.png" alt="" />

      <button
        className="px-4 py-2 mt-4 font-semibold text-gray-100 bg-gray-800 rounded shadow hover:bg-gray-950"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
