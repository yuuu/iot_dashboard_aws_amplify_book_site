import React from "react";
import TwitterIcon from "../icons/TwitterIcon";
import GitHubIcon from "../icons/GitHubIcon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
      <ul className="flex items-center flex-wrap mb-6 md:mb-0">
        {[
          { text: "Terms and conditions", key: "teamAndConditions", link: "#" },
          { text: "Privacy Policy", key: "privacyPolicy", link: "#" },
          { text: "Licensing", key: "licensing", link: "#" },
          { text: "Contact", key: "contact", link: "#" },
        ].map(({ text, key, link }) => (
          <li key={key}>
            <a
              href={link}
              className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex sm:justify-center space-x-6">
        {[
          { icon: <TwitterIcon />, key: "twitter", link: "#" },
          { icon: <GitHubIcon />, key: "github", link: "#" },
        ].map(({ icon, key, link }) => (
          <a
            key={key}
            href={link}
            className="text-gray-500 hover:text-gray-900"
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
