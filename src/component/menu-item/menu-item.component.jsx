import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, key, img, size }) => (
  <div
    style={{ backgroundImage: `url(${img})` }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title" id={key}>
        {title}
      </h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
