import React from "react";
import SidebarToggleButton from "./SidebarToggleButton";
import BlandLogo from "./BlandLogo";
import GitHubButton from "react-github-btn";
import MyPageIcon from "../icons/MyPageIcon";

type Props = {
  sidebarClosed: boolean;
  onSidebarToggle: () => void;
};

const Navbar: React.FC<Props> = ({ sidebarClosed, onSidebarToggle }) => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <SidebarToggleButton
              closed={sidebarClosed}
              onClick={onSidebarToggle}
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
            <a
              href="https://demo.themesberg.com/windster/pricing/"
              className="ml-5 font-medium rounded-lg text-sm py-2.5 mr-3"
            >
              <MyPageIcon />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
