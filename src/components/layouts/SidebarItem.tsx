import React from "react";
import Link from "next/link";

type Props = {
  text: string;
  link: string;
  icon: JSX.Element;
};

const SidebarItem: React.FC<Props> = ({ text, link, icon }) => {
  return (
    <Link href={link}>
      <a className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
        <>
          {icon}
          <span className="ml-3">{text}</span>
        </>
      </a>
    </Link>
  );
};

export default SidebarItem;
