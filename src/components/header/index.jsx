import React from "react";
import classnames from "classnames";
import "./style.scss";

const navButtons = [
  {
    name: "Підбір ліків",
    link: "getDrug",
  },
  {
    name: "Ліки",
    link: "allDrugs",
  },

  // {
  //   name: "Пацієнти",
  //   link: "patients",
  // },
];

const Header = () => {
  const isMobile = false;
  return (
    <div className="header">
      <div className={classnames("name", { mobile: isMobile })}>HealInfo</div>
      <div className="buttons">
        {navButtons.map(({ name, link }, i) => (
          <a key={link + i} className="headerButton" href={`#${link}`}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
