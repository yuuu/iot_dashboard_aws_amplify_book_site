import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
