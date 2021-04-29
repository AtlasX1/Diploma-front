import React from "react";
import classnames from "classnames";
import "./style.scss";

const navButtons = [
  {
    name: "Підбір ліків",
    link: "getDrug",
  },
  {
    name: "Всі ліки",
    link: "allDrugs",
  },
  {
    name: "Додати ліки",
    link: "newDrug",
  },
  {
    name: "Пацієнти",
    link: "patients",
  },
];

const Header = () => {
  const isMobile = false;
  return (
    <div className="header">
      <div className={classnames("name", { mobile: isMobile })}>HealInfo</div>
      <div className="buttons">
        {navButtons.map(({ name, link }) => (
          <a key={link} className="headerButton" href={`#${link}`}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
