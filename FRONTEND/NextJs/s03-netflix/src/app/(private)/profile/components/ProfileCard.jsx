import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = ({ image, name }) => {
  let router = useRouter();
  return (
    <div
      className="mx-auto cursor-pointer w-44 group"
      onClick={() => router.push("/movies")}
    >
      <div className="overflow-hidden border-2 border-transparent rounded-md w-44 h-44 group-hover:border-white ">
        <img src={image} alt={name} className="object-contain w-max h-max" />
      </div>

      <div className="mt-4 text-2xl text-center text-gray-400 group-hover:text-white ">
        {name}
      </div>
    </div>
  );
};

export default ProfileCard;
