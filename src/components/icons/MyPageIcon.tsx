import React from "react";

const MyPageIcon: React.FC = () => {
  return (
    <svg
      className="w-10 h-10 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
      <circle cx="12" cy="10" r="3" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

export default MyPageIcon;
