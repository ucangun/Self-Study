"use client";

import React from "react";
import ProfileCard from "./ProfileCard";
import { useAuthContext } from "@/context/AuthContext";

const profileImages = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png",
];

const CardContainer = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-10 md:flex-row">
      {profileImages.map((image, index) => (
        <ProfileCard
          key={index}
          image={image}
          name={
            index === 0 && currentUser
              ? currentUser?.displayName
              : `Guest-${index + 1}`
          }
        />
      ))}
    </div>
  );
};

export default CardContainer;
