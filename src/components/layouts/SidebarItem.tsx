import React from "react";

type Props = {
  text: string;
  link: string;
  icon: JSX.Element;
};

const SidebarItem: React.FC<Props> = ({ text, link, icon }) => {
  return (
    <a
      href={link}
      className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
    >
      <>
        {icon}
        <span className="ml-3">{text}</span>
      </>
    </a>
  );
};

export default SidebarItem;
