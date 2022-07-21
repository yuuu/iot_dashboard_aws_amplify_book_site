import React, { useEffect, useState } from "react";

const CopyRight: React.FC = () => {
  const [year, setYear] = useState(2022);

  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <p className="text-center text-sm text-gray-500 my-10">
      &copy; {year}{" "}
      <a
        href="https://portfolio.y-uuu.net/"
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        yuuu
      </a>
      . All rights reserved.
    </p>
  );
};

export default CopyRight;
