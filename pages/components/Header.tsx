import React from "react";
import config from "../index.json";

const Header = () => {
  const navigation = config.navigation;

  return (
    <div className="header">
      <div className="header__menu">
        <ul className="flex flex-col lg:flex-row px-4 lg:px-32 gap-y-4 lg:gap-x-10 items-center">
          {navigation.map((item) => (
            <li className="mt-4 lg:mt-6 cursor-pointer" key={item.title}>
              <a
                href={item.url}
                target={item.title === "My Blog" ? "_blank" : undefined}
                rel={item.title === "My Blog" ? "noopener noreferrer" : undefined}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
