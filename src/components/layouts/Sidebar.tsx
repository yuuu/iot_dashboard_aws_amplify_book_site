import React from "react";
import DashboardIcon from "../icons/DashboardIcon";
import HelpIcon from "../icons/HelpIcon";
import KanbanIcon from "../icons/KanbanIcon";
import SidebarItem from "./SidebarItem";

type Props = {
  closed: boolean;
  onClick: (closed: boolean) => void;
};

const Sidebar: React.FC<Props> = ({ closed, onClick }) => {
  const onItemClick = (link: string) => {
    onClick(true);
  };

  return (
    <>
      <aside
        className={`fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${
          closed && "hidden"
        }`}
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 py-4">
                {[
                  {
                    text: "ダッシュボード",
                    key: "dashboard",
                    link: "/",
                    icon: <DashboardIcon />,
                  },
                  {
                    text: "デバイス",
                    key: "devices",
                    link: "/devices",
                    icon: <KanbanIcon />,
                  },
                ].map(({ text, key, link, icon }) => (
                  <li key={key}>
                    <SidebarItem
                      text={text}
                      link={link}
                      icon={icon}
                      onClick={onItemClick}
                    />
                  </li>
                ))}
              </ul>
              <div className="space-y-2 py-4">
                {[
                  {
                    text: "ヘルプ",
                    key: "help",
                    link: "#",
                    icon: <HelpIcon />,
                  },
                ].map(({ text, key, link, icon }) => (
                  <SidebarItem
                    key={key}
                    text={text}
                    link={link}
                    icon={icon}
                    onClick={onItemClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div
        className={`bg-gray-900 opacity-50 fixed inset-0 z-10 ${
          closed && "hidden"
        }`}
        onClick={() => onClick(true)}
      ></div>
    </>
  );
};

export default Sidebar;
