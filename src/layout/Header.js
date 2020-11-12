import React from "react";
import "./Header.scss";

const headerInfos = ["poland", "europe", "world"];

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="title">news</h1>
      <div className="infos-wrapper">
        {headerInfos.map((item) => (
          <p className="info" key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;
