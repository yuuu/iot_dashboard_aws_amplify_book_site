import React from "react";
import Card from "../../Card";

const CustomersCard: React.FC = () => {
  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900">
          Latest Customers
        </h3>
        <a
          href="#"
          className="text-sm font-medium text-sky-800 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <picture>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                    alt="Neil image"
                  />
                </picture>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="17727a767e7b57607e7973646372653974787a"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                $320
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <picture>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                    alt="Neil image"
                  />
                </picture>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Bonnie Green
                </p>
                <p className="text-sm text-gray-500 truncate">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="5d38303c34311d2a3433392e29382f733e3230"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                $3467
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <picture>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                    alt="Neil image"
                  />
                </picture>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Michael Gough
                </p>
                <p className="text-sm text-gray-500 truncate">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="c7a2aaa6aeab87b0aea9a3b4b3a2b5e9a4a8aa"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                $67
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <picture>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                    alt="Neil image"
                  />
                </picture>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Thomes Lean
                </p>
                <p className="text-sm text-gray-500 truncate">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="e6838b878f8aa6918f888295928394c885898b"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                $2367
              </div>
            </div>
          </li>
          <li className="pt-3 sm:pt-4 pb-0">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <picture>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                    alt="Neil image"
                  />
                </picture>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Lana Byrd
                </p>
                <p className="text-sm text-gray-500 truncate">
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="67020a060e0b27100e0903141302154904080a"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                $367
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default CustomersCard;
