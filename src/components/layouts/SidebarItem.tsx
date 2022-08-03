import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  link: string;
  icon: JSX.Element;
  onClick: (link: string) => void;
};

const SidebarItem: React.FC<Props> = ({ text, link, icon, onClick }) => {
  return (
    <Link href={link}>
      <a
        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
        onClick={() => onClick(link)}
      >
        <>
          {icon}
          <span className="ml-3">{text}</span>
        </>
      </a>
    </Link>
  );
};

export default SidebarItem;
