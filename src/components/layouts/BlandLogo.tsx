import React from "react";

const BlandLogo: React.FC = () => {
  return (
    <a
      href="https://demo.themesberg.com/windster/"
      className="text-xl font-bold flex items-center lg:ml-2.5"
    >
      <picture>
        <img src="/images/logo.png" className="h-6 mr-2" alt="Windster Logo" />
      </picture>
      <span className="self-center whitespace-nowrap">Enviiewer</span>
    </a>
  );
};

export default BlandLogo;
