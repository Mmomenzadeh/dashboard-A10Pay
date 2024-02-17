import React from "react";

export default function Profile() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-8 h-8">
        <img
          src="/images/account/profile.png"
          alt="Profile"
          className="object-contain"
        />
      </div>
      <span className="text-white font-[500] text-sm leading-6 capitalize">
        Profile
      </span>
    </div>
  );
}
