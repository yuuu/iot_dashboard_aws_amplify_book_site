import React from "react";
import SidebarToggleButton from "./SidebarToggleButton";
import BlandLogo from "./BlandLogo";
import GitHubButton from "react-github-btn";
import MyPageIcon from "../icons/MyPageIcon";
import { Menu, MenuItem } from "@szhsin/react-menu";

type Props = {
  sidebarClosed: boolean;
  onSidebarToggle: (closed: boolean) => void;
};

const Navbar: React.FC<Props> = ({ sidebarClosed, onSidebarToggle }) => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <SidebarToggleButton
              closed={sidebarClosed}
              onClick={() => onSidebarToggle(!sidebarClosed)}
            />
            <BlandLogo />
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex items-center">
              <div className="-mb-1">
                <GitHubButton
                  href="https://github.com/yuuu/amplify-iot-backend"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count={true}
                  aria-label="Star yuuu/amplify-iot-backend on GitHub"
                >
                  Star
                </GitHubButton>
              </div>
            </div>
            <Menu
              menuButton={
                <a className="ml-5 font-medium rounded-lg text-sm py-2.5 mr-3">
                  <MyPageIcon />
                </a>
              }
              transition
            >
              <MenuItem onClick={(e) => e}>ログアウト</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
