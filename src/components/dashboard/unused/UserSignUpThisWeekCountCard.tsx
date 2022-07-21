import React from "react";
import Card from "../../Card";

const UserSignUpThisWeekCountCard: React.FC = () => {
  return (
    <Card>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
            385
          </span>
          <h3 className="text-base font-normal text-gray-500">
            User signups this week
          </h3>
        </div>
        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
          -2.7%
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </Card>
  );
};

export default UserSignUpThisWeekCountCard;
